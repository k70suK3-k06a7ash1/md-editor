import { TabBar } from "./TabBar";
import type { PropsWithChildren } from "react";

export const Frame = (props: PropsWithChildren) => {
	return (
		<>
			<header>
				<div className="px-6 flex items-center text-[#292929] h-16">
					<h1 className="text-xl font-bold">Editor</h1>
				</div>
			</header>
			<div className="sticky top-0 bg-[#e4e4e4] z-100">
				<TabBar />
			</div>
			<div className="mx-auto p-4">{props.children}</div>
		</>
	);
};
