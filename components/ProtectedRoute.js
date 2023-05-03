import { useRouter } from 'next/router';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const {user} = UserAuth()
    const router = useRouter();

  if (!user) {
    router.push('/');
    return null;
  } else {
    return children;
  }
};

export default ProtectedRoute;
