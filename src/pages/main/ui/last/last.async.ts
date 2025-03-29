import { lazy } from "react"

const LastAsync = lazy(() => import("./last"))

export { LastAsync as Last }
