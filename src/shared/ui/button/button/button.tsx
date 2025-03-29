import { forwardRef, lazy, memo } from "react"
import type { ButtonProps as AntdButtonProps } from "antd/es/button"


const AntdButton = lazy(() => import("antd/es/button"))

const Button = forwardRef<HTMLButtonElement, AntdButtonProps>(
	(props, ref) => {
		return (
			<AntdButton
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = "Button"

export default memo(Button)
