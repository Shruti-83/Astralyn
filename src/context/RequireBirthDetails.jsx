import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import AtomicOrbitalLoader from '../components/AtomicOrbitalLoader';

export const RequireBirthDetails = ({ children }) => {
    const { currentUser, loading } = useUser();
  
    if (loading) return <AtomicOrbitalLoader/>;
    
    if (currentUser?.profileComplete) {
      return <Navigate to="/dashboard" replace />;
    }
    if (!currentUser) return <Navigate to="/login" replace />;

    
    return children;
  };