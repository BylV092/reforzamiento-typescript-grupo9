import React from "react";
import ReactDOM from "react-dom/client";
import EjerciciosList from "./componentes/EjerciciosList";


ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <EjerciciosList />
  </React.StrictMode>
);