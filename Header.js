import React from 'react'
import custom from "./custom.module.css";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
    
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${custom.bglight}`}>
                <div className="container-fluid">
                    <div className={`logo ${custom.logo}`}><span>𝖕𝖊𝖗𝖋𝖚𝖒𝖊</span></div>&nbsp;&nbsp;
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <LinkContainer to="/Home1">
                                <li className="nav-item">
                                    <a className={`nav-link active ${custom.navLink}`}
                                        aria-current="page"
                                        href="#">Home</a>
                                </li>
                            </LinkContainer>

                            <LinkContainer to="/About">
                                <li className="nav-item">
                                    <a className={`nav-link active ${custom.navLink}`}
                                        aria-current="page"
                                        href="#">About us</a>
                                </li>
                            </LinkContainer>

                            <LinkContainer to="/products">
                                <li className="nav-item">
                                    <a className={`nav-link active ${custom.navLink}`}
                                        aria-current="page"
                                        href="#">Products</a>
                                </li>
                            </LinkContainer >

                            <LinkContainer to="/Contact">
                                <li class="nav-item">
                                    <a className={`nav-link active ${custom.navLink}`}
                                        aria-current="page"
                                        href="#">contact us</a>
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
            {/* <i class="fa-solid fa-cart-shopping"></i>
            <div className="container">
            <div className="row mt-5">
                <Products/>
                <Products/>
                <Products/>
                <Products/>
                <Products/>
                <Products/>
            </div>
            </div> */}
        </>
    )
}