import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Test from "./Test";

import troll from "./assets/troll.png"
import yoga from "./assets/yoga.jpeg"
import alan from "./assets/alan.jpeg"
import cooking from "./assets/cooking.jpeg"

function App() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <div className="flex m-10 space-x-6">
                <Card
                    img={troll}
                    rating="5.0"
                    reviewCnt="6"
                    location="USA"
                    price="136"
                    tag="Dishwashing lessons with Rohan Kumar"
                    hasStatus={true}
                    status="SOLD OUT"
                />
                <Card
                    img={yoga}
                    rating="6.9"
                    reviewCnt="42"
                    location="Netherlands"
                    price="23"
                    tag="Daily yoga exercises with Rahul Kumar"
                    hasStatus={true}
                    status="ONLINE"
                />
                <Card
                    img={alan}
                    rating="1.0"
                    reviewCnt="2398"
                    location="China"
                    price="69"
                    tag="Pot stirring courses with Bartholomew Ramsay"
                    hasStatus={false}
                    status="SOLD OUT"
                />
                <Card
                    img={cooking}
                    rating="2.4"
                    reviewCnt="15201"
                    location="Delaware St"
                    price="849"
                    tag="Cooking lessons with Oliver Ye"
                    hasStatus={true}
                    status="SOLD OUT"
                />

            </div>
        </div>
    );
}

export default App;