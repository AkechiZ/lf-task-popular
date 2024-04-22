import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  return <Suspense fallback="loading">{useRoutes(routes)}</Suspense>;
}

export default App;
