import React, { Component } from 'react';

import Joi from 'joi';
import Form from './common/Form';

class LoginForm extends Form {
    state = {
        Reveal: false,
        data : {
            username:'', password : ''
        }, 
        errors:{
            username:'',
            password:''
        }
    }
    
    handleReveal =(current)=>{
      let Reveal = this.state.Reveal
      if (current === Reveal)Reveal=!Reveal;
      else Reveal = current;
      
      this.setState({Reveal});
      
    }
    schema = Joi.object({
        username:Joi.string().required(),
        password:Joi.string().required()
    })
    
    doSubmit=()=>{
        console.log('submit')
    }
    


   
    render() { 
        // const{
        //     data,
        //     Reveal
        // }=this.state

        // const reveal = Reveal?'text':'password'
        
        
        return (
            <div id='login-component'>
                <h1>Login</h1>
                <form id='login-form' onSubmit={this.handleSubmit}>
                    
                        
                        {this.renderInput('username')}
                        {this.renderInput('password','password')}
                
                        {this.renderButton('Login')}
                        
                 
                        
                       
                        
                        

                    
                </form>

                
            </div>
        );
    }
}
 
export default LoginForm;                  
                      
                       
                        

                        
                        
        
