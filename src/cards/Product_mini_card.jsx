const Product_mini_card = ({img2, price}) => {
    
    return(
        <div className='w-[193.333px] h-[234px] flex flex-col'>
            <div style={{backgroundImage:`url(${img2})`}} className={`bg-[#fff] bg-no-repeat bg-center bg-contain overflow-hidden rounded-[12px] w-full h-[193.333px]`}></div>
            <h2 className='mt-[0px] ml-[18px] text-[21px] font-bold text-[#006933]'>{price}<span className='text-[13px]'>₽</span>  <span className='text-[13px] text-[#8a8784] line-through'>{Math.round(price+(price/100*4))}</span><span className='text-[13px] text-[#8a8784]'>₽</span></h2>
        </div>
    )
}

export default Product_mini_card