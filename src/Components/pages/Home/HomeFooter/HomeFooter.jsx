import { useEffect, useState } from "react";
import {
  faAnglesRight,
  faEnvelope,
  faGlobe,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerBg from "../../../../assets/images/footer-bg.png";
import styles from "../Home.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function HomeFooter() {
  const [doctorsData, setDoctorsData] = useState(null);
  const [servicesData, setServicesData] = useState(null);
  const [openingHoursData, setOpeningHoursData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctorsData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctors");
        console.log(response.data);
        setDoctorsData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchOpeiningHoursData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/workingHours"
        );
        setOpeningHoursData(response.data[0].days);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchServicesData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/services");
        setServicesData(response.data);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorsData();
    fetchOpeiningHoursData();
    fetchServicesData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`${styles["footer-top"]} py-lg-5 border-bottom`}>
              <img
                src={footerBg}
                alt="Background Image"
                className={styles["background-img"]}
              />
              <div className="row g-3">
                <div className="col-12 col-sm-6 col-xl-3">
                  <div className={styles["contact-info"]}>
                    <h3>Contact Info</h3>
                    <p>
                      Rapidiously seize wireless strategic theme areas and
                      corporate testing procedures. Uniquely
                    </p>
                    <ul className="lab-ul p-0">
                      <li>
                        <FontAwesomeIcon
                          icon={faHouse}
                          className="me-2 text-primary"
                        />
                        Suite 02 New Elephant Road usa
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="me-2 text-primary"
                        />
                        +880 142 258 123, 02-96936
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="me-2 text-primary"
                        />
                        <a href="#" className="text-dark">
                          info@mukti.com
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faGlobe}
                          className="me-2 text-primary"
                        />
                        <a href="#" className="text-dark">
                          info@mukti.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3">
                  <div className={`${styles["doctor-info"]} mb-5 mb-sm-0`}>
                    <h3>Our Doctors</h3>
                    <ul className="lab-ul">
                      {doctorsData?.map((doctor, index) => (
                        <li key={index}>
                          <FontAwesomeIcon
                            icon={faAnglesRight}
                            className="me-2"
                            size="xs"
                          />
                          <Link to="/doctors" className="text-dark">
                            {" "}
                            {doctor.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3">
                  <div
                    className={`${styles["services-info"]} mb-5 mb-sm-0 ms-0`}
                  >
                    <h3>Our Services</h3>
                    <ul className="lab-ul">
                      {servicesData?.slice(0, 8).map((service, index) => (
                        <li key={index}>
                          <FontAwesomeIcon
                            icon={faAnglesRight}
                            className="me-2"
                            size="xs"
                          />
                          <Link to="/services" className="text-dark">
                            {" "}
                            {service.service}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-xl-3">
                  <div className={styles["time-info"]}>
                    <h3>opening hours</h3>
                    <div className={styles["dep-item"]}>
                      <div className="dep-item-inner d-flex justify-content-between">
                        <div className="day-name">Saturday</div>
                        <div className="day-time">
                          {openingHoursData?.saturday}
                        </div>
                      </div>
                    </div>
                    <div className={styles["dep-item"]}>
                      <div className="dep-item-inner d-flex justify-content-between">
                        <div className="day-name">Sunday</div>
                        <div className="day-time">
                          {openingHoursData?.sunday}
                        </div>
                      </div>
                    </div>
                    <div className={styles["dep-item"]}>
                      <div className="dep-item-inner d-flex justify-content-between">
                        <div className="day-name">Monday</div>
                        <div className="day-time">
                          {openingHoursData?.monday}
                        </div>
                      </div>
                    </div>
                    <div className={styles["dep-item"]}>
                      <div className="dep-item-inner d-flex justify-content-between">
                        <div className="day-name">Tuesday</div>
                        <div className="day-time">
                          {openingHoursData?.tuesday}
                        </div>
                      </div>
                    </div>
                    <div className={styles["dep-item"]}>
                      <div className="dep-item-inner d-flex justify-content-between">
                        <div className="day-name">Wednesday</div>
                        <div className="day-time">
                          {openingHoursData?.wednesday}
                        </div>
                      </div>
                    </div>
                    <div className={styles["dep-item"]}>
                      <div className="dep-item-inner d-flex justify-content-between">
                        <div className="day-name">Thursday</div>
                        <div className="day-time">
                          {openingHoursData?.thursday}
                        </div>
                      </div>
                    </div>
                    <div className={styles["dep-item"]}>
                      <div className="dep-item-inner d-flex justify-content-between">
                        <div className="day-name">Friday</div>
                        <div className="day-time">
                          {openingHoursData?.friday}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["footer-bottom"]}>
              <p className="text-capitalize text-center">
                Copyright © 2021
                <a className=" ms-1 text-primary fw-bold" href="home.html">
                  Mukti
                </a>
                . Designed by
                <a href="" className="ms-1 text-dark fw-bold">
                  LabArtisan
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;
