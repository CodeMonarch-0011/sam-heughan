import "../../style/main.css"
import sam_img from "/images/sam-heughann (8).jpeg"

export function Section1 () {
    return (
        <section className="section-1 increase-top-paddding" id="story">

            <div className="section-1-img">
                <img src={sam_img} alt="heughan-img" />
            </div>


            <div className="section-1-body">
                <div className="section-1-header">
                    <span> From Scottish Soil to Global Stage: </span>
                   <span> The Birth of a Storyteller </span>
                </div>
            
                
                <div className="section-1-body-cnt">
                    Born on April 30, 1980, in the pastoral village of Balmaclellan in Dumfries and Galloway, Scotland, Sam Heughan grew up surrounded by ancient myths, misty landscapes, and a strong cultural identity that would later infuse his acting with depth and grounding. His early years were shaped by quiet countryside life and a budding fascination with drama, literature, and history.

                    After relocating to Edinburgh as a teenager, Sam pursued his passion for performance by enrolling at the Royal Scottish Academy of Music and Drama (now the Royal Conservatoire of Scotland). There, he immersed himself in classical theatre, refining his craft through rigorous Shakespearean training and stage roles that would later form the backbone of his commanding screen presence. He graduated in 2003 and set his sights beyond the Highlands.
                </div>
            </div>
        
        </section>
    )
}