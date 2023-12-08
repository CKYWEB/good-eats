"use client";

import {Header} from "@/app/components/Header/header";
import {useUserStore} from "@/store/user";
import {useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LinkMenu from "@/app/components/LinkMenu";

const MANAGEMENT_PATH = "/management";
const generateManagementPath = (p) => MANAGEMENT_PATH + p;
const MANAGEMENT_ROUTES = [
    {
        href: generateManagementPath("/users"),
        label: "Users",
    },
    {
        href: generateManagementPath("/recipes"),
        label: "Recipes",
    }
];

export default function ManagementLayout (props) {
    const {fetchCurrentUser} = useUserStore();

    useEffect(() => {
        fetchCurrentUser();
    },[fetchCurrentUser]);

    return (
      <>
        <Header />
        <Container className="pt-5">
          <Row>
            <Col
              xs={12}
              md={2}
            >
              <LinkMenu routes={MANAGEMENT_ROUTES} />
            </Col>
            <Col
              xs={12}
              md={10}
            >
              {props.children}
            </Col>
          </Row>
        </Container>
      </>
    );
}