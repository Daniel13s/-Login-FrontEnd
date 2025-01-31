function Input({ type, placeholder, onChange, value }) {
    return(
        <input className="bg-white rounded-md w-full p-2 max-w-[500px]" type={type} placeholder={placeholder} onChange={onChange} value={value} />
    )
}

export default Input