import React from "react";
import HumanCard from "../components/HumanCard";

const loreIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu lorem dictum, vestibulum orci ut, hendrerit velit.";

function OurHumans(props) {
    return (

        <div className="album py-5 bg-light">

            <div className="container">

                <h1 className="py-5">Our humans</h1>

                <div className="row">
                    <HumanCard
                        imageUrl="./images/our-humans/abraomukas.jpg"
                        title="Abraham"
                        text={loreIpsum} />
                    <HumanCard
                        imageUrl="./images/our-humans/victor.jpg"
                        title="Victor"
                        text={loreIpsum} />
                    <HumanCard
                        imageUrl="./images/our-humans/santan.jpeg"
                        title="Santan"
                        text={loreIpsum} />
                    <HumanCard
                        imageUrl="./images/our-humans/unknown.gif"
                        title="Sara"
                        text={loreIpsum} />
                </div>
            </div>
        </div>
    );
}

export default OurHumans;