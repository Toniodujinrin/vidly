

import React, { Component } from 'react';

class Like extends Component {
    state = { 

     } 
     
    like (){
    let className = 'btn'
    className += (this.props.liked)?' btn-success':' btn-secondary';
    return className
    }  
    
    
     render() { 
     return (
     <button onClick={()=>this.props.handleLike(this.props.movie)} style={{cursor:'pointer'}} className={this.like()}>Like</button>
    );
    }
}
 
export default Like;