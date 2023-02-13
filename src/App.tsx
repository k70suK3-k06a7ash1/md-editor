import { useEffect, useState } from "react";
import { Card } from "./components/card/index";
import { splitByTag } from "./libs/splitByTag";
function App() {
  const [content, setContent] = useState<string[]>();
  useEffect(() => {
    import("./base.md").then((response) => {
      fetch(response.default)
        .then((response) => response.text())
        .then((text) => setContent(splitByTag(text, "h1")));
    });
  }, []);

  return (
    <div className="App">
      {content?.map((element) => (
        <Card contentMarkdown={element} />
      ))}
    </div>
  );
}

export default App;
