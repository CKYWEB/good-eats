"use client";

import { useForm } from "react-hook-form";
import FormInput from "@/app/components/FormInput/formInput";
import {Col, Container, Row} from "react-bootstrap";
import Button from "@/app/components/Button/button";
import {changePassword} from "@/api/user";
import {useUserStore} from "@/store/user";
import {useState} from "react";
import toast from "react-hot-toast";

export default function ChangePassword () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {currentUser} = useUserStore();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data) => {
      setLoading(true);
      try {
          const {result, msg} = await changePassword({
              ...data,
              _id: currentUser._id,
          });

          if (!result) {
              toast.error(msg);

              return;
          }

          toast.success(msg);
      } catch (e) {
          toast.error(e.message);
      } finally {
          setLoading(false);
      }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row className="flex-column gap-3">
          <Col>
            <FormInput
              type="password"
              label="Old Password"
              register={
                    register("oldPassword", {
                        required: "Please enter a password.",
                    })}
              errors={errors}
              placeholder="old password"
            />
          </Col>
          <Col>
            <FormInput
              type="password"
              label="Password"
              register={
                    register("password", {
                        required: "Please enter a password.",
                    })}
              errors={errors}
              placeholder="password"
            />
          </Col>
          <Col>
            <FormInput
              type="password"
              label="Confirm Password"
              register={
                    register("confirmPassword", {
                        required: "Please confirm your password.",
                        validate: {
                            sameAsPassword: (_, formValues) => {
                                return formValues.password === formValues.confirmPassword || "Password doesn't match.";
                            }
                        }
                    })}
              errors={errors}
              placeholder="confirm password"
            />
          </Col>
          <Col>
            <Button
              loading={isLoading}
              type="submit"
            >
              Save changes
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
}
