import { useEffect, useState } from "react";
import { separateH1 } from "./libs/separateH1";
import { Card } from "./components/card/index";

function App() {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    import("./base.md").then((response) => {
      fetch(response.default)
        .then((response) => response.text())
        .then((text) => setContent(text));
    });
  }, []);

  if (content) separateH1(content);

  return (
    <div className="App">
      <Card contentMarkdown={content} />
    </div>
  );
}

export default App;
