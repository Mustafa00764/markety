import axios from "axios";
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

export const LikeContext = createContext(null);
const LikeProvider = ({ children }) => {
  const [itemCounts, setItemCounts] = useState([]);
  const [lik, setLik] = useState();
  const [liked, setLiked] = useState({});
  const [liknum, setLiknum] = useState([]);
  const [hear,setHear] = useState([])
  const [bold,setBold] = useState(false)


  const getLikeData = async() => {
    try {
      const response = await axios.get("https://484c369d8b4fb5dc.mokky.dev/product")
      setHear(response.data)
      // setProduct2(response.data)
      // setProduct2([...product2,...product])
  } catch (error) {
      console.log(error);
  }
  };

  
//   const heart = async (id) => {
//     try {
//         await axios.patch(`https://484c369d8b4fb5dc.mokky.dev/product/${id}`,{
//             ...liked,
//             like:lik,
//         })
        
//         console.log(lik);
//         setLik(!lik)
//     } catch (error) {
//         console.log(error);
//     }
//     setLik(!lik)

// }

  useEffect(()=>{
    getLikeData()
  },[]);

  return (
    <LikeContext.Provider value={{ lik,setLik,itemCounts,setItemCounts,bold,setBold,liknum,setLiknum,hear, liked,getLikeData }}>
      {children}
    </LikeContext.Provider>
  );
};

export default LikeProvider;
