"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { changePassword } from "@/api/security";
import styles from "./Security.module.scss";
import Button from "../../components/Button/button";

const Security = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await changePassword(data);

      if (response.result) {
        console.log("Password changed successfully");
      } else {
        console.error("Failed to change password", response.msg);
      }
    } catch (error) {
      console.error("Error occurred while changing password", error);
    }
  };

  return (
    <div className={`${styles.security} container`}>
      <h1 className={styles.title}>
        Security Settings
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="oldPassword"
            className="form-label fw-bold"
          >
            Old Password
          </label>
          <input
            type="password"
            id="oldPassword"
            {...register("oldPassword", { required: "Please enter your old password" })}
          />
          {errors.oldPassword && <span className="error">
            {errors.oldPassword.message}
          </span>}
        </div>
        <br />
        <div>
          <label
            htmlFor="newPassword"
            className="form-label fw-bold"
          >
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            {...register("newPassword", { required: "Please enter your new password" })}
          />
          {errors.newPassword && <span className="error">
            {errors.newPassword.message}
          </span>}
        </div>
        <br />
        <div>
          <label
            htmlFor="confirmPassword"
            className="form-label fw-bold"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", { required: "Please confirm your new password" })}
          />
          {errors.confirmPassword && <span className="error">
            {errors.confirmPassword.message}
          </span>}
        </div>
        <br />
        <Button
          className="mb-3 w-100"
          type="submit"
        >
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default Security;
