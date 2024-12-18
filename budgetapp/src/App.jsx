/* eslint-disable no-unused-vars */
import React from 'react';


// react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// Library
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

// layout
import Main, { mainLoader } from './layout/Main';

// pages
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';
import ExpensesPage, { expensesLoader } from './pages/ExpensesPage';

// actions
import { logoutAction } from './actions/logout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
