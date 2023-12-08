"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store/user";
import {Header} from "@/app/components/Header/header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import LinkMenu from "@/app/components/LinkMenu";

const SETTING_PATH = "/settings";
const generateSettingPath = (p) => SETTING_PATH + p;
const SETTING_ROUTES = [
  {
    href: generateSettingPath("/profile"),
    label: "Profile",
  },
  {
    href: generateSettingPath("/security"),
    label: "Security",
  }
];

export default function SettingsLayout (props) {
  const {fetchCurrentUser} = useUserStore();

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return (
    <>
      <Header />
      <Container className="pt-5">
        <Row>
          <Col
            xs={12}
            md={2}
          >
            <LinkMenu routes={SETTING_ROUTES} />
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