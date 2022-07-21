import '../Styles/StickNavBar.css'
import logo from '../images/logoRedondoFondoBlack.gif'
function StickNavBar() { 

    return (
    <div className='stickNavBar'>
            <img src={logo} alt='logo' className='logo'/>
        <ul className='listBar'>
            <li className='link'>Home</li>
            <li className='link'>About</li>
            <li className='link'>Contact</li>
        </ul>
    </div>
    )
}

export default StickNavBar;