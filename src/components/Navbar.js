import React from "react";
import Proptypes from "prop-types";

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.modeValue} bg-${props.modeValue}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
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