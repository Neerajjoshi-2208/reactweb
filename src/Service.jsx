import React from "react";
import Card from "./Card";
import CData from "./CData"

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center service">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            {CData.map((val, index)=>{
                                return<Card
                                    key = {index}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;