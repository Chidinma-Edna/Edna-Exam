import React from "react";
import "./style.css";
import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <div>
      <Helmet>
        <title>counter | app</title>
        <Meta 
        name="Description"
        content="Edna's counter app using react js"
        />;
      <Counter />
      <Home />
      </Helmet>
    </div>
  );
}
