import { Link, NavLink } from 'react-router'
import Home from '../home'
import Read from '../Read'
import Create from '../Create'
import Reads from '../Reads'

function Nav() {

  return (
    <>
      <nav>
        <Link to={Home}>Home</Link>
        <Link to={Create}>Create</Link>
        <Link to={Reads}>Facts</Link>
      </nav>
    </>
  )
}

export default Nav