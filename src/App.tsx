import { useState } from "react";
import { useDragComponents } from "./components/dragAndDrop";
import { FrameComponent } from "./layouts/Frame";
function App() {
  const [contents, setContents] = useState<string[]>([]);
  // setContents();
  // useEffect(() => {
  //   import("./base.md").then((response) => {
  //     fetch(response.default)
  //       .then((response) => response.text())
  //       .then((text) => );
  //   });
  // }, []);

  console.log(contents);
  const { DragAndDropArea } = useDragComponents();
  return (
    <div className="App">
      <FrameComponent>
        <DragAndDropArea />
      </FrameComponent>
    </div>
  );
}

export default App;
