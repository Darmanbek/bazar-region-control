import { rtkApi } from "@/shared/api/rtkApi"
import type { IResponseData } from "@/shared/types/types"
import type { Key } from "react"
import type {
	WorkGraphicResponse,
	WorkingGraphicForm
} from "../model/types/workGraphicTypes"

const workGraphicApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getWorkingGraphic: build.query<IResponseData<WorkGraphicResponse>, void>({
			query: () => ({
				url: "admin/work-schedules",
				method: "GET"
			}),
			providesTags: ["graphic"]
		}),
		getWorkingGraphicById: build.query<unknown, Key>({
			query: (id) => ({
				url: `admin/work-schedules/${id}`,
				method: "GET"
			}),
			providesTags: [
				{
					type: "graphic",
					id: "one"
				}
			]
		}),
		updateWorkingGraphic: build.mutation<Key, WorkingGraphicForm>({
			query: (formData) => ({
				url: `admin/work-schedules/${formData.id}`,
				method: "PUT",
				body: formData
			}),
			invalidatesTags: ["graphic"]
		})
	})
})

export const useGetWorkingGraphic = workGraphicApi.useGetWorkingGraphicQuery
export const useGetWorkingGraphicById =
	workGraphicApi.useGetWorkingGraphicByIdQuery
export const updateWorkingGraphic =
	workGraphicApi.useUpdateWorkingGraphicMutation
