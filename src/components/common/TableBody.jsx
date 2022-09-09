import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Like from './like';
class TableBody extends Component {
    
    render() { 
        const {
          handleLike,
          data,
          column
          } = this.props
return (
<tbody>
    {
        data.map(item =>
         <tr key={item.id}>

            {column.map(individualColumn=> {
            if(individualColumn.path === 'name')return <td key={item.id}><Link to={`/movies/${item.id}`}>{item['name']}</Link></td>
            
            else return <td key={individualColumn.id}>{ item[individualColumn.path]}</td>
            }
            )
        }
           
            <td>
                <Like liked = {item.liked} handleLike= {handleLike} movie = {item}/>
            </td>
            <td>
                <button onClick = {()=>this.props.delete(item.id)}className='btn btn-danger btn-md'>
                   Delete
                </button>
            </td>
          
        

        </tr>
    
    )
   
    }
</tbody>

        );
    }
}
 
export default TableBody ;