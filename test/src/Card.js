import star from "./assets/star.png";
import troll from "./assets/troll.png";

function HasStatusCard(props) {
    return (
        <div className="">
            <div id="ratings" class="relative">
                <img src={props.img} alt="troll" className="object-cover h-96 w-72 rounded-2xl">
                </img>
                <div className="absolute text-md font-Poppins rounded m-2 px-2 py-0.5 bg-white top-0 left-0">
                    {props.status}
                </div>
            </div>
            <div id="ratings" className="flex items-center mt-2">
                <img src={star} alt="star align-middle inline-block" className="w-7">
                </img>
                <p className="mx-2 text-xl inline-block align-middle font-Poppins">
                    {props.rating}
                </p>
                <p className="pt-0.5 font-Poppins font-light text-gray-400">
                    ({props.reviewCnt}) · {props.location}
                </p>
            </div>
            <p className="font-Poppins my-2 text-lg font-light w-72">
                {props.tag}
            </p>
            <div className="flex mb-10">
                <p className="font-Poppins font-bold">From ${props.price}</p>
                <p className="font-Poppins font-light">&nbsp;/ person</p>
            </div>
    
        </div>
    );
}

function NoStatusCard(props) {
    return (
        <div className="">
            <div id="ratings" class="relative">
                <img src={props.img} alt="troll" className="object-cover h-96 w-72 rounded-2xl">
                </img>
            </div>
            <div id="ratings" className="flex items-center mt-2">
                <img src={star} alt="star align-middle inline-block" className="w-7">
                </img>
                <p className="mx-2 text-xl inline-block align-middle font-Poppins">
                    {props.rating}
                </p>
                <p className="pt-0.5 font-Poppins font-light text-gray-400">
                    ({props.reviewCnt}) · {props.location}
                </p>
            </div>
            <p className="font-Poppins my-2 text-lg font-light w-72">
                {props.tag}
            </p>
            <div className="flex mb-10">
                <p className="font-Poppins font-bold">From ${props.price}</p>
                <p className="font-Poppins font-light">&nbsp;/ person</p>
            </div>

        </div>
    );
}

function Card(props) {
    if (!props.hasStatus) {
        return <NoStatusCard
            img={props.img}
            rating={props.rating}
            reviewCnt={props.reviewCnt}
            location={props.location}
            price={props.price}
            tag={props.tag}
         />
    } else {
        return <HasStatusCard
            img={props.img}
            rating={props.rating}
            reviewCnt={props.reviewCnt}
            location={props.location}
            price={props.price}
            tag={props.tag}
            status={props.status}
         />
    }
}

export default Card;