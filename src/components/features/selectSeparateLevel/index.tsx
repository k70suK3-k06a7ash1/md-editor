import { ArrowLeft, ArrowRight } from "lucide-react";
import { H1Icon, H2Icon, H3Icon } from "./level";
import { useSeparateLevel } from "@/hooks/useSeparateLevel";
export const SelectSeparateLevel = () => {
	const { separateLevel, onClickByLevel, onClickDecrement, onClickIncrement } =
		useSeparateLevel();

	return (
		<div className="flex gap-4 items-center">
			<span>Current Level: {separateLevel}</span>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<i onClick={() => onClickDecrement()}>
				<ArrowLeft />
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
				<ArrowRight />
			</i>
		</div>
	);
};
