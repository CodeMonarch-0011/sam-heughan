import "../style/components.css"
import { BsX } from "react-icons/bs"
import { navigate } from "../utils/mailer"

export function MobileSlider ({ setSliderOpen, setContactOpen }) {

    function handleNavigation (link) {
        navigate(link)
        setSliderOpen(false)
    }

    function handleClick () {
        setContactOpen(true)
        setSliderOpen(false)
    }

    return (
        <div className="mobile-slider">
            <span className="exit-icon" onClick={() => setSliderOpen(false)}> <BsX /> </span>

            <nav className="navbar-navigation">
                <span onClick={() => handleNavigation('#home')}>Home</span>
                <span onClick={() => handleNavigation('#story')}>Story</span>
                <span onClick={() => navigate("#philanthropy")}> Philanthropy </span>
                <span onClick={() => handleNavigation('#life')}>About</span>
            </nav>

            <button className="button slider-button" onClick={handleClick}>
                Contact us
            </button>
        </div>
    )
}