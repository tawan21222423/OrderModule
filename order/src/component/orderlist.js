
import '../main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [{
    "id": 40,
    "user_id": 20,
    "product": [
        {
            "amount": 30,
            "shipping": "Express",
            "productName": "Toyota",
            "price": 50000.0
        },
        {
            "amount": 2,
            "shipping": "Express",
            "productName": "Lambo",
            "price": 1200000.0
        },
        {
            "amount": 7,
            "shipping": "Express",
            "productName": "Ferrari",
            "price": 2000000.0
        },
        {
            "amount": 20,
            "shipping": "Express",
            "productName": "Honda",
            "price": 2000000.0
        }
    ],
    "status": "success",
    "time": "2020/11/16 01:34:24"
  },
  {
    "id": 40,
    "user_id": 20,
    "product": [
        {
            "amount": 30,
            "shipping": "Express",
            "productName": "Toyota",
            "price": 50000.0
        },
        {
            "amount": 2,
            "shipping": "Express",
            "productName": "Lambo",
            "price": 1200000.0
        },
        {
            "amount": 7,
            "shipping": "Express",
            "productName": "Ferrari",
            "price": 2000000.0
        },
        {
            "amount": 20,
            "shipping": "Express",
            "productName": "Honda",
            "price": 2000000.0
        }
    ],
    "status": "success",
    "time": "2020/11/16 01:34:24"
  }]
  

const orderlist = () => {

    return(
        <div>
            {data.map((data) => {
                return(
                    <div className="boxOrder">
                        <div className="boxtitle">Order ID : {data.id}</div>
                        <div className="boxuser">User ID : {data.user_id} Time : {data.time}</div>
                        <hr color='black'/>
                        <div className="titleorderlist">Order List : </div>
                        <div className="row"> {data.product.map((product) => {
                            return(
                            
                                <div className="boxProduct col-3">
                                    <div>Name : {product.productName}</div>
                                    <div>Amount : {product.amount} Price : {product.price}</div>
                                    <div>shipping : {product.shipping}</div>
                                </div>

                            )
                                
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
} 
export default orderlist;