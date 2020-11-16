
import './App.css';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Orderlist from './component/orderlist';
function App() {
  return (
    <div>
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <span class="navbar-brand h1">Main</span>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Add</a>
        </li>
      </ul>
    </nav>
    <div className="container">
     <p className="text-center Title">Order <a className="blue">Module</a></p>
      <div className="content">
        <p className="TitleList">List Order</p>
        <Orderlist/>

      </div>
    </div>
    </div>
  );
}

export default App;
