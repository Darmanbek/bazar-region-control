import { lazy } from "react"

const EditButtonAsync = lazy(() => import("./edit-button"))

export { EditButtonAsync as EditButton }
