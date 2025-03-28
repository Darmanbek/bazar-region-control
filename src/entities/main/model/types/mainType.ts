import { IParams } from '@/shared/types/types';

export interface MainShema extends IParams {
    filter: IFilter;
    isModalVisible: boolean;
    isUpdateModal: boolean;
}

export type IFilter = 'day' | 'week' | 'month';

export interface GeneralData {
    attend_id: number;
    car_number: string;
    attend_date: string;
    attend_time: string;
    image_url: string;
}

export interface  Top10Data{
    id: number
    number: string
    attendances_count: number
}

export interface GraphicData {
    time?: string;
    weekday?: string;
    day?: string;
    count: number;
}

export interface AllCars {
    id: number;
    number: string;
    date_time: string;
    date: string;
    time: string;
    filename: string;
    url_path: string;
}

export interface AttendanceResponse {
    attendances_count: number
    vehicle_count: number
    total_amount: number
    attendances_count_by_time: AllCars[]
}
