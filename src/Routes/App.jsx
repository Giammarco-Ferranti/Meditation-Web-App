import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPage from "src/Pages/BlogPage";
import Dashboard from "src/Pages/Dashboard";
import UserPage from "src/Pages/UserPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
