const Button = ({ label, iconUrl, backgroundColor, textColor, borderColor, fullWidth }) => {
    return (
        <button className={`flex justify-center items-center gap-2  ${fullWidth && 'w-full'}
         
        ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red text-white border-coral-red'}
        
         px-6 py-4 border font-montserrat text-lg leading-none rounded-full transition-transform active:opacity-80 duration-300 hover:scale-105`}>
            {label}
            {
                iconUrl && <img src={iconUrl} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />
            }
        </button >
    )
}

export default Button