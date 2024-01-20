/* eslint-disable */
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { refreshAccessToken } from '../api/auth';
import { useDispatch } from 'react-redux';
import { setUserUnAuthenticated } from '../store/auth/auth.slice';

const WithRefreshToken = (WrappedComponent) => {
  return (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const cookies = new Cookies();
    const pathName = location.pathname;
    const refreshToken = cookies.get('refresh_token');
    const expirationTimestamp = Math.floor(cookies.get('expires_at'));
    const currentTimestamp = Math.floor(new Date().getTime());


    useEffect(() => {
      // Token refresh logic
      const handleRefreshToken = async () => {
        try {
          if (!refreshToken || (expirationTimestamp - currentTimestamp) >= 100 || pathName === '/login') {
            return;
          }
        
          const refreshedToken = await refreshAccessToken(refreshToken);

          if (refreshedToken) {
            const { access_token, expires_at } = refreshedToken;
            cookies.set('access_token', access_token);
            cookies.set('expires_at', expires_at);
          } else {
            dispatch(setUserUnAuthenticated());
            navigate('/login');
          }
        } catch (error) {
          // Handle refresh error
          console.error('Token refresh error:', error);
        }
      };

      // Call refreshToken on mount
      handleRefreshToken();

      // Set up interval for token refresh every 15 minutes
      const refreshTokenInterval = setInterval(() => {
        handleRefreshToken();
      }, 15 * 60 * 1000);

      // Cleanup interval on component unmount
      return () => clearInterval(refreshTokenInterval);
    }, [navigate, refreshToken, expirationTimestamp, currentTimestamp, dispatch]);

    if (!navigate) {
      // Ensure navigate is available before rendering
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithRefreshToken;
