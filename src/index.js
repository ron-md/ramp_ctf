import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  //<StrictMode> stupid strict mode had my function running double!
  <App />
  //</StrictMode>
);
