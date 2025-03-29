import type { AllCars, IFilter } from "@/entities/main"
import {
	useGetLimit,
	useGetPage
} from "@/entities/main/model/selectors/mainSelectors"
import { useMainActions } from "@/entities/main/model/slice/mainSlice"
// import { useNavigate } from 'react-router-dom';
import { Card, Image, Table } from "@/shared/ui"
import type { TableProps } from "antd"
import { memo } from "react"

export interface LastProps {
	data: AllCars[] | undefined
	total: number | undefined
	filter: IFilter
}

const Last = ({ data, filter, total }: LastProps) => {
	const limit = useGetLimit()
	const page = useGetPage()
	const { setLimit, setPage } = useMainActions()
	// const [isPreviewOpened, setIsPreviewOpened] = useState(false);
	// const navigate = useNavigate();

	const columns: TableProps<AllCars>["columns"] = [
		{
			title: "День",
			dataIndex: "date",
			key: "date"
		},
		{
			title: "Номер машины",
			dataIndex: "number",
			key: "number"
		},
		{
			title: "Время",
			dataIndex: "time",
			key: "time"
		},
		{
			align: "center",
			title: "Фото",
			dataIndex: "url_path",
			key: "url_path",
			render: (photo) => (
				<Image
					// preview={{ onVisibleChange: setIsPreviewOpened }}
					loading={"lazy"}
					width={90}
					height={50}
					className={"text-center flex justify-center item-center"}
					placeholder={true}
					onClick={(e) => e.stopPropagation()}
					src={photo}
					alt={""}
				/>
			),
			className: "text-center"
		}
	]

	const filterTitle =
		filter === "day" ? "день" : filter === "week" ? "неделю" : "месяц"

	return (
		<Card
			title={`Информация за ${filterTitle}`}
			className={
				"shadow-lg rounded-lg overflow-hidden mx-auto my-4 p-4 w-full md:w-2/3 lg:w-2/3"
			}
			styles={{
				body: {
					padding: 0
				}
			}}
		>
			<Table
				dataSource={data}
				loading={Boolean(!data)}
				columns={columns}
				pagination={{
					current: page,
					pageSize: limit,
					total: total,
					onChange: (page, limit) => {
						setPage(page)
						setLimit(limit)
					},
					showSizeChanger: true,
					onShowSizeChange: (_, size) => setLimit(size)
				}}
				rowKey={"id"}
				// onRow={(rec) => ({
				//     onClick: () => {
				//         if (!isPreviewOpened) {
				//             navigate(`/${rec.id}`);
				//         }
				//     },
				//     className: 'hover:cursor-pointer',
				// })}
				className={"w-full"}
				scroll={{ y: 754 }}
			/>
		</Card>
	)
}

export default memo(Last)
