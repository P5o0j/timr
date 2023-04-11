// import { createContext, useEffect, useReducer, useState } from "react";
// import { createAction } from "../utils/reducer/reducer.utils";

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });

// export const CartProvider = ({ children }) => {
//   // const [isCartOpen, setIsCartOpen] = useState(false);
//   // const [cartItems, setCartItems] = useState([]);
//   // const [cartCount, setCartCount] = useState(0);
//   // const [cartTotal, setCartTotal] = useState(0);

//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const [{ cartCount, cartTotal, cartItems }, dispatch] = useReducer(
//     cartReducer,
//     INITIAL_STATE
//   );
//   //ONE OF THE WAYS TO DEAL WITH THE ITEM COUNT AND ITEM TOTAL
//   // useEffect(() => {
//   //   const newCartCount = cartItems.reduce(
//   //     (total, cartItem) => total + cartItem.quantity,
//   //     0
//   //   );
//   //   setCartCount(newCartCount);
//   // }, [cartItems]);

//   // useEffect(() => {
//   //   const newCartTotal = cartItems.reduce(
//   //     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//   //     0
//   //   );
//   //   setCartTotal(newCartTotal);
//   // }, [cartItems]);

//   const updateCartItemsReducer = (cartItems) => {
//     //dispatch new action with payload
//     const payload = {
//       cartItems,
//       cartCount: newCartCount,
//       cartTotal: newCartTotal,
//     };

//     dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
//   };

//   // const setIsCartOpen = (bool) => {
//   //   dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool });
//   // };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     removeItemToCart,
//     clearItemFromCart,
//     cartItems,
//     cartCount,
//     cartTotal,
//   };
//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
