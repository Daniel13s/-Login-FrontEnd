import { useState } from "react";
import Input from "../../components/Input";
import axios from "axios";

function Signup() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [senhaConfirmacao, setSenhaConfirmacao] = useState("")
    const [erro, setErro] = useState("")

    function tryRegister(event) {
        event.preventDefault()
        if (senha === senhaConfirmacao) {
            axios.get(`https://login-back-end-zeta.vercel.app/register/${email}/${senha}`)
            .then(() => {
                setErro("")
                window.open("/","_self")
            })
            .catch(error => {
                console.log(error)
            })
        } else {
            setErro("A confirmação está errada")
        }
    }
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className='w-[100%] h-auto max-w-[450px] bg-[#DCD6F7] flex flex-col gap-3 p-8 rounded-md'>
                <form className="flex flex-col gap-2">
                    <Input type="email" placeholder="Digite seu email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <Input type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => {
                        setSenha(e.target.value)
                    }} />
                    <Input type="password" placeholder="Confirme sua senha" value={senhaConfirmacao} onChange={(e) => setSenhaConfirmacao(e.target.value)}/>
                    <label className="text-red-400">{erro}</label>
                    <input className="bg-[#CACFD6] text-white rounded-md p-4 text-2xl font-bold shadow-2xs" type="submit" onClick={tryRegister} value="Cadastrar" />
                </form>
                <p className="text-white">Já possui uma conta? <button onClick={() => {
                    window.open("/", "_self")
                }}><strong>Logar</strong></button></p>
            </div>
        </div>
    )
}

export default Signup;
