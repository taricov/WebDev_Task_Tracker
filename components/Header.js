// import propTypes from 'prop-types'
import Buttons from './Buttons'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Buttons 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'close' : 'Add'} 
            onClick={onAdd}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

// const headingStyle = {
//     backgroundColor: 'black',
//     color: 'white',
// }
// Header.propTypes = {
//     title: PropTypes.string
// }

export default Header
