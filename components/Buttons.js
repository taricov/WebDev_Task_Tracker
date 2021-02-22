const Buttons = ({text, color, onClick}) => {
    return (
        <div>
            <button 
            style= {{backgroundColor:color}}
            onClick={onClick}
            className='btn'
            >
            {text}
            </button>
            
        </div>
    )
}

export default Buttons
