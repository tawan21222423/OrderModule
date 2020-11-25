import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState,useEffect } from "react";
import { Redirect,useHistory,useParams  } from 'react-router-dom'
import loading from '../asset/loading.gif'; 
const product = [{
  id: 1,
  shop_id: 1,
  name: "Nintendo Switch™ Joy-Con Controllers",
  picture: "https://cf.shopee.co.th/file/1d840ac92507ef12dbbfa9cb299012ed_tn",
  description: "Nintendo Switch™ Joy-Con Controllers สินค้าของแท้ กล่องญี่ปุ่น",
  categorys: [
    {
      id: 1,
      name: "Gaming"
    }
  ],
  options: [
    {
      id: 1,
      amount: 5,
      name: "แดงฟ้า Neon",
      picture: "https://cf.shopee.co.th/file/1d840ac92507ef12dbbfa9cb299012ed_tn",
      price: 2490,
      weight: 0.049
    },
    {
      id: 2,
      amount: 7,
      name: "ม่วงส้ม PurpleOrange",
      picture: "https://cf.shopee.co.th/file/7dff664bb3aee95f4211a77b59f0beb3",
      price: 2500,
      weight: 0.049
    },
    {
      id: 3,
      amount: 3,
      name: "เขียวชมพู GreenPink",
      picture: "https://j.lnwfile.com/8p5jwe.jpg",
      price: 2590,
      weight: 0.049
    }
  ]
},
{
  id: 2,
  shop_id: 1,
  name: "Nintendo Switch™ Joy-Con Controllers",
  picture: "https://cf.shopee.co.th/file/1d840ac92507ef12dbbfa9cb299012ed_tn",
  description: "Nintendo Switch™ Joy-Con Controllers สินค้าของแท้ กล่องญี่ปุ่น",
  categorys: [
    {
      id: 1,
      name: "Gaming"
    }
  ],
  options: [
    {
      id: 2,
      amount: 7,
      name: "ม่วงส้ม PurpleOrange",
      picture: "https://cf.shopee.co.th/file/7dff664bb3aee95f4211a77b59f0beb3",
      price: 2500,
      weight: 0.049
    },
    {
      id: 3,
      amount: 3,
      name: "เขียวชมพู GreenPink",
      picture: "https://j.lnwfile.com/8p5jwe.jpg",
      price: 2590,
      weight: 0.049
    }
  ]
},]
const shippings = [
      {
        id: 'M415',
        name: 'Kerry',
        price: 10,
      },
      {
        id: 'M416',
        name: 'Kerra',
        price: 10,
      },
]

const address = [
  {
    address_id: 305,
    province: "BKK",
    district: "Laksi",
    sub_district: "Tungsonghong",
    road: "Vipaw",
    number: "11",
    postal_code: "10210"
  },
  {
    address_id: 405,
    province: "SMP",
    district: "Lak",
    sub_district: "songhong",
    road: "Vi",
    number: "121",
    postal_code: "10299"
  },
]

