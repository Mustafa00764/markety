import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const BascetContext = createContext();

const BascetProvider = ({ children }) => {
  let storage = JSON.parse(localStorage.getItem('products')) 
  const [basket, setBasket] = useState(storage || []);
  const [num, setNum] = useState(Number(localStorage.getItem("nums")));
  const [nums, setNums] = useState(0);
  const [prices, setPrices] = useState(Number(localStorage.getItem("prices")));
  const getBasketData = (data) => {
    const isExist = basket.some((item) => item.id === data.id);
    if (!isExist) {
      setBasket([...basket, data]);
    }
    localStorage.setItem(`${data.id}`,1)
  };

  useEffect(()=>{
    localStorage.setItem('products',JSON.stringify(basket))
  },[basket])

  const removeData = (id,pr) => {
    const newData = basket.filter((item) => item.id !== id);
    setBasket(newData);
    setNum(num-Number(localStorage.getItem(`${id}`)))
    if (localStorage.getItem("nums")>1) {
      localStorage.removeItem("nums")
    }
    setPrices(prices-Number(localStorage.getItem(`${id}`))*pr)
    localStorage.setItem("prices",prices-Number(localStorage.getItem(`${id}`))*pr)
    localStorage.setItem("nums",num-Number(localStorage.getItem(`${id}`)))
    
  };

  
  return (
    <BascetContext.Provider value={{setBasket,removeData,num,setNum,setPrices,prices, basket,getBasketData }}>
      {children}
    </BascetContext.Provider>
  );
};

export default BascetProvider;