import './Main.css';
import email from './imgs/email.png';
import linkedin from './imgs/linkedin.png';

function Main() {
    return (
        <div className="main">
            <div>
                <h2>Oliver Ye</h2>
                <h4>UC Berkeley M.E.T.</h4>
                <h5>https://www.oliverye.me/</h5>
            </div>
            <div className="button-container">
                <a href="mailto:oliverye@berkeley.edu" className="mailTo">
                    <button className="button btn1" href="mailto:oliverye@berkele.edu">
                        <img src={email} className="btn-img"></img>
                        Email
                    </button>
                </a>
                <button className="button btn2">
                    <img src={linkedin} className="btn-img"></img>
                    LinkedIn
                </button>
            </div>
            <div>
                <h2>About</h2>
                <p>I am a student with a particular interest in Rohan Kumar and Alan Zu.
                   Specifically, I am interested in the amount of weight they can lift
                   at the RSF. I am always looking for how sexy Alan's butt looks, especially
                   as it gets closer to bedtime.
                </p>
                <h2>Interests</h2>
                <p>Cooking. Alan's ass. Skiing. RSF. Starcraft 2. Drinking water. Rohan' muscles.
                   Sleeping. EECS. Your mom. Formula 1. UFC. Volleyball. Visiting cool places. Going
                   monkey mode. Alcohol. Being a menace to society.
                </p>
            </div>
        </div>
    );
}

export default Main;