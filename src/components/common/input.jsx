import React from 'react';
const Input = ({handleChange,value,name,type,error,label}) => {
    return (
        <div id = {name}className="form-group">
        <label htmlFor="username">{label}</label>
        
        <input 
        onChange={handleChange}
        value={value}
        autoFocus 
        type={type}
        className="form-control"
        name={name}

        />
        {(error)?
        <div>
         {error[name]?<div className="alert alert-danger">{error[name]}</div>:''}
        </div>:
        <div></div>
        }
        </div>
     );
}
 
export default Input ;