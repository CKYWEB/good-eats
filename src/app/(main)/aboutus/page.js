"use client";

import React from "react";
import Image from "next/image";
import styles from "@/app/(main)/aboutus/about-us.module.scss";

const AboutUs = () => {
  return (
    <div className={`container ${styles["aboutus-container"]}`}>
      {/* Siqi Yao */}
      <div className={`aboutus-member ${styles["aboutus-member"]}`}>
        <div className={`member-image ${styles["member-image"]}`}>
          <Image
            src="/images/logo.png"
            alt="Siqi Yao"
            width={150}
            height={150}
          />
        </div>
        <div className={`member-description ${styles["member-description"]}`}>
          <h2>
            Siqi Yao
          </h2>
          <p>
            Description
          </p>
        </div>
      </div>

      {/* Pei-Fang Chiang */}
      <div className={`aboutus-member ${styles["aboutus-member"]}`}>
        <div className={`member-image ${styles["member-image"]}`}>
          <Image
            src="/images/logo.png"
            alt="Pei-Fang Chiang"
            width={150}
            height={150}
          />
        </div>
        <div className={`member-description ${styles["member-description"]}`}>
          <h2>
            Pei-Fang Chiang
          </h2>
          <p>
            Description
          </p>
        </div>
      </div>

      {/* Maka */}
      <div className={`aboutus-member ${styles["aboutus-member"]}`}>
        <div className={`member-image ${styles["member-image"]}`}>
          <Image
            src="/images/logo.png"
            alt="Maka"
            width={150}
            height={150}
          />
        </div>
        <div className={`member-description ${styles["member-description"]}`}>
          <h2>
            Maka
          </h2>
          <p>
            Description
          </p>
        </div>
      </div>

      {/* Hsuan-Pei Lee */}
      <div className={`aboutus-member ${styles["aboutus-member"]}`}>
        <div className={`member-image ${styles["member-image"]}`}>
          <Image
            src="/images/logo.png"
            alt="Hsuan-Pei Lee"
            width={150}
            height={150}
          />
        </div>
        <div className={`member-description ${styles["member-description"]}`}>
          <h2>
            Hsuan-Pei Lee
          </h2>
          <p>
            Description
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;