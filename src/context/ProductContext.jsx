import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null);

const ProductProvider = ({children}) => {
  const [products,setProducts] = useState([])
  const [searchs,setSearchs] = useState("")
  
  const getData = async ()=>{
    try {
      const response = await axios.get("https://484c369d8b4fb5dc.mokky.dev/product")
      setProducts(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  const onSearch = (text) =>{
    const newData = products.some((value) => value.text !== text);
    setProducts(newData)
  };

  useEffect(()=>{
    getData();
  },[])
  return (
    <ProductContext.Provider value={{ products,searchs,setSearchs,onSearch }}>
      {children}
    </ProductContext.Provider>
  );

}

export default ProductProvider