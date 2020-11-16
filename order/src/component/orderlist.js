import React,{useEffect, useState} from "react";
import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion , Button } from "react-bootstrap";
import editOrder from "./editOrder"
import axios from "axios";

const Orderlist = (props) => {
    const [data,setdata] = useState([])
    const [isloaded,setisloaded] = useState(false)
    useEffect(( )=> {
    axios.get('http://localhost:8080/AllOrder').then((response) => {
        setdata(response.data)
        setisloaded(true);
        console.log(response.data);
    })
    }, []);
    if (isloaded){
  return (
    <div>
      <div className="content">
        <p className="TitleList">List Order</p>
      {data.map((datas) => {
        return (
          <div className="boxOrder bg-secondary">
              <Accordion defaultActiveKey="0">

            <div className="row headorder">
              <div className="col-10">
                <div className="boxtitle">Order ID : {datas.id}</div>
                <div className="boxuser">
                  User ID : {datas.user_id} Time : {datas.time}
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
                <Accordion.Toggle as={Button} variant="btn btn-primary ml-3 mt-3" eventKey={datas.id}>
                    Detail
                </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={datas.id}>
              <div>
                <hr color="black" />
                <div className="titleorderlist">Order List :</div>
                <div className="row collapse show">
                  {datas.product.map((product) => {
                    return (
                      <div className="boxProduct col-3 bg-dark" id={datas.id}>
                    
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
