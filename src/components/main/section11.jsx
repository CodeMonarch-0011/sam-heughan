import { AiFillInstagram } from "react-icons/ai"
import "../../style/main.css"
import { openSocial } from "../../utils/mailer"
import { FaFacebookSquare } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

function Copyright () {
    return (
        <div className="copyright">
            Copyright©2025. All Rights Reserved
        </div>
    )
}

export function Section11 ({ setContactOpen }) {
    return (
        <section className="section-6">
            <div className="section-6-cnt">
                <div>A Legacy Still in the Making</div>

                <div>
                    Sam Heughan has quietly—and now unmistakably—built a legacy that extends far beyond the screen. He is a multi-hyphenate force: actor, entrepreneur, author, philanthropist, and motivational figure. From the ancient hills of Scotland to red carpets across the globe, he carries with him the strength of heritage, the heart of a modern explorer, and the voice of a true artist. <br />
                    Whether he’s climbing a peak, lifting a glass, or stepping into a new role, one thing remains constant—Sam Heughan moves forward with intention, compassion, and vision.
                </div>

            </div>

            <div className="section-6-contacts-container">
                <button className="button" onClick={() => setContactOpen(true)}>
                    Contact Us
                </button>

                <div className="section-6-contacts">
                    <span onClick={() => openSocial("https://www.instagram.com/samheughan")}> <AiFillInstagram /> </span>
                    <span onClick={() => openSocial("https://x.com/SamHeughan")}> <FaXTwitter /> </span>
                    <span onClick={() => openSocial("https://www.facebook.com/SamHeughan")}> <FaFacebookSquare /> </span>
                </div>
            </div>

            <Copyright />

        </section>
    )
}