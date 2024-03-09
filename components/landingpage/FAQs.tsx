import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
const FAQs = () => {
  return (
    <div>
      <div className="bg-white w-4/5 mx-auto">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-12 lg:px-8 lg:py-20">
          <h2 className="text-3xl text-center font-bold leading-10 tracking-tight text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full text-primary-blue"
          >
            <AccordionItem className=" py-2" value="item-1">
              <AccordionTrigger>
                What’s the best thing about Switzerland?
              </AccordionTrigger>
              <AccordionContent className=" text-base font-light">
                I don’t know, but the flag is a big plus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quas cupiditate laboriosam
                fugiat.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className=" py-2" value="item-2">
              <AccordionTrigger>
                How can I contact customer support?
              </AccordionTrigger>
              <AccordionContent className=" text-base font-light">
                You can contact our customer support team via phone, email, or
                live chat.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className=" py-2" value="item-3">
              <AccordionTrigger>
                Is there a warranty on your products/services?
              </AccordionTrigger>
              <AccordionContent className=" text-base font-light">
                Yes, we provide a warranty on all our products/services. Please
                refer to our warranty policy for more details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className=" py-2" value="item-4">
              <AccordionTrigger>
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className=" text-base font-light">
                We accept various payment methods including credit/debit cards,
                PayPal, and bank transfers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className=" py-2" value="item-5">
              <AccordionTrigger>
                Can I cancel or modify my order?
              </AccordionTrigger>
              <AccordionContent className=" text-base font-light">
                Yes, you can cancel or modify your order within a certain time
                frame. Please refer to our cancellation and modification policy
                for more details.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
