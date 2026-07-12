import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}

export default App;