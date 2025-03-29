import { useGetIsUpdateModal } from "@/entities/main/model/selectors/mainSelectors"
import { useMainActions } from "@/entities/main/model/slice/mainSlice"
import { UpdateWorkingGraphic } from "@/features/update-working-graphic"
import { Modal } from "@/shared/ui"
import { Form } from "antd"
import { type FC } from "react"

const DontPayUpdateModal: FC = () => {
	const [form] = Form.useForm()
	const isUpdateModal = useGetIsUpdateModal()
	const { setIsUpdateModal } = useMainActions()

	const handleCancelUpdate = () => {
		setIsUpdateModal(false)
		form.resetFields()
	}

	return (
		<>
			<Modal
				title={"Изменить рабочий график"}
				open={isUpdateModal}
				onCancel={handleCancelUpdate}
				footer={null}
			>
				<UpdateWorkingGraphic form={form} />
			</Modal>
		</>
	)
}

export { DontPayUpdateModal }
