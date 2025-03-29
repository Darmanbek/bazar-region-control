import { TOKEN } from "@/shared/const/localstorage"
import {
	type BaseQueryApi,
	createApi,
	type FetchArgs,
	fetchBaseQuery
} from "@reduxjs/toolkit/query/react"

const parseServerTiming = (serverTimingHeader: string) => {
	const metrics = serverTimingHeader.split(",").map((metric) => metric.trim())
	console.log("Parsed Server-Timing:", metrics)
}

const baseQueryWithServerTiming = async (
	args: string | FetchArgs,
	api: BaseQueryApi,
	extraOptions: Record<string, unknown> = {}
) => {
	const baseQuery = fetchBaseQuery({
		baseUrl: "https://api.bazar.aralhub.uz/api/v1/",
		prepareHeaders: (headers) => {
			const token = localStorage.getItem(TOKEN) || ""
			if (token) {
				headers.set("Authorization", `Bearer ${token}`)
			}
			return headers
		}
	})

	const result = await baseQuery(args, api, extraOptions)

	if (result?.meta?.response) {
		const serverTimingHeader = result.meta.response.headers.get("Server-Timing")
		if (serverTimingHeader) {
			console.log("Server-Timing:", serverTimingHeader)
			parseServerTiming(serverTimingHeader)
		}
	}

	return result
}

export const rtkApi = createApi({
	reducerPath: "api",
	baseQuery: baseQueryWithServerTiming,
	tagTypes: ["car", "graphic"],
	endpoints: () => ({})
})
