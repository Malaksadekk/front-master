import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "./Hero/Hero";
import Feature from "./Feature/Feature";
import Department from "./Department/Department";
import Counter from "./Counter/Counter";
import Doctors from "./Doctors/Doctors";
import Appointments from "./Appointments/Appointments";
import Blogs from "./Blogs/Blogs";
import Sponsors from "./Sponsors/Sponsors";
import News from "./News/News";
import HomeFooter from "./HomeFooter/HomeFooter";

function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Department />
      <Counter />
      <Doctors />
      <Appointments />
      <Blogs />
      <Sponsors />
      <News />
      <HomeFooter />
    </>
  );
}

export default Home;
