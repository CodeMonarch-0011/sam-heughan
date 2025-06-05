import "../../style/main.css"
import { AiFillInstagram } from "react-icons/ai"  
import { FaFacebookSquare, FaImdb } from "react-icons/fa"
import { openMail } from "../../utils/mailer"
import sam_image from "/images/sam-heughann (1).png"

export function Banner() {
    return (
        <section className="main-page-banner" id="home">
           

            <div className="main-page-banner-bck-img">
                <img src={sam_image} alt="martin-img" />
            </div>

            <div className="main-page-banner-content">
                
                <span>The Highlander with a Global Heart </span> 
    
                <div className="main-page-banner-header">
                    Sam Heughan
                </div>

                <div className="character-titles ">
                    <div> Actor </div>
                    <span>‖</span>

                    <div> Adventurer </div>
                    <span>‖</span>

                    <div> Entrepreneur </div>
                    <span>‖</span>

                    <div> Humanitarian </div>
                </div>

                <button className="button" onClick={() => openMail("artistmanagementinquiries@gmail.com")}>
                    Get in Touch
                </button>
            </div>


        </section>
    )
}