import React from "react";
import { Link } from "react-router-dom";
 function Page404() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Click link below to go back</p>
            <Link to='/' className="hom">Home</Link>
        </div>
    )
}
export default Page404;