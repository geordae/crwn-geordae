import React from "react";
import "./Checkout.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  SelectCartItems,
  SelectCartTotal
} from "../../redux/cart/CartSelectors";
import CheckoutItem from "../../components/checkout/CheckoutItem";
import StripeButton from "../../components/stripe-button/StripeButton";

const Checkout = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">TOTAL: ${total}</div>
    <div className="test-warning">
    *Please use the folliwng test credit card for payment*
    <br/>
    4242 4242 4242 4242 - Exp: 01/20 CVV: 123
    </div>
    <StripeButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: SelectCartItems,
  total: SelectCartTotal
});

export default connect(mapStateToProps)(Checkout);
