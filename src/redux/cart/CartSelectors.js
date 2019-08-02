import { createSelector } from "reselect";

const selectCart = state => state.cart; //takes a slice of state from our root reducer

export const SelectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const SelectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

//add quanity of itmes in checkout

export const SelectCartItemsCount = createSelector(
  [SelectCartItems],

  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItems) =>
        accumulatedQuantity + cartItems.quantity,
      0
    )
);

//add total  of items

export const SelectCartTotal = createSelector(
  [SelectCartItems],

  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItems) =>
        accumulatedQuantity + cartItems.quantity * cartItems.price,
      0
    )
);
