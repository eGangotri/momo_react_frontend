import './Select.css';

const Select = ({handleChange})=>{
    return (
        <select type="search" placeholder="Search"onChange={ handleChange}>
            <option value="">All</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
        </select>
    )
}

export default Select;