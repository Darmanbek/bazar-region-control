import { rtkApi } from "@/shared/api/rtkApi"
import type { IParams, IResponse } from "@/shared/types/types"
import type { Key } from "react"
import type {
	IDontPayForm,
	IDontPayResponse
} from "../model/types/dontPayTypes"

const dontPayApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getDontPayCars: build.query<IResponse<IDontPayResponse>, IParams>({
			query: (params = { per_page: 10, limit: 10, page: 1 }) => ({
				url: "admin/exception/vehicles",
				method: "GET",
				params
			}),
			providesTags: ["car"]
		}),
		createDontPay: build.mutation<unknown, IDontPayForm>({
			query: (formData) => ({
				url: `admin/exception/vehicles`,
				method: "POST",
				body: formData
			}),
			invalidatesTags: ["car"]
		}),
		deleteDontPay: build.mutation<unknown, Key>({
			query: (number) => ({
				url: `admin/exception/vehicles/${number}`,
				method: "DELETE"
			}),
			invalidatesTags: ["car"]
		})
	})
})

export const useGetDontPayCars = dontPayApi.useGetDontPayCarsQuery
export const useCreateDontPay = dontPayApi.useCreateDontPayMutation
export const useDeleteDontPay = dontPayApi.useDeleteDontPayMutation
