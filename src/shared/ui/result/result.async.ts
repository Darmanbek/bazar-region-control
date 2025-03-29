import { lazy } from "react"

const ResultAsync = lazy(() => import("./result"))

export { ResultAsync as Result }
