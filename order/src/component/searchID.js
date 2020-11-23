import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import editOrder from "./editOrder"
import { Route,Link } from "react-router-dom";

const Orderlist = (props) => {
  const [search, setsearch] = useState();
  const [items, setItems] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const render = async (props)  => {
        const res = await axios.get("https://ordermodule.herokuapp.com/getOrderDetails/" + search)
        console.log(res.data);
        
        if(res.data){
          setItems(res.data)
          setIsLoaded(true)
          console.log('Yes')
        }
        else{
          console.log('No')
          setIsLoaded(false)
        }
          
  };
  const deleteorder = (id) => {
    axios.delete('https://ordermodule.herokuapp.com/deleteOrder/'+id).then(res => {
    console.log(res);
    console.log(res.data);
  })
}
  const cancelorder = (id) => {
    axios.put('https://ordermodule.herokuapp.com/updateCancell/'+id).then(res => {
      console.log(res);
      console.log(res.data);
      setTimeout(() => {
        window.location.reload(false);
      }, 500);
    })
  }
  const successorder = (id) => {
    axios.put('https://ordermodule.herokuapp.com/updateSuccess/'+id).then(res => {
      console.log(res);
      console.log(res.data);
      setTimeout(() => {
        window.location.reload(false);
      }, 500);
    })
  }
  if (isLoaded) {
    return (
      <div className="pb-5 content">
        <div className="p-5">
          <div className="form-inline col-12  justify-content-center">
            <input
              className="form-control col-9"
              type="number"
              onChange={(event) => {
                setsearch(event.target.value);
              }}
              placeholder="Search order id"
              aria-label="Search"
            ></input>
            <button className="btn btn-success ml-2" onClick={() => render()}>
              Search
            </button>
          </div>
        </div>
        <div>
          <div className="boxOrder bg-secondary">
            <Accordion defaultActiveKey="0">
              <div className="row headorder">
                <div className="col-10">
                  <div className="boxtitle"><a className="text-dark black">Order ID </a> ID : {items.id}</div>
                  <div>{items.status}</div>
                  <div className="boxuser">
                    User ID : {items.user_id} Time : {items.time}
                  </div>
                </div>
                <div className="col-2">
                <Link to={"/Editorder/"+items.id} className="btn btn-warning mr-2 text-light">
                  Edit
                  </Link>
                  <button type="button" className="btn btn-danger mr-2" onClick={() => {deleteorder(items.id)}}>
                  Delete
                </button>
          
                </div>
                <Accordion.Toggle
                  as={Button}
                  variant="btn btn-dark ml-3 mt-3"
                  eventKey={items.id}
                >
                  Detail
                </Accordion.Toggle>
                <button type="submit" className="btn btn-light text-dark ml-3 mt-3" onClick={() => {cancelorder(items.id)}}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary text-light ml-3 mt-3" onClick={() => {successorder(items.id)}}>
                  Success
                </button>  
              </div>
              <Accordion.Collapse eventKey={items.id}>
                <div>
                  <hr color="black" />
                  <div className="titleorderlist">Order List :</div>
                  <div className="row collapse show">
                    {items.product.map((products) => {
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
        </div>
      </div>
    );
  } else {
      return(
    <div className="pb-5">
      <div className="p-5">
        <div className="form-inline col-12  justify-content-center">
          <input
            className="form-control col-9"
            type="number"
            onChange={(event) => {
              setsearch(event.target.value);
            }}
            placeholder="Search order id"
            aria-label="Search"
          ></input>
          <button className="btn btn-success ml-2" onClick={render}>
            Search
          </button>
        </div>
      </div>
      <div className="text-center">Not found</div>
    </div>
      )
  }
};
export default Orderlist;
