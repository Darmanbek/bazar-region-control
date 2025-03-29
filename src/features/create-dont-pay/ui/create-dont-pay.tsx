import { useCreateDontPay } from "@/entities/dontPay/api/dontPayApi"
import { useMainActions } from "@/entities/main/model/slice/mainSlice"
import { Button, Input } from "@/shared/ui"
import { Form, type FormInstance, message } from "antd"
import { type FC, useEffect } from "react"

interface CreateDontPayProps {
	form: FormInstance
}

const CreateDontPay: FC<CreateDontPayProps> = ({ form }) => {
	const [create, { isSuccess, isLoading, isError }] = useCreateDontPay()
	const { setIsModalVisible } = useMainActions()
	const onSubmit = (data: { number: string }) => {
		create(data)
	}

	useEffect(() => {
		if (isSuccess) {
			message.success("Номер успешно добавлен")
			setIsModalVisible(false)
			form.resetFields()
		}
		if (isError) {
			message.error("Произошла ошибка при добавлении номера")
			console.log("error", isError)
		}
	}, [isSuccess, isError])
	return (
		<Form
			onFinish={onSubmit}
			name={"dont-pay-form"}
			form={form}
			layout={"vertical"}
		>
			<Form.Item<{ number: string }>
				name={"number"}
				label={"Номер машины"}
				rules={[{ required: true, message: "Пожалуйста, заполните поле!" }]}
			>
				<Input />
			</Form.Item>
			<Button loading={isLoading} type={"primary"} htmlType={"submit"}>
				Сохранить
			</Button>
		</Form>
	)
}

export default CreateDontPay
