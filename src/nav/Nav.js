import React, { Component } from 'react'
import { Link, useLocation } from "react-router-dom";
import "../styles/nav.css"
import selfImage from "../assets/self_image.png";
import aboutIcon from "../assets/account.svg";
import contactIcon from "../assets/envelope.svg";
import projectsIcon from "../assets/coding.svg";
// icons taken from https://atlasicons.vectopus.com/

export default function Nav() {
    const location = useLocation();
    const getNavPositionClass = () =>{
        switch(location.pathname) {
            case "/":
                return "nav-about";
            case "/projects":
                return "nav-projects";
            case "/contact":
                return "nav-contact";
            default:
                return "";
        }
    };

    const getPageTitle = () =>{
        switch(location.pathname) {
            case "/":
                return "ABOUT";
            case "/projects":
                return "PROJECTS";
            case "/contact":
                return "CONTACT";
            default:
                return "";
        }
    };

    const navPositionClass = getNavPositionClass();
    const pageTitle = getPageTitle();

    const isCurrentPage = (navClass) => {
        return navClass === navPositionClass;
    };

    const renderNavLink = (to, imgSrc, altText, navClass) => {
        const isCurrent = isCurrentPage(navClass);
        const linkClass = isCurrent ? "nav-link current" : "nav-link";
        return (
            <Link to={to} className={linkClass}>
                <img src={imgSrc} alt={altText} />
                {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
            </Link>
        );
    };

    return (
        <nav className={`nav ${navPositionClass}`}>
            {renderNavLink(
                "/",
                aboutIcon,
                "person icon",
                "nav-about"
            )}
            {renderNavLink(
                "/projects",
                projectsIcon,
                "coding icon",
                "nav-projects"
            )}
            {renderNavLink(
                "/contact",
                contactIcon,
                "envelope icon",
                "nav-contact"
            )}
        </nav>
    )
}