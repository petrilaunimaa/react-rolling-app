import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const tmi = require("react-tmi");
// const setusername = "artyknots";
// const twclient = new tmi.Client({
//   options: { debug: true },
//   channels: [setusername],
// });

// twclient.connect();

//   // On message do stuff
//   twclient.on("message", (channel, tags, message, self) => {
//     if (self) return;

//     console.log(`${tags["display-name"]}: ${message}`);
//   });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
