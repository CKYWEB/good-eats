"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { changePassword } from "@/api/security";
import styles from "./security.module.scss";
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
        <div className={styles.formGroup}>
          <label
            htmlFor="oldPassword"
            className={`${styles.formLabel} form-label fw-bold`}
          >
            Old Password
          </label>
          <div className={styles.inputContainer}>
            <input
              type="password"
              id="oldPassword"
              {...register("oldPassword", { required: "Please enter your old password" })}
            />
            {errors.oldPassword && <span className={`${styles.error} error`}>
              {errors.oldPassword.message}
            </span>}
          </div>
        </div>
        <br />
        <div className={styles.formGroup}>
          <label
            htmlFor="newPassword"
            className={`${styles.formLabel} form-label fw-bold`}
          >
            New Password
          </label>
          <div className={styles.inputContainer}>
            <input
              type="password"
              id="newPassword"
              {...register("newPassword", { required: "Please enter your new password" })}
            />
            {errors.newPassword && <span className={`${styles.error} error`}>
              {errors.newPassword.message}
            </span>}
          </div>
        </div>
        <br />
        <div className={styles.formGroup}>
          <label
            htmlFor="confirmPassword"
            className={`${styles.formLabel} form-label fw-bold`}
          >
            Confirm Password
          </label>
          <div className={styles.inputContainer}>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", { required: "Please confirm your new password" })}
            />
            {errors.confirmPassword && <span className={`${styles.error} error`}>
              {errors.confirmPassword.message}
            </span>}
          </div>
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
