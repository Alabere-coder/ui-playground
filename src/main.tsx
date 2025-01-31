// import "@arco-design/web-react/dist/css/arco.css";
import enUS from '@arco-design/web-react/es/locale/en-US';
import "@arco-themes/react-saxx/css/arco.css";

import { ConfigProvider } from "@arco-design/web-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={enUS}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
