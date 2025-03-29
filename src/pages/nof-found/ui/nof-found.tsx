import { Button, Flex, Result } from "@/shared/ui"
import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Space } from "antd"
import { useNavigate } from "react-router-dom"

export const NotFound = () => {
	const navigate = useNavigate()
	return (
		<Flex justify={"center"} align={"center"} flex={1}>
			<Result
				status={"404"}
				title={"404"}
				subTitle={"Страница не найдена"}
				extra={
					<Space>
						<Button
							type={"primary"}
							icon={<FontAwesomeIcon icon={faArrowLeft} />}
							onClick={() => navigate(-1)}
						>
							Назад
						</Button>
						<Button
							type={"link"}
							icon={<FontAwesomeIcon icon={faHome} />}
							onClick={() =>
								navigate("/", {
									replace: true
								})
							}
						>
							Главная
						</Button>
					</Space>
				}
			/>
		</Flex>
	)
}
