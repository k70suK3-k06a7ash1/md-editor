import type { PropsWithChildren } from "react";
import style from "./style.module.css";

export const MainContent = ({ children }: PropsWithChildren) => (
	<div className={style.mainContainer}>{children}</div>
);
