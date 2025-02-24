import { ReactNode, FC } from "react";
type Props = {
	children: ReactNode;
};
export const Section: FC<Props> = ({ children }) => (
	<div className="px-6 overflow-hidden">{children}</div>
);
