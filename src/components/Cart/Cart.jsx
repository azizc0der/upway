import Wrapper from "../Ui/Wrapper";
import {useDispatch, useSelector} from "react-redux";
import Image from "../Ui/Image";
import {Rating} from "react-simple-star-rating";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {decreaseQuantity, deleteFormCart, increaseQuantity} from "../../store/cartProductsSlice";
import EmptyCartImg from "../../assets/empty-cart-2130356-1800917.webp"
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {enqueueSnackbar} from "notistack";

export default function CartProducts() {
    const cartProducts = useSelector(state => state.cart.cartProducts);
    const dispatch = useDispatch();
    const navigator = useNavigate()

    const handlePlus = (productId) => {
        dispatch(increaseQuantity(productId));
    };

    const handleMinus = (productId) => {
        dispatch(decreaseQuantity(productId));
    };

    const handleDelete = (productId) => {
        dispatch(deleteFormCart(productId));
    };

    const calculateTotalPrice = () => {
        return cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
    };

    const totalPrice = calculateTotalPrice();

    const handleOrder = () => {
        axios.post("https://capma.pythonanywhere.com/shop/order-create", {"products": cartProducts},)
            .then(res => {
                enqueueSnackbar("Buyurtma muvaffaqiyatli amalga oshirildi", {variant: "success"})
            })
            .catch(err => {
                if (err.response && err.response.status === 401) {
                    navigator("/login");
                }
            })
    }

    return (
        <div className={"pt-[100px]"}>
            <Wrapper>
                <div className={"grid grid-cols-3 gap-[50px]"}>
                    {
                        cartProducts.length > 0 ?
                            <div className={"border rounded-[5px] p-4 col-span-2 flex flex-col gap-[50px]"}>
                                {cartProducts.map((el) => (
                                    <div key={el.id}
                                         className={"grid grid-cols-5 gap-[30px] justify-between items-start pb-10 border-b"}>
                                        <div className={"cols-span-1 relative"}>
                                <span
                                    className={`${el.in_stock ? "bg-green-200 text-green-600" : "bg-red-200 text-[#db4444]"} rounded-[20px] py-[1px] px-2 text-[12px] absolute right-1 top-1`}>{el.in_stock ? "Sotuvda bor" : "Sotuvda yo'q"}</span>
                                            <Image el={el}/>
                                        </div>
                                        <div className={"col-span-2 flex flex-col"}>
                                            <div className={"font-bold text-[27px]"}>
                                                {el.name}
                                            </div>
                                            <p className={"text-[24px] font-medium text-[#DB4444]"}>{el.price} so'm</p>
                                            <Rating initialValue={5} readonly={true} size={20}/>
                                            <p className={"text-[#aaa]"}>{el.description}</p>
                                        </div>
                                        <div className={"col-span-2 flex flex-col gap-[30px]"}>
                                            <div className={"flex items-center gap-[30px]"}>
                                                <FontAwesomeIcon onClick={() => handleMinus(el.id)} icon={faMinus}
                                                                 size={"xl"}
                                                                 className={"cursor-pointer h-[20px] w-[20px] p-3 border rounded-[50%] text-red-600 border-red-600 hover:bg-red-100"}/>
                                                <div className={"font-medium text-[20px]"}>
                                                    {el.quantity}
                                                </div>
                                                <FontAwesomeIcon onClick={() => handlePlus(el.id)} icon={faPlus}
                                                                 size={"xl"}
                                                                 className={"cursor-pointer h-[20px] w-[20px] p-3 border rounded-[50%] text-green-600 border-green-600 hover:bg-green-100"}/>
                                                <FontAwesomeIcon onClick={() => handleDelete(el.id)} icon={faTrash}
                                                                 size={"xl"}
                                                                 className={"cursor-pointer h-[20px] w-[20px] p-3 border rounded-[50%] text-red-600 border-red-600 hover:bg-red-100"}/>

                                            </div>
                                            <div className={"text-[24px] font-bold"}>
                                                Narxi: {el.quantity * el.price} so'm
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            :
                            <div className={"flex items-center col-span-2 border rounded-[5px] p-4"}>
                                <img src={EmptyCartImg} alt={"EmptyCartImg"} width={400}/>
                                <div className={"flex flex-col gap-[40px]"}>
                                    <span className={"text-[22px] font-medium"}>Savatcha bo'sh</span>
                                    <button
                                        className={"bg-[#db4444] py-2 px-4 text-white rounded-[5px] hover:bg-red-400"}
                                        onClick={() => navigator("/")}>
                                        Asosiy sahifaga qaytish
                                    </button>
                                </div>
                            </div>
                    }
                    {
                        cartProducts.length > 0 ?
                            <div className={"border rounded-[5px] p-4 h-[200px]"}>
                                <div className={"text-[27px] font-bold"}>
                                    Umumiy narx: {totalPrice} so'm
                                </div>
                                <button onClick={handleOrder}
                                        className={"mt-8 w-full py-2 px-4 rounded-[5px] bg-[#db4444] hover:bg-red-500 text-white"}>Harid
                                    qilish
                                </button>
                            </div> : ""
                    }

                </div>
            </Wrapper>
        </div>
    );
}
