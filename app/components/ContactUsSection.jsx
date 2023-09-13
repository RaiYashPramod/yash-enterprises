import React from "react";
import { ContactContainer, ContactTitle } from "./StylingComponents";

const ContactUsSection = () => {
  return (
    <>
      <ContactContainer>
        <ContactTitle>Contact Us</ContactTitle>
        <form>
          <span>Name</span><input type="text" name="name" /> 
          <span>Email</span><input type="email" name="email" />
          <span>Mobile No.</span><input type="text" name="mobile" />
          <span>Message</span><input type="text" name="message" />
        </form>
      </ContactContainer>
    </>
  );
};

export default ContactUsSection;
