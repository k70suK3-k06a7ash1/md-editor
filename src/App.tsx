import { useEffect, useState } from "react";
import { splitByTag } from "./libs/splitByTag";
import { useDragComponents } from "./components/dragAndDrop";

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
      <DragAndDropArea />
    </div>
  );
}

export default App;
