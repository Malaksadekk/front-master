import { useState, useEffect } from "react";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../Home.module.css";

function Doctors() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctors");
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const phone = "658 222 127";
  const email = "admin@gmail.com";

  return (
    <section className={styles.doctors + " " + styles["padding-tb"]}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles["doctors-header"] + " text-center mb-5"}>
              <h2 className="fw-light">Meet Our</h2>
              <h2 className="fw-bolder">Mukti Professional Doctors</h2>
            </div>
            <div className="row justify-content-center">
              {data.slice(0, 4).map((doctor, index) => (
                <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className={styles["doctor-item"]}>
                    <div className={styles["doctor-img"] + " overflow-hidden"}>
                      <img
                        src={`http://localhost:5000/${doctor.img}`}
                        alt="doctor"
                        className="w-100"
                      />
                    </div>
                    <div className={styles["doctor-content"]}>
                      <div
                        className={`${styles["doctor-name"]} ${
                          styles[`cl-${index + 1}`]
                        } p-3 text-white`}
                      >
                        <h4 className="text-white">{doctor.name}</h4>
                        <p className="digi">{doctor.profession}</p>
                      </div>
                      <ul
                        className={
                          styles["doctor-contact"] + " p-3 position-relative"
                        }
                      >
                        <li>
                          <span className="text-dark">Phone :</span> {phone}
                        </li>
                        <li>
                          <span className="text-dark">Email :</span> {email}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles["doctors-btn"] + " text-center"}>
              <Link
                to="/doctors"
                className="btn btn-primary rounded-0 mt-3 px-4 py-2"
              >
                View All Doctors{" "}
                <FontAwesomeIcon icon={faAnglesRight} size="xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Doctors;
