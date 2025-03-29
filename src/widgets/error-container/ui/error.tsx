import { Button, Flex, Result, Space } from "@/shared/ui"
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

export const Error = () => {
	const navigate = useNavigate()

	const reloadPage = () => {
		window.location.reload()
	}

	return (
		<Flex flex={1} align={"center"} justify={"center"}>
			<Result
				status={"500"}
				title={"Ошибка сервера"}
				subTitle={"Произошла непредвиденная ошибка."}
				extra={
					<Space>
						<Button
							type={"primary"}
							icon={<FontAwesomeIcon icon={faArrowsRotate} />}
							onClick={reloadPage}
						>
							Обновить страницу
						</Button>
						<Button
							type={"link"}
							onClick={() =>
								navigate("/", {
									replace: true
								})
							}
						>
							На главную страницу
						</Button>
					</Space>
				}
			/>
		</Flex>
	)
}
