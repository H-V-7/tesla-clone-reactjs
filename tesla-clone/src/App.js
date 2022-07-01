import React from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import carData from "./data"

export default function App() {



    return (
        <div className="container">
            <Header />
            <Home />
        </div>
    )
}