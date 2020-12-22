import React from 'react';
import './style/ProductList.css';

const ProductList = (props) => {
    // console.log(props);
    return (
        <div classsName='product_list_container'>
            <h2 id='product_list_title'>Product List</h2>
            <thead>
                    <td>Product Title</td>
                    <td>Product Brand Name</td>
                    <td>Product Item Number</td>
                    <td>Stock</td>
                    <td>Supplier Name</td>
                    <td>Product Color Name</td>
                    <td>Product Set On</td>
            </thead>
            <tbody>
                
                {props.dataList.map((item , index)=> {
                    return (
                    <tr id={index}>
                        <td>{item.productTitle}</td>
                        <td className="green">{item.productBrandName}</td>
                        <td>{item.productItemNumber}</td>
                        <td className="red">{item.stock}</td>
                        <td className="green">{item.supplierName}</td>
                        <td>{item.productColorName || "Black"}</td>
                        <td className="red">{item.productSetOn}</td>
                        <button id = "edit_btn" >Edit</button>
                        <button id = "delete_btn" onClick={(e) => props.handleDeleteProduct(e.target.parentNode.id) }>Delete</button>
                    </tr>)
                })}
                
            </tbody>
        </div>
    );
}

export default ProductList;
