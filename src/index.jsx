import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./components/main";
import "./style.css";

class App extends React.Component {
  render() {
    return <Main />;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
