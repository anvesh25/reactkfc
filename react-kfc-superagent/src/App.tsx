import * as superagent from 'superagent';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import {Route, Link } from "react-router-dom";
import './App.css';
import MiniCart from './components/mini-cart/minicart';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Addproduct from './pages/addproduct/Addproduct';
import Details from './pages/details/Details';
import ICartItem from './models/cartitem';
import IProduct from './models/product';


interface IState {
  cart: ICartItem[];
  products: IProduct[];
  soleorder: boolean;
  
}

class App extends React.Component<{}, IState> 
{ 
  public state : Readonly<IState> = 
  {
    cart: [],
    products: [],
    soleorder:true
      // {"id":1,"title":"Licensed Wooden Gloves","description":"Iran data-warehouse virtual","price":628.00,"imageUrl":"https://unsplash.it/200?image=1"},
      // {"id":2,"title":"Practical Rubber Gloves","description":"Borders Libyan Arab Jamahiriya","price":324.00,"imageUrl":"https://unsplash.it/200?image=2"},
    // ]
  };

  public getCart =() => {
    superagent
      .get('http://5b209253ca762000147b256a.mockapi.io/api/cart')
      .end((err: superagent.ResponseError, res: superagent.Response) =>{
        this.setState({
          cart:res.body
          
        })
      })
  }

  componentDidMount()
  {
    console.log('componentDidMount')
      // this.getProduct();
      this.getCart();
         
  }
  // constructor()
  // {
    // super({});
    
  // }
  public render() 
  {    
    return (
      <div className ="container">
        <nav className="site-header sticky-top">
          <div className="col-4">
            <h3> Food App </h3>
          </div>
          <div className="col-4">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/addproduct">Add Product</Link>
                </li>
              </ul>
          </div>
          <div className="col-4">
            <MiniCart cart = {this.state.cart}/>
          </div>
        </nav>
        <div className="container">
                  <Route 
                    exact={true} 
                    path="/" 
                    component={Home} 
                  />
                <Route 
                  path="/about" 
                  component={About} 
                />
                <Route 
                //Adding dynamic properties bu putting a :
                  path="/details/:productId" 
                  component={Details} 
                />
                <Route 
                //Adding dynamic properties bu putting a :
                  path="/addproduct" 
                  component={Addproduct} 
                />            
        </div>
      </div>
    );
  }
}

export default App;
