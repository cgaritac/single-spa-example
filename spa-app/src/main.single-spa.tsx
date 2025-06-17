import React from "react";
import ReactDOM from "react-dom/client";
import singleSpaReact from "single-spa-react";
import App from "./App";

const lifecycles = singleSpaReact({
    React,
    ReactDOMClient: ReactDOM,
    rootComponent: App,
  });
  
  export const { bootstrap, mount, unmount } = lifecycles;