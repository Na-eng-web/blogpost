import { createContext, useContext, useState } from "react";
import Fetch from "./fetching/fetch";

const Cart = createContext();

export const UseCart = () => useContext(Cart);

const Wrapper = ({ children }) => {
  let data = Fetch();
  const [item, setItem] = useState("");
  const [itemnumber, setItemnumber] = useState(0);
  const [comment, setComment] = useState([]);

  return (
    <Cart.Provider
      value={{
        itemnumber,
        setItemnumber,
        item,
        setItem,
        data,
        comment,
        setComment,
      }}
    >
      {children}
    </Cart.Provider>
  );
};
export default Wrapper;
