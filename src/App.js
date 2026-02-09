import React, {useState, useEffect} from 'react';
import styles from './index.module.scss';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Root from './components/Root/root';
import Main from './components/Main/main';
import Create from './pages/create';
import Discover from './pages/discover';
import Routine from './pages/routine';
import Profile from './pages/profile';
import Exercises from './pages/exercises';

const AppRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route path="/" element={<Main/>}/>
    <Route path="/create" element={<Create/>}/>
    <Route path="/discover" element={<Discover/>}/>
    <Route path="/routine" element={<Routine/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/exercises" element={<Exercises/>}/>
  </Route>
))

function App() {

  return (
    <RouterProvider router={AppRouter}/>
  );
}

export default App;
