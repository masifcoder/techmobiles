import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const isLogin = useSelector((state) => state.authSlice.isLogin);

    return (isLogin === true) ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
