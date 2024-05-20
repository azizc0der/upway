import TopHeader from "../components/Home/TopHeader";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import CartProducts from "../components/Cart/Cart";

export default function Cart() {
    return (
        <div>
            <TopHeader/>
            <Header/>
            <CartProducts/>
            <Footer/>
        </div>
    )
}