import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { App } from "./app"
import { AntdProvider } from "./providers/antd"
import { ErrorBoundaryProvider } from "./providers/error-boundary"
import { StoreProvider } from "./providers/StoreProvider"

const container = document.getElementById("root")

if (!container) {
	throw new Error(
		"Контейнер root не найден. НЕ удалось вмонтировать реакт приложение"
	)
}

const root = createRoot(container)

root.render(
	<StoreProvider>
		<ErrorBoundaryProvider>
			<BrowserRouter>
				<AntdProvider>
					<App />
				</AntdProvider>
			</BrowserRouter>
		</ErrorBoundaryProvider>
	</StoreProvider>
)
