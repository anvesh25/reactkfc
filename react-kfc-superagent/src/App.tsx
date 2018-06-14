import * as superagent from 'superagent';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import {Route, Link } from "react-router-dom";
import './App.css';
import MiniCart from './components/mini-cart/minicart';
import ProductList from './components/product-list/productlist';
import Home from './pages/home/Home';
import About from './pages/about/About';
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

public getProduct = () => {
  superagent
      .get('http://5b209253ca762000147b256a.mockapi.io/api/products')
      .end((err: superagent.ResponseError, res: superagent.Response) => 
      {
        // console.log(response.data);
          this.setState({
            products: res.body,
            soleorder:false
          })
      });
}

  componentDidMount()
  {
    console.log('componentDidMount')
      this.getProduct();
      this.getCart();
         
  }
  // constructor()
  // {
    // super({});
    
  // }
  public render() 
  {
    let loadercomponent = null;
    if(this.state.soleorder)
    {
      loadercomponent = (
        <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated" 
          role="progressbar" 
          aria-valuenow={75} 
          aria-valuemin={0} 
          aria-valuemax={100} />
      </div>
      )
    }
    
    return (
      <div className ="container">
        <nav className="site-header sticky-top">
          <div className="col-2">
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
              </ul>
          </div>
          <div className="col-2">
            <MiniCart cart = {this.state.cart}/>
          </div>
        </nav>
        <div className="container">
            <div className="row">
                <div className="col">
                  <Route 
                  exact={true} 
                  path="/" 
                  component={Home} 
                />
                <Route 
                  path="/about" 
                  component={About} 
                />
                </div>

            </div>
            <ProductList 
              getCart = {this.getCart}
              list ={this.state.products}
            />
            {loadercomponent}
        </div>
      </div>
    );
  }
}

export default App;
