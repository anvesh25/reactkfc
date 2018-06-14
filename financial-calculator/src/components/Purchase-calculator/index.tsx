import * as React from 'react';

interface IState{
    sharePrice: number,
    shareQuality: number,
    subTotal: number
}
class PurchaseCalculator extends React.Component<{}, IState> {
    constructor(props: IState){
        super(props)
        this.state = {
            sharePrice: 0,
            shareQuality: 0,
            subTotal: 0
        }
    }
    public handleOnChange =(e: any) => {
        const {name, value} =e.target
        const{shareQuality, sharePrice, subTotal}= Object.assign({}, this.state, {[name]: value})
        let state: IState
        if(name === "shareQuality"){
            state ={
                sharePrice: subTotal / sharePrice,
                shareQuality,
                subTotal: shareQuality * subTotal
            }
        }else if(name === "sharePrice"){
            state ={
                sharePrice,
                shareQuality,
                subTotal: shareQuality + subTotal
            }
        }else if(name === "subTotal"){
            state ={
                sharePrice,
                shareQuality: subTotal / sharePrice,
                subTotal
            }
        }else {
            state =this.state
        }

        this.setState(state)
    }
    public render() {
    const{shareQuality, sharePrice, subTotal}=this.state
    
    return (<div>
        <input name="shareQuality" value={shareQuality} onChange={this.handleOnChange}/>
        <input name="sharePrice" value={sharePrice} onChange={this.handleOnChange}/>
        <input name="subTotal" value={subTotal} onChange={this.handleOnChange}/>
    </div> ) 
    }
}

export default PurchaseCalculator