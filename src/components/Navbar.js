import React from "react";
import Proptypes from "prop-types";

import { Outlet, Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.modeValue} bg-${props.modeValue}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.link}</Link>
                        </li>
                    </ul>
                </div>

                <button type="button" onClick={() => {props.color("blue")}} className="btn btn-primary me-3">Blue</button>
                <button type="button" onClick={() => {props.color("green")}} className="btn btn-success me-3">Green</button>
                <button type="button" onClick={() => {props.color("red")}} className="btn btn-danger me-3">Red</button>
                <button type="button" onClick={() => {props.color("dark")}} className="btn btn-secondary me-3">Dark</button>

                <div className="form-check form-switch">
                    <input onClick={props.tMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.modeValue === "light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
            </div>
        </nav>

        <Outlet />
        </>
    );
}

Navbar.propTypes = {
    title: Proptypes.string.isRequired,
    link: Proptypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Title goes here",
    link: "Link goes here"
}