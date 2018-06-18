import * as superagent from 'superagent';
import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

interface IState {
    isModelOpen: boolean
}
class Addproduct extends React.Component<{}, IState>
{ 
   private titleInput: HTMLInputElement;
   private descriptionInput: HTMLTextAreaElement;
   private priceInput: HTMLInputElement;
   private imageUrlInput: HTMLInputElement;

   public onFormSubmit = (e: React.FormEvent<HTMLFontElement>) =>
   {
        e.preventDefault();
        const inputValue ={
            title:this.titleInput.value,
            price:this.priceInput.value,
            description:this.descriptionInput.value,
            imageUrl:this.imageUrlInput.value
        };
        //console.log(inputValue)
        superagent
        .post('http://5b209253ca762000147b256a.mockapi.io/api/products')
        .send(inputValue)
        .set('accept', 'json')
        .end(() => {
            this.setState({
                isModelOpen:true
            });
        });
    }
    
    public setTitleInput = (el:HTMLInputElement) =>{
        this.titleInput =el;
        console.log(this.titleInput)
    }
    public setDescriptionEl = (el:HTMLTextAreaElement) =>{
        this.descriptionInput =el;
        // console.log(this.descriptionInput)
    }
    public setPriceEl = (el:HTMLInputElement) =>{
        this.priceInput =el;
        // console.log(this.priceInput)
    }
    public setImageUrlEl = (el:HTMLInputElement) =>{
        this.imageUrlInput =el;
        // console.log(this.imageUrlInput)
    }

    public closeModel =() => {
        this.setState({
            isModelOpen:false
        });
    }
    public getModel =() =>{
        return(
            <Modal isOpen={true} >
                <ModalHeader>Modal title</ModalHeader>
                <ModalBody>
                    This is a body
                </ModalBody>
                <ModalFooter>
                    ?<button onClick={this.closeModel}
                    className="btn btn-default">
                    close
                    </button>
                </ModalFooter>
            </Modal>
        )
    }
    public render(){
        return(
            <div className="row">
                <div className="col">
                    {this.getModel()}
                    <form onSubmit={this.onFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Ttile</label>
                            <input 
                                className ="form-control" 
                                name="title"
                                ref={this.setTitleInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Description</label>
                            <textarea 
                                rows={5} 
                                className ="form-control" 
                                name="description"
                                ref={this.setDescriptionEl}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Price</label>
                            <input 
                                type="number" 
                                className ="form-control" 
                                name="price"
                                ref={this.setPriceEl}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Image URL</label>
                            <input 
                                className ="form-control" 
                                name="title"
                                ref={this.setImageUrlEl}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Ttile</label>
                            <input className ="form-control" name="title"/>
                        </div>
                         <button type="submit" className="btn btn-primary">Add Product</button>
                    </form>
                </div>
            </div>  
        )
    }
}
export default Addproduct;