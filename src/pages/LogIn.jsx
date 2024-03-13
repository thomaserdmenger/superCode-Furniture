import { Link } from "react-router-dom"

export const LogIn = () => {
  return (
    <main className='flex flex-col justify-center items-center min-h-screen'>
      <div className='flex flex-col w-full items-center'>
        <form className='flex flex-col items-start w-6/12 gap-4 font-bold'>
          <h1 className='text-5xl mb-4'>Log in</h1>

          <div className='flex w-full gap-4'>
            <input
              type='text'
              name='firstname'
              id='firstname'
              placeholder='First name'
              className='p-4 bg-[#D9D9D9] w-full rounded-lg text-lg'
            />
            <input
              type='text'
              name='lastname'
              id='lastname'
              placeholder='Last name'
              className='p-4 bg-[#D9D9D9] w-full rounded-lg text-lg'
            />
          </div>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email address'
            className='p-4 bg-[#D9D9D9] w-full rounded-lg text-lg'
          />
          <input
            type='submit'
            value='Continue'
            className='p-4 bg-black text-white cursor-pointer w-full rounded-lg text-lg'
          />
          <div className='flex justify-between text-gray-200 cursor-pointer font-bold w-full'>
            <p className='font-light'>
              Forgot Password?
              <Link to='/' className='font-bold cursor-pointer ml-1'>
                Reset
              </Link>
            </p>
            <Link to='/' className='cursor-pointer'>
              Back to home
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}
