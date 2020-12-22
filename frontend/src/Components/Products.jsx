import React , {useState} from 'react';
import {Header, Footer} from './Layout';
import './style/Products.css';
import ProductList from './ProductList.jsx';
import AddProduct from './AddProduct.jsx';
import list from './HardCoded_product_list.js';

const Products = () => {

    const [product_list , setProductList] = useState(list);
    // console.log(product_list);
    const [show , setShow] = useState(false);

    const handleAddNewProductInList = (newProduct) => {
        console.log(newProduct);
        setProductList([...product_list , newProduct]);
    }

    const handleDeleteProduct= (id) =>{
        let temp_product_list = [...product_list]
        temp_product_list.splice(id , 1)
        setProductList(temp_product_list);
    }
    return (
        <div className='home-container'>
            <Header />
            <div className='side_bar'>
                <ul className='product_action_li'>
                    <li><h2 id='product_action_title'>Product Action</h2></li>
                    <li><button className='action_btn' onClick={()=>setShow(!show)}>Add New Product</button></li>
                    <li><button className='action_btn' onClick={()=>setShow(!show)}>Product List</button></li>
                </ul><hr/>
            </div>
            {!show ? (<div className='product_list'> <ProductList dataList={product_list} handleDeleteProduct={handleDeleteProduct} /></div> ) :
             <AddProduct handleAddNewProductInList={handleAddNewProductInList} />}
            <Footer />
        </div>
    );
}

export default Products;
