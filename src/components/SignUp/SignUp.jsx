import Wrapper from "../Ui/Wrapper";
import SignUpImage from "../../assets/dl.beatsnoop 1.svg"
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {enqueueSnackbar} from "notistack";
import {useState} from "react";

export default function SignUpComponent() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const navigator = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        const body = {
            username: login,
            password: password
        }
        axios.post("https://capma.pythonanywhere.com/shop/register/", body)
            .then(res => {
                navigator("/")
            })
            .catch(err => {
                enqueueSnackbar("Ro'yxatdan o'tishda xatolik bor", {variant: "error"})
            })
    }
    return (
        <div>
            <Wrapper>
                <div className={"h-screen flex items-center justify-center gap-[100px]"}>
                    <img src={SignUpImage} alt={"SignUpImage"} width={500}/>
                    <div className={"flex flex-col gap-[40px] justify-between"}>
                        <div className={"text-[37px] font-bold"}>
                            Hisobingizni yarating
                        </div>
                        <p className={"text-[22px] font-medium"}>
                            Ma'lumotlaringizni kiriting
                        </p>
                        <form className={"flex flex-col gap-[40px]"} onSubmit={handleRegister}>
                            <input onChange={(e) => setLogin(e.target.value)} placeholder={"Login"}
                                   className={"border-b border-[#aaa] outline-none focus:outline-none py-2"}/>
                            <input onChange={(e) => setPassword(e.target.value)} placeholder={"Parol"}
                                   className={"border-b border-[#aaa] outline-none focus:outline-none py-2"}/>
                            <button className={"rounded-[5px] bg-[#db4444] text-white p-3 hover:bg-red-400 "}>Hisob
                                yaratish
                            </button>
                        </form>
                        <div className={"flex items-center justify-between"}>
                            <p>Hisobingiz bormi ?</p>
                            <Link to={"/login"} className={"border-b text-blue-500 border-blue-500"}>Kirish</Link>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}