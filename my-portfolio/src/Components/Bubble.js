import '../Styles/Bubble.css'
import {useState } from 'react';

function Bubble() {

    const [toggle, setToggle] = useState(true);
    function fnToggle() { 
        setToggle(!toggle)
    };
    
    return (
        <div className='containerBubble'>
            <div className={(toggle ? 'blob' : 'blob active')} onClick={fnToggle}>
                <button type='button'  className={(toggle? 'burger': 'burger active' )} >
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
                </button>
            </div>
            <div className={(toggle ? 'loader' : 'loader active')} onClick={fnToggle}>
                <span className='btn ' id='btn1'><h2>1</h2></span>
                <span className='btn ' id='btn0'><h2>0</h2></span>
                <span className='btn ' id='btn2'><h2>2</h2></span>
                <span className='btn ' id='btn3'><h2>3</h2></span>
                <span className='btn ' id='btn4'><h2>4</h2></span>
                <span className='btn ' id='btn5'><h2>5</h2></span>
            </div>
        </div>
    
    )
}

export default Bubble;