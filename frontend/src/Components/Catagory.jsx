import React from 'react';
import catagory_list from './catagoryList.js';
import SubCatagory from './SubCatagory.jsx';

const Catagory = () => {
    return (
        <>
            {
                catagory_list.map((item) => {
                    return <div style={{display:"inline-Block", marginBottom:"20px"}}><SubCatagory item ={item} /></div>
                })
            }
            
        </>
    );
}

export default Catagory;
