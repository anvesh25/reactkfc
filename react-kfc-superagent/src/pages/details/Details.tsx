import * as superagent from 'superagent';
import * as React from 'react';
import IProduct from '../../models/product';

interface IProps 
{
    match: {
        params: {
            productId: string
        }
    }
}
interface IState{
    productDetails:IProduct
}


class Details extends React.Component<IProps>{
    public state: Readonly<Partial<IState>> ={
        productDetails:undefined
    }
    componentDidMount()
        {
            console.log('componentDidMount')
            const url ='http://5b209253ca762000147b256a.mockapi.io/api/products/'+this.props.match.params.productId
            superagent
            .get(url)
            .end((err: superagent.ResponseError, res: superagent.Response) =>{
                this.setState({
                productDetails:res.body
                
                })
            })
        }
    public render(){
        
        return (
                <div>
                    { /* to add comments on this section use below way*/}
                    { /*This is the Product details of {this.props.match.params.productId}. */ } 
                    <p>Name: {this.state.productDetails ? this.state.productDetails.description: 'no products'}</p>
                    { /*<p>{Image src='https://unsplash.it/200?image={{i}}' this.state.productDetails ? this.state.productDetails.imageUrl: 'no productd'}</p> */}
                    <p>Proce: {this.state.productDetails ? this.state.productDetails.price: 'no products'}</p>
                </div>
            )
    }
}
export default Details;