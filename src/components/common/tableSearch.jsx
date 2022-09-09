import React from 'react';
import Input from './input';
const Search = ({handleSearch,value}) => {
    
    return ( 
        <Input handleChange={handleSearch} value={value} error={null} label={'Search'} name={'search'} type={'text'} />
     );
}
 
export default Search;