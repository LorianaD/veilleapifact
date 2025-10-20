import { Link, NavLink } from 'react-router'
import Home from '../home'
import Read from '../Read'
import Create from '../Create'
import Reads from '../Reads'

function Nav() {

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/reads">Facts</Link>
      </nav>
    </>
  )
}

export default Nav