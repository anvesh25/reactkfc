import * as React from 'react';
import ICartItem from '../../models/cartitem';

interface IProps {
    cart: ICartItem[]
}

// Changed react component to react.SFC
// class MiniCart extends React.Component<IProps>{
    const MiniCart:React.SFC<IProps> = ({cart}) => {
    // public render(){
        return (
            <span>
                You have {cart.length} items in your cart
            </span>
        )
    // }
}

export default MiniCart;