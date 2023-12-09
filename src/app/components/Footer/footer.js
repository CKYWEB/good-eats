import React, { useState } from "react";

import Image from "next/image";

import MagazineImage from "./images/magazine.jpg";
import FacebookIcon from "./images/Icons/facebook.png";
import InstagramIcon from "./images/Icons/Instagram.png";
import TwitterIcon from "./images/Icons/twitter.png";
import YoutubeIcon from "./images/Icons/Youtube.png";
import PinterestIcon from "./images/Icons/pinterest.png";
import TikTokIcon from "./images/Icons/tiktok.png";
import SubscribeButton from "./images/Icons/subscribebutton.png";

import styles from "./footer.module.scss";
import NewsLetterComponent from "../Newsletter/newsletter";

export function Footer() {
  const mainNavs = ["Home", "Meals", "Cuisines", "Ingredients", "Kitchen Tips", "News", "Features", "About Us"];
  const socials = [
    {
      src: FacebookIcon,
      alt: "facebook",
    },
    {
      src: InstagramIcon,
      alt: "instagram",
    },
    {
      src: TwitterIcon,
      alt: "twitter",
    },
    {
      src: YoutubeIcon,
      alt: "youtube",
    },
    {
      src: PinterestIcon,
      alt: "pinterest",
    },
    {
      src: TikTokIcon,
      alt: "tiktok",
    },
  ];
  const secondaryNavs = ["FAQ", "Advertise", "Work for us", "Contact", "Editorial Process", "Anti-Racism Pledge", "Privacy Policy", "Terms of Service"];

  const [showNewsletterSignup, setshowNewsletterSignup] = useState(false);

  const handleShowNewsletterSignup = () => setshowNewsletterSignup(true);
  const handleCloseNewsletterSignup = () => setshowNewsletterSignup(false);


  
  return (
    <>
      <div className="b-example-divider"></div>
      <footer className="section-size border-top">
        <NewsLetterComponent
          show={showNewsletterSignup}
          onHide={handleCloseNewsletterSignup}
        />

        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-lg-3 col-md-6 col-sm-12 col-xs-12"
            >
              <p className={styles["card-text"]}>
                Enjoy a Magazine Subscription!
              </p>
              <Image
                className="img-fluid"
                src={MagazineImage}
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
                  src={SubscribeButton}
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
