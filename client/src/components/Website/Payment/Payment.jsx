import { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ElementsConsumer } from "@stripe/react-stripe-js";

const STRIPE_PUBLISHABLE_KEY =
  "pk_test_51OF0wGLz8T2xmaTmlGyyYlzySbUQ8dh3nJbAQGxBYgRlfYResBCMAb7siQdaJ9jWO2OmXXrHFEaQ5uZW6at3zWP100OuLbiZEu";
const clientSecret =
  "sk_test_51OF0wGLz8T2xmaTmWCAba6QFU2beCyjnk9NJoy8sVRcmEy8XdQcSiOArBOredFlXHAay9162zzHSa9BMvO3EK2gs00KuCAJ0yH";
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

function Payment() {
  return (
    <>
      <div className="flex gap-5 p-5 px-16 justify-center items-start">
        <div className="w-1/2">
          <h1 className="text-3xl text-sky-900 font-bold text-start mb-4 cursor-pointer">Information</h1>
        </div>
        <div className="w-1/2 h-full">
        <h1 className="text-3xl text-sky-900 font-bold text-start mb-4 cursor-pointer">Payment</h1>
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise}>
            <ElementsConsumer>
              {({ stripe, elements }) => (
                <CheckoutForm stripe={stripe} elements={elements} />
              )}
            </ElementsConsumer>
          </Elements>
        )}
        </div>
      </div>
    </>
  );
}

export default Payment;
