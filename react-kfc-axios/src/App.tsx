import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import './App.css';
import MiniCart from './components/mini-cart/minicart';
import ProductList from './components/product-list/productlist';
import ICartItem from './models/cartitem';
import IProduct from './models/product';


interface IState {
  cart: ICartItem[];
  products: IProduct[];
}

class App extends React.Component<{}, IState> 
{ 
  public state : Readonly<IState> = 
  {
    cart: [],
    products: []
      // {"id":1,"title":"Licensed Wooden Gloves","description":"Iran data-warehouse virtual","price":628.00,"imageUrl":"https://unsplash.it/200?image=1"},
      // {"id":2,"title":"Practical Rubber Gloves","description":"Borders Libyan Arab Jamahiriya","price":324.00,"imageUrl":"https://unsplash.it/200?image=2"},
    // ]
  };

  componentDidMount(){
    const promise =axios.get('http://5b209253ca762000147b256a.mockapi.io/api/products');
    promise.then((response) => {
      // console.log(response.data);
      this.setState({
        products: response.data
      })
    }, (err) => {
      console.log('error')
    });
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
          <div className="col-2">
            <h3> Food App </h3>
          </div>
          <div className="col-2">
            <MiniCart cart = {this.state.cart}/>
          </div>
        </nav>
        <div className="container">
            <ProductList list ={this.state.products}/>
        </div>
      </div>
    );
  }
}

export default App;
