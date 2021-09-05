import Button from './Button';

interface Props {
    title: string,

}

const Header: React.FC<Props> = ({ title }) => {
    const onClick = () => {
        console.log('click');
        
    }
    return (
        <header className='header'>
            <h1>
                {title}
            </h1>
            <Button color='black' text='Add' onClick={onClick}/>
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}



// const headerStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
