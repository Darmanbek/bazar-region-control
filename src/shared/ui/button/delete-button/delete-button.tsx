import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { type FC, lazy, memo } from "react"
import { Button } from "@/shared/ui"

const Popconfirm = lazy(() => import("antd/es/popconfirm"))

type DeleteButtonProps = {
	title?: string
	onConfirm: () => void
}

const DeleteButton: FC<DeleteButtonProps> = ({ onConfirm, title }) => {
	return (
		<Popconfirm
			onConfirm={() => onConfirm()}
			title={title || "Вы действительно хотите удалить?"}
		>
			<Button
				type={"primary"}
				icon={<FontAwesomeIcon icon={faTrash} />}
				danger={true}
			>
				Удалить
			</Button>
		</Popconfirm>
	)
}

export default memo(DeleteButton)
