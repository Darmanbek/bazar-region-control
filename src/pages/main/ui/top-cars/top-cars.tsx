import type { IFilter, Top10Car } from "@/entities/main"
import { Card, Image, Table } from "@/shared/ui"
import type { TableProps } from "antd"
import { memo } from "react"

// import { useNavigate } from 'react-router-dom';

export interface TopCarsProps {
	data: Top10Car[] | undefined
	filter: IFilter
}

const TopCars = ({ data, filter }: TopCarsProps) => {
	// const [isPreviewOpened, setIsPreviewOpened] = useState(false);
	// const navigate = useNavigate();

	const columns: TableProps<Top10Car>["columns"] = [
		{
			title: "№",
			dataIndex: "top",
			key: "top",
			render: (_v, _r, index: number) => <>{index + 1}</>
		},
		{
			title: "Фото",
			dataIndex: ["oldest_attendance", "url_path"],
			key: "url_path",
			render: (photo) => (
				<Image
					// preview={{ onVisibleChange: setIsPreviewOpened }}
					width={71}
					height={40}
					placeholder={true}
					preview={!!photo}
					onClick={(e) => e.stopPropagation()}
					src={photo}
					alt={"photo"}
				/>
			)
		},
		{
			title: "Номер машины",
			dataIndex: "number",
			key: "number"
		},
		{
			title: "Дата",
			dataIndex: ["oldest_attendance", "date"],
			key: "date"
		},
		{
			title: "Количество",
			dataIndex: "attendances_count",
			key: "attendances_count"
		}
	]

	const filterTitle =
		filter === "day" ? "день" : filter === "week" ? "неделю" : "месяц"

	return (
		<Card
			title={`Топ машин за ${filterTitle}`}
			className={
				"shadow-lg rounded-lg overflow-hidden mx-auto my-4 p-4 w-full max-w-4xl sm:p-0 !important"
			}
		>
			<Table
				dataSource={data}
				loading={Boolean(!data)}
				columns={columns}
				pagination={false}
				rowKey={(rec) => rec.id}
				className={"w-full"}
				// onRow={(rec) => ({
				//     onClick: () => {
				//         if (!isPreviewOpened) {
				//             navigate(`/${rec.number}/${rec.attend_date}`);
				//         }
				//     },
				//     className: 'hover:cursor-pointer',
				// })}
				scroll={{ x: true }}
				size={"small"}
			/>
		</Card>
	)
}

export default memo(TopCars)
