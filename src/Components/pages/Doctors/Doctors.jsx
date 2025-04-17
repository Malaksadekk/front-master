// Doctors.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import DoctorCard from "./DoctorCard";
import Footer from "./../../shared/Footer/Footer";
import Hero from "./Hero/Hero";

const Doctors = () => {
  return (
    <>
      <Hero />

      <div className="container py-5">
        <div className="row justify-content-center gx-2 gy-4">
          <DoctorCard />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Doctors;
