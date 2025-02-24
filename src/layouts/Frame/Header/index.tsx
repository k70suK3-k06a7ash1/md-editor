import { headerTitle } from "./constants";

export const Header = (): JSX.Element => {
	return (
		<header>
			<div className="px-6 flex items-center text-[#292929] h-16">
				<h1 className="text-xl font-bold">{headerTitle}</h1>
			</div>
		</header>
	);
};
