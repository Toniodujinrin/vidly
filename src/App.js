import React, { Component } from 'react';
import Navbar from './components/navbar';
import Content from './components/Content';
import Customers from './components/routes/Customers';
import Rentals from './components/routes/Rentals';
import NotFound from './components/routes/NotFound';
import MovieDetails from './components/routes/MovieDetails';
import LoginForm from './components/LoginForm';
import {Route, Switch, Redirect} from 'react-router-dom'
import Registration from './components/RegisterForm';
import MovieForm from './components/MovieForm';
import getMovies from './components/databaseItems/movies';
class App extends Component {
  state = { 
   movies :getMovies(),
   savedMovie:{}
   } 

  handleMovieSet=(id,object)=>{
    const  saved = {...this.state.savedMovie,...object}
    saved.id= id
    
    console.log(saved)
    this.setState({savedMovie:saved})
   
  }
  

  render() { 
    return (
      <React.Fragment>
     <Navbar/>
      <div className='content'>
      <Switch> 
      {/* <Route exact path={'/movies/new'} component={MovieForm}/> */}
      <Route path={'/register'} component={Registration}/>
      <Route path={'/login'} component = {LoginForm}/>
      <Route path={'/movies/:id'} exact render={(props)=><MovieForm movies ={this.state.movies} setMovie={this.handleMovieSet} {...props} />}/>
      <Route path={'/movies'} exact component = {(props)=><Content savedMovie = {this.state.savedMovie}  {...props}/>}/>
      <Route path={'/customers'} component={Customers}/>
      <Route path={'/rentals'} component = {Rentals}/>
      <Route path = {'/not-found'} component = {NotFound}/>
      <Redirect exact from='/' to ='/movies'/>
      <Redirect to={'/not-found'}/>
      
      

      </Switch>
      </div>
     </React.Fragment>
    );
  }
}
 
export default App 