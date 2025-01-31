import { useState } from "react";
import Input from "../../components/Input";
import axios from "axios";

function Signin() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")

    function tryLogin(event) {
        event.preventDefault()
        axios.get(`https://login-back-end-zeta.vercel.app/login/${email}/${senha}`)
        .then((response) => {
            setErro("")
            window.open("/home","_self")
            console.log(response)
        })
        .catch(setErro("Email ou senha incorreto!"))
    }
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className='w-[100%] h-auto max-w-[450px] bg-[#DCD6F7] flex flex-col gap-3 p-8 rounded-md'>
                <form onSubmit={tryLogin} className="flex flex-col gap-2">
                    <Input type="email" placeholder="Digite seu email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <Input type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => {
                        setSenha(e.target.value)
                    }} />
                    <label className="text-red-400">{erro}</label>
                    <input className="bg-[#CACFD6] text-white rounded-md p-4 text-2xl font-bold shadow-2xs" type="submit" value="Entrar" />
                </form>
                <p className="text-white">Não tem uma conta?<strong><Link to="/cadastro">Registre-se</Link></strong></p>
            </div>
        </div>
    )
}

export default Signin;
