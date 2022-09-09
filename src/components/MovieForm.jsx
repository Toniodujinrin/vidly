import React, { Component } from 'react';
import Joi from 'joi';
import Form from './common/Form';
import { Link } from 'react-router-dom';

class MovieForm extends Form {
    state = { 
        data:{
            name:'',
            genre:'',
            stock:'',
            rating:''
        },
        errors:{
            name:'',
            genre:'',
            stock:'',
            rating:''
        },
        
     } 

     componentDidMount(){
        
      const {movies,match}=this.props;
      const list = movies;
      const data = {...this.state.data};
      if(list && match.params.id !== 'new'){
        const movieData = list.filter(movie=> movie.id===match.params.id);
        data.name=movieData[0].name;
        data.genre=movieData[0].genre;
        data.rating=movieData[0].rating;
        data.stock=movieData[0].stock;
         this.setState({data})
        }
       
        
        else if (match.params.id === 'new'){
             data.name=''
             data.genre=''
             data.rating=''
             data.stock=''
             this.setState({data})
         }
           
            
        
       

     }
     
     schema = Joi.object({
        name:Joi.string().required(),
        genre:Joi.string().required(),
        stock:Joi.number().integer().min(0).max(100).required(),
        rating:Joi.number().integer().min(0).max(10).required()
    })


    render() { 
        return (
            <React.Fragment>
            <h1>Movie Form</h1>
            <div id='login-component'>
            
            <form id='login-form' onSubmit={this.handleSubmit}>
                
                    
                    {this.renderInput('name',{},'Title')}
                    {this.renderInput('genre','','Genre')}
                    {this.renderInput('stock','number','Number in Stock')}
                    {this.renderInput('rating','number','Rate')}
            
                    <button onClick ={()=>this.props.setMovie(this.props.match.params.id,this.state.data)} className='btn-primary btn'>
                    <Link className='link' to =  {'/movies'}>Save</Link> 
                      
                    </button>
                    
             
                    
                   
                    
                    

                
            </form>

            
        </div>
        </React.Fragment>
        );
    }
}
 
export default MovieForm ;