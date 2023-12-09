import React, { useState } from "react";


import Image from "react-bootstrap/Image";

import styles from "./footer.module.scss";
import NewsLetterComponent from "../Newsletter/newsletter";
import MagazineSubscriptionComponent from "../MagazineCheckout/magazine-checkout";

export function Footer() {
  const mainNavs = ["Home", "Meals", "Cuisines", "Ingredients", "Kitchen Tips", "News", "Features", "About Us"];
  const socials = [
    {
      src: "/images/Icons/facebook.png",
      alt: "facebook",
    },
    {
      src: "/images/Icons/Instagram.png",
      alt: "instagram",
    },
    {
      src: "/images/Icons/twitter.png",
      alt: "twitter",
    },
    {
      src: "/images/Icons/Youtube.png",
      alt: "youtube",
    },
    {
      src: "/images/Icons/pinterest.png",
      alt: "pinterest",
    },
    {
      src: "/images/Icons/tiktok.png",
      alt: "tiktok",
    },
  ];
  const secondaryNavs = ["FAQ", "Advertise", "Work for us", "Contact", "Editorial Process", "Anti-Racism Pledge", "Privacy Policy", "Terms of Service"];

  const [showNewsletterSignup, setshowNewsletterSignup] = useState(false);
  const [showMagazineSubscription, setshowMagazineSubscription] = useState(false);

  const handleShowNewsletterSignup = () => setshowNewsletterSignup(true);
  const handleCloseNewsletterSignup = () => setshowNewsletterSignup(false);

  const handleShowMagazineSubscription = () => setshowMagazineSubscription(true);
  const handleCloseMagazineSubscription = () => setshowMagazineSubscription(false);


  
  return (
    <>
      <div className="b-example-divider"></div>
      <footer className="section-size border-top">
        <NewsLetterComponent
          show={showNewsletterSignup}
          onHide={handleCloseNewsletterSignup}
        />
        <MagazineSubscriptionComponent
          show={showMagazineSubscription}
          onHide={handleCloseMagazineSubscription}
        />

        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-lg-3 col-md-6 col-sm-12 col-xs-12"
              onClick={handleShowMagazineSubscription}
            >
              <p className={styles["card-text"]}>
                Enjoy a Magazine Subscription!
              </p>
              <Image
                className="img-fluid"
                src="/images/magazine.jpg"
                alt="Good Eats"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                title="<em>You can Win a trip to </em><b>Frietmuseum in Bruges</b>"
              />
              <a
                href="/"
                className="d-flex align-items-center mb-3 link-dark text-decoration-none"
              >
                <svg
                  className="bi me-2"
                  width="40"
                  height="32"
                >
                  {/* <use xlink:href="#bootstrap"></use> */}
                </svg>
              </a>
              <p className="text-muted">
                © 2023 Group8
              </p>
            </div>

            {/* -- footer: Main Menu items --> */}
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <ul className="nav flex-column">
                {mainNavs.map(i => (
                  <li
                    key={i}
                    className={`nav-item mb-2 ${styles["nav-hover"]}`}
                  >
                    <a
                      href="#"
                      className="nav-link p-0 text-muted"
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
              <br />
              <div className={styles["socials"]}>
                {socials.map(i => (
                  <Image
                    key={i.alt}
                    className="img-fluid"
                    src={i.src}
                    alt={i.alt}
                  />
                ))}
              </div>
            </div>

            {/* <!-- footer: 2nd column --> */}
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <ul className="nav flex-column">
                {secondaryNavs.map(i => (
                  <li
                    key={i}
                    className={`nav-item mb-2 ${styles["nav-hover"]}`}
                  >
                    <a
                      href="#"
                      className={`nav-link p-0 text-muted ${styles["card-text"]}`}
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
              <br />
              <div
                className={styles["subscribe"]}
                onClick={handleShowNewsletterSignup}
              >
                <Image
                  className="img-fluid"
                  src="/images/Icons/subscribebutton.png"
                  alt="ios"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
