import { lazy } from "react"

const ButtonAsync = lazy(() => import("./button"))

export { ButtonAsync as Button }
