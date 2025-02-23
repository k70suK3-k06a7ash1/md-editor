import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { H1Icon, H2Icon, H3Icon } from "./level";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./index.module.css";
import { useSeparateLevel } from "~/hooks/useSeparateLevel";
export const SelectSeparateLevel = () => {
	const { separateLevel, onClickByLevel, onClickDecrement, onClickIncrement } =
		useSeparateLevel();

	return (
		<div className={style.wrapper}>
			<span>Current Level: {separateLevel}</span>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<i onClick={() => onClickDecrement()}>
				<FontAwesomeIcon className={style.icon} icon={faArrowLeft} />
			</i>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<i onClick={() => onClickByLevel("h1")}>
				<H1Icon />
			</i>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<i onClick={() => onClickByLevel("h2")}>
				<H2Icon />
			</i>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<i onClick={() => onClickByLevel("h3")}>
				<H3Icon />
			</i>{" "}
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<i onClick={() => onClickIncrement()}>
				<FontAwesomeIcon className={style.icon} icon={faArrowRight} />
			</i>
		</div>
	);
};
