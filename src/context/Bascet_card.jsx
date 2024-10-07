import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { BascetContext } from "../context/BascetContext";
import { Link } from "react-router-dom";
const Bascet_card = ({ img, title, like, id, bas, price, item }) => {
  const [lik,setLik] = useState(!JSON.parse(localStorage.getItem(`like${id}`)))
  const [liks, setLiks] = useState(JSON.parse(localStorage.getItem(`like${id}`)))

  // const {removeData,basket} = useContext(BascetContext)
  // const {itemCounts, setItemCounts} = useContext(BascetContext);
  const [all, setAll] = useState(Number(localStorage.getItem(`${item.id}`)));
  const { basket, removeData, getBasketData, num, setNum, setPrices, prices } = useContext(BascetContext);
  const [product, setProduct] = useState({})
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('products')) || [])


  const getProduct = async () => {
    try {
      const response = await axios.get("https://484c369d8b4fb5dc.mokky.dev/product/"+id)
      setProduct(response.data)
      // setProduct2(response.data)
      // setProduct2([...product2,...product])
    } catch (error) {
      console.log(error);
    }
  }
  const plus = async () => {
    setAll(all + 1)
    localStorage.setItem(`${id}`, all + 1)
    setNum(num + 1)
    localStorage.setItem("nums", num + 1)
    setPrices(prices + price)
    localStorage.setItem("prices", prices + price)
  };

  const minus = async () => {
    if (num > 1 && all > 1) {
      setAll(all - 1)
      localStorage.setItem(`${id}`, all - 1)
      setNum(num - 1)
      localStorage.setItem("nums", num - 1)
      setPrices(prices - price)
      localStorage.setItem("prices", prices - price)
    }
  };


  const heart = async () => {
    try {
        // await axios.patch(`https://484c369d8b4fb5dc.mokky.dev/product/${id}`,{
        //     ...item,
        //     like:!liks
        // })
        localStorage.setItem(`like${id}`,!lik)
        setLik(!lik)
    } catch (error) {
        console.log(error);
    }
}

  const remove = () => {
    removeData(id, price)
    setAll(0)
    localStorage.removeItem(`${id}`)
  }
  
  useEffect(() => {
    getProduct()
    heart()
  }, [])
  // Fetch product data when params.id changes

  return <div className="flex py-[18px] max-w-[762px] w-full h-[156px]">
    <div className="w-[36px] h-full">
      <input type="checkbox" className="w-[24px] h-[24px]" />
    </div>
    <Link to={`/product/${id}`}>
      <div className="w-[120px] h-[120px] bg-[#f8f7f5] rounded-[7px] flex items-center justify-center">
        <img className="w-[104px] object-contain h-[104px]" src={img} alt="" />
      </div>
    </Link>
    <div className="h-[116px] ml-[18px] mr-[40px] mt-[4px] flex flex-col justify-between ">
      <Link to={`/product/${id}`}>

        <div className="max-w-[428px] h-full w-full flex flex-col justify-between ">
          <p className="w-full text-[13px] leading-[15px] font-medium overflow-hidden h-[30px]">{title}</p>
          <p className="text-[13px] text-[#006933]">Яндекс маркет</p>
          <p className="text-[13px] text-[#FA8903]">Скоро закончится</p>
        </div>
      </Link>
      <div className="flex items-center mt-1 gap-5">
        <img className=" cursor-pointer w-[28px] h-[28px]" onClick={() => heart()} src={lik ? "/like_heart_red.svg" : "/like-heart.svg"} alt="" />
        <img className=" cursor-pointer w-[20px] h-[20px]" onClick={() => remove()} src="/x-icon.svg" alt="" />
      </div>
    </div>
    <div className="flex flex-col justify-between">
      <h1 className="text-[20px] font-bold">{price*Number(localStorage.getItem(`${id}`))}<span className="text-[13px]">₽</span></h1>
      <div className="flex items-center justify-between h-8 gap-[20px] w-[120px]  bg-gray-100 px-2 rounded-lg">
        <button className="text-[24px]" onClick={() => minus()}>-</button>
        <p>{Number(localStorage.getItem(`${id}`))}</p>
        <button className="text-[24px]" onClick={() => plus()}>+</button>
      </div>
    </div>
  </div>
};

export default Bascet_card;
