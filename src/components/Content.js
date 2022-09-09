import getMovies from './databaseItems/movies';
import React, { Component } from 'react';
import Movies from './movielist';

import getGenres from './databaseItems/genres';


class Content extends Component {

  state = { 
   
   listOfMovies:getMovies(),
   genres :[],
   pagelength : 4,
   currentPage :1,
   currentGenre: `All Genre's`,
   sortColumn:{path:'name',order:'asc'}
   } 
   

 
   
   
  componentDidMount(){
    this.setState({genres:getGenres()})
    if (this.Update()&& this.props.savedMovie) this.setState({listOfMovies:this.Update()})
    console.log(this.Update())
  }
   Update=()=>{
     const {savedMovie}= this.props
     const{listOfMovies}= this.state
    const movies = [...listOfMovies]
    if (savedMovie.id==='new'){
      savedMovie.id= movies.length +1 
      movies.push(savedMovie)
      console.log(savedMovie)
      console.log(movies)
    }
     const movie = movies.filter(movie=>movie.id === savedMovie.id)
   
     if(movie[0] && savedMovie && savedMovie.id !== 'new'){
     movie[0].name= savedMovie.name
     movie[0].genre = savedMovie.genre
     movie[0].stock= savedMovie.stock
     movie[0].rating= savedMovie.rating
     };
     console.log(movies)
       if(movies) return movies 

      else return null
     }


   

   Delete = (id)=>{
    let movies = [...this.state.listOfMovies];
    let movie = movies.filter(movie => movie.id === id );
    let newList = movies.filter(oldMovies => oldMovies !== movie[0]);
    this.setState({listOfMovies:newList});

   
   }
   handleLike = (movie)=>{
    let movies = [...this.state.listOfMovies];
    let index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({listOfMovies:movies});
    
   };
   PageChange = (pageNumber)=>{
    this.setState({currentPage:pageNumber});

    

   }

   onChangeGenre = (genre)=>{
    this.setState({currentGenre:genre,currentPage:1});
   
   }

   onChangeAllGenre = ()=>{
    this.setState({currentGenre:`All Genre's`});
 
    
   }

   handleSort = (sortColumn)=>{
     
    
     this.setState({sortColumn})
   }
  
   
   
  render() { 
    const{listOfMovies,
      genres,
      currentGenre,
      currentPage,
      pagelength,
      sortColumn
    }= this.state

    return (
      
      <React.Fragment>
      
      
      <Movies 
      filtered = {this.genreFiltered} 
      genres = {genres} 
      onChangeAllGenre = {this.onChangeAllGenre} 
      onChangeGenre={this.onChangeGenre} 
      currentGenre={currentGenre} 
      currentPage = {currentPage} 
      onPageChange = {this.PageChange} 
      pageLength = {pagelength} 
      numberOfMovies = {listOfMovies.length} 
      delete = {this.Delete} 
      listOfMovies={listOfMovies} 
      handleLike = {this.handleLike}
      handleSort = {this.handleSort}
      path = {sortColumn.path}
      order = {sortColumn.order}
      sortColumn = {sortColumn}
      />
      
      </React.Fragment>
    );
  }
}
 
export default Content ;