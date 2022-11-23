import Header from "./Header";
import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
function ProductList() {
    const [data, setData] = React.useState([]);
    // React.useEffect(async () => {
    //     let result = await fetch("http://127.0.0.1:8000/api/list");
    //     result = await result.json();
    //     setData(result);
    // }, []);

    React.useEffect(() => {
        async function ProductData() {
            let result = await fetch("http://127.0.0.1:8000/api/list");
            result = await result.json();
            setData(result);
        }
        ProductData();
    }, []);

    console.log("Result", data);
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
                            </tr>
                        </tbody>
                    )
                }
            </Table>
        </div>
    )
}

export default ProductList;