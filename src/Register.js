import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
function Register() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    React.useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            navigate("/add")            ;
        }
    }, [])
    async function signup() {
        let item = { name, password, email };
        console.log(item);

        let result = await fetch("http://127.0.0.1:8000/api/register",
            {
                method: "POST", //method of api
                body: JSON.stringify(item),  //converting json data into string
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                } //we have to send headers
            }
        )
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/add");
        // console.log(result);
    }
    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1 className="col-sm-6 offset-sm-3">Register Page</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="name" />
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" />
                <br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email" />
                <br />
                <button className="btn btn-primary col-sm-3 offset-sm-4" onClick={signup}>Sign Up</button>

            </div>
        </>
    )
}

export default Register;