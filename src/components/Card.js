import React from 'react';

const cardStyle = {
    "border": "none"
}

function Card(props) {

    return (

        <div className="col-md col-lg-4 mb-3">
            <div className="card m-auto" style={cardStyle}>
                <img src={`${props.imageUrl}`} className="card-img-top" alt={props.caption} />
                <div className="card-body text-white bg-success">
                    {/*TODO use Link instead*/}
                    <a href="#" className="btn btn-success"><b>{props.caption}</b></a>
                </div>
            </div>
        </div>

    );

}

export default Card;