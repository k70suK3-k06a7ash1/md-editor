import { useDragComponents } from "./features/drag-and-drop/ui/index.js";
import { Frame } from "./layouts/Frame/index.js";
import { MainContent } from "./layouts/MainContent/index.js";
import { Section } from "./layouts/Section/index.js";
import { Spacer } from "./components/atoms/Spacer/index.js";
import { PreviewSection } from "./components/features/previewSection/index.js";
import { BottomAddSection } from "./components/atoms/icon/BottomAddSectionIcon/index.js";
import { useViewControl } from "./hooks/useViewControl.js";
import { SelectSeparateLevel } from "./components/features/selectSeparateLevel/index.js";
import { SubContent } from "./layouts/SubContent/index.js";
import { useMarkdownContext } from "./context/MarkdownContext.js";

export const App = () => {
	const { markdown: contents } = useMarkdownContext();
	const { TopAnchor, BottomAnchor } = useViewControl();

	const { DragAndDropArea } = useDragComponents();

	return (
		<>
			<TopAnchor />
			<div>
				<Frame>
					<Spacer size={24} />
					<SubContent>
						<SelectSeparateLevel />
					</SubContent>
					<MainContent>
						<Section>
							<h2>Edit</h2>
							<DragAndDropArea />
							<Spacer size={24} />
							{contents.length > 0 && <BottomAddSection />}
						</Section>
						<Section>
							<h2>Preview</h2>
							<PreviewSection contents={contents} />
							<Spacer size={16} />
						</Section>
					</MainContent>
					<Spacer size={36} />
				</Frame>
			</div>
			<BottomAnchor />
		</>
	);
};
