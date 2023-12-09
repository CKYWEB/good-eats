"use client";

import React from "react";
import Image from "next/image";
import styles from "@/app/(main)/aboutus/about-us.module.scss";

const AboutUs = () => {
  return (
    <div>
      <h1 className={`aboutus-title ${styles["aboutus-title"]}`}>
        Meet the Crew!
      </h1>
      <h2 className={`aboutus-subtitle ${styles["aboutus-subtitle"]}`}>
        We're a vibrant community dedicated to bringing food enthusiasts together.
      </h2>
      <div className={`container ${styles["aboutus-container"]}`}>
        {/* Siqi Yao */}
        <div className={`aboutus-member ${styles["aboutus-member"]}`}>
          <div className={`member-image ${styles["member-image"]}`}>
            <Image
              src="/images/siqi.jpg"
              alt="Siqi Yao"
              width={150}
              height={150}
            />
          </div>
          <div className={`member-name ${styles["member-name"]}`}>
            <h2>
              Siqi Yao
            </h2>
            <div className={`member-description ${styles["member-description"]}`}>
              <p>
                Supervisor
                <br />
                Admin Pages / Backend / Login Page...
              </p>
            </div>
          </div>
        </div>

        {/* Pei-Fang Chiang */}
        <div className={`aboutus-member ${styles["aboutus-member"]}`}>
          <div className={`member-image ${styles["member-image"]}`}>
            <Image
              src="/images/peifang.jpg"
              alt="Pei-Fang Chiang"
              width={150}
              height={150}
            />
          </div>
          <div className={`member-name ${styles["member-name"]}`}>
            <h2>
              Pei-Fang Chiang
            </h2>
            <div className={`member-description ${styles["member-description"]}`}>
              <p>
                Co-Supervisor
                <br />
                Pages about Recipe / Page Tree Design
              </p>
            </div>
          </div>
        </div>

        {/* Maka */}
        <div className={`aboutus-member ${styles["aboutus-member"]}`}>
          <div className={`member-image ${styles["member-image"]}`}>
            <Image
              src="/images/maka.jpg"
              alt="Maguli Bubashvili"
              width={150}
              height={150}
            />
          </div>
          <div className={`member-name ${styles["member-name"]}`}>
            <h2>
              Maguli Bubashvili
            </h2>
            <div className={`member-description ${styles["member-description"]}`}>
              <p>
                Not Found Page / Loading Transition Page
                <br />
                Newsletter / Magazine
              </p>
            </div>
          </div>
        </div>

        {/* Hsuan-Pei Lee */}
        <div className={`aboutus-member ${styles["aboutus-member"]}`}>
          <div className={`member-image ${styles["member-image"]}`}>
            <Image
              src="/images/hsuanpei.jpg"
              alt="Hsuan-Pei Lee"
              width={150}
              height={150}
            />
          </div>
          <div className={`member-name ${styles["member-name"]}`}>
            <h2>
              Hsuan-Pei Lee
            </h2>
            <div className={`member-description ${styles["member-description"]}`}>
              <p>
                Preferences Page / About Us Page
                <br />
                Logo / Slides
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;