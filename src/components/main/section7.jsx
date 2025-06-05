import "../../style/main.css"
import _img from "/images/sam-heughann (6).jpeg"

export function Section7 () {
    return (
        <section className="section-1" id="life">
            <div className="section-1-img short-img">
                <img src={_img} alt="heughan-img" />
            </div>


            <div className="section-1-body">
                <div className="section-1-header">
                    <span> Philanthropy and Advocacy: </span>
                   <span>  Using Fame for Good </span>
                </div>
            
                
                <div className="section-1-body-cnt">
                    Beyond fitness, Sam is an outspoken advocate for arts education, youth development, and environmental sustainability. He serves as a patron for Youth Theatre Arts Scotland, investing in the future of creative expression for underserved communities. <br />
                    He has lent his voice and time to causes ranging from cancer awareness campaigns to mental health advocacy, often using his public platform to elevate important social issues. Whether visiting hospitals, recording PSAs, or organizing donation drives, Sam’s activism is as sincere as it is impactful.
                </div>
            </div>

        </section>
    )
}