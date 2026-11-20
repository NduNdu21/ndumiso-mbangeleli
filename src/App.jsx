import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import BlogList from "./pages/BlogList";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;