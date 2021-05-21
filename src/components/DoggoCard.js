import React from "react";

const boxStyle = {
  display: "inline-block",
};

const imageStyle = {
  backgroundPosition: "center",
  backgroundSize: "cover",
};
const textStyle = {
  widht: "250px",
};

function DoggoCard(props) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow" style={boxStyle}>
        <img
          src={`${props.imageUrl}`}
          style={imageStyle}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body" style={textStyle}>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-primary">
                Meet
              </button>
              <button type="button" className="btn btn-primary">
                Adopt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoggoCard;
