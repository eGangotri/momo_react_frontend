import './Button.css';
const Button = ({handleClick,name})=>{
    return (
        <button placeholder="Search" onClick={ handleClick }>{name}</button>
    )
}

export default Button;