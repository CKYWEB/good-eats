"use client";

import {Col, Container, Form, Row, Image} from "react-bootstrap";
import styles from "./addRecipe.module.scss";
import FormInput from "@/app/components/FormInput/formInput";
import {useFieldArray, useForm, Controller} from "react-hook-form";
import React, {useState} from "react";
import ImageUploading from "react-images-uploading";
import Button from "@/app/components/Button/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRectangleXmark} from "@fortawesome/free-solid-svg-icons";

export const IngredientsInput = ({control}) => {
  const { fields, append, remove} = useFieldArray({
    control,
    name: "ingredients", // unique name for your Field Array
  });
  return (
    <Row>
      <label
        htmlFor="ingredients"
        className="form-label fw-bold"
      >
        Ingredients
      </label>
      <p>
        Enter one ingredient per line. Include the quantity (i.e. cups, tablespoons) and
        any special preparation (i.e. sifted, softened, chopped).
        Use optional headers to organize the different parts of the recipe (i.e. Cake, Frosting, Dressing).
      </p>
      <Row>
        {fields.map((field, index) => (
          <Col
            key={field.id}
            xs={12}
          >
            <Row>
              <Col xs={4}>
                <Controller
                  render={({ field  }) => (
                    <>
                      <input
                        {...field}
                        type="number"
                        min={1}
                        className="form-control mb-4"
                        placeholder="quantity (1)"
                      />
                    </>
                        )}
                  rules={{ required: true }}
                  name={`ingredients.${index}.quantity`}
                  control={control}
                />
              </Col>
              <Col xs={4}>
                <Controller
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        className="form-control mb-4"
                        placeholder="unit (cup)"
                      />
                    </>
                        )}
                  rules={{ required: true }}
                  name={`ingredients.${index}.unit`}
                  control={control}
                />
              </Col>
              <Col xs={3}>
                <Controller
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        className="form-control mb-4"
                        placeholder="item (sugar)"
                      />
                    </>
                        )}
                  rules={{ required: true }}
                  name={`ingredients.${index}.item`}
                  control={control}
                />
              </Col>
              <Col
                xs={1}
                className="d-flex justify-content-center align-items-center"
              >
                <FontAwesomeIcon
                  className="fs-4 mb-4 text-secondary"
                  icon={faRectangleXmark}
                  onClick={() => remove(index)}
                />
              </Col>
            </Row>
          </Col>
          ))}
      </Row>
      <Button
        className="w-25 ms-2"
        onClick={() => append(
                {
                  quantity: 1,
                  unit: "",
                  item: ""
                }
            )}
      >
        ADD INGREDIENT
      </Button>
    </Row>
  );
};

export const DirectionsInput = ({control}) => {
  const { fields, append, remove} = useFieldArray({
    control,
    name: "directions", // unique name for your Field Array
  });
  return (
    <Row>
      <label
        htmlFor="directions"
        className="form-label fw-bold"
      >
        Directions
      </label>
      <p>
        Explain how to make your recipe,
        including oven temperatures, baking or cooking times, and pan sizes, etc. Use optional
        headers to organize the different parts of the recipe (i.e. Prep, Bake, Decorate).
      </p>
      <Row>
        {fields.map((field, index) => (
          <Col
            key={field.id}
            xs={12}
          >
            <Row className="mb-2">
              <Col xs={12}>
                <div>
                  {`Step ${index + 1}`}
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={11}>
                <Controller
                  render={({ field }) => (
                    <>
                      <Form.Control
                        {...field}
                        as="textarea"
                        rows={4}
                        className="form-control mb-4"
                        placeholder="detailed instruction"
                      />
                    </>
                        )}
                  rules={{ required: true }}
                  name={`directions.${index}.detailInstruction`}
                  control={control}
                />
              </Col>
              <Col
                xs={1}
                className="d-flex justify-content-center align-items-center"
              >
                <FontAwesomeIcon
                  className="fs-4 mb-4 text-secondary"
                  icon={faRectangleXmark}
                  onClick={() => remove(index)}
                />
              </Col>
            </Row>
          </Col>
          ))}
      </Row>
      <Button
        className="w-25 ms-2"
        onClick={() => append(
                {
                  detailInstruction: "",
                }
            )}
      >
        ADD DIRECTION
      </Button>
    </Row>
  );
};

