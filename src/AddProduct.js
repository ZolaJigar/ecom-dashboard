import React, { useState } from "react";
import Header from "./Header";
function AddProduct() {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [file, setFile] = React.useState("");
    const [description, setDescription] = React.useState("");

    async function AddProduct(){ //using async so we can use await below
        const formData = new FormData();
        formData.append('file',file);
        formData.append('price',price);
        formData.append('name',name);
        formData.append('description',description);
        // console.log(name,file,price,description);

        let result = await fetch("http://127.0.0.1:8000/api/addproduct",
        {
            method:"POST",
            // headers:{
            //     "Content-Type":"application/json",
            //     "Accept":"application/json"
            // }
            body:formData,
        });
        alert("Data has been saved");
    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1 className="col-sm-6 offset-sm-3">Add Product</h1>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name" />
                <br />
                <input type="file" onChange={(e)=>setFile(e.target.files[0])} className="form-control" placeholder="file" />
                <br />
                <input type="text" onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder="price" />
                <br />
                <input type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control" placeholder="description" />
                <br />
                <button className="btn btn-primary col-sm-6 offset-sm-3" onClick={AddProduct}>Add Product</button>



            </div>
        </div>
    )
}

export default AddProduct;