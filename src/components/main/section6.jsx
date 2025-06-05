import "../../style/main.css"
import _img from "/images/sam-heughann (5).jpeg"

export function Section6 () {
    return (
        <section className="section-2">
            <div className="section-2-img">
                <img src={_img} alt="heughan-img" />
            </div>


            <div className="section-2-body">
                <div className="section-2-header">
                    <span> My Peak Challenge: </span>
                   <span> Building a Global Wellness Movement </span>
                </div>
            
                
                <div className="section-2-body-cnt">
                    In 2015, Sam founded My Peak Challenge (MPC), a revolutionary fitness and lifestyle movement that empowers participants to break through physical and mental limitations while giving back to charity. What started as a personal mission to stay healthy between filming schedules has grown into a global community of thousands who train, challenge themselves, and raise money for worthy causes.

                    MPC supports a wide array of organizations, including Blood Cancer UK, Marie Curie, and environmental conservation groups. Through workouts, guided programs, and emotional support systems, MPC is more than just a challenge—it’s a way of life. Sam remains actively involved, often leading workouts, joining challenge hikes, and sharing motivational content with participants.
                </div>
            </div>

        </section>
    )
}