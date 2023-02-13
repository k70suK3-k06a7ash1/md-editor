import { useEffect, useState } from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { useDragComponents } from "./components/dragAndDrop";
import { FrameComponent } from "./layouts/Frame";
import { MarkdownState } from "./recoil/atoms/markdown";
function App() {
  const [markdown] = useRecoilState(MarkdownState);

  const { DragAndDropArea, setItems } = useDragComponents({
    contents: markdown,
  });

  useEffect(() => {
    setItems(markdown);
  }, [markdown]);

  return (
    <div className="App">
      <FrameComponent>
        <DragAndDropArea />
      </FrameComponent>
    </div>
  );
}

export default App;
