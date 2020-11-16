import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { render } from "@testing-library/react";
import { Accordion, Button } from "react-bootstrap";
import editOrder from "./editOrder"

const Orderlist = (props) => {
  const [search, setsearch] = useState();
  const [items, setItems] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const render = (props) => {
    axios.get("http://localhost:8080/getOrderDetails/" + search).then(function (response) {
        // handle success
        console.log(response);
        setItems(response.data);
        if(response.data){
            setIsLoaded(true);
        }
        console.log(items);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setIsLoaded(false);
      })
      .then(function () {
        // always executed
      });
    
  };
  if (isLoaded) {
    return (
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
        <div>
          <div className="boxOrder bg-secondary">
            <Accordion defaultActiveKey="0">
              <div className="row headorder">
                <div className="col-10">
                  <div className="boxtitle">Order ID : {items.id}</div>
                  <div className="boxuser">
                    User ID : {items.user_id} Time : {items.time}
                  </div>
                </div>
                <div className="col-2">
                  <button
                    type="button"
                    className="btn btn-warning mr-2 text-light"
                    onClick={editOrder}
                  >
                    Edit
                  </button>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </div>
                <Accordion.Toggle
                  as={Button}
                  variant="btn btn-primary ml-3 mt-3"
                  eventKey={items.id}
                >
                  Detail
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey={items.id}>
                <div>
                  <hr color="black" />
                  <div className="titleorderlist">Order List :</div>
                  <div className="row collapse show">
                    {items.product.map((product) => {
                      return (
                        <div className="boxProduct col-3 bg-dark" id={items.id}>
                          
                          <div>Name : {product.productName}</div>
                          <div>
                            Amount : {product.amount} Price : {product.price}
                          </div>
                          <div>shipping : {product.shipping}</div>
                          {/*<button type="button" className="btn btn-warning mr-2 text-light" onClick={()=>editOrder()}>  
                            Edit
                          </button>
                          <button type="button" className="btn btn-danger" onClick={()=>editOrder()}>
                            Delete
                          </button>*/}
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
