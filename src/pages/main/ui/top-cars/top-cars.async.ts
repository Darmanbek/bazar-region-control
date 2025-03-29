import { lazy } from "react"

const TopCarsAsync = lazy(() => import("./top-cars"))

export { TopCarsAsync as TopCars }
