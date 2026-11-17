import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;