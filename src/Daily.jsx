import React from "react"


const Daily = (props) => {

   

    
       
    return(
        <>
        <div className="dailylist">
        <i className="fa fa-times"
        
         onClick={ () =>{
             props.onRemoveButtonClick(props.id);
         }}/>
        <li> {props.text} </li>
        </div>
        </>
        
    );

    };

export default Daily;