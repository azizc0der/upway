import Wrapper from "../Ui/Wrapper";
import SignUpImage from "../../assets/dl.beatsnoop 1.svg"
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {enqueueSnackbar} from "notistack";

export default function LoginComponent() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const navigator = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        const body = {
            username: login,
            password: password
        }

        axios.post("https://capma.pythonanywhere.com/shop/login/", body)
            .then(res => {
                navigator("/")
            })
            .catch(err => {
                enqueueSnackbar("Kirishda xatolik bor", {variant: "error"})
            })
    }

    return (
        <div>
            <Wrapper>
                <div className={"h-screen flex items-center justify-center gap-[100px]"}>
                    <img src={SignUpImage} alt={"SignUpImage"} width={500}/>
                    <div className={"flex flex-col gap-[40px] justify-between"}>
                        <div className={"text-[37px] font-bold"}>
                            UPWAY ga kirish
                        </div>
                        <p className={"text-[22px] font-medium"}>
                            Ma'lumotlaringizni kiriting
                        </p>
                        <form className={"flex flex-col gap-[40px]"} onSubmit={handleRegister}>
                            <input onChange={(e) => setLogin(e.target.value)} placeholder={"Login"}
                                   className={"border-b border-[#aaa] outline-none focus:outline-none py-2"}/>
                            <input onChange={(e) => setPassword(e.target.value)} placeholder={"Parol"}
                                   className={"border-b border-[#aaa] outline-none focus:outline-none py-2"}/>
                            <button className={"rounded-[5px] bg-[#db4444] text-white p-3 hover:bg-red-400 "}>Kirish
                            </button>
                        </form>
                        <div className={"flex items-center justify-between"}>
                            <p>Hisobingiz yo'qmi ?</p>
                            <Link to={"/signup"} className={"border-b text-blue-500 border-blue-500"}>Ro'yxatdan
                                o'tish</Link>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}