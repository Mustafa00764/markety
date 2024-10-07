import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useContext, useEffect, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BascetContext } from '../context/BascetContext';
import { LikeContext } from '../context/LikeContext';


const Product_Big_card = ({v,like,img2,id,img1,img3,img4,price,title}) => {
    const [lik,setLik] = useState(JSON.parse(localStorage.getItem(`like${id}`)))
  const [liks, setLiks] = useState()
    const { basket,removeData,getBasketData,num,setNum,setPrices,prices } = useContext(BascetContext);
    const {liknum,setLiknum} = useContext(LikeContext)
    const [all, setAll] = useState(Number(localStorage.getItem(`${id}`)));

    const image = [
        {
            id:1,
            img:img1,
        },
        {
            id:2,
            img:img2,
        },
        {
            id:3,
            img:img3,
        },
        {
            id:4,
            img:img4,
        }
    ]
    const remove = () => {
        removeData(id,price)
        setAll(0)
        localStorage.removeItem(`${id}`)
      }

    const plus =  async () => {
        setAll(all+1)
        localStorage.setItem(`${id}`,all+1)
        setNum(num+1)
        localStorage.setItem("nums",num+1)
        setPrices(prices+price)
        localStorage.setItem("prices",prices+price)
        };

    const minus = async () => {
        if(num>1 && all>1){
         setAll(all-1)
         localStorage.setItem(`${id}`,all-1)
         setNum(num-1)
         localStorage.setItem("nums",num-1)
         setPrices(prices-price)
         localStorage.setItem("prices",prices-price)
        }
        if (all == 1 ) {
            remove()
        }
       };
       
    const heart = async () => {
        try {
            // await axios.patch(`https://484c369d8b4fb5dc.mokky.dev/product/${id}`,{
            //     ...v,
            //     like:lik
            // })
            setLik(!lik)
            localStorage.setItem(`like${id}`,lik)
        } catch (error) {
            console.log(error);
        }
    
    
}

const products = () => {
    getBasketData(v)
    setAll(1)
    setPrices(prices+price)
    localStorage.setItem(`${id}`,1)
    setNum(num+1)
    localStorage.setItem("nums",num+1)
    localStorage.setItem("prices",prices+price)
}

useEffect(()=>{
    if(id){
        heart()
    }
},[id])
    return(
        <div className='max-w-[281.33px] h-[460.34px] p-2 flex flex-col'>
            <div className=' relative'> 
            <Link to={`/product/${id}`} >
               <div className='bg-[#fff]' >
               <Swiper
      // install Swiper modules
                    modules={[Navigation, EffectFade, Pagination, Scrollbar, A11y]}
                    loop={Infinity}
                    spaceBetween={5}
                    slidesPerView={1}
                    pagination={{ dynamicBullets: true, }}
                    effect={'fade'}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='flex justify-end'
                >

                    {
                        image.map((v)=>(
                            <SwiperSlide key={v.id} className='flex relative justify-center items-center'>
                                <div style={{backgroundImage:`url(${v.img})`}} className={`bg-[#fff] bg-no-repeat bg-center bg-contain overflow-hidden rounded-[12px] border-4 border-[#f8f7f5] w-[265.3px] h-[265.3px]`}></div>
                            </SwiperSlide>
                        ))
                    }
                    
                </Swiper>
               </div>
               </Link>
               <img onClick={() => heart()} src={!lik?"/like_heart_red.svg":"/like-heart.svg"} className=' cursor-pointer w-[25px] h-[23px] absolute right-3 top-2 z-[400]' alt="" />
            </div>
            <Link to={`/product/${id}`} >
            <div className='w-full flex flex-col h-[130px] px-[18px]'>
            <p className=' mt-[10px] h-[57px] overflow-hidden leading-[19px]'>{title}</p>
            <div className=' w-full flex flex-col'>
            <div className="text-[11px] mt-[12px] gap-1  flex items-center text-[#006933]">
              С картой 
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBzDWj0w4c9QZ6m9lWuPSf_5PuqO5647VUw&s"
                className="w-[10px] h-[10px]"
                alt=""
                />
               Пэй
            </div>
            <h2 className='  text-[21px]  font-bold text-[#006933]'>{price}<span className='text-[13px]'>₽</span>  <span className='text-[13px] text-[#8a8784] line-through'>{Math.round(price+(price/100*4))}</span><span className='text-[13px] text-[#8a8784]'>₽</span></h2>
            </div>
            </div>
            </Link>
            <div>
                <div className={all > 0 ?"flex items-center mt-[16px] justify-between h-8 gap-[20px] w-full bg-gray-100 px-2 rounded-lg":"hidden"}>
                    <button className="text-[24px]" onClick={() => minus()}>-</button>
                    <p>{Number(localStorage.getItem(`${id}`))}</p>
                    <button className="text-[24px]" onClick={() => plus()}>+</button>
                </div>
                <div onClick={()=>products()} className={all == 0 ?"block":"hidden"}>
                    <button className='w-full mt-[16px] bg-[#fce000] h-[32px] rounded-[7px] text-[13px]'>В корзину</button>
                </div>
            </div>
        </div>
        
    )
}

export default Product_Big_card

