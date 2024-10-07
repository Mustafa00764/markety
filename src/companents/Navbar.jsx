import { Link } from "react-router-dom";
import Search from "../pages/Search";
import { useContext, useEffect, useState } from "react";
import { BascetContext } from "../context/BascetContext";
import { LikeContext } from "../context/LikeContext";
import Katalog from "./Katalog";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const {num} = useContext(BascetContext)
  const {hear,bold,setBold} = useContext(LikeContext)
  const { isAuth,setIsAuth } = useContext(AuthContext);

  return (
    <>
    <div onClick={()=>setBold(!bold)} className={bold?" fixed bg-[rgba(0,0,0,.5)] align-baseline transition-all duration-500 w-full h-screen z-[9994] top-[85px]":"hidden"}></div>
    <div className="flex  w-full justify-center fixed bg-[#fff] z-[999999] py-[20px] items-center ">
      <Link to={"/"}>
      <img src="/yandex-market_logo.png" className="w-[203px] mr-8 h-[32px]" alt="" />
      </Link>
      <div onClick={()=>setBold(!bold)} className="flex cursor-pointer mr-3 px-[14px] items-center font-medium h-[44px] gap-3 bg-[#fce000] rounded-md">
        <img src={bold?"/delete.svg":"/menu-burger.svg"} className=" transition-all duration-1000" alt="" />
        <p>Каталог</p>
      </div>
      <div className="max-w-[672.89px] w-full">
        <Search/>
      </div>
      <div className=" mr-5 text-[#666] text-center flex gap-5 text-[12px]">
          <a target="_blank" rel="noreferrer" href="https://plus.yandex.ru/?utm_source=market&utm_medium=banner&utm_campaign=MSCAMP-77&utm_term=src_market&utm_content=onboarding&message=market">
        <div className=" flex flex-col gap-1 items-center">
          <img src="/yandex-plus.png" className="w-[57.6px]" alt="" />
          <p>Баллы</p>
        </div>
          </a>
        <div className=" flex cursor-pointer flex-col gap-1 items-center">
        <img src="/kub.png" className="w-[24px] h-[24px]" alt="" />
          <p>Заказы</p>
        </div>
        <Link to={"/like"}>
        <div className=" flex cursor-pointer flex-col gap-1 items-center">
        {/* <div className=" relative h-[24px] items-end flex justify-center w-[61px]"> */}
            {/* <div className={hear.length == 0 || hear.length == undefined?"hidden":"rounded-full right-[12px] border-2 flex items-center justify-center top-[-4px] border-white h-[18px] text-[10px] text-white z-20 bg-[red] px-1 absolute"}>
              <p>{hear.length}</p>
            </div> */}
            <img src="/favarit.png" className="w-[28px] h-[24px]" alt="" />
          {/* </div> */}
          <p>Избранное</p>
        </div>
        </Link>
        <Link to={"/bascet"}>
        <div className=" flex cursor-pointer flex-col gap-1 items-center">
          <div className=" relative h-[24px] items-end flex justify-center w-[61px]">
            <div className={num == 0 || num == undefined?"hidden":"rounded-full right-[12px] border-2 flex items-center justify-center top-[-4px] border-white h-[18px] text-[10px] text-white z-20 bg-[red] px-1 absolute"}>
              <p>{num}</p>
            </div>
            <img src="/basket.png" className="w-[28px] h-[24px] absolute " alt="" />
          </div>
          <p>Корзина</p>
        </div>
        </Link>
      </div>
      <button onClick={()=>setIsAuth(false)} className="w-[76.250px] h-[44px] rounded-md bg-[#eee] ">
        <p>Войти</p>
      </button>
    </div>
    <div className={bold?" w-full flex justify-center opacity-1 duration-500 h-[690px] transition-all translate-y-[0] fixed  z-[9999] overflow-x-hidden  bg-white top-0":" opacity-0 duration-500 transition-all translate-y-[-100%] absolute z-[9999] bg-white top-0"}>
    <Katalog/>
    </div>
    </>
  );
};

export default Navbar;
