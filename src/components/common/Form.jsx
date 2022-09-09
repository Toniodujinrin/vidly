import React, { Component } from 'react';
import  Joi  from 'joi';
import Input from './input';
import { Link } from 'react-router-dom';

class Form  extends Component {
    state = {
        data:{},
        errors:{}
     } 

     validate = ()=>{
        const result = this.schema.validate(this.state.data,{abortEarly:false})
        if(!result.error)return null
        const errors= {}
        for(let detail of result.error.details){
            errors[detail.path]=detail.message
        }
        return errors 
    }
    handleSubmit = e =>{
         e.preventDefault();
        const errorMessage  = this.validate() 
        this.setState({errors:errorMessage||{}})
        if(errorMessage)return 
        //fthis.doSubmit()
       
        
    }
    validateProperty=(input)=>{
        const Obj = {}
        Obj[input.name]=input.value
        const schema = Joi.object({
            [input.name]:Joi.string().required()
        })
        const result =  schema.validate(Obj,{abortEarly:false})
        result?console.log(result):console.log('no result')
        const {error} = schema.validate(Obj,{abortEarly:false})
        error?console.log(error):console.log('no error',typeof(input.value))
        return error? error.details[0].message: null;

    }

    handleChange  = ({currentTarget:input}) =>{
       const errors ={...this.state.errors}
       const errorMessage = this.validateProperty(input)
     
       errorMessage?errors[input.name]=errorMessage:delete errors[input.name]
       
        
       const data = {...this.state.data};
       
       if(input.type==='number') {  data[input.name]= parseInt(input.value);}
       else data[input.name]= input.value
       

       this.setState({data,errors});
       console.log(this.state.data)
      
    }

    renderButton(label,url){
        return (
        <button
        disabled={this.validate()}
        className='btn btn-primary ' 
        id = 'login-button'>
        {label}
        
        </button>
        )
        
    }

    renderInput(name,type='text',label=name){
        return(
            <Input 
            handleChange={this.handleChange} 
            value={this.state.data[name]} 
            type = {type} 
            name = {name} 
            label={label}
            error={this.state.errors}/>
        

        )
    }

   
}
 
export default Form;