import { theme } from "antd"
import localeRU from "antd/locale/ru_RU"
import { ConfigProvider, App } from "antd"
import { type FC, type PropsWithChildren } from "react"

const Antd: FC<PropsWithChildren> = ({ children }) => {
	const { token } = theme.useToken()
	return (
		<ConfigProvider
			locale={localeRU}
			theme={{
				token: {
					fontFamily: `Montserrat,${token.fontFamily}`
				}
			}}
		>
			<App>{children}</App>
		</ConfigProvider>
	)
}

export { Antd }
