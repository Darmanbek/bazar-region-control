import type { ResultProps } from "antd/es/result"
import { type  FC, lazy, memo } from "react"

const AntdResult = lazy(() => import("antd/es/result"))

const Result: FC<ResultProps> = (props) => {
	return (
			<AntdResult {...props} />
	)
}

export default memo(Result)
