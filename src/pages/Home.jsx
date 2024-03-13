import { Link, NavLink } from "react-router-dom"
import { Chair } from "../components/Chair"

export const Home = () => {
  return (
    <>
      <header className='flex flex-col bg-hero-image bg-cover bg-center bg-no-repeat text-neutral-50'>
        <section className='flex justify-between py-7 px-5 gap-x-4 mb-56'>
          <Link className='cursor-pointer font-bold text-lg uppercase' to='/'>
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
      <main>
        <section>
          <div className='grid grid-cols-4 px-24 pt-24 gap-4 mb-10'>
            <article className='flex flex-col gap-4 p-4'>
              <h2 className='font-bold text-3xl'>Who we are</h2>
              <p className='text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper accumsan turpis quis quis at. Nec, nisi dis duis
                urna, elit justo, euismod. Ultricies fermentum nibh in ut quis
                lacus sollicitudin proin. Eu sit enim ullamcorper nisl id est. A
                pulvinar ut fringilla vulputate feugiat lobortis phasellus
                mattis dignissim. Dapibus sed quam venenatis platea. Et
                pharetra, convallis nec volutpat. Sed id et sed diam. Diam leo
                ipsum, urna in lorem amet euismod.
              </p>
            </article>
            <Chair
              content='Light brown chair with wooden legs'
              price='$100'
              image='/images/chair-1.png'
              marginBottom={10}
            />
            <Chair
              content='Black chair with long legs'
              price='$500'
              image='/images/chair-2.png'
              marginTop={4}
            />
            <Chair
              content='White chair with spiral design legs'
              price='$1000'
              image='/images/chair-3.png'
              marginBottom={10}
            />
          </div>
          <Link to='/'>
            <img
              src='/images/arrow.png'
              alt='Arrow'
              className='bg-[#A4A4A3] rounded-full p-0.5 ml-28 mb-10'
            />
          </Link>
        </section>
        <section className='grid grid-cols-2 bg-[#A4A4A3] px-24 py-12 '>
          <div className='flex flex-col'>
            <h2 className='font-bold text-neutral-50 text-5xl mb-6'>
              Drop a Message
            </h2>
            <form className='flex flex-col'>
              <label htmlFor='name' className='text-neutral-50 mb-1 text-2xl'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Input your name'
                className='p-4 rounded-lg placeholder:text-gray-400 text-gray-400 mb-6'
              />
              <label htmlFor='tel' className='text-neutral-50 mb-1 text-2xl'>
                Mobile no.
              </label>
              <input
                type='text'
                name='tel'
                id='tel'
                placeholder='Input yout mobile number'
                className='p-4 rounded-lg placeholder:text-gray-400 text-gray-400 mb-6'
              />
              <label
                htmlFor='message'
                className='text-neutral-50 mb-1 text-2xl'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                placeholder='Input your message'
                className='p-4 rounded-lg placeholder:text-gray-400 text-gray-400 mb-6 h-40'></textarea>
            </form>
          </div>
          <div className='flex justify-end'>
            <img src='/images/phone.png' alt='' />
          </div>
        </section>
      </main>
    </>
  )
}
