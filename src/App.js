import React from 'react'
import { Provider } from 'react-redux';
import { store, persistor } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';
import Helmet from "react-helmet";
import Layout from './components/layout';
import Home from './pages/home'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./public/sass/style.scss";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <Layout>
      {/* <div>
        <h1>About</h1>
        <Link to="/">Home</Link>
      </div> */}
    </Layout>,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={<div className="loading-overlay">
          <div className="bounce-loader">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>}>


        <Helmet>
          <meta charSet="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <title>Shaheen Seeds</title>

          <meta name="keywords" content="React Template" />
          <meta name="description" content="Porto - React eCommerce Template" />
          <meta name="author" content="SW-THEMES" />
        </Helmet>

        <RouterProvider router={router} />
      </PersistGate>
    </Provider>


  );
}

export default App;
