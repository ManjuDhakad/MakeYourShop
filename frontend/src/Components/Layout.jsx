import React , {useState} from 'react'
import './style/Layout.css';
import {Link} from 'react-router-dom';
import accountImage from "E:/CompanyAssignment/chapter247/src/Components/images/account.png";
import ShowAccount from './ShowAccount.jsx';

const Header = () => {
    const [account , setAccount] = useState(false);
    const handleAccount =() =>{
        setAccount(!account);
    }
    // console.log(account);

    return (
        <>
        <header className = "header">
            <Link to='/' className='link'><h1 className= "title"><span id = 's-id'>M</span>Ys</h1></Link>
            <ul role="nav">
                <li><Link className='link' to="/products">Products</Link></li>
                <li><Link className='link' to="/dashboard">Dashboard</Link></li>
                <li><Link className='link' to="/Store">Store</Link></li>
                <li><Link className='link' to="/orders">Orders</Link></li>
                <li><input id='search-box' type="search" />
                <button id='search-btn' >Search</button></li>
                <li><img src={accountImage} id="account_img" onClick={handleAccount}/></li>               
            </ul>
        </header>
        {account ? <ShowAccount handleAccount={handleAccount} /> : null}
        </>
        );
}
const Footer = () => {
    return (
        <footer>
            <h3>Terms & Condition  Privacy Policy</h3>
        </footer>
        );
}


export {Header , Footer};