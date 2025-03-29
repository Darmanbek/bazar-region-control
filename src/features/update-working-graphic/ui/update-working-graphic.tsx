import type { WorkingGraphicForm } from "@/entities/workGraphic"
import {
	updateWorkingGraphic,
	useGetWorkingGraphic
} from "@/entities/workGraphic/api/workGraphic"
import { Button, Input, InputNumber, Space, Table } from "@/shared/ui"
import { faCheck, faEdit, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	Form,
	type FormInstance,
	type FormProps,
	message,
	Popconfirm,
	type TableProps
} from "antd"
import { type FC, type ReactNode, useEffect, useState } from "react"

interface EditableCellProps
	extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
	editing: boolean
	dataIndex: string
	title: ReactNode
	inputType: "number" | "text"
	record: WorkingGraphicForm
	index: number
}

const EditableCell: FC<React.PropsWithChildren<EditableCellProps>> = ({
	editing,
	dataIndex,
	title,
	inputType,
	record: _record,
	index: _index,
	children,
	...restProps
}) => {
	const inputNode = inputType === "number" ? <InputNumber /> : <Input />

	return (
		<td {...restProps}>
			{editing ? (
				<Form.Item
					name={dataIndex}
					style={{ margin: 0 }}
					rules={[
						{
							required: true,
							message: `Пожалуйста, заполните ${title}!`
						}
					]}
				>
					{inputNode}
				</Form.Item>
			) : (
				children
			)}
		</td>
	)
}

interface UpdateWorkingGraphicProps {
	form: FormInstance
}

const UpdateWorkingGraphic: FC<UpdateWorkingGraphicProps> = ({ form }) => {
	const [update, { isSuccess, isLoading, isError }] = updateWorkingGraphic()
	const { data, isLoading: dataLoading } = useGetWorkingGraphic()
	const [editingKey, setEditingKey] = useState<number>()

	const isEditing = (record: WorkingGraphicForm) => record.id === editingKey

	const edit = (record: Partial<WorkingGraphicForm>) => {
		form.setFieldsValue({ name: "", age: "", address: "", ...record })
		setEditingKey(record?.id)
	}

	const cancel = () => {
		setEditingKey(undefined)
	}

	const columns = [
		{
			title: "День",
			dataIndex: "day_of_the_week",
			editable: false
		},
		{
			title: "Начало",
			dataIndex: "start_time",
			editable: true
		},
		{
			title: "Конец",
			dataIndex: "end_time",
			editable: true
		},
		{
			width: 50,
			render: (_: unknown, record: WorkingGraphicForm) => {
				const editable = isEditing(record)
				return editable ? (
					<Space>
						<Button
							htmlType={"submit"}
							onClick={form.submit}
							loading={isLoading}
							type={"primary"}
							icon={<FontAwesomeIcon icon={faCheck} />}
						/>
						<Popconfirm
							title={"Вы действительно хотите отменить?"}
							onConfirm={cancel}
						>
							<Button
								icon={<FontAwesomeIcon icon={faXmark} />}
								type={"primary"}
								danger={true}
							/>
						</Popconfirm>
					</Space>
				) : (
					<Button
						type={"primary"}
						disabled={editingKey !== undefined}
						onClick={() => edit(record)}
						icon={<FontAwesomeIcon icon={faEdit} />}
					/>
				)
			}
		}
	]

	const mergedColumns: TableProps<WorkingGraphicForm>["columns"] = columns.map(
		(col) => {
			if (!col.editable) {
				return col
			}
			return {
				...col,
				onCell: (record: WorkingGraphicForm) => ({
					record,
					inputType: col.dataIndex === "day_of_the_week" ? "number" : "text",
					dataIndex: col.dataIndex,
					title: col.title,
					editing: isEditing(record)
				})
			}
		}
	)

	const onFinish: FormProps<WorkingGraphicForm>["onFinish"] = (values) => {
		update({
			...values,
			id: editingKey
		})
	}

	useEffect(() => {
		if (isSuccess) {
			message.success("График успешно изменен")
			setEditingKey(undefined)
		}
		if (isError) {
			message.error("Произошла ошибка при добавлении номера")
			console.log("error", isError)
		}
	}, [isSuccess, isError])

	return (
		<Form form={form} onFinish={onFinish} component={false}>
			<Table<WorkingGraphicForm>
				size={"small"}
				components={{
					body: { cell: EditableCell }
				}}
				loading={dataLoading}
				dataSource={data?.data}
				columns={mergedColumns}
				pagination={false}
			/>
			{/*<Button loading={isLoading} type={"primary"} htmlType={"submit"}>*/}
			{/*	Сохранить*/}
			{/*</Button>*/}
		</Form>
	)
}

export default UpdateWorkingGraphic
