import React,{useEffect, useState} from "react";
import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion , Button } from "react-bootstrap";
import editOrder from "./editOrder"
import axios from "axios";

const Orderlist = (props) => {
    const [data,setdata] = useState()
    const [isloaded,setisloaded] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:8080/AllOrder').then((res) => {
            setdata(res.data);
            setisloaded(true);
            console.log(data);
        })
    });
    if (isloaded){
  return (
    <div>
      <div className="content">
        <p className="TitleList">List Order</p>
      {data.map((data) => {
        return (
          <div className="boxOrder bg-secondary">
              <Accordion defaultActiveKey="0">

            <div className="row headorder">
              <div className="col-10">
                <div className="boxtitle">Order ID : {data.id}</div>
                <div className="boxuser">
                  User ID : {data.user_id} Time : {data.time}
                </div>
              </div>
              <div className='col-2'>
                <button type="button" className="btn btn-warning mr-2 text-light">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
                <Accordion.Toggle as={Button} variant="btn btn-primary ml-3 mt-3" eventKey={data.id}>
                    Detail
                </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={data.id}>
              <div>
                <hr color="black" />
                <div className="titleorderlist">Order List :</div>
                <div className="row collapse show">
                  {data.product.map((product) => {
                    return (
                      <div className="boxProduct col-3 bg-dark" id={data.id}>
                    
                        <div>Name : {product.productName}</div>
                        <div>
                          Amount : {product.amount} Price : {product.price}
                        </div>
                        <div>shipping : {product.shipping}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              </Accordion.Collapse>
              </Accordion>
          </div>
        );
      })}
      </div>
    </div>
  );
    }else{
        return(
            <div className="text-center">Loading....</div>
        )
    }
};
export default Orderlist;
