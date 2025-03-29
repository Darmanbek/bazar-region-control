import type { CardProps } from "antd/es/card/Card"
import { lazy, memo } from "react"

const CardAntd = lazy(() => import("antd/es/card/Card"))

const Card = ({
	style,
	children,
	title,
	className,
	styles,
	...rest
}: CardProps) => {
	return (
		<CardAntd
			style={{
				padding: 0,
				boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
				...style
			}}
			title={title}
			className={className}
			styles={{
				body: {
					padding: 0
				},
				...styles
			}}
			{...rest}
		>
			{children}
		</CardAntd>
	)
}

export default memo(Card)
