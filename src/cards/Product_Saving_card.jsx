const Product_Saving_Card = ({ img2, price, title }) => {
  return (
    <div className="w-[212px] h-[408px] flex flex-col p-2 mr-4">
      <div
        style={{ backgroundImage: `url(${img2})` }}
        className={`bg-[#f9f7f5] bg-contain bg-no-repeat bg-center overflow-hidden rounded-[12px] p-[3px] w-full h-[196px]`}
      ></div>
      <div className="w-full flex flex-col h-[194px]">
       <div className=" w-full flex flex-col">
          <div className="text-[11px] gap-1 mt-2 flex items-center text-[#006933]">
            С картой 
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBzDWj0w4c9QZ6m9lWuPSf_5PuqO5647VUw&s"
              className="w-[10px] h-[10px]"
              alt=""
            />
             Пэй
          </div>
          <h2 className="mt-[-5px] text-[21px] font-bold text-[#006933]">
            {price}
            <span className="text-[13px]">₽</span>
            <span className="text-[13px] text-[#8a8784] line-through">
              {Math.round(price + (price / 100) * 4)}
            </span>
            <span className="text-[13px] text-[#8a8784]">₽</span>
          </h2>
        </div>
        <p className=" mt-[10px] h-[57px] overflow-hidden leading-[19px]">
          {title}
        </p>
        <div>
          <button className="w-full bg-[#fce000] h-[32px] rounded-[7px] text-[13px] mt-6">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product_Saving_Card;
