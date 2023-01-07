import { Outlet, Link } from "react-router-dom";
import React from "react"

const Layout = () => {
  return (
    <>
      <div className="navbtn">

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Counter">Counter</Link>
          </li>
          <li>
            <Link to="/UseReducer">UseReducer</Link>
          </li>
          <li>
            <Link to="/ErrorBoundary">ErrorBoundary</Link>
          </li>
          <li>
            <Link to="/Page404">404</Link>
          </li>
          
        </ul>
      </nav>
  </div>
      <Outlet />
    </>
  )
};

export default Layout;