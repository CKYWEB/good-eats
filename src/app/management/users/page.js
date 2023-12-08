"use client";

import {useEffect, useState} from "react";
import {deleteUser, fetchUsers} from "@/api/user";
import toast from "react-hot-toast";
import Container from "react-bootstrap/Container";
import TableComponent from "@/app/components/Table";
import Button from "react-bootstrap/Button";
import {format, parseISO} from "date-fns";
import Image from "react-bootstrap/Image";
import {Col, Row} from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import {useUserStore} from "@/store/user";
import Confirm from "@/app/components/Confirm";

export default function UserManagement () {
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [currentRow, setCurrentRow] = useState({});
    const [users, setUsers] = useState([]);
    const {currentUser} = useUserStore();

    const handleDeleteBtnClick = (row) => {
        setCurrentRow(row);
        setShowDeleteConfirm(true);
    };
    const handleDeleteUser = async (id) => {
        try {
            const {result, msg} = await deleteUser(id);

            if (!result) {
                toast.error(msg);

                return;
            }

            toast.success(msg);

            const usersRes = await fetchUsers();
            if (!usersRes.result) {
                toast.error(usersRes.msg);
                return;
            }

            setUsers(usersRes.data);
        } catch (e) {
            toast.error(e.message);
        }
    };

    const handleCloseConfirm = (result) => {
        setShowDeleteConfirm(false);

        if (result) {
            handleDeleteUser(currentRow._id);
        }
    };
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
            render: (_, row) => {
                return (
                  <>
                    <Button
                      variant="link"
                      className="me-2"
                      disabled={row._id === currentUser._id}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="link"
                      onClick={() => handleDeleteBtnClick(row)}
                      disabled={row._id === currentUser._id}
                    >
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
        <Confirm
          show={showDeleteConfirm}
          onClose={(result) => handleCloseConfirm(result)}
          text={`Are you sure to delete ${currentRow.firstName} ${currentRow.lastName}?`}
        />
      </Container>
    );
}