import { type Dispatch, type DispatchWithoutAction, useState } from "react";
import {} from "react";
import { ApplyTemplateIcon } from "@/components/atoms/icon/ApplyTemplateIcon";
import { CancelIcon } from "@/components/atoms/icon/CancelIcon";
import { Spacer } from "@/components/atoms/Spacer";
import type { LanguageKey } from "@/types/figurative/LanguageType";
import { LanguageSelected } from "../language";

type Props = {
	handleClose: DispatchWithoutAction;
	handleApply: Dispatch<LanguageKey>;
};
export const SetTemplateModal = ({ handleClose, handleApply }: Props) => {
	const [languageKey, setLanguageKey] = useState<LanguageKey>("english");

	const handleOnClickApplyTemplate = () => {
		handleApply(languageKey);
		handleClose();
	};

	return (
		<div className="rounded-lg p-6 text-gray-800 bg-gray-100 w-[450px] h-[300px]">
			<div className="flex justify-center">
				<h1>Please select a language.</h1>
			</div>
			<Spacer size={24} />

			<div className="flex justify-center">
				<div>
					<LanguageSelected
						defaultKey={languageKey}
						handleChangeLanguage={setLanguageKey}
					/>
				</div>
			</div>

			<Spacer size={48} />
			<div className="flex justify-around">
				<CancelIcon handleCancel={handleClose} />
				<ApplyTemplateIcon handleApply={handleOnClickApplyTemplate} />
			</div>
		</div>
	);
};
