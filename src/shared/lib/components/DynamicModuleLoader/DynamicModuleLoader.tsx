import type {
	ReduxStoreWithManager,
	StateSchemaKey
} from "@/app/providers/StoreProvider/config/StateSchema"
import type { Reducer } from "@reduxjs/toolkit"
import type { ReactNode } from "react"
import { useEffect } from "react"
import { useDispatch, useStore } from "react-redux"

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
	reducers: ReducersList
	removeAfterUnmount?: boolean
	children: ReactNode
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
	const { children, reducers, removeAfterUnmount = true } = props

	const store = useStore() as ReduxStoreWithManager
	const dispatch = useDispatch()

	useEffect(() => {
		const mountedReducers = store.reducerManager.getMountedReducers()

		Object.entries(reducers).forEach(([name, reducer]) => {
			const mounted = mountedReducers[name as StateSchemaKey]
			// Добавляем новый редюсер только если его нет
			if (!mounted) {
				store.reducerManager.add(name as StateSchemaKey, reducer)
				dispatch({ type: `@INIT ${name} reducer` })
			}
		})

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]) => {
					store.reducerManager.remove(name as StateSchemaKey)
					dispatch({ type: `@DESTROY ${name} reducer` })
				})
			}
		}
		// eslint-disable-next-line
	}, [])

	return <>{children}</>
}
