import React from 'react'
import custom from "./custom.module.css";
import { LinkContainer } from "react-router-bootstrap";


export default function Header() {
    return (
        <>
        <nav class={`navbar navbar-expand-lg ${custom.bglight}`}>
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <LinkContainer to="/Home">
                        <li class="nav-item">
                        <a className={`nav-link active ${custom.navLink}`}
                                        aria-current="page"
                                        href="#">Home</a>
                        </li>
                        </LinkContainer>
                        <LinkContainer to="/Aboutus">
                        <li class="nav-item">
                        <a className={`nav-link active ${custom.navLink}`}
                                        aria-current="page"
                                        href="#">About us</a>
                        </li>
                        </LinkContainer>
                        <LinkContainer to="/Contact">
                        <li class="nav-item">
                        <a className={`nav-link active ${custom.navLink}`}
                                        aria-current="page"
                                        href="#">contactus</a>
                        </li>
                        </LinkContainer>
                        </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        </>
    )
}
