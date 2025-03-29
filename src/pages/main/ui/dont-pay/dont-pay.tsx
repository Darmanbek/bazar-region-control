import {
	useDeleteDontPay,
	useGetDontPayCars
} from "@/entities/dontPay/api/dontPayApi"
import type { IDontPayResponse } from "@/entities/dontPay/model/types/dontPayTypes"
import { useMainActions } from "@/entities/main/model/slice/mainSlice"
import { Button, Card, DeleteButton, Table } from "@/shared/ui"
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { TableProps } from "antd"
import { message } from "antd"
import { memo, useEffect, useState } from "react"
import { DontPayCreateModal } from "./dont-pay-create-modal"
import { DontPayUpdateModal } from "./dont-pay-update-modal"

const DontPay = () => {
	const [params, setParams] = useState({
		per_page: 10,
		limit: 10,
		page: 1
	})

	const { setIsModalVisible, setIsUpdateModal } = useMainActions()
	const { data, isLoading } = useGetDontPayCars(params)
	const [deleteDontPay, { isSuccess }] = useDeleteDontPay()
	const showModal = () => {
		setIsModalVisible(true)
	}
	const showUpdateModal = () => {
		setIsUpdateModal(true)
	}

	const columns: TableProps<IDontPayResponse>["columns"] = [
		{
			title: "Номер машины",
			dataIndex: "number"
		},
		{
			title: (
				<div className={"flex justify-center"}>
					<Button onClick={showModal}>
						<FontAwesomeIcon icon={faPlus} /> номер
					</Button>
				</div>
			),
			render: (_, rec) => (
				<div className={"flex justify-center"}>
					<DeleteButton onConfirm={() => deleteDontPay(rec.id)} />
				</div>
			)
		}
	]
	useEffect(() => {
		if (isSuccess) {
			message.success("Успешно удалено")
		}
	}, [isSuccess])
	return (
		<>
			<Card
				title={
					<div className={"flex items-center justify-between"}>
						<div>Администрация</div>
						<Button
							type={"primary"}
							onClick={showUpdateModal}
							icon={<FontAwesomeIcon icon={faPen} />}
						>
							график
						</Button>
					</div>
				}
				className={
					"shadow-lg rounded-lg overflow-hidden mx-auto my-4 w-full md:w-3/4 lg:w-2/3"
				}
			>
				<Table<IDontPayResponse>
					dataSource={data?.data}
					loading={isLoading}
					columns={columns}
					pagination={{
						pageSize: params.per_page,
						current: params.page,
						onChange: (page, pageSize) =>
							setParams({ per_page: pageSize, limit: pageSize, page })
					}}
					rowKey={(rec) => rec.id}
				/>
			</Card>
			<DontPayCreateModal />
			<DontPayUpdateModal />
		</>
	)
}

export default memo(DontPay)
