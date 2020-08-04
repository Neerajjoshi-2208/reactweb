import React from "react";
import Commonhead from "./Commonhead";
import Img from "../src/images/header.svg";

const About = () =>{
    return(
        <>
            <Commonhead name="Welcome to About Page" imgsrc={Img} link="/contact" btn_name="Contact Now" />
            <div className="container">
                <p className="text-justify">
                    Web development is the work involved in developing a website 
                    for the Internet (World Wide Web) or an intranet (a private network). 
                    Web development can range from developing a simple single static page of
                    plain text to complex web-based internet applications (web apps), 
                    electronic businesses, and social network services. A more comprehensive
                    list of tasks to which web development commonly refers, may include web 
                    engineering, web design, web content development, client liaison, 
                    client-side/server-side scripting, web server and network security 
                    configuration, and e-commerce development.
                 </p> 
            </div>
        </>
    )
}

export default About;