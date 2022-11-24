import Header from "./Header";
import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
function ProductList() {
    const [data, setData] = React.useState([]);
    // React.useEffect(async () => {
    //     let result = await fetch("http://127.0.0.1:8000/api/list");
    //     result = await result.json();
    //     setData(result);
    // }, []);

    async function ProductData() {
        let result = await fetch("http://127.0.0.1:8000/api/list");
        result = await result.json();
        setData(result);
    }
    React.useEffect(() => {
        ProductData();
    }, []);
    console.log("Result", data);

    async function deleteOpreation(id) {
        let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
            method: "DELETE"
        });
        result = await result.json();
        console.log(result);
        ProductData();
    }
    return (
        <div>
            <Header />
            <h1 className="col-sm-6 offset-sm-4">Product List</h1>
            <br />
            <Table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                {
                    data.map((item) =>
                        <tbody>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td><img style={{ width: 40 }} src={"http://localhost:8000/" + item.file_path} /></td>
                                <td><span onClick={() => deleteOpreation(item.id)} className="delete">Delete</span></td>
                                <td>
                                    <Link to={"update/" + item.id}>
                                        <span className="update">update</span>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    )
                }
            </Table>
        </div>
    )
}

export default ProductList;