export default function AddRecipe() {
  const [images, setImages] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
      defaultValues: {
          ingredients: [
              {
                  quantity: 1,
                  unit: "",
                  item: ""
              },
              {
                  quantity: 1,
                  unit: "",
                  item: ""
              }
          ],
          directions: [
              {
                  detailInstruction: "",
              },
              {
                  detailInstruction: "",
              },
              {
                  detailInstruction: "",
              }
          ]
      }
  });

  const handleImageChange = (imageList) => {
    setImages(imageList);
  };

  const onSubmit = (data) => {

    data.directions.forEach((item, index) => {
        item.order = index;
    });

      data.ingredients.forEach((item) => {
          item.quantity = Number(item.quantity);
      });

      data.time = {
          prepTime: Number(data.prepTime),
          cookTime: Number(data.cookTime),
          totalTime: Number(data.prepTime) + Number(data.cookTime),
      };

      console.log(data);
  };
  return (
    <Container
      className={`bg-white mt-3 py-4 ${styles["form__wrapper"]}`}
    >
      <div className={`mb-3 ${styles["header__wrapper"]}`}>
        <h1 className={`fw-bold ms-4 pb-1 d-inline-block ${styles["header--title"]}`}>
          Add a Recipe
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col
            xs={12}
            md={8}
          >
            <Col xs={12}>
              <FormInput
                label="Recipe Title"
                register={
                  register("title", {
                    required: "Please type the title of your recipe",
                    pattern: {
                      value: /^[a-z ,.'-]+$/i,
                      message: "Please provide a valid recipe title."
                    },
                  })}
                errors={errors}
                placeholder="recipe title"
              />
            </Col>
            <Col xs={12}>
              <label
                htmlFor="description"
                className="form-label fw-bold mt-3"
              >
                Description (optional)
              </label>
              <Form.Control
                as="textarea"
                placeholder="Share the story behind your
                recipe and what makes it special"
                style={{height: "100px"}}
                {...register("description", {})}
              />
            </Col>
          </Col>
          <Col
            xs={12}
            md={4}
          >
            <div className="fw-bold my-3 mt-md-0">
              Photo
            </div>
            <ImageUploading
              value={images}
              onChange={handleImageChange}
              maxNumber={1}
              dataURLKey="dataUrl"
            >
              {({
                  onImageUpload,
                }) => (
                  <div
                    className={styles["image__container"]}
                    onClick={onImageUpload}
                  >
                    <Image
                      alt="Profile"
                      src={images.length > 0 ? images[0].dataUrl : "/images/recipe-add-photo.png"}
                      width={180}
                    />
                  </div>
              )}
            </ImageUploading>
          </Col>
        </Row>
        <div className="border-top border-light-subtle my-5" />
        <IngredientsInput control={control} />
        <div className="border-top border-light-subtle my-5" />
        <DirectionsInput control={control} />
        <div className="border-top border-light-subtle my-5" />
        <Row>
          <Col xs={6}>
            <FormInput
              label="Prep Time (mins)"
              type="number"
              min={1}
              register={
                register("prepTime", {
                  required: "Please enter prep time",
                })}
              errors={errors}
              style={{width: 240}}
              placeholder="0"
            />
          </Col>
          <Col xs={6}>
            <FormInput
              label="Cook Time (mins)"
              type="number"
              min={1}
              register={
                  register("cookTime", {
                    required: "Please enter cook time",
                  })}
              errors={errors}
              style={{width: 240}}
              placeholder="0"
            />
          </Col>
        </Row>
        <Container
          fluid
          className="pt-5 d-flex justify-content-end"
        >
          <Button
            type="submit"
            className="w-25 fs-4 fw-bold"
          >
            Submit
          </Button>
        </Container>
      </form>
    </Container>
  );
}