import React, { Component } from 'react';

import Joi from 'joi';
import Form from './common/Form';

class Registration extends Form {
    state = { 
        data:{
         username:'',
         password:'',
         name:''
        },
        errors:{
            username:'',
            password:'',
            name:''
        }
     } 

     schema =Joi.object({
        username:Joi.string().email({ tlds: { allow: false } }).required(),
        password:Joi.string().required().min(5),
        name:Joi.string().required()

     })
    render() { 
        return (
            <div id='login-component'>
            <h1>Register</h1>
            <form id='login-form' onSubmit={this.handleSubmit}>
                
                    
                    {this.renderInput('username')}
                    {this.renderInput('password','password')}
                    {this.renderInput('name')}
            
                    {this.renderButton('Register')}
                    
             
                    
                   
                    
                    

                
            </form>

            
        </div> 

        );
    }
}
 
export default Registration ;