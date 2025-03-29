import { lazy } from "react"

const MainAsync = lazy(() => import("./main"))

export { MainAsync as MainPage }
