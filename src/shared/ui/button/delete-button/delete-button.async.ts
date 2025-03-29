import { lazy } from "react"

const DeleteButtonAsync = lazy(() => import("./delete-button"))

export { DeleteButtonAsync as DeleteButton }
