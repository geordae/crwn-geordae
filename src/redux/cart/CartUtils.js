//Utility functions allow us to keep our files clean in redux
//and organize functions that we may need in
//multiple files in one location

export const addItemToCart = (cartItems, cartItemToAdd) => {
  //we need to group our cartitem inside of the reudcer
  //see if cart item exits matches the id of the cart item we are trying to add.
  //if it matches it will be added to the const otherwise it will be undefine.

  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  //we need to return a new version of CartItem state so components re render properly.
  //.map will return us a new array
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } // new cartitem object is created and quatity property is added
        : cartItem
    );
  }

  // by default we return and object inside of our array with quantity: 1
  //t

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

//check to see if it there is an existing item
//check to see if quantity is one; otherwise decrase it.

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  //if existing quanity at one remove it, once we click the left arrow
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  //otherwise decrease quantity depending how many items are in cart
  // and return the remaining existing cart items, becuase they dont need to be modifeid.

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
