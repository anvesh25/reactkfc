import * as superagent from 'superagent';
import * as React from 'react';
import ProductList from '../../components/product-list/productlist';
import ICartItem from '../../models/cartitem';
import IProduct from '../../models/product';

interface IState 
{
  cart: ICartItem[];
  products: IProduct[];
  soleorder: boolean;
  
}
class Home extends React.Component{
    public state : Readonly<IState> = 
    {
        cart: [],
        products: [],
        soleorder:true
    };
    // Moved code from App.tsx to Home.tsx file to display Cart items
    public getCart =() => 
    {
        superagent
        .get('http://5b209253ca762000147b256a.mockapi.io/api/cart')
        .end((err: superagent.ResponseError, res: superagent.Response) =>{
            this.setState({
            cart:res.body
            
            })
        })
    }
    // Moved code from App.tsx to Home.tsx file to display products
    public getProduct = () => 
    {
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
    // Moved code from App.tsx to Home.tsx file to display products
    componentDidMount()
    {
        console.log('componentDidMount')
        this.getProduct();
        this.getCart();
            
    }
    public render(){
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
            // to allow multiple components use below Fragment
            <React.Fragment>
                <ProductList 
                    getCart = {this.getCart}
                    list ={this.state.products}
                />
                {loadercomponent}
            </React.Fragment>
        )
    }
}

export default Home;