"use client"
import Image from "next/image";

import MagazineImage from "./images/magazine.jpg";
import FacebookIcon from "./images/Icons/facebook.png";
import InstagramIcon from "./images/Icons/Instagram.png";
import TwitterIcon from "./images/Icons/twitter.png";
import YoutubeIcon from  "./images/Icons/Youtube.png";
import PinterestIcon from "./images/Icons/pinterest.png";
import TikTokIcon from "./images/Icons/tiktok.png";
import SubscribeButton from "./images/Icons/subscribe-button.png";

export default function Footer() {

  return (
    <>
      <div className="b-example-divider"></div>
      <footer className="section-size border-top">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <p className="card-text">
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
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-muted"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-muted"
                  >
                    Meals
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-muted"
                  >
                    Cuisines
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-muted"
                  >
                    Ingedients
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-muted"
                  >
                    Kitchen Tips
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-muted"
                  >
                    News
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-muted"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-muted"
                  >
                    About Us
                  </a>
                </li>
              </ul>
              <br />
              <div className="socials">
                <Image
                  className="img-fluid"
                  src={FacebookIcon}
                  alt="facebook"
                />
                <Image
                  className="img-fluid"
                  src={InstagramIcon}
                  alt="Instagram"
                />
                <Image
                  className="img-fluid"
                  src={TwitterIcon}
                  alt="Instagram"
                />
                <Image
                  className="img-fluid"
                  src={YoutubeIcon}
                  alt="Youtube"
                />
                <Image
                  className="img-fluid"
                  src={PinterestIcon}
                  alt="pinterest"
                />
                <Image
                  className="img-fluid"
                  src={TikTokIcon}
                  alt="tik"
                />
              </div>
            </div>

            {/* <!-- footer: 2nd column --> */}
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-muted card-text"
                  >
                    FAQ
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-muted card-text"
                  >
                    Advertise
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-muted"
                  >
                    Work for us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-muted"
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-muted"
                  >
                    Editorial Process
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-muted"
                  >
                    Anti-Racism Pledge
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-muted"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-muted"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
              <br />
              <div className="subscribe">
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
