export interface IParams {
	month?: string | null
	date?: string | null
	week?: string | null
	car_number?: string | null
	page: number
	limit: number
	per_page: number
}

export interface IResponse<T> {
	data: T[]
	links: ILinks
	meta: IMeta
}

export interface IResponseData<T> {
	data: T[]
}

export interface IResponseSingleData<T> {
	data: T
}

export interface ILinks {
	first: string
	last: string
	prev: unknown
	next: string
}

export interface IMeta {
	current_page: number
	from: number
	last_page: number
	links: ILink[]
	path: string
	per_page: number
	to: number
	total: number
}

export interface ILink {
	url?: string
	label: string
	active: boolean
}
