import type { PropsWithChildren } from "react";
import style from "./style.module.css";

export const IconContainer = ({ children }: PropsWithChildren): JSX.Element => (
	<div className={style.iconContainer}>{children}</div>
);
