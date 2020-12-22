import React , {useState} from 'react';

const SubCatagory = (props) => {
    const [checkedValue , setCheckedValue] = useState([])
    const handleCheckedValue = (e) =>{
        // console.log(e.target.value)
        // console.log(checkedValue);
        setCheckedValue(checkedValue => [...checkedValue , e.target.value]);
    }
    console.log(checkedValue)

    return (
        <div style={{display: "block" , marginLeft:"20px"}} >
            <input type="checkbox" value={props.item.name} onChange={handleCheckedValue}/> <span>{props.item.name}</span><br/>
            {
                props.item.subcatagory ?
                (props.item.subcatagory.map((item) => {
                    return <SubCatagory item={item}/>
                })): null
            }
        </div>
    );
}

export default SubCatagory;
