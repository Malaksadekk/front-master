// DoctorCard.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Doctors.module.css";

const DoctorCard = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctors");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctor data: ", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <>
      {doctors.map((doctor) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={doctor._id}>
          <div className={`card h-100 ${styles.doctorCard}`}>
            <div className={styles.imageWrapper}>
              <img
                src={`http://localhost:5000/${doctor.img.replace(/\\/g, "/")}`}
                className={`${styles.image} card-img-top`}
                alt={doctor.name}
                onError={(e) => {
                  e.target.src = "/placeholder-doctor.jpg";
                  e.target.onerror = null;
                }}
              />
              <div className={styles}>
                <a href="#" className={styles}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className={styles}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className={styles}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className={`card-body text-center ${styles.cardBody}`}>
              <h5 className={`${styles.doctorName} mb-2`}>{doctor.name}</h5>
              <p className={styles.profession}>{doctor.profession}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DoctorCard;
