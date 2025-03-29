import { lazy } from "react"

const CountAsync = lazy(() => import("./count"))

export { CountAsync as Count }
