import { Navigation, A11y, Mousewheel, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Product_card from '../Product_card';
import Product_mini_card from '../cards/Product_mini_card';
import Product_Saving_Card from '../cards/Product_Saving_card';
import Product_Big_card from '../cards/Product_Big_card';
import { ProductContext } from '../context/ProductContext';

const Search_page = () => {
  const [product, setProduct] = useState([]);
  const [chek, setChek] = useState();
  const [inp1, setInp1] = useState(Number(localStorage.getItem("inp1")) || 0);
  const [inp2, setInp2] = useState(Number(localStorage.getItem("inp2")) || 500000);
  const [chek1, setChek1] = useState(JSON.parse(localStorage.getItem(`chek1`)));
  const [chek2, setChek2] = useState(JSON.parse(localStorage.getItem(`chek2`)));
  const [chek3, setChek3] = useState(JSON.parse(localStorage.getItem(`chek3`)));
  const [chek4, setChek4] = useState(JSON.parse(localStorage.getItem(`chek4`)));
  const [chek5, setChek5] = useState(JSON.parse(localStorage.getItem(`chek5`)));
  const [chek6, setChek6] = useState(JSON.parse(localStorage.getItem(`chek6`)));
  const [chek7, setChek7] = useState(JSON.parse(localStorage.getItem(`chek7`)));
  const [chek8, setChek8] = useState(JSON.parse(localStorage.getItem(`chek8`)));
  const [chek9, setChek9] = useState(JSON.parse(localStorage.getItem(`chek9`)));
  const [chanels, setChanels] = useState([]);
  const { search } = useLocation();
  const { searchs,products } = useContext(ProductContext);
  // const [product2, setProduct2] = useState([])
  const logo = [
    {
      id: 1,
      title: "ASUS",
    },
    {
      id: 2,
      title: "Lenovo",
    },
    {
      id: 3,
      title: "Infinix",
    },
    {
      id: 4,
      title: "SAMSUNG",
    },
    {
      id: 5,
      title: "Apple",
    },
    {
      id: 6,
      title: "Xiaomi",
    },
    {
      id: 7,
      title: "Microsoft",
    },
    {
      id: 8,
      title: "HUAWEI",
    },
    {
      id: 9,
      title: "Honor",
    }
  ];

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `https://484c369d8b4fb5dc.mokky.dev/product?title=*${localStorage.getItem("search") !== undefined || localStorage.getItem("search") !== ""? localStorage.getItem("search"):"a"}&price[from]=${inp1}&price[to]=${inp2=="" || inp2==undefined?500000:inp2}${chek1?`&logo-title=ASUS`:""}${chek2?`&logo-title=Lenovo`:""}${chek3?`&logo-title=Infinix`:""}${chek4?`&logo-title=Samsung`:""}${chek5?`&logo-title=Apple`:""}${chek6?`&logo-title=Xiaomi`:""}${chek7?`&logo-title=Microsoft`:""}${chek8?`&logo-title=HUAWEI`:""}${chek9?`&logo-title=HONOR`:""}`
      );
      setChanels(response.data);

      // setProduct2(response.data)
      // setProduct2([...product2,...product])
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
    localStorage.getItem("search")
  }, [searchs,inp1,inp2,chek1,chek2,chek3,chek4,chek5,chek6,chek7,chek8,chek9]);

 const checkeds = (e,id) => {
  id==1?setChek1(e.target.checked):""
  id==2?setChek2(e.target.checked):""
  id==3?setChek3(e.target.checked):""
  id==4?setChek4(e.target.checked):""
  id==5?setChek5(e.target.checked):""
  id==6?setChek6(e.target.checked):""
  id==7?setChek7(e.target.checked):""
  id==8?setChek8(e.target.checked):""
  id==9?setChek9(e.target.checked):""
  localStorage.setItem(`chek${id}`,e.target.checked)  
 }

 const input1 = (e) => {
  if (e.target.value == "") {
    setInp1(0)
    localStorage.setItem("inp1","")
  }else{
    setInp1(e.target.value)
    localStorage.setItem("inp1",e.target.value)
  }
 }
 const input2 = (e) => {
  if (e.target.value == "") {
    setInp2(0)
    localStorage.setItem("inp2","")
  }else{
    setInp2(e.target.value)
    localStorage.setItem("inp2",e.target.value)
  }
 }

  return (
    <div className="flex items-start flex-col justify-between">
      <div>
        <h1 className="text-[28px] align-text-bottom capitalize inline text-left h-auto font-medium">{localStorage.getItem("search")}</h1>
      </div>
        <div className="flex items-start justify-between">
      <div className="lefting w-[20%]">
        <div>
          <div>
            <div className='mt-4'>
              <h2 className="font-medium">Цена, ₽</h2>
              <div className="flex mt-1 gap-2">
                <input
                  type="text"
                  maxLength="15"
                  onChange={(e)=>input1(e)}
                  defaultValue={localStorage.getItem("inp1")}
                  className="w-[108px] outline-none h-[40px] py-[10px] px-3 rounded-md border-2 text-[14px]"
                  placeholder="от 1345₽"
                />
                <input
                  type="text"
                  maxLength="15"
                  onChange={(e)=>input2(e)}
                  defaultValue={localStorage.getItem("inp2")}
                  className="w-[108px] outline-none h-[40px] py-[10px] px-3 rounded-md border-2 text-[14px]"
                  placeholder="до 202500₽"
                />
              </div>
            </div>
            <div className='mt-[10px] flex flex-col gap-2'>
              <h2 className="font-medium">Производитель</h2>
              <div className="text-[14px]  flex flex-col gap-2 font-medium">
              {
                logo.map((v)=>{
                  return(
                    <div key={v.id} className="flex gap-2 items-center">
                      <input type="checkbox" defaultChecked={JSON.parse(localStorage.getItem(`chek${v.id}`))} onChange={(e)=>checkeds(e,v.id)} id={v.id} />
                      <label htmlFor={v.id}>{v.title}</label>
                    </div>
                  )
                })
              }
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="midium w-[80%]">
        <h1 className='p-2 text-xl font-medium	'>Популярные предложения</h1>
        {/* <div className="max-w-[1440px] w-full h-[440px]">
          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y, Mousewheel, Autoplay]}
            autoplay={{
              delay: 4000,
            }}
            speed={1100}
            spaceBetween={100}
            Mousewheel={true}
            slidesPerView={6}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="h-full w-full nnn"
          >
            {
              product.map((v)=>{
                return (
                  <SwiperSlide key={v.id}>
                    <div className='flex bottom-3 gap-y-3 h-[390px] w-auto'>
                    <Link to={`/product/${v.id}`}  >
                           <div>
                            
                              <Product_Saving_Card img2={v.img2} price={v.price} title={v.title}/>
                            
                            </div>
                        </Link>
                    </div>
                  </SwiperSlide>
                )
              })
            }
           
          </Swiper>
        </div>
        <hr className='mt-[-45px] mb-4' /> */}
        <div className='grid grid-cols-4 gap-x-4 '>
        {chanels.length !== 0 ? (
          chanels.map((v)=>(
            <Product_Big_card key={v.id} v={v} like={v.like} img2={v.img2} id={v.id} img1={v.img1} img3={v.img3} img4={v.img4} price={v.price} title={v.title}/>       
          ))
        ) : (
          <div className="w-[1000px] flex justify-center text-black text-[30px]  font-bold">
            <h1>Извените, но таких товаров нет</h1>
          </div>
        )
           
        }
        </div>
      </div>
      </div>
    </div>
  );
};

export default Search_page;
