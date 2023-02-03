import React from "react";
import "./Dialogs.css";
import{NavLink} from "react-router-dom";
const DialogItem=(props)=>{
     let path="/dialogs/"+ props.id;
     return( <div className="dialog ">
     <NavLink to={path}>{props.name}</NavLink>
     </div>);
}
const Message=(props)=>{
     return(
          <div className="message">{props.message}</div>
     )

}
const Dialogs =(props)=>{
    

let dialogsElements=props.dialogsData.map (element => <DialogItem name={element.name} id={element.id} />);  
let messadeElemant= props.messageData.map(element=><Message message={element.message}  />)

    return(
<div className="dialogs">
     <div className="dialogs-items">
          { dialogsElements}
    
    </div>
    <div className="messages">
{messadeElemant}
     </div>
    </div>    );

}
export default Dialogs;