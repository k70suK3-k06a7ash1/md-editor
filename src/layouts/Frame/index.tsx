import { Header } from "./Header";
import { TabBar } from "./TabBar";
import type { PropsWithChildren } from "react";

export const Frame = (props: PropsWithChildren) => {
	return (
		<>
			<Header />
			<div className="sticky top-0 bg-[#e4e4e4] z-100">
				<TabBar />
			</div>
			<div className="mx-auto">{props.children}</div>
		</>
	);
};
