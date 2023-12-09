import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";

import Button from "@/app/components/Button/button";

import { saveSubscriber } from "@/api/newsletter";

export default function NewsLetterComponent(props) {
  const { show, onHide } = props;

    const [email, setEmail] = useState("");

    const handleHide = () => { setEmail(""); onHide(); };

    const handleSignUp = async () => {
        try {
            const { result, message, msg } = await saveSubscriber({ email });
            if (!result) {
                message && toast.error(message);
                msg && toast.error(msg);
                return;
            } else {
                onHide();
                setEmail("");
                msg && toast.success(msg);
            }
            
        } catch (err) {
            toast.error(err.message);
        }
    };


    const title = "Newsletter Sign up";

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
          Get the latest on food trends, healthy recipes, holiday ideas, and easy-to-make meals!
        </p>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="yourname@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
          </input>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button
          className="mb-3 w-100"
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
      </Modal.Footer>
    </Modal>
  );
}