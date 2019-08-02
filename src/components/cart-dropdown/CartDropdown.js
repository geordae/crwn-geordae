import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { SelectCartItems } from "../../redux/cart/CartSelectors";
import { toggleCartHidden } from "../../redux/cart/CartActions";

import "./CartDropDown.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your Cart is Empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: SelectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
