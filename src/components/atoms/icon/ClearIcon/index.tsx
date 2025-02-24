import { Eraser } from "lucide-react";
import { Spacer } from "../../Spacer";
import { useMarkdownContext } from "@/context/MarkdownContext";
import { Button } from "@/components/ui/button";

export const ClearIcon = () => {
	const { setMarkdown } = useMarkdownContext();

	return (
		<Button onClick={() => setMarkdown([])}>
			<i>
				<Eraser className="text-xl" />
			</i>
			<Spacer horizontal size={4} />
			<div>Clear</div>
		</Button>
	);
};
