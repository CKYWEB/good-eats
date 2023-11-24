"use client";

import React from "react";
import styles from "../Header/header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const Logo = () => {
  // TODO: below is just an example, you need to rewrite this component
  return (
    <div className="col">
      <div className="logo py-3">
        <img
          className={styles.logo__image}
          src="/images/logo.png"
          alt="Good Eats Logo"
        />
      </div>
    </div>
  );
};

export const Avatar = () => {
  // TODO: below is just an example, you need to rewrite this component
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
        <div
          id="loginButton"
          className="visually-hidden"
        >
          <a
            href="login.html"
            className={styles.loginLink}
          >
            Log In
          </a>
        </div>
        <div
          id="userAvatar"
          className="dropdown visually-hidden"
        >
          <div
            className={styles.nameUser}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Unknown
          </div>
          <ul
            id="userDropdown"
            className="dropdown-menu"
          >
            <li>
              <a
                className="dropdown-item"
                href="#"
              >
                My Profile
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
              >
                Search
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
              >
                Favorite Recipes
                <span
                  id="favorite-count"
                  className="badge text-bg-secondary"
                >
                  0
                </span>
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
              >
                Add a Recipe
              </a>
            </li>
            <span className="mx-2">
              ____________________
            </span>
            <li>
              <a
                className="dropdown-item"
                href="#"
              >
                Help
              </a>
            </li>
            <li
              data-bs-toggle="modal"
              data-bs-target="#confirmLogoutModal"
            >
              <a
                className="dropdown-item"
                href="#"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const ConfirmLogoutModal = () => (
  <div
    className="modal fade"
    id="confirmLogoutModal"
    tabIndex="-1"
    aria-labelledby="confirmLogoutModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1
            className="modal-title fs-5"
            id="confirmLogoutModalLabel"
          >
            Warning
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
          </button>
        </div>
        <div className="modal-body">
          Are you sure you want to log out?
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            No
          </button>
          <button
            id="logoutButton"
            type="button"
            className="btn btn-primary"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const HeaderMenu = () => (
  <nav
    className={`${styles.navbarHome} navbar navbar-expand-lg border-bottom border-body`}
    data-bs-theme="light"
  >
    <div className="container-fluid">
      <button
        className={`${styles.navbarToggler} navbar-toggler`}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNav"
        aria-controls="offcanvasNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a
              id="homepage"
              className={`${styles.navLink} nav-link`}
              href="#"
            >
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a
              id="mealspage"
              className={`${styles.navLink} nav-link`}
              href="#"
            >
              Meals
            </a>
          </li>
          <li className="nav-item active">
            <a
              id="cuisinespage"
              className={`${styles.navLink} nav-link`}
              href="#"
            >
              Cuisines
            </a>
          </li>
          <li className="nav-item active">
            <a
              id="ingredientspage"
              className={`${styles.navLink} nav-link`}
              href="#"
            >
              Ingredients
            </a>
          </li>
          <li className="nav-item active">
            <a
              id="tipsage"
              className={`${styles.navLink} nav-link`}
              href="#"
            >
              Kitche Tips
            </a>
          </li>
          <li className="nav-item active">
            <a
              id="newspage"
              className={`${styles.navLink} nav-link`}
              href="#"
            >
              News
            </a>
          </li>
          <li className="nav-item active">
            <a
              id="featurespage"
              className={`${styles.navLink} nav-link`}
              href="#"
            >
              Features
            </a>
          </li>
          <li className="nav-item active">
            <a
              id="aboutuspage"
              className={`${styles.navLink} nav-link`}
              href="#"
            >
              About Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export const OffcanvasMenu = () => (
  <div
    className="offcanvas offcanvas-start"
    tabIndex="-1"
    id="offcanvasNav"
    aria-labelledby="offcanvasNavLabel"
  >
    <div className="offcanvas-header">
      <button
        type="button"
        className="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
      </button>
    </div>
    <div className="offcanvas-body">
      <ul className={`${styles.listGroup} list-group`}>
        <li
          className={`${styles.listGroupItem} list-group-item list-group-item-action active`}
          aria-current="true"
        >
          <a
            id="homepage"
            className={`${styles.navLink} nav-link`}
            href="#"
          >
            Home
          </a>
        </li>
        <li
          className={`${styles.listGroupItem} list-group-item list-group-item-action active`}
          aria-current="true"
        >
          <a
            id="mealspage"
            className={`${styles.navLink} nav-link`}
            href="#"
          >
            Meals
          </a>
        </li>
        <li
          className={`${styles.listGroupItem} list-group-item list-group-item-action active`}
          aria-current="true"
        >
          <a
            id="cuisinespage"
            className={`${styles.navLink} nav-link`}
            href="#"
          >
            Cuisines
          </a>
        </li>
        <li
          className={`${styles.listGroupItem} list-group-item list-group-item-action active`}
          aria-current="true"
        >
          <a
            id="ingredientspage"
            className={`${styles.navLink} nav-link`}
            href="#"
          >
            Ingredients
          </a>
        </li>
        <li
          className={`${styles.listGroupItem} list-group-item list-group-item-action active`}
          aria-current="true"
        >
          <a
            id="tipsage"
            className={`${styles.navLink} nav-link`}
            href="#"
          >
            Kitche Tips
          </a>
        </li>
        <li
          className={`${styles.listGroupItem} list-group-item list-group-item-action active`}
          aria-current="true"
        >
          <a
            id="newspage"
            className={`${styles.navLink} nav-link`}
            href="#"
          >
            News
          </a>
        </li>
        <li
          className={`${styles.listGroupItem} list-group-item list-group-item-action active`}
          aria-current="true"
        >
          <a
            id="featurespage"
            className={`${styles.navLink} nav-link`}
            href="#"
          >
            Features
          </a>
        </li>
        <li
          className={`${styles.listGroupItem} list-group-item list-group-item-action active`}
          aria-current="true"
        >
          <a
            id="aboutuspage"
            className={`${styles.navLink} nav-link`}
            href="#"
          >
            About Us
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export const Header = () => {
  return (
    // TODO: below is just an example, you need to rewrite this component
    <>
      <header className="bg-light">
        <div className="container-lg py-3">
          <div className="row row-cols-1 row-cols-md-2">
            <Logo />
            <Avatar />
            <HeaderMenu />
            <OffcanvasMenu />
            <ConfirmLogoutModal />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;