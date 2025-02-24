import type { ChangeEvent, Dispatch } from "react";
import type { LanguageKey } from "~/types/figurative/LanguageType";

type LanguageSelectedProps = {
	defaultKey: LanguageKey;
	handleChangeLanguage: Dispatch<LanguageKey>;
};
export const LanguageSelected = ({
	defaultKey,
	handleChangeLanguage,
}: LanguageSelectedProps): JSX.Element => (
	<div>
		<select
			className="cursor-pointer rounded-full border-3 border-[#424040] border-solid h-full w-[25vw] text-base p-2"
			defaultValue={defaultKey}
			onChange={(event: ChangeEvent<HTMLSelectElement>) => {
				handleChangeLanguage(event.currentTarget.value as LanguageKey);
			}}
		>
			<option value={"english"}>English</option>
			<option value={"japanese"}>Japanese</option>
			<option value={"chinese"}>Chinese</option>
		</select>
	</div>
);
