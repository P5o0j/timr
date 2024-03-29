import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Logo } from "../../assets/topphoto.svg";
// import { UserContext } from "../../contexts/user.context";
// import { CartContext } from "../../contexts/cart.context";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
// import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.style";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  // const { isCartOpen } = useContext(CartContext);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
