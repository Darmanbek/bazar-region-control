import { rtkApi } from "@/shared/api/rtkApi"
import type { IParams } from "@/shared/types/types"
import type { CarEntry } from ".."

const infoApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getCarInfo: build.query<CarEntry[], IParams>({
            query: (params) => ({
                url: `car/${params.car_number}`,
                method: "GET",
                params: {
                    page: params.page,
                    limit: params.limit,
                    date: params.month
                },
            }),
        }),
    }),
})

export const useGetCarInfo = infoApi.useGetCarInfoQuery
