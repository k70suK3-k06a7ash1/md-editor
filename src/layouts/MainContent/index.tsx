import React, { ReactNode } from "react";
import style from "./style.module.css";
type Props = {
	children: ReactNode;
};
export const MainContent = ({ children }: Props) => (
	<div className={style.mainContainer}>{children}</div>
);
