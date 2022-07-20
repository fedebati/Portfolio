import '../Styles/Bubble.css'

function Bubble() {

    // const burgerMenu = document.querySelector('.burger');
    // console.log(burgerMenu);
    // const menuIsActive = () => { 
    //     burgerMenu.classList.toggle('active');
    // }
    // burgerMenu.addEventListener('click', menuIsActive);
    
    return (
        
        <div className="blob">
            <button type='button' className='burger'>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            </button>
        </div>
    
    )
}

export default Bubble;