import { useEffect, useState } from "react";
import { Card } from "./components/card/index";
import { separateH1 } from "./libs/separateH1";

function App() {
  const [content, setContent] = useState<string[]>([]);

  useEffect(() => {
    import("./base.md").then((response) => {
      fetch(response.default)
        .then((response) => response.text())
        .then((text) => setContent(separateH1(text)));
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
