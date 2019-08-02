import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //grab local storage from windows browser
import userReducer from "./user/UserReducer";
import cartReducer from "./cart/CartReducer";
import shopReducer from "./shop/ShopReducer";
import directoryReducer from "./directory/DirectoryReducer";

//an object that consit of key, stroage, whitelist
//whitelist is consider what reducer we want to store in windows browser
//no need to use userReducer because it deals with firebase.
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
