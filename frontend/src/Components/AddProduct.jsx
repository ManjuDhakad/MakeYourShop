import React, {useState} from 'react';
import{Link} from 'react-router-dom';
import './style/AddProduct.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorAndImages from './ColorAndImages';
import Catagory from './Catagory';


const AddProduct = (props) => {
    const [switch_value , setSwitchValue] = useState('default')
    const [newProduct, setNewProduct] = useState({
        productTitle: '',
        ProductBrandName: '',
        ProductItemNumber: '',
        SupplierName: '',
        ProductWeight: '',
        ProductSetOn: '',
        Stock :'',
        DesignType:'',
        ProductDescription:''
        }
      );
        const handleChange = evt => {
            const temp_name = evt.target.name;
            const temp_newValue = evt.target.value;
            // console.log(evt.target.name , evt.target.value)
            setNewProduct({...newProduct , [temp_name]: temp_newValue});
        }
        
        const handleComponent =(e) => {
            // switch_value  = e.target.value;
            setSwitchValue(e.target.value)
            console.log(switch_value === "colorAndImages");
        }

    return (
    <div className = "container">
        <div className='side_bar'>
            <ul className='product_action_li'>
                <li><button className='action_btn' value="productInfo" onClick ={handleComponent}>Product Info</button></li>
                <li><button className='action_btn' value="colorAndImages" onClick ={handleComponent}>Color and Images</button></li>
                <li><button className='action_btn' value="catagory" onClick ={handleComponent}>Catagory</button></li>
                <li><button className='action_btn' value="sizeAndPrice" onClick ={handleComponent}>Sizes and Price</button></li>
                <li><button className='action_btn' value="storeAndDiscount" onClick ={handleComponent}>Store and Discount</button></li>
            </ul><hr/>
        </div>
        {
           function showComponent() {
               switch(switch_value){
                case "colorAndImages":
                    return <ColorAndImages />
                case "catagory":
                    return <Catagory />
                case "sizeAndPrice":
                    return null
                case "storeAndDiscount":
                    return null
                default:
                    return (<>
                        <h2 id='title' >Add Product Info .............</h2>
                        <table>
                            <tr>
                                <td><label>Product Title</label></td>
                                <td><input type = "text" name = "productTitle" value = {newProduct.productTitle} onChange = {handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label>Product Brand Name</label></td>
                                <td><input type ="text" name = "ProductBrandName" value = {newProduct.ProductBrandName} onChange = {handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label>Product Item Number</label></td>
                                <td><input type="text" name = "ProductItemNumber" value = {newProduct.ProductItemNumber} onChange = {handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label>Supplier Name</label></td>
                                <td><input type ="text" name = "SupplierName" value = {newProduct.SupplierName} onChange = {handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label>Product Weight</label></td>
                                <td><input type ="text" name = "ProductWeight" value = {newProduct.ProductWeight} onChange = {handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label>Stock</label></td>
                                <td>
                                    <input type ="radio" name = "Stock" value ="In stock" onChange = {handleChange}/>In Stock
                                    <input type ="radio" name = "Stock" value ="out stock" onChange = {handleChange}/>Out Stock
                                </td>
                            </tr>
                            <tr>
                                <td><label>Product Set On</label></td>
                                <td>
                                    <DropdownButton onChange={handleChange} title="Select Product set" pull-right>
                                        {/* <Dropdown.Item  name = "ProductSetOn" value = {newProduct.ProductSetOn}></Dropdown.Item> */}
                                        <Dropdown.Item name = "ProductSetOn" value = {newProduct.ProductSetOn}>Regular</Dropdown.Item>
                                        <Dropdown.Item name = "ProductSetOn" value = {newProduct.ProductSetOn}>Group Order</Dropdown.Item>
                                        <Dropdown.Item name = "ProductSetOn" value ={newProduct.ProductSetOn}>Quick Quote</Dropdown.Item>
                                        <Dropdown.Item name = "ProductSetOn" value ={newProduct.ProductSetOn}>Uniform</Dropdown.Item>
                                    </DropdownButton>
                                </td> 
                                
                                    {/* <input type ="text" name = "ProductSetOn" value = {newProduct.ProductSetOn} onChange = {handleChange}/></td> */}
                            </tr>
                            <tr>
                                <td><label>Product Design Type</label></td>
                                <td><input type ="text" name = "DesignType" value = {newProduct.DesignType} onChange = {handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label>Product Description</label></td>
                                <td><textarea name = "ProductDescription" value = {newProduct.ProductDescription} onChange = {handleChange}/></td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    
                                    <button id = "add_btn" onClick={() => {props.handleAddNewProductInList(newProduct) }}>Add Product</button>
                                </td>
                            </tr>
                        </table>
                        </>)
            }}()
        }
    </div>)
}

export default AddProduct;
