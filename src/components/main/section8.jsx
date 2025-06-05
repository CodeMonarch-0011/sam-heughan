import "../../style/main.css"
import _img from "/images/sam-heughann (9).jpeg"

export function Section8 () {
    return (
        <section className="section-2">
            <div className="section-2-img">
                <img src={_img} alt="heughan-img" />
            </div>


            <div className="section-2-body">
                <div className="section-2-header">
                    <span> Behind the Scenes: </span>
                   <span> Discipline, Curiosity, and Creativity </span>
                </div>
            
                
                <div className="section-2-body-cnt">
                    Sam Heughan’s success is not merely the result of talent—it’s the outcome of tireless discipline, intellectual curiosity, and unwavering creative energy. A lifelong student of the arts, he continues to train, read voraciously, and write when he’s not filming. He’s expressed interest in directing and producing more independent content that explores untold Scottish stories and voices from underrepresented communities. <br />

                    His approach to fitness is equally holistic, combining martial arts, weight training, yoga, and hiking as a way to balance his mind and body. He credits Scotland’s wild terrain with helping him find peace and strength amid the chaos of celebrity life.
                </div>
            </div>

        </section>
    )
}