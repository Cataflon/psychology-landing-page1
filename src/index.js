import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import Layout from "./layout/Layout";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>
);
