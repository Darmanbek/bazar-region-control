import { lazy } from "react"

const CardAsync = lazy(() => import("./card"))

export { CardAsync as Card }
