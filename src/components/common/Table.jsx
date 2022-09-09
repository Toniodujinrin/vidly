import React from 'react';
 import TableBody from './TableBody';
 import TableHeader from './TableHeader';
import Search from './tableSearch';
const Table = (props) => {

    const {
        onSort,
        column, 
        sortColumn,
        path,
        order,
        data,
        handleLike,
        
    

    }= props
    return ( 

        <table className='table '>
        
                       
        <TableHeader 
         onSort = {onSort}
         column = {column} 
         sortColumn = {sortColumn} 
         path={path} 
         order = {order}/>
        
        <TableBody 
         data = {data} 
         delete = {props.delete} 
         handleLike = {handleLike} 
         column = {column} 
         />
         

      </table>  
     );
}
 
export default Table;