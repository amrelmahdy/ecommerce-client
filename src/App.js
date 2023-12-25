import React, { useEffect } from 'react'
import { Provider } from 'react-redux';
import { store, persistor } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';
import Helmet from "react-helmet";
import Home from './pages/home'
import Shop from './pages/shop'
import List from './pages/shop/list'
import Product from './pages/product/default/[slug]';
import { useTranslation, I18nextProvider } from 'react-i18next';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./public/sass/style.scss";
import i18n from './i18n';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "cotact-us",
    element: <></>,
  },
  {
    path: "cart",
    element: <></>,
  },
  {
    path: "whishlist",
    element: <></>,
  },
  {
    path: "help",
    element: <></>,
  },
  {
    path: "stores",
    element: <></>,
  },
  {
    path: "login",
    element: <></>,
  },
  {
    path: "login",
    element: <></>,
  },
  {
    path: "forget-password",
    element: <></>,
  },
  {
    path: "account",
    element: <></>,
  },
  {
    path: "checkout",
    element: <></>,
  },
]);


function App() {

  const { t, i18n } = useTranslation();


  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        {/* <PersistGate
        persistor={persistor}
        loading={<div className="loading-overlay">
          <div className="bounce-loader">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>}> */}
        <Helmet htmlAttributes={{ lang : i18n.language }} bodyAttributes={{ lang : i18n.language }}>
          <meta charSet="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />


          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Shaheen Seeds</title>
          <meta name="keywords" content="React Template" />
          <meta name="description" content="Porto - React eCommerce Template" />
          <meta name="author" content="SW-THEMES" />
          <link rel="stylesheet" type="text/css" href="/vendor/mm.css" />
          {i18n.language === 'ar' && <link rel="stylesheet" type="text/css" href="/vendor/mm.css" />}
        </Helmet>
        
        <RouterProvider router={router} />

        {/* </PersistGate> */}
      </I18nextProvider>
    </Provider>


  );
}

export default App;
