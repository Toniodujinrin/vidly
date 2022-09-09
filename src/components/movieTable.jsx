import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from './common/Table';
import Search from './common/tableSearch';
class MovieTable extends Component {
  column = [
     {path:'name', label :'Title',id:1},
     {path:'genre', label:'Genre',id:2},
     {path:'stock', label: 'Stock',id:3},
     {path:'rating', label: 'Rate', id:4},
     {id:5},
     {id:6}

  ]

  
    render() 
    {  const{
        newList,
        handleLike,
        onSort,
        path,
        order,
        sortColumn,
        handleSearch,
        value
        
        } =this.props

        return (  
           <React.Fragment>
           <button className={'btn btn-primary'}><Link className='link' to={'/movies/new'}>New</Link></button>
           <Search handleSearch={handleSearch} value={value}/>
           <Table
           onSort = {onSort}
           column = {this.column} 
           sortColumn = {sortColumn} 
           path={path} 
           order = {order}
           data = {newList} 
           delete = {this.props.delete} 
           handleLike = {handleLike}
           value={value}
           handleSearch={handleSearch} 
   
           
           />        
           </React.Fragment>
        );
    }
}
 
export default MovieTable;
