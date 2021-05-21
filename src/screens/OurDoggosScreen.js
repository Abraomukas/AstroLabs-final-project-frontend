import React from "react";
import DoggoCard from "../components/DoggoCard";

const loreIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu lorem dictum, vestibulum orci ut, hendrerit velit.";

function OurDoggosScreen(props) {
  return (

    <div className="album py-5 bg-light">

      <div className="container">

        <h1 className="py-5">Our doggos</h1>

        <div className="row">
          <DoggoCard
            imageUrl="./images/our-doggos/number-one.jpeg"
            title="Doggo #1"
            text={loreIpsum} />
          <DoggoCard
            imageUrl="./images/our-doggos/number-two.jpeg"
            title="Doggo #2"
            text={loreIpsum} />
          <DoggoCard
            imageUrl="./images/our-doggos/number-three.jpeg"
            title="Doggo #3"
            text={loreIpsum} />
          <DoggoCard
            imageUrl="./images/our-doggos/number-four.jpeg"
            title="Doggo #4"
            text={loreIpsum} />
          <DoggoCard
            imageUrl="./images/our-doggos/number-five.jpeg"
            title="Doggo #5"
            text={loreIpsum} />
          <DoggoCard
            imageUrl="./images/our-doggos/number-six.jpeg"
            title="Doggo #6"
            text={loreIpsum} />
          <DoggoCard
            imageUrl="./images/our-doggos/number-seven.jpeg"
            title="Doggo #7"
            text={loreIpsum} />
          <DoggoCard
            imageUrl="./images/our-doggos/number-eight.jpeg"
            title="Doggo #8"
            text={loreIpsum} />
          <DoggoCard
            imageUrl="./images/our-doggos/number-nine.jpeg"
            title="Doggo #9"
            text={loreIpsum} />
        </div>
      </div>
    </div>
  );
}

export default OurDoggosScreen;