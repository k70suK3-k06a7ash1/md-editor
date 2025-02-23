import type { PropsWithChildren } from "react";
import style from "./style.module.css";

export const Card = ({ children }: PropsWithChildren) => (
	<div className={style.cardContainer}>{children}</div>
);
