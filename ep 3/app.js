import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"},"hi Ashish !");

const root = React.createRoot(document.getElementById("root"));
root.render(heading);
