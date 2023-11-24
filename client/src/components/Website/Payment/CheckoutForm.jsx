import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import Swal from 'sweetalert2';
import { CardElement } from "@stripe/react-stripe-js";
import CardSection from "./CardSection"

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  // const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { stripe, elements } = this.props;
  if (!stripe || !elements) {
    return;
  }

  // const handlePayment =()=>{}
  const card = elements.getElement(CardElement);
  const result = await stripe.createToken(card);
    if (result.error) {
      if (result.error.type === "card_error" || result.error.type === "validation_error") {
        setMessage(result.error.message);
      } else {
        setMessage("An unexpected error occured.");
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: result.error.message,
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'bg-sky-900 hover:bg-white text-white hover:text-sky-900 border border-sky-900 py-2 px-4 rounded',
        }
      });
    } else {
      Swal.fire({
        title: 'Payment Successful!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'bg-sky-900 hover:bg-white text-white hover:text-sky-900 border border-sky-900 py-2 px-4 rounded',
        }
      });
    }

  };

  return (
    <div>
      <form className="flex flex-col gap-3 border border-sky-700 p-5 bg-gray-200" onSubmit={handleSubmit}>
        <div className="p-5">
        <CardSection />
        </div>
        <button className="btn-pay py-2 px-4 w-1/3 text-md text-white hover:text-sky-900 bg-sky-900 border-2 hover:bg-white border-sky-900 rounded-2xl"
        >Buy Now</button>
      </form>
    </div>
  );
}


// class CheckoutForm extends React.Component {
//   handleSubmit = async event => {
//     event.preventDefault();

//     // handle payment request
//   };

//   render() {
//     return (
//       <div>
//         <div class="product-info">
//           <h3 className="product-title">Apple MacBook Pro</h3>
//           <h4 className="product-price">$999</h4>
//         </div>
//         <form onSubmit={this.handleSubmit}>
//           <CardSection />
//           <button className="btn-pay">Buy Now</button>
//         </form>
//       </div>
//     );
//   }
// }