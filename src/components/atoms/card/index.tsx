import React, { ReactNode } from "react";
import style from "./style.module.css";
type Props = {
	children: ReactNode;
};
export const Card = ({ children }: Props) => (
	<div className={style.cardContainer}>{children}</div>
);
