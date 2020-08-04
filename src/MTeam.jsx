import React from "react";
import Team from "./Team";
import TData from "./TData"

const MTeam = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center service">Our Team</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            {TData.map((val, index)=>{
                                return<Team
                                    key = {index}
                                    imgsrc={val.imgsrc}
                                    name={val.name}
                                    position={val.position}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MTeam;