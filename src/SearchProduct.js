import React, { useState } from "react";
import Header from "./Header";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
function SearchProduct() {
    const [data, setData] = React.useState([]);
    async function search(key) {
        let result = await fetch("http://127.0.0.1:8000/api/search/" + key);
        result = await result.json();
        setData(result);
    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1 className="col-sm-7 offset-sm-3"> Search Product</h1>
                <br />
                <input className="form-control" onChange={(e) => search(e.target.value)} type="text" placeholder="Search Product" />
            </div>
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

export default SearchProduct;