import { rtkApi } from "@/shared/api/rtkApi"
import type { InfoByDateResponse } from "../model/infoByDateType"
import type { IParams } from "@/shared/types/types"

const infoByDateApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getInfoByDate: build.query<InfoByDateResponse, IParams>({
            query: (params) => ({
                url: `car/${params.car_number}`,
                method: "GET",
                params: {
                    limit: params.limit,
                    page: params.page,
                    date: params.date,
                },
            }),
        }),
    }),
})

export const useGetInfoByDate = infoByDateApi.useGetInfoByDateQuery
