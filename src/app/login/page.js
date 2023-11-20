"use client";

import styles from "./login.module.scss";
import Button from "@/app/components/Button/button";
import Image from "next/image";
import {useState} from "react";
import {useForm} from "react-hook-form";
import FormInput from "@/app/components/FormInput/formInput";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import {createUser, login} from "@/api/user";

export default function Login () {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [isRegister, setRegister] = useState(false);
    const router = useRouter();

    const onSubmit = async (data) => {
        setLoading(true);

        console.log("Form Data: ", data);

        if (isRegister) {
            try {
                const {msg} = await createUser(data);

                toast.success(msg);
                handleRegister(false);
            } catch (err) {
                toast.error(err.message);
            } finally {
                setLoading(false);
            }
        } else {
            try {
                const {msg} = await login(data);

                toast.success(msg);
                router.replace("/");
            } catch (err) {
                toast.error(err.message);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleRegister = (s) => {
      reset();
      setRegister(s);
    };
    
    return (
      <div className="row row-cols-1 row-cols-md-2 g-0">
        <section className="col">
          <Image
            width={100}
            height={100}
            alt="cover" 
            priority
            className={`object-fit-cover w-100 ${styles["image-cover__login"]}`}
            src="/images/login-desktop.webp"
          />
        </section>

        <section className={`col d-flex ${styles["form__container"]}`}>
          <div className="mx-auto">
            {isRegister ?
              <>
                <div
                  className="alert alert-success"
                  role="alert"
                >
                  This form will only take you one minute.
                </div>
                <h1 className="text-center mb-3">
                  👋 Hey there
                </h1>

              </>:
              <h1 className="text-center mb-5">
                🏡 Welcome
              </h1>}
            <form
              className={styles.form}
              onSubmit={handleSubmit(onSubmit)}
            >
              {isRegister &&
              <>
                <div className="mb-3">
                  <FormInput
                    label="First Name"
                    register={
                        register("firstName",{
                            required: "Please enter your first name",
                            pattern: {
                                value: /^[a-z ,.'-]+$/i,
                                message: "Please provide a valid first name."
                            },
                        })}
                    errors={errors}
                    placeholder="first name"
                  />
                </div>
                <div className="mb-3">
                  <FormInput
                    label="Last Name"
                    register={
                        register("lastName",{
                            required: "Please enter your last name",
                            pattern: {
                                value: /^[a-z ,.'-]+$/i,
                                message: "Please provide a valid last name."
                            },
                    })}
                    errors={errors}
                    placeholder="last name"
                  />
                </div>
              </>}
              <div className="mb-3">
                <FormInput
                  label="Email Address"
                  register={
                    register("email",{
                      required: "Please provide a Northeastern email.",
                      pattern: {
                        value: /^[a-zA-Z](\.?[a-zA-Z]){2,}@northeastern\.edu$/,
                        message: "It must be a Northeastern email",
                      },
                    })}
                  errors={errors}
                  placeholder="your.name@northeastern.edu"
                />
              </div>
              <div className="mb-3">
                <FormInput
                  type="password"
                  label="Password"
                  register={
                    register("password",{
                      required: "Please enter a password.",
                    })}
                  errors={errors}
                  placeholder="password"
                />
              </div>
              {isRegister && (
              <div className="mb-3">
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
              </div>
              )}
              <Button
                className="mb-3 w-100"
                loading={loading}
                disabled={loading}
                type="submit"
              >
                Continue
              </Button>
              {!isRegister && 
              <>
                <div className="mb-5">
                  <span>
                    Don&rsquo;t have an account?
                  </span>
                  <Button
                    styleType="plain"
                    onClick={() => handleRegister(true)}
                  >
                    Join now
                  </Button>
                </div>
              </>}
            </form>
          </div>
        </section>
      </div>
    );
}