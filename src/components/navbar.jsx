import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { 
        currentLink : null ,
    links : [
        {url:'/movies' ,Label: 'Movie'},
        {url:'/customers' ,Label: 'Customers'},
        {url:'/rentals' ,Label: 'Rentals'},
        {url:'/login',Label:'Login'},
        {url:'/register',Label:'Register'}
     ]

     } 

     raiseLink = (link)=>{
        this.setState({currentLink:link})
     }
     

    render() { 

        const {currentLink,links} = this.state
        return (
            <React.Fragment>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'}>Vidly</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">
        
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {
            links.map(link => 
            
            <li className="nav-item" key={link.url}>
            <Link onClick = {()=>this.raiseLink (link.Label)} className={ currentLink === link.Label?"nav-link active":'nav-link'} to={link.url}>{link.Label}</Link>
           </li>
                
                )
        }
        
      </ul>
    </div>
  </div>
</nav>
                
                </React.Fragment>

        );
    }
}
 
export default Navbar
;