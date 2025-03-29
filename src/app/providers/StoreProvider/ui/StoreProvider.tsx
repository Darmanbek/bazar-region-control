import type { DeepPartial } from "@reduxjs/toolkit"
import type { FC, PropsWithChildren } from "react"
import { Provider } from "react-redux"
import type { StateSchema } from "../config/StateSchema"
import { createReduxStore } from "../config/store"

interface StoreProviderProps {
	initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<PropsWithChildren<StoreProviderProps>> = ({
	children,
	initialState
}) => {
	const store = createReduxStore(initialState as StateSchema)

	return <Provider store={store}>{children}</Provider>
}
