import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home/Home";
import Blogs from "./Components/pages/Blogs/Blogs";
import BlogDetails from "./Components/pages/BlogDetails/BlogDetails";
import Department from "./Components/pages/Departments/Departments";
import Doctors from "./Components/pages/Doctors/Doctors";
import Services from "./Components/pages/Services/Services";
import AboutUs from "./Components/pages/AboutUs/AboutUs";
import ContactUs from "./Components/pages/ContactUs/ContactUs";
import Header from "./Components/shared/Header";
import Notfound from "./Components/pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/department" element={<Department />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
