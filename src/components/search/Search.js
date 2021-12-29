import './Search.css';

const Search = ({handleChange})=>{
    return (
        <input type="search" placeholder="Search" onChange={ handleChange} />
    )
}

export default Search;