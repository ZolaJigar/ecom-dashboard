import React, { useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import Header from "./Header";
function UpdateProduct(props) {
    const params = useParams();
    const id = params.id;
    const [data, setData] = React.useState([]);

    async function getData() {
        let result = await fetch("http://127.0.0.1:8000/api/getProduct/" + id);
        result = await result.json();
        setData(result);
    }
    React.useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <Header />
            <div className="col-sm-8 offset-sm-3">
                <div className="col-sm-8 offset-sm-1">
                    <h1 className="col-sm-8 offset-sm-3">Update Product</h1>
                    <input className="form-control" type="text" defaultValue={data.name} />
                    <br />
                    <input className="form-control" type="text" defaultValue={data.price} />
                    <br />
                    <input className="form-control" type="text" defaultValue={data.description} />
                    <br />
                    <input className="form-control" type="file" defaultValue={data.file_path} />
                    <br />
                    <img className="form-control" style={{ width: 50 }} src={"http://localhost:8000/" + data.file_path} />
                    <button className="btn btn-primary col-sm-8 offset-sm-2">Update Product</button>
                </div>
            </div>
        </>
    )
}

export default UpdateProduct;