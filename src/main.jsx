import React from "react";
import ReactDOM from "react-dom/client"; // Importa ReactDOM de esta manera

import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>

        <App />

      <GlobalStyles />
    </>
  </React.StrictMode>
);
