import type { DispatchWithoutAction } from "react";
import { IconContainer } from "../../iconContainer";
import { Pencil } from "lucide-react";
import { Spacer } from "../../Spacer";
type EditCardIconProps = {
	toggleIsEdit: DispatchWithoutAction;
};
export const EditCardIcon = ({
	toggleIsEdit,
}: EditCardIconProps): JSX.Element => (
	<IconContainer>
		{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
		<i
			onClick={() => {
				toggleIsEdit();
			}}
		>
			<Pencil className="cursor-pointer text-xl" />
			<Spacer horizontal size={8} />
			Edit
		</i>
	</IconContainer>
);
