import { Link } from "react-router-dom"

export const SignUp = () => {
  return (
    <main className='flex flex-col justify-center items-center min-h-screen'>
      <div className='flex flex-col w-full items-center'>
        <form className='flex flex-col items-start w-6/12 gap-4 font-bold'>
          <h1 className='text-5xl mb-4'>Sign up</h1>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email address'
            className='p-4 bg-[#D9D9D9] w-full rounded-lg text-lg'
          />
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            className='p-4 bg-[#D9D9D9] w-full rounded-lg text-lg'
          />
          <input
            type='password'
            name='password-create'
            id='password-create'
            placeholder='Create Password'
            className='p-4 bg-[#D9D9D9] w-full rounded-lg text-lg'
          />
          <input
            type='password'
            name='password-confirm'
            id='password-confirm'
            placeholder='Confirm Password'
            className='p-4 bg-[#D9D9D9] w-full rounded-lg text-lg'
          />
          <input
            type='submit'
            value='Create account'
            className='p-4 bg-black text-white cursor-pointer w-full rounded-lg text-lg'
          />
          <div className='flex justify-between text-gray-200 cursor-pointer font-bold w-full'>
            <p className='font-light'>
              Already have an account?
              <Link to='/login' className='font-bold cursor-pointer ml-1'>
                Log in
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
