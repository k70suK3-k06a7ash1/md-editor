import style from "./style.module.css";
import type { Composition } from "~/types";
export const TabItem = ({ children }: Composition): JSX.Element => (
	<div className={style.tabItem}>{children}</div>
);
