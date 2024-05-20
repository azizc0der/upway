import Wrapper from "../Ui/Wrapper";
import Cart from "../../assets/Cart1.svg";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Header() {
    const navigator = useNavigate()
    const cartProducts = useSelector(state => state.cart.cartProducts)

    return (
        <div className={"h-[70px] flex items-center border-b-2"}>
            <Wrapper>
                <div className={"flex items-center justify-between"}>
                    <div className={"font-bold text-[34px]"}>UPWAY</div>
                    <div className={"flex items-center gap-[30px]"}>
                        <div className={"relative"}>
                            <img src={Cart} alt={"Cart"} className={"cursor-pointer"}
                                 onClick={() => navigator("/cart")}/>
                            {
                                cartProducts.length > 0 &&
                                <span className={"absolute bg-red-500 rounded-[50%] text-white w-[25px] h-[25px] flex items-center justify-center -top-3 -right-3 text-[12px]"}>{cartProducts.length}</span>
                            }
                        </div>
                        <button
                            onClick={() => navigator("/login")}
                            className={"border py-2 px-6 rounded-[5px] bg-[#DB4444] hover:bg-red-400 transition-all duration-300 hover:transition-all hover:duration-300 text-white"}>Kirish
                        </button>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}