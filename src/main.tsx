import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { MarkdownProvider } from "~/context/MarkdownContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<MarkdownProvider>
			<App />
		</MarkdownProvider>
	</React.StrictMode>,
);
