import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
function App() {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    import("./base.md").then((response) => {
      fetch(response.default)
        .then((response) => response.text())
        .then((text) => setContent(text));
    });
  }, []);
  return (
    <div className="App">
      <ReactMarkdown children={content} />
    </div>
  );
}

export default App;
