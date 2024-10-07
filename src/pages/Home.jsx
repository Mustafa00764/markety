import { Navigation, A11y, Mousewheel, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Product_card from '../Product_card';
import Product_mini_card from '../cards/Product_mini_card';
import { LikeContext } from '../context/LikeContext';

const Home = () => {
    const [product, setProduct] = useState([])
    const [pro, setPro] = useState(true)
    const [black, setBlack] = useState(true)
    const {liked,setLiked,getLikeData,lik,setLik} = useContext(LikeContext)


    // const [product2, setProduct2] = useState([])
    const slider = [
        {
            id:1,
            reversing: true,
            img:"https://avatars.mds.yandex.net/get-market-adv/8781404/f1d1d501-0b8b-4572-a5cd-73e149b67921/1440x300"
        },
        {
            id:2,
            reversing: false,

            img:"https://avatars.mds.yandex.net/get-market-adv/8282799/72f5ec9a-1846-4951-a260-948a25530f3f/1440x300"
        },
        {
            id:3,
            reversing: true,
            img:"https://avatars.mds.yandex.net/get-market-adv/8282799/d801bb99-2a1e-4dfd-a840-0e72bd1d689e/1440x300"
        },
        {
            id:4,
            reversing: false,

            img:"https://avatars.mds.yandex.net/get-market-adv/8282799/916a1b78-d719-4517-a8ed-ffc4a355a7f1/1440x300"
        },
        {
            id:5,
            reversing: true,


            img:"https://avatars.mds.yandex.net/get-market-adv/8781404/a0d61f8f-8ea4-4638-8c31-cd63b9d9f70a/1440x300"
        },
        {
            id:6,
            reversing: false,

            img:"https://avatars.mds.yandex.net/get-market-adv/8282799/30d45123-93b3-4a6d-bb42-a9b999cf4efd/1440x300"
        },
        {
            id:7,
            reversing: true,


            img:"https://avatars.mds.yandex.net/get-market-adv/8781404/6f05adc1-12d0-45d0-b040-502344070062/1440x300"
        },
        {
            id:8,
            reversing: false,
            
            img:"https://avatars.mds.yandex.net/get-market-adv/8777695/db0b5dc4-4318-446b-9f6a-d3c3db81f4b5/1440x300"
        },
        {
            id:9,
            reversing: true,

            img:"https://avatars.mds.yandex.net/get-market-adv/8276645/4745e499-ba44-45a3-a549-90e4482f20ae/1440x300"
        },
    ]

    const products = () => {
        
       
            return (
<>
        <div className='grid grid-cols-4 '>
            {
                product.map((v)=>{
                    if (v.id<9) {
                        return(
                            <div key={v.id}>
                                <Product_card v={v} id={v.id} like={v.like} img1={v.img1} img2={v.img2} img3={v.img3} img4={v.img4} price={v.price} title={v.title}/>
                            </div>
                            
                        )
                    }
                }
                )
            }
        </div>
        <div className='w-[466.667px] h-[638.667px] relative py-6 px-8 bg-[#C9D8D1] rounded-[18px]'>
            <div className='flex relative w-full justify-between'>
                <div className='w-[318.67px]'>
                    <p>Рекомендуем вам</p>
                    <h1 className='text-[28px] font-medium leading-[31px] max-h-[93px]'>Смартфоны на любой вкус</h1>
                </div>
                <div className='flex font-medium gap-1 items-center justify-center w-[65.333px] h-[29.333px] rounded-[10px] border border-black'>
                    <p>Все</p>
                    <img src="arrow-right.svg" alt="" className='mt-[3.5px]' />
                </div>
            </div>
            <div className='grid absolute bottom-3 gap-x-4 gap-y-3 grid-cols-2 w-auto'>
                {
                    product.map((v)=>(
                        <Link to={`/product/${v.id}`} key={v.id} >
                           <div>
                            {
                            v.id<13 && v.id>8?<Product_mini_card  img2={v.img2} price={v.price} />:""
                            }
                            </div>
                        </Link>
                    ))
                }
                
            </div>
        </div>
        </>
            )
        
    }
    const productsDay = () => {
        
        
            return (
<>
        <div className='grid grid-cols-4 '>
            {
                product.map((v)=>{
                    if (v.id<11 && v.id>2) {
                        return(
                            <div key={v.id}>
                               <Product_card v={v} id={v.id} like={v.like} img1={v.img1} img2={v.img2} img3={v.img3} img4={v.img4} price={v.price} title={v.title}/>
                            </div>
                        )
                    }
                }
                )
            }
        </div>
        <div className='w-[466.667px] h-[638.667px] relative py-6 px-8 bg-[#DFDDBB] rounded-[18px]'>
            <div className='flex relative w-full justify-between'>
                <div className='w-[318.67px]'>
                    <p>Рекомендуем вам</p>
                    <h1 className='text-[28px] font-medium leading-[31px] max-h-[93px]'>Смартфоны на любой вкус</h1>
                </div>
                <div className='flex font-medium gap-1 items-center justify-center w-[65.333px] h-[29.333px] rounded-[10px] border border-black'>
                    <p>Все</p>
                    <img src="arrow-right.svg" alt="" className='mt-[3.5px]' />
                </div>
            </div>
            <div className='grid absolute bottom-3 gap-x-4 gap-y-3 grid-cols-2 w-auto'>
                {
                    product.map((v)=>(
                        <Link to={`/product/${v.id}`} key={v.id} >
                           <div>
                            {
                            v.id<15 && v.id>10?<Product_mini_card  img2={v.img2} price={v.price} />:""
                            }
                            </div>
                        </Link>
                    ))
                }
                
            </div>
        </div>
        </>
            )
        
    }

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
    useEffect(()=>{
        getProduct()
    },[])

  return (
    <div>
        <div className='max-w-[1440px] w-full h-[300px]'>
        <Swiper
      // install Swiper modules
      modules={[Navigation, A11y, Mousewheel,Autoplay]}
      loop={Infinity}
      autoplay={{
        delay:4000,
      }}
      speed={1100}
      spaceBetween={20}
      Mousewheel={true}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='h-full w-full'
    >
      {
        slider.map((v)=>(
            <SwiperSlide key={v.id}>
                <img className=' rounded-2xl border-0' src={v.img} alt="" />
            </SwiperSlide>
        ))
      }
    </Swiper>
        </div>
        <div className='w-full mt-4 flex justify-center items-center'>
            <div className='w-[324px] cursor-pointer relative items-center flex h-[36px] rounded-[13px] bg-[rgba(33,32,31,.07)] text-[14px] p-[2px]'>
                <h2 onClick={()=>setBlack(true)} className={black?'w-[50%] transition-all  flex justify-center z-10 text-white ':'w-[50%] transition-all flex justify-center z-10 text-[rgba(33,32,31,.5)] '}>Для вас</h2>
                <h2 onClick={()=>setBlack(false)} className={!black?'w-[50%] transition-all flex justify-center z-10 text-white ':'w-[50%] transition-all flex justify-center z-10 text-[rgba(33,32,31,.5)] '}>Цены дня</h2>
                <div className={black?'absolute w-[50%] transition-all duration-500 h-[32px] rounded-[11px] bg-[#42413E]':'absolute w-[50%] transition-all duration-500 h-[32px] translate-x-[158px] rounded-[11px] bg-[#42413E]'}></div>
            </div>
        </div>
        {
            slider.map((v)=>{
                return (
                    <div key={v.id} className={!v.reversing?"flex gap-2 mt-4 flex-row-reverse":"flex mt-4 gap-2 flex-row"}>
                        {
                           black?products():productsDay()
                        }
                    </div>
                    
                )
                
            })
        }
        
    </div>
  )
}

export default Home