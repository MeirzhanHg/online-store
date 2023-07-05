import './Button.scss'

const Button = ({children, className}) => {
 return <button className={`button-custom ${className}`}>{children}</button>
}

export default Button