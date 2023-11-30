"use client";

import React from "react";
import { Image } from "react-bootstrap";
import { useRouter } from "next/navigation";
import styles from "./header.module.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Logo = () => {
  return (
    <div className="col d-flex">
      <div className="logo py-3">
        <Image
          className={styles.logo__image}
          src="/images/logo.png"
          alt="Good Eats Logo"
          fluid
        />
      </div>
    </div>
  );
};

export const Avatar = ({ isUserLoggedIn, userName, handleLogout }) => {
  const router = useRouter();
  //const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLoginClick = () => {
    if (isUserLoggedIn) {
      handleLogout();
    } else {
      router.push("/login");
    }
  };

  const menuItems = [
    { label: "My Profile", href: "#" },
    { label: "Search", href: "#" },
    { label: "Favorite Recipes", href: "#" },
    { label: "Add a Recipe", href: "#" },
    { label: "Help", href: "#" },
  ];

  return (
    <div className="col d-flex justify-content-md-end">
      <div className="d-flex gap-2 con">
        <div className={`${styles.containerUserSvg} container__user-svg`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <style>
              {"svg { fill: #d54215 }"}
            </style>
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </div>
        {isUserLoggedIn ? (
          <div
            id="userAvatar"
            className="dropdown"
          >
            <div
              className={styles.nameUser}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {userName}
            </div>
            <ul
              id="userDropdown"
              className="dropdown-menu"
            >
              {menuItems.map(item => (
                <li key={item.label}>
                  <a
                    className="dropdown-item"
                    href={item.href}
                  >
                    {item.label}
                    {item.label === "Favorite Recipes" && (
                      <span
                        id="favorite-count"
                        className="badge text-bg-secondary"
                      >
                        0
                      </span>
                    )}
                  </a>
                </li>
              ))}
              <span className="mx-2">
                ____________________
              </span>
              <li
                data-bs-toggle="modal"
                data-bs-target="#confirmLogoutModal"
              >
                <button
                  className="dropdown-item"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div id="loginButton">
            <button
              onClick={handleLoginClick}
              className={styles.loginLink}
            >
              {isUserLoggedIn ? "Log Out" : "Log In"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export const Header = () => {
  const menuItems = [
    { id: "homepage", label: "Home" },
    { id: "mealspage", label: "Meals" },
    { id: "cuisinespage", label: "Cuisines" },
    { id: "ingredientspage", label: "Ingredients" },
    { id: "tipsage", label: "Kitchen Tips" },
    { id: "newspage", label: "News" },
    { id: "featurespage", label: "Features" },
    { id: "aboutuspage", label: "About Us" },
  ];

  return (
    <>
      <header className="bg-light">
        <div>
          <div className="row row-cols-1 row-cols-md-2">
            <Logo />
            <Avatar />
          </div>
          <div className="row">
            <Navbar
              expand="lg"
              className={styles.navbarHome}
            >
              <Container fluid>
                <Navbar.Toggle
                  aria-controls="offcanvasNav"
                  className={`ms-2 ${styles.navbarToggler}`}
                />
                <Navbar.Offcanvas
                  id="offcanvasNav"
                  className={styles.navbarHome}
                >
                  <Offcanvas.Header
                    closeButton
                    className="justify-content-end"
                  />
                  <Offcanvas.Body>
                    <Nav className="me-auto px-3">
                      {menuItems.map(item => (
                        <Nav.Link
                          key={item.id}
                          href={item.id}
                          className={styles.navLink}
                        >
                          {item.label}
                        </Nav.Link>
                    ))}
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </div>
        </div>
      </header >
    </>
  );
};