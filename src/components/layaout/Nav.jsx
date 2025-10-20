import { Link, NavLink } from 'react-router'
import Read from '../Read'
import Create from '../Create'
import Reads from '../Reads'

function Nav() {

  return (
    <>
      <nav>
        <Link to="/">Liste des Fait</Link>
        <Link to="/create">Create</Link>
        
      </nav>
    </>
  )
}

export default Nav