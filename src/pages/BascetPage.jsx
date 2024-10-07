import React, { useContext, useEffect, useState } from "react";
import { BascetContext } from "../context/BascetContext";
import { Link } from "react-router-dom";
import Bascet_card from "../context/Bascet_card";
import axios from "axios";

const Bascet = () => {
  const [allPrice, setAllPrice] = useState(0);
  const [frees, setFrees] = useState(["Mustafa","Babur"]);
  const [prod, setProd] = useState([]);
  const [free, setFree] = useState('')
  const [nums, setNums] = useState();  
  const [product, setProduct] = useState([])


  const { basket, removeData,num,setPrices,prices } = useContext(BascetContext);
  const [itemCounts, setItemCounts] = useState({});

  useEffect(() => {
    setItemCounts(
      basket.reduce((counts, item) => ({ ...counts, [item.id]: 1 }), {})
    );
 
  }, [basket]);
  
  const getProduct = async () => {
    try {
        const response = await axios.get("https://484c369d8b4fb5dc.mokky.dev/product")
        setProduct(response.data)
        // setProduct2(response.data)
        // setProduct2([...product2,...product])

    } catch (error) {
        console.log(error);
    }
}


  


  useEffect(() => {
    let son = 0;
    getProduct()
    
  }, []);
  
  const freeProduct = () => {
    frees.map((v) =>{
      if (free == v) {
        return setAllPrice(`Скидка 100% ${" "} 0`)
      }
    })
  }

return (
  <div className="flex my-5 max-w-[1192px] mx-auto  w-full flex-col  ">
    {basket.length== 0 ? (
      <div className="text-center flex-col items-center justify-center mx-auto">          
        <img
        className=" mx-auto"
          src="https://texnomart.uz/_nuxt/img/shopping-card.24c7f25.svg"
          alt=""
        />
        <h1 className=" text-[25px] w-[300px] my-5">
        Сложите в корзину нужные товары
        </h1>
        <a href="/">
          <button className="border-2 border-yellow-500 text-xl px-4 rounded-[5px] mb-5">
            Купить
          </button>
        </a>
      </div>
    ) : (
      <div className=" flex  gap-10 justify-between">
        <div className="flex-col flex h-auto w-[100%] lg:w-[762px]">
          {basket.map((v) => {
              return (
            <div key={v.id}>
              <Bascet_card like={v.like}  id={v.id} bas={v.bas} price={v.price} title={v.title} item={v} img={v.img2} />
            </div>
              )
            
          })}
        </div>
        <div className="flex-col w-[100%] pt-[18px] xl:w-[400px]">
          
          
            <button className="bg-[#fce000] font-medium w-full max-w-[390px] h-[56px]   rounded-[12px]">
            Перейти к оформлению
            </button>
          
          <div className="bg-[#f8f7f5] flex flex-col justify-between p-4 max-w-[390px] w-full h-[149px] rounded-[20px] mt-[50px]">
            <div className="w-full flex text-[13px] border-b pb-[2px] font-medium items-center justify-between">
              <p>Всего: <span>{num}</span> {num>1?"товара":"товар"} </p>
              <p>{prices}₽</p>
            </div>
            <div className="flex justify-between pl-2 mt-2 text-[13px] items-center border-2 border-gray-300 rounded-xl">
              <input type="text" onChange={(e)=>setFree(e.target.value)} className="outline-none bg-inherit" placeholder="Промокод"/>
              <div className="w-[103px] p-1 h-[36px]">
              <button onClick={()=>freeProduct()} className="bg-black w-full text-[13px] h-full rounded-md text-white">Применить</button>
              </div>
            </div>
            <div className="w-full flex items-center mt-3 h-[36px] justify-between">
            <p className="text-[20px] font-medium">
            Итого:
            </p>
            <h1 className="text-[28px] font-bold">{prices}<span className="text-[20px] font-medium">₽</span></h1>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);
};

export default Bascet;