import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";

const rootElt = document.getElementById("root");
const childElt = <div className="container">Hello World</div>
      
const root = ReactDOM.createRoot(rootElt);
root.render(childElt);