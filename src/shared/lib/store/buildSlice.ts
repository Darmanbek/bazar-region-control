/* eslint-disable @typescript-eslint/ban-ts-comment */
import { bindActionCreators, createSlice } from "@reduxjs/toolkit"
import type { CreateSliceOptions, SliceCaseReducers } from "@reduxjs/toolkit/dist"
import { useMemo } from "react"
import { useDispatch } from "react-redux"

export function buildSlice<
	State,
	CaseReducers extends SliceCaseReducers<State>,
	Name extends string = string
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
	const slice = createSlice(options)

	const useActions = (): typeof slice.actions => {
		const dispatch = useDispatch()

		// @ts-ignore
		return useMemo(
			// @ts-ignore
			() => bindActionCreators(slice.actions, dispatch),
			[dispatch]
		)
	}

	return {
		...slice,
		useActions
	}
}
