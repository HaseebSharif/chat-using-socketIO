import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Join from './component/Join/Join';
import Chat from './component/Chat/Chat';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Join />
  },
  {
    path: "/chat",
    element: <Chat />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
      <RouterProvider router={router} />
    // <App />
  // </React.StrictMode>
);


