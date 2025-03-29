import { lazy } from "react"

const MainHeadAsync = lazy(() => import("./main-head"))

export { MainHeadAsync as MainHead }
