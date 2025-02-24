import type { PropsWithChildren } from "react";

export const IconContainer = ({ children }: PropsWithChildren): JSX.Element => (
	<div className="flex justify-end cursor-pointer">{children}</div>
);
