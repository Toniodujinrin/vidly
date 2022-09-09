import React, { Component } from 'react';


//library.add(faSortAsc,faSortDesc );
class TableHeader extends Component {

    raiseSort =(path)=>{
        const sortColumn = {... this.props.sortColumn}
         if(this.props.path === path){
         sortColumn.order = this.props.order==='asc'?'desc':'asc';
         sortColumn.path = path
         }
         else {
          sortColumn.path = path;
          sortColumn.order = 'asc'
         } 
         
         this.props.onSort(sortColumn);
        }

    // renderIcon = (column)=>{
    //     if(column !== this.props.path)return null;
    //    // if(column === this.props.path)return <FontAwesomeIcon icon={['fas', 'faSortAsc']} />;
       // else return <FontAwesomeIcon icon={['fas', 'faSortDesc']} />

    //}
    render() {     
        
        
    const{
      
       
     
      column 


    }=this.props

        return (

            <thead>
            <tr>
             {
                column.map(item => 
                    <td key={item.id} 
                    onClick={()=>this.raiseSort(item.path)}>
                    {item.label}  
                    </td>
                    )
             }
            </tr>
          </thead>
        );
    }
}
 
export default TableHeader;





   

  
    
