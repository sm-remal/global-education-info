import React, { useContext } from 'react';
import AuthProvider from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading/Loading';

const PrivatRoute = ({ children }) => {
    
    const { user, loading } = useContext(AuthProvider);
    
    const location = useLocation();

    if (loading) {
        <Loading></Loading>
    }
      return <div>{user ? children : <Navigate state={location.pathname} to={"/login"}></Navigate>}</div>;
};

export default PrivatRoute;