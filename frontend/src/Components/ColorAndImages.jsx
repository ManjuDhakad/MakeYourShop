import React from 'react';
import './style/ColorAndImages.css';

const ColorAndImages = () => {
    return (
        <>
        <h2 id='title' >Add product color and imanges.............</h2>
            <table>
                <tr>
                    <td><label>Product Color Name</label></td>
                    <td><input type = "text" name = "producColorName"/></td>
                </tr>
                <tr>
                    <td><label>Add Product Color</label></td>
                    <td><input type ="color" id = "color_chooser" name = "addProductColor"/></td>
                </tr>
                <tr>
                    <td><label>Additional Price</label></td>
                    <td><span id="doller">$</span><input type="number" placeholder="0.00" name = "additionalPrice"/></td>
                </tr>
                <tr>
                    <td><label>Product Front Image</label></td>
                    <td><input type ="file" name = "frontImage" accept="image/*" /></td>
                </tr>
                <tr>
                    <td><label>Product Back Image</label></td>
                    <td><input type ="file" name = "backImage" accept="image/*" /></td>
                </tr>
                <tr>
                    <td><label>Cropped Product Sample</label></td>
                    <td><input type ="file" name = "croppedSample" accept="image/*" /></td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <button id = "add_btn" >Add Color</button>
                    </td>
                </tr>
                
            </table>
        </>
    );
}

export default ColorAndImages;
