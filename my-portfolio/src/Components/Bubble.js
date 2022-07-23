import '../Styles/Bubble.css'
import {useState } from 'react';

function Bubble() {

    const [toggle, setToggle] = useState(true);
    function fnToggle() { 
        setToggle(!toggle)
    };
    
    return (
        
        <div className={(toggle ? 'blob' : 'blob active')} onClick={fnToggle}>
            <button type='button'  className={(toggle? 'burger': 'burger active' )} >
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            </button>
        </div>
    
    )
}

export default Bubble;