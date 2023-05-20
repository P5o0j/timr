// import { loggerMiddleware } from "./middleware/logger";
import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";
import {
  compose,
  legacy_createStore as createStore,
  // applyMiddleware,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";

import { rootSaga } from "./root-saga";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import {
  applyMiddleware,
  // compose,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
// export const store = configureStore({
//   reducer: rootReducer,
//   // middleware: middleWares,     //original way of dealing with middleware
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }).concat(middleWares),
// });
