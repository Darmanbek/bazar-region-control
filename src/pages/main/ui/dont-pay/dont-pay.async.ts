import { lazy } from "react"

const DontPayAsync = lazy(() => import("./dont-pay"))

export { DontPayAsync as DontPay }
