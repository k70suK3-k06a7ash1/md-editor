import style from "./style.module.css";
import { Header } from "./Header";
import { TabBar } from "./TabBar";
import type { PropsWithChildren } from "react";

export const Frame = (props: PropsWithChildren) => {
	return (
		<>
			<Header />
			<div className={style.stickyContainer}>
				<TabBar />
			</div>
			<div className={style.contentContainer}>{props.children}</div>
		</>
	);
};