const Orderlist = (props) => {
  const history = useHistory();
  const [loadedpage, setloadedpage] = useState(false);
  const [Address,setAddress]= useState()
  const [loaded, setloaded] = useState(false);
  const [loadedUser, setloadedUser] = useState(false);
  const [productList, setproductList] = useState([]);
<<<<<<< HEAD
  const [amount,setamount] = useState()
=======
  const [amount,setamount] = useState(0)
>>>>>>> parent of b660466... add
  const [user_id,setuser_id] = useState(0)
  const [shipping,setshipping] = useState('Kerry')
  const [productID,setproductID] = useState()
  const [productSName,setproductSName] = useState('')
  const [price,setprice] = useState(0)
  const [productOb, setproductOb] = useState();
  const [optionOb, setoptionOb] = useState();
  const [orderbig, setorderbig] = useState();
  const addAddress= (event) =>{
      console.log(event.target.value)
      let obj = address.find(o => o.address_id == event.target.value);
      setAddress(obj)
  }
  const data = useParams()
  useEffect(()=>{
    axios.get('http://localhost:8080/getOrderDetails/'+data.id).then(res => {
        console.log(res);
        console.log(res.data);
        setorderbig(res.data)
        setproductList(res.data.product)
        setuser_id(res.data.user_id);
        setAddress(res.data.address)
        setloadedpage(true) 
      })
  },[])
  const [p, setp] = useState(1);
  const  addtodatabase = () =>{
      axios.put('http://localhost:8080/updateOrder', {
          id : data.id,
          user_id: user_id,
          product: productList,
          address: Address,
        })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      setTimeout(() => {
        history.push("/");
      }, 1000);
  }
  const addinlist = () =>{
        const dic = {
            amount: amount,
            shipping_option_id: shipping,
            product_id: productOb.id,
            price: optionOb.price,
            productName : productOb.name,
            option_id: optionOb.id,
            special_name : optionOb.name,
            shop_id : productOb.shop_id,
        }
        const list = productList
        list.push(dic)
        setproductList(list)
        setp(p+1)
        console.log(productList)
  }
  //console.log(product);
  const productVertify = () => {
    let obj = product.find(o => o.id == productID);
    setproductOb(obj)
    console.log(obj)
    if(true){
      setloaded(true)
<<<<<<< HEAD
      setoptionOb(obj.options[0])
      setshipping(shippings[0].id)
      setamount(1)
=======
>>>>>>> parent of b660466... add
      console.log('hello')
    }else{
      setloaded(false)
    }

  }
  
  const addoption = (event) => {
    let obj = productOb.options.find(o => o.id == event.target.value);
    console.log(obj)
    setoptionOb(obj)
  }

  const UserVertify = () => {
    if(true){
      setloadedUser(true)
      console.log('hello')
    }else{
      setloadedUser(false)
    }

  }
if(loadedpage){
  return (
    <div className="pb-5">
      <p className="TitleList">Edit <a className="blue"> Order</a></p>
      <form>
        <div className="row">
          <div className="col-3 ml-4">
            <label> User ID </label>
            <input
              type="text"
              class="form-control"
              placeholder="User Id"
              disabled = {true}
              value={user_id}
              onChange={(event) => {
                setuser_id(event.target.value);
              }}
            ></input>
            <button type="button" className="btn btn-primary mt-2" onClick={() => {UserVertify()}}>Vertify User</button>
                   <div className="mt-2">
                   <label>Address</label>
                   
                   <select type="text" className="form-control" value={Address.address_id} onChange={(event) => {
                       addAddress(event)
                     }}>
                   {address.map((itemo) => (
                          <option value={itemo.address_id}> {itemo.province} {itemo.address_id}</option>
                   ))}
                  </select>
                 </div>
   
              
                <div></div>
              
          </div>
        </div>
        <hr color="white" />
        <div className="hiddens">{p}</div>
        <div className="row">
        {productList.map((products,index) => (
          <div className="boxProduct bg-secondary ml-4 card">
            <div className="card-header bg-secondary">
          <div>Product Id : {products.product_id}</div>
          </div>
          <div className="card-body bg-secondary">
          <div>Shop Id : {products.shop_id}</div>
          <div>Name : {products.productName}</div>
          <div>Special Name : {products.special_name}</div>
          <div>
            Amount : {products.amount} Price : {products.price}
          </div>
          <div>Shipping : {products.shipping_option_id}</div>
          <div className="row">
          <button type="button" className="btn btn-danger mt-2 col mb-0" 
          onClick={() => {
            const list = productList
            list.splice(index,1)
            console.log(list)
            setproductList(list)
            setp(p+1)
          }}>Delete</button></div>
          <div className="hiddens">{p}</div>
        </div></div>
        ))}
        <hr color="white" />
        </div>

            <div>
            <div className="mt-2 ml-4">Product</div>
            <div className="row productadd mt-2">
              <div className="col-2 ml-4">
                <label> Id Product</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Id"
                  onChange={(event) => {
                    setproductID(event.target.value);
                  }}
                ></input>
                <button type="button" className="btn btn-primary mt-2" onClick={() => {productVertify()}}>Vertify</button>
              </div>
              {loaded ? (
                <div className="form-row">
                   <div className=" ml-4">
                   <label>Special Name</label>
                   <select type="text" className="form-control" onChange={(event) => {
                      addoption(event)
                     }}>
                   {productOb.options.map((item) => (
                        <option value={item.id}>{item.name}</option>
                   ))}
                  </select>
                 </div>
                 <div className=" ml-2">
                <label> Shipping</label>
                <select type="text" className="form-control" onChange={(event) => {
                    setshipping(event.target.value);
                  }}>
                {shippings.map((option) => (
                  <option value={option.id}>{option.name}</option>
                ))}
               </select>
              </div>
                 </div>
   
              ):(
                <div></div>
              )}
         
              <div className="col-2 ml-2">
                <label> Amount</label>
                <input
                  type="number"
<<<<<<< HEAD
                  
=======
>>>>>>> parent of b660466... add
                  className="form-control"
                  placeholder="Amount"
                  
                  onChange={(event) => {
                    setamount(event.target.value);
                  }}
                ></input>
              </div>
              <div className="justify-content-center">
              <label> เพิ่มสินค้า</label>
                <button
                  type="button"
                  className="btn btn-success form-control"
                  onClick={() => {
                   addinlist();
                  }}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="text-center">
            <button
                  type="button"
                  className="btn btn-success col-8 mt-5 ml-4"
                  onClick={() => {
                   addtodatabase();
                  }}
                >
                  Submit
                </button></div>
          </div>
      </form>
    </div>
  );}else{
    return(
      <div className="text-center"><img src={loading} className="loading"></img></div>
    )
  }
};
export default Orderlist;
