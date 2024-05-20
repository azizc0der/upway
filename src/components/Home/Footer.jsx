import Wrapper from "../Ui/Wrapper";
import Send from "../../assets/icon-send.svg"
import Instagram from "../../assets/icon-instagram.svg"
import Facebook from "../../assets/Icon-Facebook.svg"
import Linkedin from "../../assets/Icon-Linkedin.svg"

export default function Footer() {
    return (
        <div className={"bg-black mt-[100px]"}>
            <Wrapper>
                <div className={"py-[80px]"}>
                    <div className={"grid grid-cols-3 gap-[100px] text-white place-items-center"}>
                        <div className={"col-span-1 flex flex-col gap-4"}>
                            <div className={"text-[27px] font-bold"}>UPWAY</div>
                            <p className={"font-medium text-[20px]"}>Obuna bo'ling</p>
                            <span>Birinchi buyurtmangizga 10% chegirma oling</span>
                            <div className={"relative"}>
                                <input type={"email"} pattern={""} placeholder={"Emailingizni kiriting"}
                                       className={"px-4 py-2 border border-white rounded-[5px] bg-black outline-0 focus:outline-0 w-full"}/>
                                <img src={Send} alt={"Send"}
                                     className={"absolute right-0 top-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer"}/>
                            </div>
                        </div>
                        <div className={"col-span-1 flex flex-col gap-4"}>
                            <div className={"text-[20px] font-bold"}>Qo'llab quvvatlash</div>
                            <span>20A, Mukimi Str, Tashkent</span>
                            <span>UPWAY@gmail.com</span>
                            <span>+99890 111-11-11</span>
                        </div>
                        <div className={"col-span-1 flex flex-col gap-4"}>
                            <div className={"text-[20px] font-bold"}>Ijtimoiy tarmoqlar</div>
                            <div className={"flex flex-col gap-4"}>
                                <div className={"flex items-center gap-2 cursor-pointer"}>
                                    <img src={Facebook} alt={"Facebook"}/>
                                    <span>Facebook</span>
                                </div>
                                <div className={"flex items-center gap-2 cursor-pointer"}>
                                    <img src={Instagram} alt={"Instagram"}/>
                                    <span>Instagram</span>
                                </div>
                                <div className={"flex items-center gap-2 cursor-pointer"}>
                                    <img src={Linkedin} alt={"Linkedin"}/>
                                    <span>Linkedin</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={"text-[#aaa] text-center mt-[100px]"}>UPWAY 2024</p>
                </div>
            </Wrapper>
        </div>
    )
}