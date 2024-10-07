import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {ProductContext} from "../context/ProductContext";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  let searchText = search.slice(3)
  const {searchs,setSearchs} = useContext(ProductContext)
  const [searc,setSearc] = useState(true)
  const [searcc,setSearcc] = useState(localStorage.getItem("search"))

  const handleSearch = (e) => {
    e?.preventDefault();
    let value = e.target.search.value;
    setSearchs(value)
    localStorage.setItem("search",value)
    navigate(`/search?q=${value}`);
    setSearc(true)
  };

  const clear = () => {
    setSearcc("")
    // localStorage.setItem("search","")
    setSearc(false)
  }

  return (
    <div>
      <form onSubmit={handleSearch} className=" flex items-center outline-none ">
      <div className=" mr-8 gap-3 border-2 w-full h-11 flex border-[#fce000] rounded-md items-center">
        <input
          type="text"
          onChange={(e)=>setSearcc(e.target.value)}
          defaultValue={localStorage.getItem("search")}
          value={searcc}
          name="search"
          className="w-full bg-inherit outline-none pl-[16px]"
          placeholder="Искать товары"
        />
        <img src="/close.svg" onClick={()=>clear()} className={searcc==""?"hidden":"cursor-pointer"} alt="" />
        <button onClick={() => navigate(`/search`)} className="px-[16px] font-medium h-full bg-[#fce000]">Найти</button>
      </div>
      </form>
    </div>
  );
};

export default Search;



{/* <div>
<form onSubmit={handleSearch} className=" flex items-center ">
  <div className=" flex w-[344px] h-[40px] items-center border border-[#29333D] rounded-[6px] px-[16px] py-[8px] ">
    <img
      onClick={() => navigate(`/search`)}
      className=" w-[24px] h-[24px] "
      src="/search.svg"
      alt="search"
    />
    <input
      className="bg-inherit w-[261px] outline-none ml-[12px]  "
      type="text"
      onChange={(e)=>setSearchs(e.target.value)}
      defaultValue={searchText}
      placeholder="Поиск"
      name="search"
    />
  </div>
</form>
</div> */}