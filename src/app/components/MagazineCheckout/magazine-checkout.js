import React from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import FormInput from "../FormInput/formInput";
import toast from "react-hot-toast";
import Image from "react-bootstrap/Image";

import Button from "@/app/components/Button/button";

export default function MagazineSubscriptionComponent(props) {
  const { show, onHide } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleHide = () => { onHide(); };

  const onCheckout = async (data) => {
    // Form data
    console.log(data);
    try {
      // Mock payment API endpoint
      setTimeout(() => {
        const response = {
          status: 200,
          data: {
            success: true,
            message: "Payment processed successfully",
          },
        };
            if (response.status === 200 && response.data.success) {
              toast.success("Payment processed successfully");
              // Reset form fields and close the modal
              reset();
              handleHide();
            } else {
              toast.error("Payment processing failed. Please try again.");
            }
      }, 2000);

  // Mock API response
 
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const title = "Subscribe to our Magazine";

  return (
    <Modal
      show={show}
      onHide={handleHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          Subscribe to our magazine to get the latest on food trends, healthy recipes, holiday ideas, and easy-to-make meals!
        </p>
        <Image
          className="img-fluid"
          src="/images/magazine.jpg"
          alt="Good Eats"
          data-bs-toggle="tooltip"
          data-bs-html="true"
          title="<em>You can Win a trip to </em><b>Frietmuseum in Bruges</b>"
        />
        <h2 className="mt-3 mb-3">
          Monthly Subscription - only
          {" "}
          <span className="text-danger">
            $8
          </span>
        </h2>
        <form onSubmit={handleSubmit(onCheckout)}>
          <div className="mb-3">
            <FormInput
              label="Full Name"
              register={
                register("fullName", {
                  required: "Please enter your full name",
                  pattern: {
                    value: /^[a-z ,.'-]+$/i,
                    message: "Please provide a valid name."
                  },
                })}
              errors={errors}
              placeholder="Full name"
            />
          </div>

          <div className="mb-3">
            <FormInput
              label="Street Address"
              register={register("streetAddress")}
              errors={errors}
              placeholder="Street address"
            />
          </div>

          <div className="mb-3">
            <FormInput
              label="City"
              register={register("city")}
              errors={errors}
              placeholder="City"
            />
          </div>

          <div className="mb-3">
            <FormInput
              label="State"
              register={register("state")}
              errors={errors}
              placeholder="State"
            />
          </div>

          <div className="mb-3">
            <FormInput
              label="Zip Code"
              register={register("zipCode")}
              errors={errors}
              placeholder="Zip code"
              maxLength="5"
            />
          </div>

          <div className="mb-3">
            <FormInput
              label="Credit Card Number"
              register={register("creditCardNumber", {
                required: "Please enter your credit card number",
                pattern: {
                  value: /^[0-9]{16}$/,
                  message: "Please provide a valid credit card number."
                }
              })}
              errors={errors}
              placeholder="1234 5678 9012 3456"
              maxLength="16"
              pattern="[0-9]{16}"
            />
          </div>

          <div className="mb-3">
            <FormInput
              label="CVV"
              register={register("cvv", {
                  required: "Please enter your CVV",
                  pattern: {
                    value: /^[0-9]{3}$/,
                    message: "Please provide a valid CVV."
                  }
                })}
              errors={errors}
              placeholder="123"
              pattern="[0-9]{3}"
              maxLength="3"
            />
          </div>
          <div className="mb-3">
            <FormInput
              label="Expiration Date"
              register={register("expiration", {
                    required: "Please enter your expiration date",
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                      message: "Please provide a valid expiration date in the format MM/YY."
                    }
                  })}
              errors={errors}
              placeholder="MM/YY"
              maxLength="5"
            />
          </div>
          <Button
            className="mb-3 w-100"
            type="submit"
          >
            Checkout
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}