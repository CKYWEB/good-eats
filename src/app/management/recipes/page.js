"use client";

import {useEffect, useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import toast from "react-hot-toast";
import {getAllRecipes} from "@/api/recipe";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDay} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import {useRouter} from "next/navigation";
import {format, parseISO} from "date-fns";
import Empty from "@/app/components/Empty";
import Loading from "@/app/components/Loading";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function RecipeManagement () {
    const router = useRouter();
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const handleViewRecipe = (recipeId) => {
        router.push(`/recipe/${recipeId}`);
    };

    useEffect(() => {
        setLoading(true);
        getAllRecipes()
            .then(res => {
              if (!res.result) {
                toast.error(res.msg);
                return;
              }

              setRecipes(res.data);
            })
            .catch((e) => {
              toast.error(e.message);
            })
            .finally(() => {
              setLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
          <Loading />
        );
    }
    if (recipes.length === 0) {
        return (
          <Empty />
        );
    }

  return (
    <ListGroup
      as="ul"
    >
      {recipes.map(r => (
        <ListGroup.Item
          key={r._id}
          as="li"
          className="d-flex justify-content-between align-items-start p-0"
        >
          <Row className="w-100">
            <Col xs={3}>
              <Image
                alt="food"
                src={`data:image/png;base64,${r.image}`}
                fluid
              />
            </Col>
            <Col
              xs={5}
              className="p-2"
            >
              <Row className="flex-column gap-3">
                <Col className="fs-4">
                  {r.title}
                </Col>
                <Col className="text-secondary">
                  {r.tag}
                </Col>
                <Col className="text-secondary">
                  <FontAwesomeIcon
                    icon={faCalendarDay}
                    className="me-1"
                  />
                  {format(parseISO(r.createdDate), "yyyy-MM-dd")}
                </Col>
              </Row>
            </Col>
            <Col
              xs={3}
              className="d-flex align-items-center justify-content-center"
            >
              <Button
                variant="light"
                onClick={() => handleViewRecipe(r._id)}
              >
                View Recipe
              </Button>
            </Col>
            <Col
              xs={1}
              className="d-flex align-items-center justify-content-center"
            >
              <NavDropdown
                title="more"
                align="end"
                className="d-none d-sm-block"
              >
                <NavDropdown.Item onClick={() => router.push(`/edit-recipe/${r._id}`)}>
                  Edit
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
          </Row>
        </ListGroup.Item>
        ))}
    </ListGroup>
  );
}