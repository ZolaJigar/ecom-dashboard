import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    React.useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/add");
        }
    }, [])

    async function Login() {
        let item = { email, password };

        let result = await fetch("http://127.0.0.1:8000/api/login   ",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(item)
            });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        navigate("/add");
        // console.log(email,password);
    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1 className="col-sm-5 offset-sm-3" >Login Page</h1>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control " />
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control " />
                <br />
                <button className="btn btn-primary col-sm-5 offset-sm-2" onClick={Login}>Login</button>
            </div>
        </div>
    )
}

export default Login;