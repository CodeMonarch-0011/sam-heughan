import "../../style/main.css"
import _img from "/images/sam-heughann (7).jpeg"

export function Section9 () {
    return (
        <section className="section-1" id="life">
            <div className="section-1-img short-img">
                <img src={_img} alt="heughan-img" />
            </div>


            <div className="section-1-body">
                <div className="section-1-header">
                    <span> The Public and the Private: </span>
                   <span>  Staying Grounded in the Spotlight </span>
                </div>
            
                
                <div className="section-1-body-cnt">
                    Despite his growing fame, Sam remains remarkably grounded. He is known for his humility, gratitude, and positive interactions with fans. His social media presence offers a genuine window into his adventures, charity work, filming schedules, and occasional whisky tastings—but always with a tone of inclusion and authenticity. <br />
                    He maintains a private personal life, choosing to let his work, values, and actions speak louder than headlines. Fans respect this boundary, knowing that the real Heughan can be seen in his commitment to community, his love of storytelling, and the passion he brings to every endeavor.
                </div>
            </div>

        </section>
    )
}