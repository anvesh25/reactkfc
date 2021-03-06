import * as React from 'react';
import IProduct from '../../models/product';
import './product.css';
import {Link } from "react-router-dom";

interface IProps 
{
    item: IProduct,
    onAddToCart: Function        
}
// class Product extends React.Component<IProps>{
    // public render(){
    // const Product: React.SFC<IProps>=({props}: IProps) =>
    // Declaration way in ES6 
    const Product: React.SFC<IProps>=({item, onAddToCart}: IProps) => 
    {
        const onClickEvent = () => {
            onAddToCart();
        };
        return (
            <div className="col-6 product">
                <div className="card big-info">
                    <img className="card-img-top" src={item.imageUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">
                            {item.title}
                        </h5>
                        <p className="card-text">
                            {item.description}
                        </p>
                        <p className="card-text">
                            Price: {item.price}
                        </p>

                        <div>
                            <button 
                                onClick={onClickEvent} 
                                className="btn btn-success"> Add to cart 
                            </button>
                            <Link  className="btn btn-primary" to={'/details/'+item.id}>Product Details</Link>   
                        </div>
                    </div>
                </div>  
                {item.title}
            </div>
        )
   }
// }

export default Product;
