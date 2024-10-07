

const Katalog_card = ({images,info,info2,title,info3,info4,info5,info6}) => {
    return(
        <div className="pt-[26px] pl-8 border-l w-[1209px] ">
            <h1 className="text-[28px] hover:text-[red] cursor-pointer font-bold mb-[24px]">{title}</h1>
            <div className="flex w-full justify-between">
            <div className="grid w-[851px] justify-between grid-cols-3 gap-x-4 gap-y-8">
                <div className="text-[14px] max-w-[283px] reds w-full">
                    <p className="font-bold h-4">{info.text1}</p>
                    <div className="text-[14px] reds [&>*]:leading-4  flex flex-col gap-2 mt-1 pt-2">
                    <p>{info.text2}</p>
                    <p>{info.text3}</p>
                    <p>{info.text4}</p>
                    <p>{info.text5}</p>
                    <p>{info.text6}</p>
                    </div>
                </div>
                <div className="text-[14px] reds max-w-[283px] w-full">
                    <p className="font-bold h-4">{info2.text1}</p>
                    <div className="text-[14px] reds [&>*]:leading-4  flex flex-col gap-2 mt-1 pt-2">
                    <p>{info2.text2}</p>
                    <p>{info2.text3}</p>
                    <p>{info2.text4}</p>
                    <p>{info2.text5}</p>
                    <p>{info2.text6}</p>
                    </div>
                </div>
                <div className="text-[14px] reds max-w-[283px] w-full">
                    <p className="font-bold h-4">{info3.text1}</p>
                    <div className="text-[14px] reds [&>*]:leading-4  flex flex-col gap-2 mt-1 pt-2">
                    <p>{info3.text2}</p>
                    <p>{info3.text3}</p>
                    <p>{info3.text4}</p>
                    <p>{info3.text5}</p>
                    <p>{info3.text6}</p>
                    </div>
                </div>
                <div className="text-[14px] reds max-w-[283px] w-full">
                    <p className="font-bold h-4">{info4.text1}</p>
                    <div className="text-[14px] reds [&>*]:leading-4  flex flex-col gap-2 mt-1 pt-2">
                    <p>{info4.text2}</p>
                    <p>{info4.text3}</p>
                    <p>{info4.text4}</p>
                    <p>{info4.text5}</p>
                    <p>{info4.text6}</p>
                    </div>
                </div>
                <div className="text-[14px] reds max-w-[283px] w-full">
                    <p className="font-bold h-4">{info5.text1}</p>
                    <div className="text-[14px] reds [&>*]:leading-4  flex flex-col gap-2 mt-1 pt-2">
                    <p>{info5.text2}</p>
                    <p>{info5.text3}</p>
                    <p>{info5.text4}</p>
                    <p>{info5.text5}</p>
                    <p>{info5.text6}</p>
                    </div>
                </div>
                <div className="text-[14px] reds max-w-[283px] w-full">
                    <p className="font-bold h-4">{info6.text1}</p>
                    <div className="text-[14px] reds [&>*]:leading-4  flex flex-col gap-2 mt-1 pt-2">
                    <p>{info6.text2}</p>
                    <p>{info6.text3}</p>
                    <p>{info6.text4}</p>
                    <p>{info6.text5}</p>
                    <p>{info6.text6}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pr-[52px] gap-5 justify-center">
                <img className="cursor-pointer" src={images.img1} alt="" />
                <img className="cursor-pointer" src={images.img2} alt="" />
                <img className="cursor-pointer" src={images.img3} alt="" />
                <img className="cursor-pointer" src={images.img4} alt="" />
                <img className="cursor-pointer" src={images.img5} alt="" />
            </div>
            </div>
        </div>
    )
}

export default Katalog_card