import React,{useEffect, useState} from "react";
import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion , Button } from "react-bootstrap";
import editOrder from "./editOrder"
import axios from "axios";
import loading from '../asset/loading.gif'; 

import { Route,Link } from "react-router-dom";
const Orderlist = (props) => {
    const [data,setdata] = useState([])
    const [isloaded,setisloaded] = useState(false)
    useEffect(( )=> {
        axios.get('http://localhost:8080/AllOrder').then((response) => {
            setdata(response.data)
            setisloaded(true);
            console.log(response.data);
            console.log(data);
        })
    }, []);

    const deleteorder = (id) => {
        axios.delete('http://localhost:8080/deleteOrder/'+id).then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
    if (isloaded){
  return (
    <div>
      <div className="content">
        <p className="TitleList"><a className="blue">List</a> Order</p>
      {data.map((datas) => {
        return (
          <div className="boxOrder bg-secondary">
              <Accordion defaultActiveKey="0">

            <div className="row headorder">
              <div className="col-9">
        
                <div className="boxtitle"><a className="text-dark black">Order ID </a>: {datas.id}</div>
                <div className="boxuser">
                  User ID : {datas.user_id} Time : {datas.time}
                </div>
              </div>
             
              <div className='col-3'>
                  <div className="row">
                  <Link to={"/Editorder/"+datas.id} className="btn btn-warning mr-2 text-light">
                  Edit
                  </Link>
                <form >
                <button type="submit" className="btn btn-danger mr-2" onClick={() => {deleteorder(datas.id)}}>
                  Delete
                </button>
                <button type="submit" className="btn btn-primary text-light" onClick={() => {editOrder(datas.id)}}>
                  Cancel
                </button> 
                 </form>
                 </div>
              </div>
                <Accordion.Toggle as={Button} variant="btn btn-dark ml-3 mt-3" eventKey={datas.id}>
                    Detail
                </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={datas.id}>
              <div>
                <hr color="black" />
                <div className="titleorderlist">Order List :</div>
                <div className="row collapse show">
                  {datas.product.map((products) => {
                    return (
                      <div className="boxProduct bg-dark ml-4 card">
                      <div className="card-header bg-dark">
                    <div>Product Id : {products.product_id}</div>
                    </div>
                    <div className="card-body bg-dark">
                    <div>Shop Id : {products.shop_id}</div>
                    <div>Name : {products.productName}</div>
                    <div>Special Name : {products.special_name}</div>
                    <div>
                      Amount : {products.amount} Price : {products.price}
                    </div>
                    <div>Shipping : {products.shipping_option_id}</div>
               
                   </div>
          
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
            <div className="text-center"><img src={loading} className="loading"></img></div>
        )
    }
};
export default Orderlist;
