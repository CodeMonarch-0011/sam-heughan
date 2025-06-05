import "../../style/main.css"
import _img from "/images/sam-heughann (3).jpeg"

export function Section3 () {
    return (
        <section className="section-1" id="about">

            <div className="section-1-img">
                <img src={_img} alt="heughen-img" />
            </div>


            <div className="section-1-body">
                <div className="section-1-header">
                    <span>  Expanding the Screen: </span>
                   <span> A Career Beyond the Kilt </span>
                </div>
            
                
                <div className="section-1-body-cnt">
                    Though Outlander launched him into the spotlight, Heughan has continually broadened his horizons. He starred in the action-comedy hit “The Spy Who Dumped Me” (2018), where he flexed both his combat skills and comedic timing alongside Mila Kunis and Kate McKinnon. In 2020, he took on a darker, tech-enhanced role as the cybernetic antagonist in Bloodshot, sharing the screen with Vin Diesel in this comic-book-based sci-fi action thriller.

                    Heughan has also explored romantic drama with roles in films like Love Again (2023), where he portrayed characters that offered both charisma and vulnerability. His on-screen versatility continues to prove he’s not just a period drama icon but a leading man in any genre—capable of action, comedy, and drama with equal finesse.
                </div>
            </div>
        
        </section>
    )
}