import {  ConfigProvider } from 'antd';
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Login from './pages/login/login';
import Admin from './pages/admin/admin';

const App = () =>{ 
  return (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route path='/login' Component={Login}/>
        <Route path='/' Component={Admin}/>
      </Routes>
    </BrowserRouter>
  </ConfigProvider>
  );
}

export default App;
