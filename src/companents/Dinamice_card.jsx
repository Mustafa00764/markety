import { FreeMode, EffectFade, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BascetContext } from "../context/BascetContext";
import { LikeContext } from "../context/LikeContext";


// Import Swiper styles (make sure these paths are correct)
// Import the Swiper styles in your main CSS file or here

const Dinamice_card = () => {
  const params = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [visiblete, setVisiblete] = useState(false);
  const {getBasketData,setNum,removeData,num,setPrices,prices} =useContext(BascetContext)
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // Initialize with null
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(5);
  const {getLikeData,liked,setLiked} = useContext(LikeContext)
  const [lik, setLik] = useState();
  const [bas, setBas] = useState(0);
  const [liks, setLiks] = useState()
  const [price, setPrice] = useState(0);
  const [all, setAll] = useState(Number(localStorage.getItem(`${params.id}`)));





  // Fetch product data
  
  const getProduct = async () => {
    try {
      const response = await axios.get(
        `https://484c369d8b4fb5dc.mokky.dev/product/${params.id}`
      );
      setProductInfo(response.data);
      setBas(response.data.bas)
    } catch (error) {
      console.log(error);
    }
   
  };

  const visible = () =>{
    setVisiblete(true)
  }
  const invise = ()=> {
    setVisiblete(false)
  }
  const remove = () => {
    removeData(productInfo.id,price)
    setAll(0)
    localStorage.removeItem(`${productInfo.id}`)
  }

const plus =  async () => {
    setAll(all+1)
    localStorage.setItem(`${productInfo.id}`,all+1)
    setNum(num+1)
    localStorage.setItem("nums",num+1)
    setPrices(prices+productInfo.price)
    localStorage.setItem("prices",prices+productInfo.price)
    };

const minus = async () => {
    if(num>1 && all>1){
     setAll(all-1)
     localStorage.setItem(`${productInfo.id}`,all-1)
     setNum(num-1)
     localStorage.setItem("nums",num-1)
     setPrices(prices-productInfo.price)
     localStorage.setItem("prices",prices-productInfo.price)
    }
    if (all == 1 ) {
      remove()
      setPrices(prices-productInfo.price)
      localStorage.setItem("prices",prices-productInfo.price)
    }
   };
  const heart = async () => {
    try {
        // await axios.patch(`https://484c369d8b4fb5dc.mokky.dev/product/${params.id}`,{
        //     ...productInfo,
        //     like:!lik,
        // })
        localStorage.setItem(`like${productInfo.id}`,!lik)
        setLik(!lik)
    } catch (error) {
        console.log(error);
    }
    

  }
  const ggg = () => {
    gg()
    plus()
  }

const gg = ()=> {
  getBasketData(productInfo)
}

// const getBas = async() => {
//     await axios.patch(`https://484c369d8b4fb5dc.mokky.dev/product/${params.id}`,{
//         ...productInfo,
//         bas:bas+1,
//     })
//     setBas(bas+1)
// }
  useEffect(() => {
    getProduct()
    setLik(JSON.parse(localStorage.getItem(`like${params.id}`)))
  }, [params.id]);
  

  // Fetch product data when params.id changes
  

  return (
    <div className={visiblete?" z-[999999] ":" relative"}>
      <div onClick={()=>invise()} className={visiblete?"  top-[-1px]  z-[9999991] transition-all duration-500 left-0 fixed w-full h-full bg-[rgba(0,0,0,.5)]":"top-[-1px] z-[-100] transition-all duration-500 left-0 fixed w-full h-full bg-[rgba(0,0,0,0)]"}></div>
        <div className={visiblete?"max-w-[700px] p-6 transition-all w-full  translate-x-0 top-[-1px] z-[9999992] duration-500 h-full bg-[#fff] rounded-l-[20px] fixed right-0":"max-w-[700px] duration-500 p-6 w-full translate-x-[100%] top-[-1px] z-[1005] h-full bg-[#fff] rounded-l-[20px] transition-all fixed right-0"}>
          <div className="overflow-x-hidden w-full absolute h-full pr-12 pb-[144px]">
          <div>
            <h1 className="text-[22px] font-medium">О товаре</h1>
            <p className="text-[14px] mt-4 leading-[22px]">{productInfo.opisanie == "" ?"У этого товара нет описания":productInfo.opisanie}</p>
          </div>
          <div>
            <h1 className="text-[17px] mb-2 mt-7 font-medium">Общие характеристики</h1>
            <div className="flex flex-col gap-1">
            <div className={productInfo.lineyka == "" || productInfo.lineyka == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Линейка</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 "  id="invis">
                  {productInfo.lineyka} 
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.tip == "" || productInfo.tip == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Тип</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 " id="invis">
                  {productInfo.tip} 
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.os == "" || productInfo.os == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Операционная система</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 " id="invis">
                  {productInfo.os} 
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.prothessor == "" || productInfo.prothessor == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Процессор</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 " id="invis">
                  {productInfo.prothessor} 
                </p>
              </div>
              <div className=" 2xl:bg-purple absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.chastota_prothessora == "" || productInfo.chastota_prothessora == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Частота процессора</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 " id="invis">
                  {productInfo.chastota_prothessora} 
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.yader_prothessor == "" || productInfo.yader_prothessor == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Количество ядер процессора</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 " id="invis">
                  {productInfo.yader_prothessor} 
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.operativnaya_pamyat == "" || productInfo.operativnaya_pamyat == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Оперативная память</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 " id="invis">
                  {productInfo.operativnaya_pamyat} ГБ
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.tip_pamyat == "" || productInfo.tip_pamyat == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Тип памяти</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 " id="invis">
                  {productInfo.tip_pamyat}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.chastota_pamyat == "" || productInfo.chastota_pamyat == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Частота памяти</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 " id="invis">
                  {productInfo.chastota_pamyat}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.dioganal_ekrana == "" || productInfo.dioganal_ekrana == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Диагональ экрана</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 " id="invis">
                  {productInfo.dioganal_ekrana}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.razreshenie_ekrana == "" || productInfo.razreshenie_ekrana == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Разрешение экрана</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 " id="invis">
                  {productInfo.razreshenie_ekrana}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.chastota_obnavleniya == "" || productInfo.chastota_obnavleniya == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Частота обновления экрана</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 " id="invis">
                  {productInfo.chastota_obnavleniya} Гц
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.tip_pokritiya_matrithi == "" || productInfo.tip_pokritiya_matrithi == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Тип покрытия экрана</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 " id="invis">
                  {productInfo.tip_pokritiya_matrithi}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.tip_matrithi == "" || productInfo.tip_matrithi == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Тип матрицы экрана</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 " id="invis">
                  {productInfo.tip_matrithi}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.bethprovodnov_interfeys == "" || productInfo.bethprovodnov_interfeys == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Беспроводные интерфейсы</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 " id="invis">
                  {productInfo.bethprovodnov_interfeys}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.standart_wifi == "" || productInfo.standart_wifi == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Стандарт Wi-Fi 802.11</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 " id="invis">
                  {productInfo.standart_wifi}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.versiya_bluetooth == "" || productInfo.versiya_bluetooth == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Версия Bluetooth</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 " id="invis">
                  {productInfo.versiya_bluetooth}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.interfeyths == "" || productInfo.interfeyths == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Интерфейсы</p>
                <p className=" bg-white z-10 max-w-[373px] inline-block text-right pl-1 ">
                  {productInfo.interfeyths}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className="flex gap-1 relative text-[#000] text-[13px] " id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Функция USB Type-C</p>
                <p className=" bg-white z-10 max-w-[373px] inline-block text-right pl-1 ">
                Thunderbolt 4
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.videokarta == "" || productInfo.videokarta == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Видеокарта</p>
                <p className=" bg-white z-10 max-w-[373px] inline-block text-right pl-1 ">
                {productInfo.videokarta}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.tip_videokarta == "" || productInfo.tip_videokarta == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Тип видеокарты</p>
                <p className=" bg-white z-10 max-w-[373px] inline-block text-right pl-1 ">
                {productInfo.tip_videokarta}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.obyom_videopamyati == "" || productInfo.obyom_videopamyati == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Объем видеопамяти</p>
                <p className=" bg-white z-10 max-w-[373px] inline-block text-right pl-1 ">
                {productInfo.obyom_videopamyati}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.tip_videopamyati == "" || productInfo.tip_videopamyati == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Тип видеопамяти</p>
                <p className=" bg-white z-10 max-w-[373px] inline-block text-right pl-1 ">
                {productInfo.tip_videopamyati}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.ssd == "" || productInfo.ssd == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Общий объем накопителей SSD</p>
                <p className=" bg-white z-10 max-w-[373px] inline-block text-right pl-1 ">
                {productInfo.ssd}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.emkost_akuma == "" || productInfo.emkost_akuma == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Емкость аккумулятора (Вт·ч)</p>
                <p className=" bg-white z-10 max-w-[373px] inline-block text-right pl-1 ">
                {productInfo.emkost_akuma} Вт·ч
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.podstvetka_klaviature == "" || productInfo.podstvetka_klaviature == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Подсветка клавиатуры</p>
                <p className=" bg-white z-10 max-w-[373px] inline-block text-right pl-1 ">
                {productInfo.podstvetka_klaviature}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.raskladka_klaviature == "" || productInfo.raskladka_klaviature == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Раскладка клавиатуры</p>
                <p className=" bg-white z-10 max-w-[373px] inline-block text-right pl-1 ">
                {productInfo.raskladka_klaviature}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.ustroystva_posithionirovaniya == "" || productInfo.ustroystva_posithionirovaniya == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Устройства позиционирования</p>
                <p className=" bg-white z-10 max-w-[373px] inline-block text-right pl-1 ">
                {productInfo.ustroystva_posithionirovaniya}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.ves == "" || productInfo.ves == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "} id="invisibles">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Вес</p>
                <p className=" bg-white z-10 max-w-[373px] inline-block text-right pl-1 ">
                {productInfo.ves} {params.id>4 && params.id<11? "г" : "кг"}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            </div>
            
          </div>
          <div>
          <h1 className="text-[17px] mb-2 mt-4 font-medium">Дополнительно</h1>
          <div className={productInfo.garantiya == "" || productInfo.garantiya == undefined?"hidden":"flex gap-1 relative text-[#000] text-[13px] "}>
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Гарантийный срок</p>
                <p className=" bg-white z-10 max-w-[373px] inline-block text-right pl-1 ">
                {productInfo.garantiya}
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
          </div>
          </div>
          
          <div className=" fixed bottom-[-1px] ml-[-24px] shadow-2xl z-[999999999] w-full  ">
          <div className="flex  items-center w-full justify-between bg-white px-6 h-[104px]">
            <div>
              <div>
              <div className="text-[11px] gap-1 flex items-center text-[#006933]">
              С картой 
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBzDWj0w4c9QZ6m9lWuPSf_5PuqO5647VUw&s"
                className="w-[10px] h-[10px]"
                alt=""
              />
               Пэй
            </div>
              </div>
              <div className="flex items-end h-[31px] gap-1">
              <h2 className="text-[#006933] text-[28px] h-[36.5px] font-bold">
                {productInfo.price}
                <span className="text-[13px]">₽</span>
              </h2>
              <p className=" text-[#8a8784] text-[13px]">
               / без:{Math.round(productInfo.price * 1.015)}₽{" "}
                <span className="line-through">
                  {Math.round(productInfo.price * 1.26)}
                </span>
                ₽
              </p>
              </div>
            </div>
            <div className="w-[324px] flex justify-end">
              <div onClick={() => ggg()}>
              <button  className={all==0?"w-[308px] h-[56px] bg-[#fce000] rounded-[12px] font-medium":"hidden w-[308px] h-[56px] bg-[#fce000] rounded-[12px] font-medium"}>Добавить в корзину</button>
              </div>
              <div className={all>0?"flex w-full items-center gap-[6px]":"hidden w-[151px] items-center gap-[6px]"}>
                <div className="flex items-center justify-between h-14 gap-[20px] w-[151px] bg-gray-100 px-2 rounded-lg">
                    <button className="text-[30px]" onClick={() => minus()}>-</button>
                    <p>{Number(localStorage.getItem(`${params.id}`))}</p>
                    <button className="text-[30px]" onClick={() => plus()}>+</button>
                </div>
                <Link to={"/bascet"}>
                <button className="w-[151px] h-[56px] flex items-center justify-center gap-2 rounded-[12px] font-medium bg-[#fce000]">
                  <img src="/right.svg" alt="" />
                  Корзина
                  </button>
                </Link>
                </div>
            </div>
          </div>
          </div>
        </div>
      {/* Action buttons */}
      <div className="w-full flex justify-end">
        <div></div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/compare.png"
              className="w-[17px] h-[17px]"
              alt="compare"
            />
            <p>Сравнить</p>
          </div>
          <div className="flex items-center gap-2">
            {/* <img src="/like.svg" className="w-[17px] h-[17px]" alt="like" /> */}
            <img onClick={()=>heart()}  src={lik?"/like_heart_red.svg":"/like-heart.svg"} className=' cursor-pointer w-[17px] h-[17px]' alt="" />
            <p>В избранное</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/share.png" className="w-[19px] h-[19px]" alt="share" />
            <p>Поделиться</p>
          </div>
        </div>
      </div>

      {/* Swiper component */}
      <div className="w-full flex mt-[18px] gap-6">
        <div className="max-w-[648px] w-full flex flex-row-reverse h-[457px]">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            loop={Infinity}
            navigation={true}
            effect={"fade"}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, EffectFade, Navigation, Thumbs]}
            className="max-w-[555px] din_swiper w-full h-auto"
          >
            {productInfo.img1 && (
              <SwiperSlide>
                <img
                  src={productInfo.img1}
                  className="w-full object-contain h-full bg-white"
                  alt="product1"
                />
              </SwiperSlide>
            )}
            {productInfo.img2 && (
              <SwiperSlide>
                <img
                  src={productInfo.img2}
                  className="w-full h-full object-contain bg-white"
                  alt="product2"
                />
              </SwiperSlide>
            )}
            {productInfo.img3 && (
              <SwiperSlide>
                <img
                  src={productInfo.img3}
                  className="w-full object-contain h-full bg-white"
                  alt="product3"
                />
              </SwiperSlide>
            )}
            {productInfo.img4 && (
              <SwiperSlide>
                <img
                  src={productInfo.img4}
                  className="w-full object-contain h-full bg-white"
                  alt="product4"
                />
              </SwiperSlide>
            )}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={0}
            slidesPerView={4}
            freeMode={true}
            direction={"vertical"}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="flex w-[85px] h-[419px] flex-col"
          >
            {productInfo.img1 && (
              <SwiperSlide>
                <div style={{backgroundImage:`url('${productInfo.img1}')`}} className="w-[85px] flex items-center bg-center bg-no-repeat bg-contain h-[85px] border-2 overflow-hidden hover:border-black border-white rounded-[10px]">
                  
                </div>
              </SwiperSlide>
            )}
            {productInfo.img2 && (
              <SwiperSlide>
                <div style={{backgroundImage:`url('${productInfo.img2}')`}} className="w-[85px] flex bg-center bg-no-repeat bg-contain items-center justify-center h-[85px] border-2 overflow-hidden hover:border-black border-white rounded-[10px]">
                 
                </div>
              </SwiperSlide>
            )}
            {productInfo.img3 && (
              <SwiperSlide>
                <div style={{backgroundImage:`url('${productInfo.img3}')`}} className="w-[85px] bg-center bg-no-repeat bg-contain flex items-center h-[85px] border-2 overflow-hidden hover:border-black border-white rounded-[10px]">
                  
                </div>
              </SwiperSlide>
            )}
            {productInfo.img4 && (
              <SwiperSlide>
                <div style={{backgroundImage:`url('${productInfo.img4}')`}} className="w-[85px] flex bg-center bg-no-repeat bg-contain items-center h-[85px] border-2 overflow-hidden hover:border-black border-white rounded-[10px]">
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
        <div className="w-[400px]">
          <h1 className="text-[21px] font-medium leading-[26px]">
            {productInfo.title}
          </h1>
          <div className="btt flex mt-[12px] items-center ">
            <p className="mr-[5px] text-[14px] font-bold">{productInfo.star}</p>
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= (hover || rating) ? "on" : "off"}
                  onClick={() => setRating(index)}
                  //   onMouseEnter={() => setHover(index)}
                  //   onMouseLeave={() => setHover(rating)}
                >
                  <span className="star fs-2">&#9733;</span>
                </button>
              );
            })}
          </div>
          <div className="w-full mt-[24px]">
            {productInfo.opisanie !== "" ? (
              <div>
                <h3 className="text-[14px] font-medium">Описание</h3>
                <p className="text-[13px] w-full h-[56px] mt-1 overflow-hidden">
                  {productInfo.opisanie}
                </p>
              </div>
            ) : (
              ""
            )}

            <p onClick={()=>visible()} className="text-[#2b2bbd] cursor-pointer hover:text-[#9e3232] text-[13px] mt-3">
              Читать далее
            </p>
          </div>
          <div className="mt-[16px] flex flex-col gap-1">
            <h3 className="text-[14px] font-medium">Коротко о товаре</h3>
            <div className="flex gap-1 relative text-[#8a8784] text-[13px]">
              <div className="w-full relative  h-auto flex justify-between">
                <p className="bg-white z-10 pr-1">Экран</p>
                <p className=" bg-white z-10 max-w-[240px] inline-block text-right pl-1 " id="invis">
                  {productInfo.dioganal_ekrana}"  
                  {productInfo.razreshenie_ekrana} {productInfo.tip_matrithi},{" "}
                  {productInfo.chastota_obnavleniya}Гц
                </p>
              </div>
              <div className=" absolute w-full h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className="flex gap-1 relative text-[#8a8784] text-[13px]">
              <div className="w-full relative flex justify-between">
                <p className="bg-white z-10 pr-1">Процессор</p>
                <p className=" bg-white z-10 text-right inline-block max-w-[240px] pl-1">
                  {productInfo.prothessor}
                </p>
              </div>
              <div className=" w-full absolute h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className="flex gap-1 relative text-[#8a8784] text-[13px]">
              <div className="w-full relative flex justify-between">
                <p className="bg-white z-10 pr-1">Память</p>
                <p className=" bg-white z-10 text-right inline-block max-w-[240px] pl-1">
                  оперативная {productInfo.operativnaya_pamyat} ГБ, SSD{" "}
                  {productInfo.ssd}
                </p>
              </div>
              <div className=" w-full absolute h-[15px] border-b-2 border-dotted"></div>
            </div>
            <div className={productInfo.videokarta == "" || productInfo.videokarta == undefined?"hidden":"flex gap-1 relative text-[#8a8784] text-[13px] "}>
              <div className="w-full relative flex justify-between">
                <p className="bg-white z-10 pr-1">Видеокарта</p>
                <p className=" bg-white z-10 text-right inline-block max-w-[240px] pl-1">
                  {productInfo.videokarta}
                </p>
              </div>
              <div className=" w-full absolute h-[15px] border-b-2 border-dotted"></div>
            </div>
            <p onClick={()=>visible()} className=" text-[#2b2bbd] cursor-pointer hover:text-[#9e3232] text-[13px] mt-1" type="button" >
              Все характеристики
            </p>
          </div>
          <div className="">
            <p className="text-[#2b2bbd] cursor-pointer hover:text-[#9e3232] text-[13px] mt-3">
              Все товары{" "}
              <span className=" font-bold">{productInfo.logo_title}</span>
            </p>
            <img src={productInfo.logo_image} className="mt-1" alt="" />
          </div>
        </div>
        <div className="w-[344px]">
          <div className="w-full h-[252.5px] bg-[#f8f7f5] rounded-[20px] px-[18px] py-[16px]">
            <div className="text-[11px] gap-1 flex items-center text-[#006933]">
              С картой 
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBzDWj0w4c9QZ6m9lWuPSf_5PuqO5647VUw&s"
                className="w-[10px] h-[10px]"
                alt=""
              />
               Пэй
            </div>
            <div>
              <h2 className="text-[#006933] text-[28px] font-bold">
                {productInfo.price}
                <span className="text-[13px]">₽</span>
              </h2>
              <p className=" text-[#8a8784] text-[13px]">
                без:{Math.round(productInfo.price * 1.015)}₽{" "}
                <span className="line-through">
                  {Math.round(productInfo.price * 1.26)}
                </span>
                ₽
              </p>
              <p className="text-[black] text-[13px] mt-[9px] font-bold">
                По клику 4 июля
                <span className="text-[#8a8784] font-normal">
                  , курьер Маркета •
                </span>{" "}
                0 ₽
              </p>
              <p className="text-[black] text-[13px] font-bold">
                4 июля
                <span className="text-[#8a8784] font-normal">
                  , в пункт выдачи •
                </span>{" "}
                0 ₽
              </p>
              <div className="text-[13px] flex mt-[9px] items-center gap-1">
                <img
                  className="w-[14px] h-[14px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowioCtXqlLVbcQoZtXaPOiHFzWA4MuBdN2w&s"
                  alt=""
                />
                <p>Fernando Digital Shop</p>
                <div>
                  {[...Array(1)].map((star, index) => {
                    index += 1;
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        //   onMouseEnter={() => setHover(index)}
                        //   onMouseLeave={() => setHover(rating)}
                      >
                        <span className="star fs-2">&#9733;</span>
                      </button>
                    );
                  })}
                  {productInfo.star}/5
                </div>
              </div>
              <div className="mt-[12px]">
                <div className={all == 0?"flex items-center gap-[6px]":"hidden items-center gap-[6px]"}>
                <button className="w-[151px] h-[56px] rounded-[12px] font-medium bg-[#e8e8e8]">Купить сейчас</button>
                <button onClick={() => ggg()} className="w-[151px] h-[56px] rounded-[12px] font-medium bg-[#fce000]">В корзину</button>
                </div>
                <div className={all>0?"flex items-center gap-[6px]":"hidden items-center gap-[6px]"}>
                <div className="flex items-center justify-between h-14 gap-[20px] w-full bg-gray-100 px-2 rounded-lg">
                    <button className="text-[30px]" onClick={() => minus()}>-</button>
                    <p>{Number(localStorage.getItem(`${params.id}`))}</p>
                    <button className="text-[30px]" onClick={() => plus()}>+</button>
                </div>
                <Link to={"/bascet"}>
                <button className="w-[151px] h-[56px] flex items-center justify-center gap-2 rounded-[12px] font-medium bg-[#fce000]">
                  <img src="/right.svg" alt="" />
                  Корзина
                  </button>
                </Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Dinamice_card;
