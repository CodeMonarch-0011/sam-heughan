import "../../style/main.css"
import _img from "/images/sam-heughann (2).jpeg"

export function Section5 () {
    return (
        <section className="section-1" id="life">
            <div className="section-1-img short-img">
                <img src={_img} alt="martin-img" />
            </div>


            <div className="section-1-body">
                <div className="section-1-header">
                    <span> The Sassenach Legacy: </span>
                   <span> Whisky as a Cultural Offering </span>
                </div>
            
                
                <div className="section-1-body-cnt">
                    A proud Scotsman and storyteller, Sam turned his love for heritage and craftsmanship into a business venture with the launch of The Sassenach, a premium blended Scotch whisky, in 2020. Inspired by the rugged romance of the Highlands and a desire to share a piece of Scotland with the world, The Sassenach was created under his spirits company, Great Glen Company.

                    The whisky earned critical and industry accolades, winning multiple international awards including Double Gold at the San Francisco World Spirits Competition. As founder, Sam took a hands-on approach—tasting, refining, and promoting the brand himself. The name, “Sassenach,” is a nod to his Outlander co-star’s character, adding a personal and narrative-driven layer to the product.
                </div>
            </div>

        </section>
    )
}