import { useRouter } from 'next/router';
import Link from 'next/link';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const router = useRouter();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link href='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link href='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link href='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link href='/signup'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
