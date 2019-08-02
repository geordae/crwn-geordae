import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"; //allows our browser to cache our store
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//for local storage
export const persistor = persistStore(store);

export default { store, persistor };
