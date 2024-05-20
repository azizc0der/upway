import Wrapper from "../Ui/Wrapper";
import {Rating} from "react-simple-star-rating";
import IconDelivery from "../../assets/icon-delivery.svg"
import IconReturn from "../../assets/Icon-return.svg"
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Image from "../Ui/Image";

export default function Details() {
    const params = useParams()
    const {id} = params
    const [productDetails, setProductDetails] = useState({})

    useEffect(() => {
        axios.get(`https://capma.pythonanywhere.com/shop/product-detail/${id}`)
            .then((res) => {
                setProductDetails(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    })

    return (
        <div className={"pt-[100px]"}>
            <Wrapper>
                <div className={"grid grid-cols-6 gap-[40px]"}>
                    <div className={"col-span-2 relative"}>
                         <span
                             className={`${productDetails.in_stock ? "bg-green-200 text-green-600" : "bg-red-200 text-[#db4444]"} rounded-[20px] py-[2px] px-3 text-[14px] absolute right-4 top-4`}>{productDetails.in_stock ? "Sotuvda bor" : "Sotuvda yo'q"}</span>
                        <Image el={productDetails}/>
                    </div>
                    <div className={"col-span-3 flex flex-col justify-between"}>
                        <div className={"font-bold text-[27px]"}>
                            {productDetails.name}
                        </div>
                        <div className={"flex items-center gap-[20px]"}>
                        <p className={"text-[24px] font-medium text-[#DB4444]"}>{productDetails.price} so'm</p>
                            <Rating initialValue={5} readonly={true} size={20}/>
                        </div>
                        <p className={"text-[#aaa]"}>{productDetails.description}</p>
                        <hr/>
                        <div className={"border-2 rounded-[5px] p-4 flex flex-col gap-4"}>
                            <div className={"flex items-center gap-4"}>
                                <img src={IconDelivery} alt={"IconDelivery"}/>
                                <div className={"flex flex-col gap-[5px]"}>
                                    <div className={"text-[18px] font-medium"}>Bepul yetkazib berish</div>
                                    <p>Yetkazib berish mavjudligi uchun pochta indeksingizni kiriting</p>
                                </div>
                            </div>
                            <hr/>
                            <div className={"flex items-center gap-4"}>
                                <img src={IconReturn} alt={"IconDelivery"}/>
                                <div className={"flex flex-col gap-[5px]"}>
                                    <div className={"text-[18px] font-medium"}>Qayta yetkazib berish</div>
                                    <p>Bepul 30 kun yetkazib berish qaytariladi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            className={"bg-[#DB4444] hover:bg-red-400 border-none py-4 px-8 text-white rounded-[5px] mt-[10px]"}>Savatchaga
                            qo'shish
                        </button>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}