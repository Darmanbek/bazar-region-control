import { useGetIsModalVisible } from "@/entities/main/model/selectors/mainSelectors"
import { useMainActions } from "@/entities/main/model/slice/mainSlice"
import { CreateDontPay } from "@/features/create-dont-pay"
import { Modal } from "@/shared/ui"
import { Form } from "antd"
import { type FC } from "react"

const DontPayCreateModal: FC = () => {
	const [form] = Form.useForm()
	const isModalVisible = useGetIsModalVisible()
	const { setIsModalVisible } = useMainActions()

	const handleCancel = () => {
		setIsModalVisible(false)
		form.resetFields()
	}

	return (
		<>
			<Modal
				title={"Добавить номер"}
				open={isModalVisible}
				onCancel={handleCancel}
				footer={null}
			>
				<CreateDontPay form={form} />
			</Modal>
		</>
	)
}

export { DontPayCreateModal }
