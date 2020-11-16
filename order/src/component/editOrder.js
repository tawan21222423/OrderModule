import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState } from "react";


const Orderlist = (props) => {
  const [product, setproduct] = useState([" "]);
  const [productList, setproductList] = useState([]);
  const [amount,setamount] = useState(0)
  const [id,setid] = useState(0)
  const [user_id,setuser_id] = useState(0)
  const [shipping,setshipping] = useState('')
  const [productName,setproductName] = useState('')
  const [price,setprice] = useState(0)
  const [productOb, setproductOb] = useState({
            amount: 0,
            shipping: "",
            productName: "",
            price: 0.0,
  });
  const [orderbig, setorderbig] = useState({
    id: 0,
    user_id: 0,
    product: []
});
  const [p, setp] = useState(1);


  const updatetodatabase = () =>{
    // const set = {
    //   id: id,
    //   user_id: user_id,
    //   product: productList
    // }
    // setorderbig(set);
    // axios.put('http://localhost:8080/updateOrder', orderbig)
    // .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // })
}


  // const render = (props) => {
  //   axios.get('http://localhost:8080/getOrderDetails/{id}').then((res) => {
  //           setproductName(productName);
  //           setamount(amount);
  //           setprice(price);
  //           setshipping(shipping);
  
  //       })
    
  // };
    return(
      <div className="pb-5">
      <p className="TitleList">Edit Order</p>
      <form>
        <div class="row">
          <div class="col-3 ml-4">
            <label> Order ID </label>
            <input
              type="text"
              class="form-control"
              placeholder="Order Id"
              onChange={(event) => {
                setid(event.target.value);
              }}
            ></input>
          </div>
          <div class="col-3 ml-4">
            <label> ProductId if you want!!</label>
            <input
              type="text"
              class="form-control"
              placeholder="ProductId?????"
              onChange={(event) => {
                setuser_id(event.target.value);
              }}
            ></input>
          </div>
        </div>
        <hr color="white" />
        <div className="hiddens">{p}</div>
        <div className="row">
        {productList.map((products,index) => (
          <div className="boxProduct col-3 bg-secondary ml-4">
            <div>Product : {index+1}</div>    
          <div>Name : {products.productName}</div>
          <div>
            Amount : {products.amount} Price : {products.price}
          </div>
          <div>shipping : {products.shipping}</div>

        </div>
        ))}
        <hr color="white" />
        </div>

            <div>
            <div className="mt-2 ml-4">Product</div>
            <div class="row productadd mt-2">
              <div class="col-2 ml-4">
                <label> Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Product Name"
                  onChange={(event) => {
                    setproductName(event.target.value);
                  }}
                ></input>
              </div>
              <div class="col-2 ml-2">
                <label> Amount</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Amount"
                  onChange={(event) => {
                    setamount(event.target.value);
                  }}
                ></input>
              </div>
              <div class="col-3 ml-2">
                <label> Price</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="User Price"
                  onChange={(event) => {
                    setprice(event.target.value);
                  }}
                ></input>
              </div>
              <div class="col-3 ml-2">
                <label> Shipping</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="User Price"
                  onChange={(event) => {
                    setshipping(event.target.value);
                  }}
                ></input>
              </div>
              {/* <div className="justify-content-center">
              <label> เพิ่มสินค้า</label>
                <button
                  type="button"
                  className="btn btn-success form-control"
                  onClick={() => {
                   addinlist();
                  }}
                >
                  ?????
                </button>
              </div> */}
            </div>
            <div className="text-center">
            <button
                  type="button"
                  className="btn btn-success col-8 mt-5 ml-4"
                  onClick={() => {
                   updatetodatabase();
                  }}
                >
                  Update
                </button></div>
          </div>
      </form>
    </div>
    )
                
                

};
export default Orderlist;
