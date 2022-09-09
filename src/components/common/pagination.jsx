import React, { Component } from 'react';
import { ReactPropTypes } from 'react';


class Pagination  extends Component {

  
    
    render() { 
        


        const{noOfMovies,pageLength,onPageChange,currentPage} = this.props;
        const numberOfPages = noOfMovies/pageLength ;
        let array = [];
        for(let i=1;i<= Math.ceil(numberOfPages);i++ ){
        if(Math.ceil(numberOfPages) === 1)return null
        else array.push(i);
        ;

        }
        return (
            
            <React.Fragment>
                <nav>
                    <ul className="pagination">
                        {array.map(number => 
                        <li key={number} className={number === currentPage? 'page-item active':'page-item'}>
                            <a onClick={()=>onPageChange(number)} className='page-link'  >{number}</a>
                        </li>)}
                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}
 
/*/Pagination.propTypes = {
    noOfMovies:PropTypes.number.isRequired
    ,pageLength:PropTypes.number.isRequired
    ,onPageChange:PropTypes.func.isRequired,
    currentPage:PropTypes.number.isRequired

}
*/
 
export default Pagination;