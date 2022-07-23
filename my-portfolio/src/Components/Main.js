import "../Styles/Main.css"
import Bubble from './Bubble.js'
import ParticleBackground from "./ParticleBackground";
import StickNavBar from "./StickNavBar";

function Main() {
    return(
    
        <div className="main">
        <ParticleBackground/>
        <StickNavBar/>
        <div className='title'>
            <div className='divTitle'>
                <h2 className="h2Title">HI,</h2>
                <h2 className="h2Title">I'm <strong>Federico Batistella</strong></h2>
            </div>
            <div className='divStack'>
                <h4 className="h4Title" >Salesforce Developer</h4>
                <h4 className="h4Title">Full Stack Web Developer</h4>
            </div>
            <p className="saludo">Thank you for visiting me, welcome to my Portfolio.</p>
        </div>
        <Bubble/>
        </div>
    )
}

export default Main;