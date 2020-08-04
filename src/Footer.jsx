import React from "react";


const Footer = () => {
    const curryear = () => {
        var year = new Date().getFullYear();
        return year;
    }



    return (
        <>
            <div className="container-fluid footer">
                <h6 className="text-center">copyright &copy; {curryear()}, Design by JOSHITECH</h6>
            </div>
        </>
    )
}
export default Footer;