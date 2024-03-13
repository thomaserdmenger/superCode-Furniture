import { Link, NavLink } from "react-router-dom"

export const Home = () => {
  return (
    <>
      <header className='flex flex-col bg-hero-image bg-cover bg-center bg-no-repeat text-neutral-50'>
        <section className='flex justify-between py-7 px-5 gap-x-4 mb-56'>
          <Link className='cursor-pointer font-bold text-lg' to='/'>
            Home_H
          </Link>
          <nav className='flex gap-x-4 items-center'>
            <div className='flex gap-x-4'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/'>About us</NavLink>
              <NavLink to='/'>Furniture</NavLink>
              <NavLink to='/'>Contact us</NavLink>
            </div>
            <div className='flex gap-x-4'>
              <Link
                to='/login'
                className='border-2 border-neutral-50 rounded-xl px-2 py-0.5'>
                Log in
              </Link>
              <Link
                to='/signup'
                className='rounded-xl px-2 py-0.5 border-2 border-[#D3B270] bg-[#D3B270]'>
                Sign up
              </Link>
            </div>
          </nav>
        </section>
        <h1 className='text-center text-[80px] mb-96'>
          Everyone Loves To Welcome A Good Furniture
        </h1>
      </header>
    </>
  )
}
