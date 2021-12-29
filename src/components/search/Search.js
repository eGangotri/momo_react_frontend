import './Search.css';

const Search = ({handleChange, value})=>{
    return (
        <input type="search" placeholder="Search" onChange={ handleChange} value={value}/>
    )
}

export default Search;