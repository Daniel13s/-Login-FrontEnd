function Home() {
    function backLogin() {
        window.open("/","_self")
    }
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className='w-[100%] h-auto max-w-[450px] bg-[#DCD6F7] flex flex-col gap-5 p-8 rounded-md'>
                <h1 className="font-bold text-white text-5xl text-center">Bem vindo!</h1>
                <input className="bg-[#CACFD6] text-white rounded-md p-4 text-2xl font-bold shadow-2xs" type="button" value="Voltar" onClick={backLogin} />
            </div>
        </div>
    )
}

export default Home