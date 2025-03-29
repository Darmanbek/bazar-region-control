import type { AttendanceResponse } from "@/entities/main"
import {
	useGetAllCars,
	useGetCarStatisticDaily,
	useGetCarTop10Daily
} from "@/entities/main/api/mainApi"
import {
	useGetFilter,
	useGetLimit,
	useGetPage
} from "@/entities/main/model/selectors/mainSelectors"
import { Count } from "@/shared/ui"
import { FlexBox } from "@/shared/ui/box/FlexBox"
import { Navbar } from "@/widgets/navbar"
import { useEffect, useState } from "react"
// import {
//     getDefaultDateDay,
//     getDefaultDateMonth,
//     getDefaultDateWeek,
// } from '@/shared/lib/defaultDate/defaultDate';
import { DontPay } from "./dont-pay/dont-pay.async"
import { MainHead } from "./header/main-head.async"
import { Last } from "./last/last.async"
import { TopCars } from "./top-cars/top-cars.async"
// import PeakHours from '../peakHours/PeakHours';

const MainPage = () => {
	const [data, setData] = useState<AttendanceResponse | undefined>(undefined)
	const limit = useGetLimit()
	const page = useGetPage()
	const filter = useGetFilter()

	const { data: allCars } = useGetAllCars(
		{
			limit,
			page,
			per_page: limit
		},
		{
			pollingInterval: 5000,
			refetchOnFocus: false
		}
	)

	const { data: carData } = useGetCarStatisticDaily(undefined, {
		pollingInterval: 5000,
		refetchOnFocus: false
	})

	const { data: top10Data } = useGetCarTop10Daily(undefined, {
		pollingInterval: 5000,
		refetchOnFocus: false
	})

	const filterTitle =
		filter === "day" ? "день" : filter === "week" ? "неделю" : "месяц"

	useEffect(() => {
		setData(carData?.data)
	}, [filter, carData])
	return (
		<>
			<Navbar />
			<div className={"container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pb-10"}>
				<MainHead />
				<FlexBox cls={"flex-col md:flex-row gap-4"}>
					<div className={"w-full md:w-1/3 lg:w-1/3 flex-col md:flex"}>
						<Count
							count={data?.total_amount && data?.total_amount}
							title={`Общая сумма за ${filterTitle}`}
							flag={"amount"}
						/>
						<Count
							count={data?.attendances_count && data?.attendances_count}
							title={`Поток машин за ${filterTitle}`}
							flag={"cars"}
						/>
						<Count
							count={data?.vehicle_count && data?.vehicle_count}
							title={`Количество машин за ${filterTitle}`}
							flag={"car"}
						/>
					</div>

					<Last
						data={allCars?.data}
						filter={filter}
						total={allCars?.meta?.total}
					/>
				</FlexBox>
				<FlexBox cls={"flex-col md:flex-row gap-4"}>
					<TopCars data={top10Data?.data} filter={filter} />
					<DontPay />
				</FlexBox>
				{/*<FlexBox cls="flex-col md:flex-row gap-4">*/}
				{/*    <PeakHours data={data?.graphic} filter={filter} />*/}
				{/*</FlexBox>*/}
			</div>
		</>
	)
}

export default MainPage
