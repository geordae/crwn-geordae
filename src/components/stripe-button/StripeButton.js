import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Pgog7e0iTvO1rVLYSZE9j8K2004vyxol6s";

  const onToken = token => {
    console.log(token);
    alert("Payment Succesful");
  };

  return (
    <StripeCheckout
      lable="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel={"Pay Now"}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
