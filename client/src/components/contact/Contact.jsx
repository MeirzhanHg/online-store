import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__items">
        <div className="contact__info">
          <div className="contact__phone">
            <AiFillPhone className="contact__icon"></AiFillPhone>
            <Link to={"tel:87751863360"} className="contact__link">
              8 775 186 33 60
            </Link>
          </div>
          <div className="contact__mail">
            <AiFillMail className="contact__icon"></AiFillMail>
            <Link to={"mailto:exclusive@gmail.com"} className="contact__link">
              exclusive@gmail.com
            </Link>
          </div>
        </div>
        <div className="contact__map">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d329473.02304849226!2d72.83933108560034!3d49.82351497901099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4243465ad22d0559%3A0xa90b6be0d244d433!2z0JrQsNGA0LDQs9Cw0L3QtNCwIDEwMDAwMA!5e0!3m2!1sru!2skz!4v1688664005481!5m2!1sru!2skz"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;