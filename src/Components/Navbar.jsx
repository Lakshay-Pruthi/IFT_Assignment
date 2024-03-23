import NFLogo from '../assets/NFLogo.svg'
import PB_Streak from '../assets/PB_Streak.png'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.svg'

function Navbar() {
    return (
        <>
            <header>
                <div className='logo-container'>
                    <img src={Logo} alt="" />
                    <img src={PB_Streak} alt="" />
                </div>
                <nav>
                    <div className='upper-nav-container'>
                        &lt;
                        <div className='nav-logo'>
                            <div>
                                <img src={NFLogo} alt="" />
                                <p id='logo-text'>NIFTY 50</p>
                            </div>
                            <p id='logo-subtext'>₹21791.35 <span id='highlight'><b>↓</b>(20%)</span></p>
                        </div>
                    </div>
                    <div className='inner-nav'>
                        <NavLink to='5min'>5 min</NavLink>
                        <NavLink to='10min'>10 min</NavLink>
                        <NavLink to='15min'>15 min</NavLink>
                        <NavLink to='20min'>30 min</NavLink>
                        <NavLink to='30min'>hour</NavLink>
                        <NavLink to='/IFT_Assignment/'>1 Day</NavLink>
                    </div>
                </nav>
            </header >
        </>
    )
}

export default Navbar;