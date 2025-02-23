import "github-markdown-css/github-markdown-dark.css";
import { useDragComponents } from "./features/drag-and-drop/ui/index.tsx";
import { Frame } from "./layouts/Frame/index.tsx";
import { MainContent } from "./layouts/MainContent/index.tsx";
import style from "./index.module.css";
import { Section } from "./layouts/Section/index.tsx";
import { Spacer } from "./components/atoms/Spacer/index.tsx";
import { PreviewSection } from "./components/features/previewSection/index.tsx";
import { BottomAddSection } from "./components/atoms/icon/BottomAddSectionIcon/index.tsx";
import { useViewControl } from "./hooks/useViewControl.tsx";
import { SelectSeparateLevel } from "./components/features/selectSeparateLevel/index.tsx";
import { SubContent } from "./layouts/SubContent/index.tsx";
import { useMarkdownContext } from "./context/MarkdownContext.tsx";

export const App = () => {
	const { markdown: contents } = useMarkdownContext();
	const { TopAnchor, BottomAnchor } = useViewControl();

	const { DragAndDropArea } = useDragComponents();

	return (
		<>
			<TopAnchor />
			<div className={style.root}>
				<Frame>
					<Spacer size={24} />
					<SubContent>
						<SelectSeparateLevel />
					</SubContent>
					<MainContent>
						<Section>
							<h2 className={style.sectionTitle}>Edit</h2>
							<DragAndDropArea />
							<Spacer size={24} />
							{contents.length > 0 && <BottomAddSection />}
						</Section>
						<Section>
							<h2 className={style.sectionTitle}>Preview</h2>
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
