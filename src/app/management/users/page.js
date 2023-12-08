"use client";

import {useEffect, useState} from "react";
import {fetchUsers} from "@/api/user";
import toast from "react-hot-toast";
import Container from "react-bootstrap/Container";
import TableComponent from "@/app/components/Table";
import Button from "react-bootstrap/Button";
import {format, parseISO} from "date-fns";
import Image from "react-bootstrap/Image";
import {Col, Row} from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

export default function UserManagement () {
    const [users, setUsers] = useState([]);
    const columns = [
        {
            title: "Name",
            key: "name",
            width: 320,
            render: (_, row) => (
              <Container>
                <Row>
                  <Col
                    xs={2}
                    className="p-0"
                  >
                    <Image
                      alt="profile"
                      rounded
                      width={50}
                      src={row.image || "/images/default-profile.png"}
                    />
                  </Col>
                  <Col
                    xs={10}
                    className="p-0"
                  >
                    <Container>
                      <Row className="mb-1">
                        {`${row.firstName} ${row.lastName}`}
                      </Row>
                      <Row className="text-secondary">
                        {row.email}
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            )
        },
        {
            title: "Created Date",
            dataIndex: "createdDate",
            key: "createdDate",
            width: 180,
            render: (value) => (
              <span>
                {format(parseISO(value), "yyyy-MM-dd")}
              </span>
            )
        },
        {
        //TODO
            title: "Posted Recipes",
            key: "postedRecipes",
            render: () => 0,
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
            render: (value) => (
              <Badge bg={value === 1 ? "primary" : "success"}>
                {value === 1 ? "Admin" : "Member"}
              </Badge>
            ),
        },
        {
            title: " ",
            key: "actions",
            width: 180,
            render: () => {
                return (
                  <>
                    <Button
                      variant="link"
                      className="me-2"
                    >
                      Edit
                    </Button>
                    <Button variant="link">
                      Delete
                    </Button>
                  </>
                );
            }
        },
    ];

    useEffect(() => {
        fetchUsers().then(res => {
            if (!res.result) {
                toast.error(res.msg);
                return;
            }

            setUsers(res.data);
        });
    }, []);

    return (
      <Container fluid>
        <TableComponent
          columns={columns}
          data={users}
          scroll={{
              x: 768
          }}
        />
      </Container>
    );
}