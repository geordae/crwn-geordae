import React from "react";
import { ReactComponent as ShoppingIcon } from "../../components/assets/shopping-bag.svg";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SelectCartItemsCount } from "../../redux/cart/CartSelectors";
import { toggleCartHidden } from "../../redux/cart/CartActions";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  //calcuate the quantity of each cartItem
  //accumlatedQuantity will start at zero
  itemCount: SelectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
