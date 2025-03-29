import { buildSlice } from "@/shared/lib/store"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { IFilter, MainSchema } from "../types/mainType"

const initialState: MainSchema = {
	filter: "day",
	limit: 10,
	per_page: 10,
	page: 1,
	isModalVisible: false,
	isUpdateModal: false
}

const mainSlice = buildSlice({
	name: "main",
	initialState,
	reducers: {
		setFilter(state, actions: PayloadAction<IFilter>) {
			state.filter = actions.payload
		},
		setLimit(state, actions: PayloadAction<number>) {
			state.limit = actions.payload
		},
		setPage(state, actions: PayloadAction<number>) {
			state.page = actions.payload
		},
		setIsModalVisible(state, actions: PayloadAction<boolean>) {
			state.isModalVisible = actions.payload
		},
		setIsUpdateModal(state, actions: PayloadAction<boolean>) {
			state.isUpdateModal = actions.payload
		}
	}
})

export const {
	actions: mainActions,
	reducer: mainReducer,
	useActions: useMainActions
} = mainSlice
