import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { MarkdownProvider } from "@/context/MarkdownContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<MarkdownProvider>
			<App />
		</MarkdownProvider>
	</StrictMode>,
);
