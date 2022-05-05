import React from "react";

function Country() {
    return <div className="country">
        <div className="flag container">
            <img src=""alt=""/>
        </div>

        <div className="details">
            <h3 className="name">Name</h3>
            <p>Capital Population: {" "}
            <span className="values">Test</span>
            </p>
            <p>Lat/Long: {" "}
            <span className="values">Test</span>
            </p>
            <p>Capital: {" "}
            <span className="values">Test</span>
            </p>
            <button className="getweather">Capital</button>
        </div>
    </div>
}