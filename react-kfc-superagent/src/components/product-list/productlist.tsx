import * as React from 'react';
import * as superagent from 'superagent';
import IProduct from '../../models/product';
import Product from '../product/product';

interface IProps {
    list: IProduct[],
    getCart: Function
}

class ProductList extends React.Component<IProps>{

    public addTocart = (producId: number) =>{
        superagent
            .post('http://5b209253ca762000147b256a.mockapi.io/api/cart')
            .send({
                producId,
                quantity:1
            })
            .set('accept', 'json')
            .end((err, res) => {
                alert('Added successfully')
                this.props.getCart();
            })
    }
    shouldComponentUpdate(nextProps: IProps): boolean{
        if(nextProps.list.length !== this.props.list.length){
            return true;
        }
        return false;
    }

    public render(){
        // const products = this.props.list.map(p => <Product item={p} key={p.id} />);
        const products = this.props.list.map(p => {
            return (
                <Product
                    item={p} 
                    key={p.id} 
                    onAddToCart=
                    {
                        this.addTocart
                        // this.addTocart.bind(this, p.id)
                    }
                />
            )
        });
        return (
            <div className="row">
                {products}
            </div>
        )
    }
}

export default ProductList;