import React, { useEffect } from 'react'
import { Provider } from 'react-redux';
import { store, persistor } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';
import Helmet from "react-helmet";
import Home from './pages/home'
import Shop from './pages/shop'
import List from './pages/shop/list'
import Grid from './pages/shop/[grid]'
import Product from './pages/product/default/[slug]';
import { useTranslation, I18nextProvider } from 'react-i18next';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Navigate,
    useNavigate,
    Router,
    useLocation
} from "react-router-dom";
import "./public/sass/style.scss";
import i18n from './i18n';
import PageNotFound from './pages/error/404';
import Login from './pages/login/login';
import Cookies from 'universal-cookie';
import AuthService from './auth/auth.service'
import { refreshAccessToken } from './api/auth';
import Wishlist from './pages/wishlist/wishlist';
import Cart from './pages/cart/cart';

const PrivateRoute = ({ element }) => {
    const cookies = new Cookies();

    // Replace this with your actual authentication logic
    const isAuthenticated = cookies.get("access_token")

    return isAuthenticated ? element : <Navigate to="/login" />;
};


const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute element={<Home />} />,
    },
    {
        path: "shop",
        element: <Shop />,
    },
    {
        path: "shop/list",
        element: <List />,
    },
    {
        path: "product/:slug",
        element: <Product />,
    },

    {
        path: "products",
        element: <Grid />,
    },
    {
        path: "wishlist",
        element: <Wishlist />,
    },
    {
        path: "cart",
        element: <Cart />,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },

]);

export default router