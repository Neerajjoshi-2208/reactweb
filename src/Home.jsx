import React from "react";
import Commonhead from "./Commonhead";
import MTeam from "./MTeam";
import Img from "../src/images/about.svg";

const Home = () =>{
    return(
        <>
          <Commonhead name="Grow your business with" imgsrc={Img} link="/service" btn_name="Get Started" />  
          <MTeam/>
        </>
    )
}

export default Home;