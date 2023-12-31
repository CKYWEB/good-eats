"use client";

import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../components/FormInput/formInput";
import Button from "../../components/Button/button";
import {Col, Container, Row, Form} from "react-bootstrap";
import {useUserStore} from "@/store/user";
import Loading from "@/app/components/Loading";
import {updateUser} from "@/api/user";
import toast from "react-hot-toast";
import ImageUploader from "@/app/components/ImageUploader";

export default function EditProfile() {
    const {currentUser, isLoggedIn, fetchCurrentUser} = useUserStore();
    const [images, setImages] = useState([]);
    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm({
      values: currentUser,
    });
    const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    if (images.length > 0) {
      if (images[0].dataUrl.startsWith("data:image")) {
          data.image = images[0].dataUrl.split(",")[1];
      } else {
          data.image = images[0].dataUrl;
      }
    } else {
      data.image = "";
    }

    try {
        const {result, msg} = await updateUser(data);

        if (!result) {
            toast.error(msg);

            return;
        }

        await fetchCurrentUser();
        toast.success(msg);
    } catch (e) {
        toast.error(e.message);
    } finally {
        setLoading(false);
    }
  };

  const handleImageChange = (imageList) => {
      setImages(imageList);
  };

    useEffect(() => {
        if (currentUser?.image) {
            setImages([{
                dataUrl: `data:image/png;base64, ${currentUser.image}`
            }]);
        }
    }, [currentUser]);

  if (!isLoggedIn()) {
      return (
        <Loading />
      );
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col
            xs={12}
            lg={8}
          >
            <Row>
              <Col>
                <FormInput
                  label="First Name"
                  placeholder="Type your first name"
                  register={
                            register("firstName", {
                                required: "Please enter your first name",
                                pattern: {
                                    value: /^[a-z ,.'-]+$/i,
                                    message: "Please provide a valid first name."
                                },
                            })
                        }
                  errors={errors}
                />
              </Col>
              <Col>
                <FormInput
                  label="Last Name"
                  placeholder="Type your last name"
                  register={
                            register("lastName", {
                                required: "Please enter your last name",
                                pattern: {
                                    value: /^[a-z ,.'-]+$/i,
                                    message: "Please provide a valid last name."
                                },
                            })}
                  errors={errors}
                />
              </Col>
            </Row>
            <label
              htmlFor="description"
              className="form-label fw-bold mt-3"
            >
              Description (Optional)
            </label>
            <Form.Control
              as="textarea"
              placeholder="Leave a description here"
              style={{height: "100px"}}
              {...register("description", {})}
            />
          </Col>
          <Col
            xs={12}
            lg={4}
            className="mt-3 mt-lg-0"
          >
            <div className="text-center fw-bold mb-2">
              Profile picture
            </div>
            <ImageUploader
              images={images}
              onImageChange={handleImageChange}
            />
          </Col>
        </Row>
        <Button
          className="mt-3"
          type="submit"
          loading={isLoading}
        >
          Save Changes
        </Button>
      </form>
    </Container>
  );
}