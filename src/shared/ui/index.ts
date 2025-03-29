import { lazy } from "react"

export { DeleteButton } from "./button/delete-button/delete-button.async"
export { EditButton } from "./button/edit-button/edit-button.async"
export { Count } from "./count/count.async"
export { Card } from "./card/card.async"

export const Button = lazy(() => import("antd/es/button/button"))
export const Input = (await import("antd/es/input/Input")).default
export const InputNumber = (await import("antd/es/input-number/index")).default
export const InputPassword = (await import("antd/es/input/Password")).default
export const Modal = (await import("antd/es/modal/Modal")).default
export const DatePicker = (await import("antd/es/date-picker")).default
export const Table = (await import("antd/es/table/Table")).default
export const Image = (await import("antd/es/image")).default
export const Flex = (await import("antd/es/flex")).default
export const Result = (await import("antd/es/result")).default
export const Space = (await import("antd/es/space")).default
