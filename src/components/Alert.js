import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    // this function capitalize is made to just make the first letter of props.alert.type capital in this case S of Success is made capital
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          {/* && operator is very important otherwise the prop alone returns value as null and it does not loads the page  */}
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
        </div>
    )
}

export default Alert