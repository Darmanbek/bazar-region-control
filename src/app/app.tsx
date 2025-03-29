import { Suspense } from "react"
import { AppRouter } from "./providers/router"
import "./styles/index.css"

const App = () => {
	return (
		<div className={"min-h-screen bg-cover"}>
			<Suspense fallback={""}>
				<>{<AppRouter />}</>
			</Suspense>
		</div>
	)
}

export default App
