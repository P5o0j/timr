import { createContext, useReducer } from "react";

//actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//provider
// export const UserProvider = ({ children }) => {
//   //const [currentUser, setCurrentUser] = useState(null);
//   const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

//   const value = { currentUser, setCurrentUser };

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
