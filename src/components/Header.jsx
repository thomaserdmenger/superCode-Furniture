import { Link, NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <Link to='/'>Home_H</Link>
      <nav>
        <div>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/'>About us</NavLink>
          <NavLink to='/'>Furniture</NavLink>
          <NavLink to='/'>Contact us</NavLink>
        </div>
        <div>
          <Link to='/login'>Log in</Link>
          <Link to='/signup'>Sign up</Link>
        </div>
      </nav>
    </header>
  )
}
