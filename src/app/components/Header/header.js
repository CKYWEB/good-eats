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
import Image from "next/image";

const userMenuItems = [
  { label: "Preferences", href: "/settings/profile" },
  { label: "Search", href: "#" },
  { label: "Favorite Recipes", href: "#" },
  { label: "Add a Recipe", href: "#" },
  { label: "Help", href: "#" },
];

export const Logo = () => {
  return (
    <span className={`fs-1 fw-bolder ${styles["logo__text"]}`}>
      Good Eats
    </span>
  );
};

export const Avatar = ({ user }) => {
  const router = useRouter();
  const {isLoggedIn} = useUserStore();

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
          <span className={`fw-bold font-monospace ${styles["nav-dropdown__title"]}`}>
            {user.firstName}
          </span>
        }
        align="end"
        className="d-none d-sm-block"
      >
        {userMenuItems.map(m=>(
          <NavDropdown.Item
            key={m.label}
            href={m.href}
          >
            {m.label}
          </NavDropdown.Item>
      ))}
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
    { id: "homepage", label: "Home" },
    { id: "mealspage", label: "Meals" },
    { id: "cuisinespage", label: "Cuisines" },
    { id: "ingredientspage", label: "Ingredients" },
    { id: "tipsage", label: "Kitchen Tips" },
  ];
  const {currentUser, isLoggedIn} = useUserStore();
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
          <Offcanvas.Title>
            <Image 
              alt="logo"
              src="/images/logo.png"
              width={60}
              height={60}
              className="ms-4"
            />
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
              <Nav className="me-auto px-3 mt-5 border-top border-secondary">
                {userMenuItems.map(item =>(
                  <Nav.Link
                    key={item.label}
                    href={item.href}
                    className={`fs-3 ${styles["nav__link"]}`}
                  >
                    {item.label}
                  </Nav.Link>))
                }
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