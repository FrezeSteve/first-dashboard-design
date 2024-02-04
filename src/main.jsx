import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { IndexContextProvider } from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <IndexContextProvider>
            <App />
        </IndexContextProvider>
    </React.StrictMode>
);
