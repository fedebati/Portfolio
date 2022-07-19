import "../Styles/Main.css"
import Bubble from './Bubble.js'

function Main() {
    return(
        <main className="main">
        <span className='logo'>
            <h1 className='titleSaludo'>HI,</h1>
            <h2 className='titleSaludo'>I'm <strong>Federico Batistella</strong></h2>
            <h4 className='titleStack'>Salesforce Developer</h4>
            <h4 className='titleStack'>Full Stack Web</h4>
            <p>Thank you for visiting me, welcome to my Portfolio.</p>
        </span>
        <Bubble/>
        </main>
    )
}

export default Main;