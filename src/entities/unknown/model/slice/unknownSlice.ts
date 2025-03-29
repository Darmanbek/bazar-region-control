import { buildSlice } from "@/shared/lib/store"
import type { UnknownSchema } from "../types/unknownTypes"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState: UnknownSchema = {
    limit: 10,
    per_page: 10,
    page: 1,
    date: null,
}

const unknownSlice = buildSlice({
    name: "unknown",
    initialState,
    reducers: {
        setDate: (state, actions: PayloadAction<string | null>) => {
            state.date = actions.payload
        },
        setLimit: (state, actions: PayloadAction<number>) => {
            state.limit = actions.payload
        },
        setPage: (state, actions: PayloadAction<number>) => {
            state.page = actions.payload
        },
    },
})

export const {
    actions: unknownActions,
    reducer: unknownReducer,
    useActions: useUnknownActions,
} = unknownSlice
