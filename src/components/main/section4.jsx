import "../../style/main.css"
import _img from "/images/sam-heughann (1).jpeg"

export function Section4 () {
    return (
        <section className="section-2">
            <div className="section-2-img">
                <img src={_img} alt="heughan-img" />
            </div>


            <div className="section-2-body">
                <div className="section-2-header">
                    <span> Waypoints and Words: </span>
                   <span> A Life Reflected in Nature </span>
                </div>
            
                
                <div className="section-2-body-cnt">
                    In 2022, Sam released his highly anticipated memoir, Waypoints: My Scottish Journey, a deeply introspective account of his solo trek along the West Highland Way, a 96-mile hiking route through Scotland’s most rugged and spiritual landscapes. The book is more than travel literature—it is a meditation on fame, identity, personal growth, and the healing power of nature.

                    Waypoints earned critical acclaim and became a bestseller, with readers drawn to Sam’s candid voice and heartfelt reflection. Whether recounting moments of solitude in the mountains or the pressure of living in the public eye, the book showcases a man still rooted in the land that shaped him.
                </div>
            </div>

        </section>
    )
}