import React from 'react';
import Login from "../pages/login";
// import Loader from '../components/shared/loader';
import Main from '../layouts/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from '../pages/notes';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/notes" element={<Main></Main>}>
            <Route index element={<Notes></Notes>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
