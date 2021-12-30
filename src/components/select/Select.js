import './Select.css';

const Select = ({handleChange})=>{
    return (
        <select type="search" placeholder="Search"onChange={ handleChange}>
            <option value="">All</option>
            <option value="I">Image</option>
            <option value="V">Video</option>
        </select>
    )
}

export default Select;