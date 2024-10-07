import React, { useContext, useEffect, useState } from "react";
import { LikeContext } from "./LikeContext";
import { Link } from "react-router-dom";
import Product_Big_card from '../cards/Product_Big_card';
import axios from "axios";

const Like_page = () => {
  const {liknum,setLiknum,getLikeData,hear} = useContext(LikeContext)
  const [number,setNumber] = useState(0)
  let num = 0
  const getProduct = async () => {
    // try {
    //     const response = await axios.get("https://484c369d8b4fb5dc.mokky.dev/product")
    //     setHear(response.data)
    //     // setProduct2(response.data)
    //     // setProduct2([...product2,...product])
    // } catch (error) {
    //     console.log(error);
    // }
}



useEffect(()=>{
  getLikeData()
},[])

  return <div>
    <h1 className="text-[28px] font-medium">Избранное</h1>
    <div className="grid grid-cols-5">
      {
        hear.map((v)=>{
          if(JSON.parse(localStorage.getItem(`like${v.id}`))){
            return(
                <div key={v.id}>
                  <Product_Big_card v={v} like={v.like} img2={v.img2} id={v.id} img1={v.img1} img3={v.img3} img4={v.img4} price={v.price} title={v.title} />
                </div>
            )
          }
        })
      }
    </div>
  </div>;
};

export default Like_page;
