import TopHeader from "../components/Home/TopHeader"
import Header from "../components/Home/Header";
import Products from "../components/Home/Products";
import Services from "../components/Home/Services";
import Footer from "../components/Home/Footer";

export default function HomePage() {
    return (
        <div>
            <TopHeader/>
            <Header/>
            <Products/>
            <Services/>
            <Footer/>
        </div>
    )
}