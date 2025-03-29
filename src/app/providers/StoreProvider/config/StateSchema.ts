import type { HistorySchema } from "@/entities/history"
import type { InfoSchema } from "@/entities/info"
import type { MainSchema } from "@/entities/main"
import type { UnknownSchema } from "@/entities/unknown"
import type { rtkApi } from "@/shared/api/rtkApi"
import type {
	AnyAction,
	CombinedState,
	EnhancedStore,
	Reducer,
	ReducersMapObject
} from "@reduxjs/toolkit"

export interface StateSchema {
	main: MainSchema
	history: HistorySchema
	info: InfoSchema
	unknown: UnknownSchema
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
	add: (key: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void
	// true - вмонтирован, false - демонтирован
	getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ThunkConfig<T> {
	rejectValue: T
	state: StateSchema
}
