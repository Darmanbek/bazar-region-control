import type { IParams } from "@/shared/types/types"

export interface MainSchema extends IParams {
	filter: IFilter
	isModalVisible: boolean
	isUpdateModal: boolean
}

export type IFilter = "day" | "week" | "month"

export interface GeneralData {
	attend_id: number
	car_number: string
	attend_date: string
	attend_time: string
	image_url: string
}

export interface Top10Car {
	id: number
	number: string
	is_exception: boolean
	attendances_count: number
	oldest_attendance: OldestAttendance
}

export interface OldestAttendance {
	id: number
	number: string
	date_time: string
	date: string
	time: string
	filename: string
	url_path: string
}

export interface GraphicData {
	time?: string
	weekday?: string
	day?: string
	count: number
}

export interface AllCars {
	id: number
	number: string
	date_time: string
	date: string
	time: string
	filename: string
	url_path: string
}

export interface AttendanceResponse {
	attendances_count: number
	vehicle_count: number
	total_amount: number
	attendances_count_by_time: AllCars[]
}
