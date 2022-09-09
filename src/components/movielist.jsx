import React, { Component } from 'react';
import Pagination from './common/pagination';
import paginate from './utils/pagination';
import getMovies from './databaseItems/movies';
import PaginationGenre from './common/paginationGenre';
import PaginateGenre from './utils/paginationGenre';
import MovieTable from './movieTable';
import sort from './utils/sort';
import _, { padEnd } from 'lodash';
class Movie extends Component {
    state = {  
        paginatedList : paginate,
        listsOfMovies:getMovies(),
        searchedValue:'lol'
        
    } 

    getPagedData = ()=>{
        const {
            listOfMovies,
            currentPage,
            pageLength,
            currentGenre,
            sortColumn
        } = this.props

        const filtered = PaginateGenre(listOfMovies,currentGenre)
        const sortedList = _.orderBy(filtered,[sortColumn.path],[sortColumn.order])
        const newList =  paginate(sortedList,currentPage,pageLength)

        return {length:filtered.length, data: newList} 


    }
    handleSearch=({currentTarget:input})=>{
        this.setState({searchedValue:input.value})
    }

    
    
    render() { 
    

      const {
       
        genres,
        handleLike,
        currentPage,
        pageLength,
        onPageChange,
        currentGenre,
        onChangeAllGenre,
        onChangeGenre,
        handleSort,
        path,
        order,
        sortColumn
    } = this.props
      const PagedData = this.getPagedData()
      const{length,data} = PagedData
        return (
            <div className='row'>
                <div className='col-3'>
                 <PaginationGenre 
                 genres = {genres} 
                 currentGenre = {currentGenre} 
                 onChangeAllGenre={onChangeAllGenre} 
                 onChangeGenre = {onChangeGenre}  /> 
                </div>

                 <div className='col'>
                
                 <MovieTable 
                 
                 newList = {data} 
                 handleLike = {handleLike} 
                 delete = {this.props.delete}
                 onSort = {handleSort}
                 sotColumn ={sortColumn}
                 path = {path}
                 order = {order}
                 handleSearch = {this.handleSearch}
                 value ={this.state.searchedValue}
                 />
                </div>
                <Pagination 
                noOfMovies={length} 
                pageLength={pageLength}
                onPageChange = {onPageChange} 
                currentPage = {currentPage}/> 
                
            </div>
        );
    }
}
 
export default Movie;


