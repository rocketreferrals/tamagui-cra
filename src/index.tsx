import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

// this provides some helpful reset styles to ensure a more consistent look
import "@tamagui/core/reset.css";

import { TamaguiProvider } from "tamagui";

import config from "./tamagui.config";

// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TamaguiProvider config={config}>
      {/* if you want nice React 18 concurrent hydration, you'll want Suspense near the root */}
      <Suspense>
        <App />
      </Suspense>
    </TamaguiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
