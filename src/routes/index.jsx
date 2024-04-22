import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/home'));
const Battle = React.lazy(() => import('@/pages/battle'));
const Player = React.lazy(() => import('@/pages/battle/Player'));
const Result = React.lazy(() => import('@/pages/battle/Result'));

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/battle',
    element: <Battle />,
    children: [
      {
        index: true,
        element: <Player />,
      },
      {
        path: 'result',
        element: <Result />,
      },
    ],
  },
];

export default routes;
