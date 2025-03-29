import { ErrorContainer } from "@/widgets/error-container"
import type { ErrorInfo, ReactNode } from "react"
import React, { Suspense } from "react"

interface ErrorBoundaryProps {
	children: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
}

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// You can also log the error to an error reporting service
		console.log(error, errorInfo)
	}

	render() {
		const { hasError } = this.state
		const { children } = this.props

		if (hasError) {
			// You can render any custom fallback UI
			return (
				<Suspense fallback={""}>
					<ErrorContainer />
				</Suspense>
			)
		}

		return children
	}
}

export { ErrorBoundary }
