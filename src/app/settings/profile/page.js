"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { updateProfile } from "@/api/profile";
import styles from "./profile.module.scss";
import FormInput from "../../components/FormInput/formInput";
import Button from "../../components/Button/button";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const onSubmit = async (data /*, request*/) => {
    /*console.log("Request Object:", request);
    const token = request?.cookies?.get(USER_TOKEN_NAME)?.value;

    // put profilePicture into the FormData
    const formData = new FormData();
    formData.append("profilePicture", profilePicture);

    // Add the data of other fields to FormData
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${USER_PATH}/getUserInfo`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        console.log("Form data submitted successfully");
      } else {
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error occurred while submitting form data", error);
    }*/

    try {
      const response = await updateProfile(data, profilePicture);

      if (response.ok) {
        console.log("Profile updated successfully");
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error occurred while updating profile", error);
    }

    console.log("Form Data", data);
    /*for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }*/

    setProfilePicture(null);
  };

  return (
    <div className={`${styles.personalProfile} container`}>
      <h1 className={styles.title}>
        Personal Profile
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="profilePicture"
            className="form-label fw-bold"
          >
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
        </div>
        <br />
        <FormInput
          label="First Name"
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
        <br />
        <FormInput
          label="Last Name"
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
        <br />
        <FormInput
          label="Description"
          register={register("desc")}
          errors={errors}
        />
        <br />
        <Button
          className="mb-3 w-100"
          type="submit"
        >
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default Profile;
