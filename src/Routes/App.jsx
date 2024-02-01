import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlogPage, Dashboard, UserPage } from "src/Pages";

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
