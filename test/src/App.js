import Location from "./Location";
import Navbar from "./Navbar";
import data from './data';
import archery from './assets/archery.jpg';
import cooking from './assets/cooking.jpg';
import ski from './assets/ski.jpg';
import zion from './assets/zion.jpeg';

function App() {
    const cards = data.map(item => {
        return (
            <Location
                key={item.id}
                title={item.title}
                img={item.img}
                location={item.location}
                tag={item.tag}
                dscrp={item.description}
                link={item.link}
            />
        )
    })
    return (
        <div>
            <Navbar />
            {cards}
        </div>
    );
}

export default App;