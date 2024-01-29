import React from "react";
import Contacts from "@/components/page-sections/contacts";
import Bounded from "@/components/styledcomps/bounded";
import ContactForm from "@/components/page-sections/contact-form";

export default function Contact() {
  return (
    <>
      <Bounded width="marginxy">
        <div className="grid lg:grid-cols-2 gap-2">
          <div>
            <Contacts />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Bounded>
    </>
  );
}
