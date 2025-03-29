import { rtkApi } from "@/shared/api/rtkApi"
import type {
	IParams,
	IResponse,
	IResponseData,
	IResponseSingleData
} from "@/shared/types/types"
import type { AllCars, AttendanceResponse, Top10Car } from ".."

const mainApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getCarStatisticDaily: build.query<
			IResponseSingleData<AttendanceResponse>,
			void
		>({
			query: () => ({
				cacheTime: 60000,
				refetchOnMountOrArgChange: true,
				refetchOnFocus: true,
				refetchOnReconnect: true,
				url: "admin/statistic/daily",
				method: "GET"
			})
		}),
		getCarTop10Daily: build.query<IResponseData<Top10Car>, void>({
			query: () => ({
				cacheTime: 60000,
				refetchOnMountOrArgChange: true,
				refetchOnFocus: true,
				refetchOnReconnect: true,
				url: "admin/daily/vehicles",
				method: "GET"
			})
		}),
		getAllCars: build.query<IResponse<AllCars>, IParams>({
			query: (params) => ({
				cacheTime: 60000,
				refetchOnMountOrArgChange: true,
				refetchOnFocus: true,
				refetchOnReconnect: true,
				url: "admin/daily/attendances",
				method: "GET",
				params
			})
		})
	})
})

export const useGetCarStatisticDaily = mainApi.useGetCarStatisticDailyQuery
export const useGetCarTop10Daily = mainApi.useGetCarTop10DailyQuery
export const useGetAllCars = mainApi.useGetAllCarsQuery
