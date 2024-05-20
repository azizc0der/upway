import Wrapper from "../Ui/Wrapper";
import Services1 from "../../assets/Services.svg"
import Services2 from "../../assets/Services (1).svg"
import Services3 from "../../assets/Services (2).svg"


export default function Services() {

    return (
        <div className={"pt-[100px]"}>
            <Wrapper>
                <div className={"grid grid-cols-3 place-items-center"}>
                    <div className={"flex flex-col items-center gap-2 text-center"}>
                        <img src={Services1} alt={"Services1"}/>
                        <div className={"font-bold text-[22px]"}>Bepul va tez yetkazib berish</div>
                        <p>140$ dan ortiq barcha buyurtmalar uchun bepul yetkazib berish</p>
                    </div>
                    <div className={"flex flex-col items-center gap-2 text-center"}>
                        <img src={Services2} alt={"Services2"}/>
                        <div className={"font-bold text-[22px]"}>Mijozlarga xizmat ko'rsatish: 24/7</div>
                        <p>Do'stona 24/7 mijozlarga xizmat ko'rsatish</p>
                    </div>
                    <div className={"flex flex-col items-center gap-2 text-center"}>
                        <img src={Services3} alt={"Services3"}/>
                        <div className={"font-bold text-[22px]"}>Pulni qaytarish kafolati</div>
                        <p>Biz 30 kun ichida pulni qaytaramiz</p>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}