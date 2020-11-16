import "./App.css";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Orderlist from "./component/orderlist";
import SearchID from "./component/searchID";
import Addorder from "./component/addOrder";
import editorder from "./component/editOrder";
import { Route } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [search, setsearch] = useState();
  const [items, setItems] = useState([]);
  const Searchorder = () => {
    axios.get("http://localhost:8080/getOrderDetails/" + search).then((res) => {
      console.log(res.data);
      const persons = res.data;
      setItems(persons);
      console.log(items);
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/Addorder">
                Add order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/searchID">
                find order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/Editorder">
                Edit Order
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container bg-dark text-light">
        <p className="text-center Title">
          Order <a className="blue">Module</a>
        </p>
        <Route exact path="/" component={Orderlist} />
        <Route path="/searchID" component={SearchID} />
        <Route path="/Addorder" component={Addorder} />
        <Route path="/Editorder" component={editorder} />
      </div>
    </div>
  );
}

export default App;
