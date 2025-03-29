import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormProps, message } from 'antd';
import { TOKEN } from '@/shared/const/localstorage';
import { useGetMeLazy, useLogin } from '@/entities/auth/api/authApi';
import { ILoginForm } from '@/entities/auth';
import { Button, Input, InputPassword } from '@/shared/ui';

const LoginForm = () => {
    const [login, { data: loginData, isSuccess, isError, isLoading }] = useLogin();
    const [triggerGetMe] = useGetMeLazy();
    const navigate = useNavigate();
    const [form] = Form.useForm<ILoginForm>();
    
    const onFinish: FormProps<ILoginForm>['onFinish'] = (values) => {
        login(values);
    };
    
    useEffect(() => {
        if (isError) {
            message.error('Вы ввели неправильную почту или пароль');
            form.resetFields();
        }
        if (isSuccess) {
            message.success('Добро пожаловать!');
            localStorage.setItem(TOKEN, String(loginData?.data?.access_token));
            triggerGetMe();
            navigate('/');
        }
    }, [isError, isSuccess, loginData, triggerGetMe, navigate, form]);
    
    return (
        <div className="w-full min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <h1 className="text-center mb-5 text-2xl font-semibold">
                    Авторизация
                </h1>
                <Form
                    name="login-form"
                    onFinish={onFinish}
                    form={form}
                    style={{ width: '100%' }}
                    requiredMark={false}
                    onFinishFailed={(errorInfo) =>
                        console.log('Failed:', errorInfo)
                    }
                    autoComplete="off"
                    layout="vertical"
                >
                    <Form.Item<ILoginForm>
                        label="Почта"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите вашу почту!',
                            },
                            {
                                type: 'email',
                                message: 'Введен некорректный адрес электронной почты!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    
                    <Form.Item<ILoginForm>
                        label="Пароль"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите ваш пароль!',
                            },
                        ]}
                    >
                        <InputPassword />
                    </Form.Item>
                    
                    <Form.Item>
                        <Button
                            loading={isLoading}
                            className={"mt-4"}
                            block
                            type="primary"
                            htmlType="submit"
                        >
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LoginForm;
