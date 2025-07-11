import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import AtomicOrbitalLoader from '../components/AtomicOrbitalLoader';

export const RequireAuth = ({ children }) => {
  const { currentUser, loading } = useUser();

  if (loading) return <div><AtomicOrbitalLoader/></div>;
  return currentUser ? children : <Navigate to="/login" replace />;
};