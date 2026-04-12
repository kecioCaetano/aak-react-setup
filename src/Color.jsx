import React,{useState} from "react";
import './color.css'

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple']

function Color(){

    const [backgroundColor, setBackgroundColor] = useState(COLORS[0])
    const [numberOfChanges, setNumberOfChanges] = useState(0)

    const onButtonClick = (color) => () => {
        setBackgroundColor(color) 
        setNumberOfChanges(numberOfChanges + 1)
    }

    return (
        <div className="Color" style={{backgroundColor}} >
            <h1>Background changing amount: {numberOfChanges}</h1>
            {COLORS.map((color) => (
                <button
                type='button'
                key={color}
                onClick={onButtonClick(color)}
                className={backgroundColor === color ? 'selected' : ''}
                >
                    {color}
                </button>
            ))}
        </div>
    )
}

export default Color