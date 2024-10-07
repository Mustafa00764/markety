import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { LikeContext } from './context/LikeContext';
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
const Product_card = ({img1, img2, img3, like,id, v, img4, title, price}) => {
    const [lik,setLik] = useState(!JSON.parse(localStorage.getItem(`like${id}`)))
    const {liknum,setLiknum} = useContext(LikeContext)
    
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
    const heart = async () => {
            try {
                // await axios.patch(`https://484c369d8b4fb5dc.mokky.dev/product/${id}`,{
                //     ...v,
                //     like:lik
                // })
                localStorage.setItem(`like${id}`,!lik)
                setLik(!lik)
            
            } catch (error) {
                console.log(error);
            }
        
        
    }
    useEffect(()=>{
        heart()
    },[])
    return(
        <div className='w-[242px] h-[328px] flex flex-col'>
            <div className=' relative'> 
            <NavLink to={`/product/${id}`} >
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
                                <div style={{backgroundImage:`url(${v.img})`}} className={`bg-[#fff] bg-no-repeat bg-center bg-contain overflow-hidden rounded-[12px] border-4 border-[#f8f7f5] w-[226px] h-[226px]`}></div>
                            </SwiperSlide>
                        ))
                    }
                    
                </Swiper>
               </div>
                    </NavLink>
               <img onClick={() => heart()} src={lik?"/like_heart_red.svg":"/like-heart.svg"} className=' stroke-[green] fill-rose-800 cursor-pointer absolute right-5 top-2 z-[449]' alt="" />
            </div>
            <NavLink to={`/product/${id}`} >
            <p className='w-[206px] mt-[10px] ml-[18px] h-[38px] overflow-hidden leading-[19px]'>{title}</p>
            <h2 className='mt-[0px] ml-[18px] text-[21px] font-bold text-[#006933]'>{price}<span className='text-[13px]'>₽</span>  <span className='text-[13px] text-[#8a8784] line-through'>{Math.round(price+(price/100*4))}</span><span className='text-[13px] text-[#8a8784]'>₽</span></h2>
            </NavLink>
        </div>
    )
}

export default Product_card