import { rtkApi } from '@/shared/api/rtkApi';
import { IParams, IResponse, IResponseData, IResponseSingleData } from '@/shared/types/types';
import { AllCars, AttendanceResponse, Top10Data } from '..';

const mainApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        // getCarDay: build.query<AttendanceResponse, IParams>({
        //     query: (params) => ({
        //         cacheTime: 60000,
        //         refetchOnMountOrArgChange: true,
        //         refetchOnFocus: true,
        //         refetchOnReconnect: true,
        //         url: 'car/day',
        //         method: 'GET',
        //         params: {
        //             limit: params.limit,
        //             page: params.page,
        //             day: params.date,
        //         },
        //     }),
        // }),
        // getCarWeek: build.query<AttendanceResponse, IParams>({
        //     query: (params) => ({
        //         cacheTime: 60000,
        //         refetchOnMountOrArgChange: true,
        //         refetchOnFocus: true,
        //         refetchOnReconnect: true,
        //         url: 'car/week',
        //         method: 'GET',
        //         params: {
        //             limit: params.limit,
        //             page: params.page,
        //             week: params.week,
        //         },
        //     }),
        // }),
        // getCarMonth: build.query<AttendanceResponse, IParams>({
        //     query: (params) => ({
        //         cacheTime: 60000,
        //         refetchOnMountOrArgChange: true,
        //         refetchOnFocus: true,
        //         refetchOnReconnect: true,
        //         url: 'car/month',
        //         method: 'GET',
        //         params: {
        //             limit: params.limit,
        //             page: params.page,
        //             month: params.month,
        //         },
        //     }),
        // }),
        getCarStatisticDaily: build.query<IResponseSingleData<AttendanceResponse>, void>({
            query: () => ({
                cacheTime: 60000,
                refetchOnMountOrArgChange: true,
                refetchOnFocus: true,
                refetchOnReconnect: true,
                url: 'admin/statistic/daily',
                method: 'GET',
            }),
        }),
        getCarTop10Daily: build.query<IResponseData<Top10Data>, void>({
            query: () => ({
                cacheTime: 60000,
                refetchOnMountOrArgChange: true,
                refetchOnFocus: true,
                refetchOnReconnect: true,
                url: 'admin/daily/vehicles',
                method: 'GET',
            }),
        }),
        getAllCars: build.query<IResponse<AllCars>, IParams>({
            query: (params) => ({
                cacheTime: 60000,
                refetchOnMountOrArgChange: true,
                refetchOnFocus: true,
                refetchOnReconnect: true,
                url: 'admin/daily/attendances',
                method: 'GET',
                params,
            }),
        }),
    }),
});

// export const useGetCarDay = mainApi.useGetCarDayQuery;
// export const useGetCarWeek = mainApi.useGetCarWeekQuery;
// export const useGetCarMonth = mainApi.useGetCarMonthQuery;
export const useGetCarStatisticDaily = mainApi.useGetCarStatisticDailyQuery;
export const useGetCarTop10Daily = mainApi.useGetCarTop10DailyQuery;
export const useGetAllCars = mainApi.useGetAllCarsQuery;
