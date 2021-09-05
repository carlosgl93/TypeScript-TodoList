interface Props {
    color: string,
    text: string,
    onClick: () => void,
}

const Button: React.FC<Props> = ({onClick, color, text}) => {
    return <button 
            onClick={onClick} 
            style={{backgroundColor: color}} 
            className='btn'>
                {text}
            </button>
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button
