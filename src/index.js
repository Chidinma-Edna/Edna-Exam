import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Counter from "./Pages/Counter";
import ErrorBoundary from "./Pages/ErrorBoundary";
import Page404 from "./Pages/Page404";
import UseReducer from "./Pages/UseReducer";
 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Counter" element={<Counter />} />
          <Route path="UseReducer" element={<UseReducer />} />
          <Route path="*" element={<Page404 />} />
          <Route path="ErrorBoundary" element={<ErrorBoundary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
