import axios from "axios";
import { useEffect, useState } from "react";
import Katalog_card from "./Katalog_card";

const Katalog = () =>{

    const [infor,setInfor] = useState([])
    const [katid,setKatid] = useState(1)
    const [katids,setKatids] = useState(1)


    const getKatalog = async() => {
        try {
            const res = await axios.get("https://b319899317dba86e.mokky.dev/cat")
            setInfor(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    const mouse = (id) => {
        setKatid(id)
        setKatids(id)
    }
    useEffect(()=>{
        getKatalog()
    },[])
    return(
        <div>
            <div className="flex mt-[90px] max-w-[1455px] w-full">
            <div className="flex flex-col pt-[15px]  pl-[11px] pr-[10px]">
               {
                infor.map((v)=>{
                    return(
                        <div onMouseMove={()=>mouse(v.id)} key={v.id} className={katids==v.id?"w-[245px] cursor-pointer pl-[11px] pr-2 items-center justify-between flex h-[36px] rounded-md bg-[#f4f4f4]":"w-[245px] cursor-pointer pl-[11px] pr-2 items-center justify-between flex h-[36px] "}>
                            <div className="flex gap-2 items-center text-[14px] justify-start">
                            <img src={v.img} alt=""  className="w-5 h-5"/>
                            <h2>{v.title}</h2>
                            </div>
                            <img src="arrow-right-gray.svg" className="" alt="" />
                        </div>
                    )
                })
               } 
            </div>
            <div>
                {
                    infor.map((v)=>{
                        if (v.id==katid) {
                            return(
                                <div key={v.id}>
                                    <Katalog_card title={v.title}  info={v.info} info2={v.info2} info3={v.info3} info4={v.info4} info5={v.info5} info6={v.info6} images={v.images}/>
                                </div>
                            )
                        }
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default Katalog