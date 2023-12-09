"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./header.module.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useUserStore } from "@/store/user";
import { logout } from "@/api/user";
import NavDropdown from "react-bootstrap/NavDropdown";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const userMenuItems = [
  { label: "Preferences", href: "/settings", role: 2 },
  { label: "Search", href: "#", role: 2 },
  { label: "Favorite Recipes", href: "/saved-recipes", role: 2 },
  { label: "Posted Recipes", href: "/posted-recipes", role: 2 },
  { label: "Help", href: "#", role: 2 },
  { label: "Management", href: "/management", role: 1}
];

export const Logo = () => {
  return (
    <Image
      alt="logo"
      src="/images/logo.png"
      width={256}
      height={50}
    />
  );
};

export const Avatar = ({ user }) => {
  const router = useRouter();
  const {isLoggedIn, isAdmin, currentUser} = useUserStore();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/login");
      toast.success("Log out successfully!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    isLoggedIn() ? (
      <NavDropdown
        id="nav-dropdown-dark-example"
        title={
          <>
            {isAdmin() && (
            <FontAwesomeIcon
              icon={faCrown}
              color="orange"
              className="me-2"
            />
            )}
            <span className={`fw-bold font-monospace ${styles["nav-dropdown__title"]}`}>
              {user.firstName}
            </span>
          </>
        }
        align="end"
        className="d-none d-sm-block"
      >
        {userMenuItems.map(m => {
          if (m.role === currentUser.role || isAdmin()) {
            return (
              <NavDropdown.Item
                key={m.label}
                href={m.href}
              >
                {m.label}
              </NavDropdown.Item>
            );
          }

          return null;
        })}
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={handleLogout}>
          Log Out
        </NavDropdown.Item>
      </NavDropdown>
    ) : (
      <Nav.Link
        href="login"
        className="fs-5 d-none d-sm-block"
      >
        <div className="border border-secondary p-2 text-center">
          Sign In
        </div>
      </Nav.Link>
    )
  );
};

export const Header = () => {
  const menuItems = [
    { id: "/home", label: "Home" },
    { id: "/aboutus", label: "About Us" },
  ];
  const {currentUser, isLoggedIn, isAdmin} = useUserStore();
  const router = useRouter();

  return (
    <Navbar
      sticky="top"
      bg="white"
      className="shadow"
      expand={false}
    >
      <Row className="w-100 justify-content-center align-items-center">
        <Col
          xs={2}
          sm={3}
        >
          <Navbar.Toggle
            aria-controls="offcanvasNav"
            className={`ms-2 border-opacity-0 ${styles["navbar__toggle"]}`}
          />
        </Col>
        <Col
          xs={9}
          sm={6}
          className="text-center"
        >
          <Navbar.Brand onClick={() => router.push("/home")}>
            <Logo />
          </Navbar.Brand>
        </Col>
        <Col
          xs={1}
          sm={3}
          className="d-flex justify-content-end"
        >
          <Avatar user={currentUser} />
          <FontAwesomeIcon
            icon={faHeart}
            className="d-block d-sm-none"
            color="orange"
          />
        </Col>
        <Navbar.Offcanvas id="offcanvasNav">
          <Offcanvas.Header
            closeButton
            className="justify-content-end"
          />
          <Offcanvas.Title className="ps-4">
            <Logo />
          </Offcanvas.Title>
          <Offcanvas.Body>
            <Nav className="me-auto px-3">
              {menuItems.map(item => (
                <Nav.Link
                  key={item.id}
                  href={item.id}
                  className={`fs-3 ${styles["nav__link"]}`}
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
            {isLoggedIn() ?
              <Nav className="me-auto px-3 mt-3 pt-3 border-top border-secondary">
                {userMenuItems.map(m => {
                  if (m.role === currentUser.role || isAdmin()) {
                    return (
                      <Nav.Link
                        key={m.label}
                        href={m.href}
                        className={`fs-3 ${styles["nav__link"]}`}
                      >
                        {m.label}
                      </Nav.Link>
                    );
                  }

                  return null;
                })}
              </Nav> :
              <Nav.Link
                href="login"
                className="fs-5 mt-5 w-50"
              >
                <div className="border border-secondary p-2 text-center">
                  Sign In
                </div>
              </Nav.Link>
            }
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Row>
    </Navbar>
  );
};