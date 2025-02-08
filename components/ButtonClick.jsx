const ButtonClick = ({onClick, label}) => {
    return (
        <div className="flex justify-center">
            <button 
            className="bg-[#2e5cb8] hover:bg-[#4775d1] px-4 py-2 rounded-md my-4" 
            onClick={onClick}>
                <span className="font-bold text-white">{label}</span>
            </button>
        </div>
    )
}

export default ButtonClick;