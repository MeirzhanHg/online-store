import './Button.scss'

const Button = ({children, classNames, background}) => {
 return <button className={`button-custom ${classNames}`} style={{backgroundColor: background}}>{children}</button>
}

export default Button