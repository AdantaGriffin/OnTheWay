import React, {useState, useEffect} from 'react';
import styles from './index.module.scss';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Root from './components/Root/root';
import Main from './components/Main/main';
import Create from './pages/create';
import Discover from './pages/discover';
import Routine from './pages/routine';

const AppRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route path="/" element={<Main/>}/>
    <Route path="/create" element={<Create/>}/>
    <Route path="/discover" element={<Discover/>}/>
    <Route path="/routine" element={<Routine/>}/>
  </Route>
))

function App() {

  return (
    <RouterProvider router={AppRouter}/>
  );
}

export default App;
