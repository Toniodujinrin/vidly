import getGenres from '../databaseItems/genres';
import React from 'react';


const PaginationGenre = (props) => {
    let listOfGenres = props.genres
    
    return ( 

      <React.Fragment>
<ul className="list-group m-3">
<li onClick = {props.onChangeAllGenre} className={`All Genre's` === props.currentGenre?'list-group-item px-7 active':'list-group-item '}>All Genre's</li>
  {
    listOfGenres.map(genre =>
      
      <li key = {genre.id}onClick = {()=>props.onChangeGenre(genre.genre)}className={genre.genre === props.currentGenre?'list-group-item active':'list-group-item px-7'}>{genre.genre}</li> )
  }
 
</ul>
        </React.Fragment>
     );
}
 
export default PaginationGenre;