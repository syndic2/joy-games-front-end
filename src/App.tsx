import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Login = React.lazy(() => import('./components/login/Login'));
const Main = React.lazy(() => import('./components/main/Main'));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Main />} />
    </Routes>
  );
};

export default App;
