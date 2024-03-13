import { Link, NavLink } from "react-router-dom"
import { Chair } from "../components/Chair"

export const Home = () => {
  return (
    <>
      <header
        className='flex flex-col bg-hero-image bg-cover bg-center bg-no-repeat text-neutral-50'
        id='hero'>
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
        <footer className='pt-10 relative'>
          <section className='grid grid-cols-3 mt-10 mb-20 px-40'>
            <div className='flex flex-col gap-2'>
              <h3 className='uppercase font-bold text-2xl mb-2'>Our Company</h3>
              <Link to='/' className='font-bold text-2xl cursor-pointer'>
                About us
              </Link>
              <Link to='/' className='font-bold text-2xl cursor-pointer'>
                Become a Partner
              </Link>
              <Link to='/' className='font-bold text-2xl cursor-pointer'>
                Contact us
              </Link>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='uppercase font-bold text-2xl mb-2'>Learn More</h3>
              <Link to='/' className='font-bold text-2xl cursor-pointer'>
                How it works
              </Link>
              <Link to='/' className='font-bold text-2xl cursor-pointer'>
                FAQs
              </Link>
              <Link to='/' className='font-bold text-2xl cursor-pointer'>
                Terms and Conditions
              </Link>
              <Link to='/' className='font-bold text-2xl cursor-pointer'>
                Privacy Policy
              </Link>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='uppercase text-2xl font-bold mb-2'>Subscribe</h3>
              <form className='flex items-start relative'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Input your email address'
                  className='p-4 rounded-lg placeholder:text-gray-400 text-gray-400 mb-6 bg-gray-200 w-full'
                />
                <input
                  type='submit'
                  value='Send'
                  className='uppercase font-bold text-2xl text-white bg-black absolute right-0 h-14 rounded-lg px-8'
                />
              </form>
            </div>
          </section>
          <p className='bg-black text-white py-4 font-bold text-center'>
            By using this website you accept our Terms and use and Private
            Policy
          </p>
          <a href='#hero' className='cursor-pointer'>
            <img
              src='../../public/images/arrow-2.png'
              className='bg-black absolute bottom-24 right-6 px-2 py-2.5'
              alt='Arrow'
            />
          </a>
        </footer>
      </main>
    </>
  )
}
