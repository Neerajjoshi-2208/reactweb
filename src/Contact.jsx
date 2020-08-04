import React, { useState } from "react";


    const Contact = () => {
        const[Data, setData] = useState({
            name:"",
            email:"",
            phone:"",
            query:"",
        });

    const InputEvent = (event) => {
        const{ name, value } = event.target;

        setData((preVal)=>{
            return {
                ...preVal,
                [name] : value,
            }
        })
    };

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My name is ${Data.name}. My email address is ${Data.email}. My phone number is ${Data.phone}. My query or feedback is ${Data.query}.`);
        setData({
            name:"",
            email:"",
            phone:"",
            query:"",
        });
    };
    
    return (
        <>
            <div className="my-5">
                <h1 className="text-center Contact">Contact Us</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 col-10 order-2 order-lg-1 mx-auto">
                                <h3 className="my-5">PahadiBoy</h3>
                                <h5>Email: Neerajjoshi2208@gmail.com</h5>
                                <h5>Contact: +91 8800255416</h5>
                                <h5>Address: E-126/B Lajpat Nagar Sahibabad, Ghaziabad, Uttar Pradesh 201005</h5>
                            </div>
                            <div className="col-md-6 col-10 order-1 order-lg-2 mx-auto">
                                <form onSubmit={formSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Name</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" name = "name" value={Data.name} onChange={InputEvent} placeholder="Enter your full name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name = "email" value={Data.email} onChange={InputEvent} placeholder="Enter your email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Phone</label>
                                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="phoneHelp" name = "phone" value={Data.phone} onChange={InputEvent} placeholder="Enter your mobile number" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name = "query" value={Data.query} onChange={InputEvent} placeholder="Enter your feedback and query"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;