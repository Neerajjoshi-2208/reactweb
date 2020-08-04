import React from "react";


const Team = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card mb-5">
                    <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.name}</h5>
                        <h5 className="card-title">{props.position}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;