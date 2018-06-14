import * as React from 'react';
import IProduct from '../../models/product';
import './product.css';

interface IProps {
    item: IProduct
}
class Product extends React.Component<IProps>{
    public render(){
        return (
            <div className="col-6 product">
                <div className="card big-info">
                    <img className="card-img-top" src={this.props.item.imageUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.item.title}
                        </h5>
                        <p className="card-text">
                            {this.props.item.description}
                        </p>
                        <div>
                            <button className="btn btn-success"> Add to cart </button>
                        </div>
                    </div>
                </div>  
                {this.props.item.title}
            </div>
        )
    }
}

export default Product;
