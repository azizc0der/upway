import Wrapper from "../Ui/Wrapper";
import { Rating } from "react-simple-star-rating";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../../store/cartProductsSlice";
import axios from "axios";
import Image from "../Ui/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import {enqueueSnackbar} from "notistack";

export default function Products() {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart.cartProducts);
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://capma.pythonanywhere.com/shop/product-list")
            .then((res) => {
                setProducts(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleAddToCart = (e, product) => {
        e.stopPropagation();
        dispatch(addToCart(Object.assign({}, { quantity: 1 }, product)));
        enqueueSnackbar("Savatchaga qo'shildi", {variant: "success"})
    };

    const handleRemoveFromCart = (e, product) => {
        e.stopPropagation();
        dispatch(removeFromCart(product));
        enqueueSnackbar("Savatchadan o'chirildi", {variant: "success"})
    };

    const handleNavigate = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className={"pt-[100px]"}>
            <Wrapper>
                <div>
                    <div className={"flex items-center gap-[10px]"}>
                        <p className={"h-[30px] w-[15px] rounded-[5px] bg-[#DB4444]"}></p>
                        <p className={"text-[#DB4444] font-semibold text-[20px]"}>Mahsulotlarimiz</p>
                    </div>
                    <div className={"text-[40px] font-medium mt-[20px]"}>Mahsulotlarimiz bilan tanishib chiqing</div>
                    <div className={"grid grid-cols-4 gap-[20px] mt-[40px]"}>
                        {
                            products.map((el, i) => {
                                const isProductInCart = cartProducts.some((p) => p.id === el.id);
                                return (
                                    <div key={i} onClick={() => handleNavigate(el.id)}
                                         className={"cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 hover:transition-all hover:duration-300 border rounded-[5px] pb-4"}>
                                        <div className={"relative"}>
                                            <span
                                                className={`${el.in_stock ? "bg-green-200 text-green-600" : "bg-red-200 text-[#db4444]"} rounded-[20px] py-[2px] px-3 text-[14px] absolute right-4 top-4`}>{el.in_stock ? "Sotuvda bor" : "Sotuvda yo'q"}</span>
                                            <Image el={el} />
                                        </div>
                                        <p className={"font-semibold mt-4 px-3 text-[20px]"}>{el.name}</p>
                                        <div className={"flex gap-[10px] mt-2 px-3"}>
                                            <span className={"text-[#DB4444] font-medium text-[18px]"}>{el.price} so'm</span>
                                            <Rating initialValue={5} readonly={true} size={20} />
                                        </div>
                                        <p className={"text-[#aaa] h-[80px] px-3 mt-2 text-[14px]"}>{el.description}</p>
                                        <div className={"flex justify-end mt-4 mr-4"}>
                                            {isProductInCart ? (
                                                <FontAwesomeIcon size={"xl"} icon={faCartArrowDown}
                                                                 onClick={(e) => handleRemoveFromCart(e, el)}
                                                                 className={"hover:bg-green-100 border border-green-600 hover:transition-all hover:duration-300 transition-all duration-300 rounded-[50%] p-3 h-[30px] w-[30px] text-green-600 cursor-pointer"} />
                                            ) : (
                                                <FontAwesomeIcon size={"xl"} icon={faCartPlus}
                                                                 onClick={(e) => handleAddToCart(e, el)}
                                                                 className={"hover:border-green-600 hover:bg-green-100 hover:text-green-600 transition-all duration-300 hover:transition-all hover:duration-300 border rounded-[50%] p-3 h-[30px] w-[30px] text-[#aaa] cursor-pointer"} />
                                            )}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
