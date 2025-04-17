// DoctorCard.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Doctors.module.css";

const DoctorCard = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/doctors`
        );
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
        setError("Failed to load doctors. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) return <div className="text-center my-5">Loading doctors...</div>;
  if (error) return <div className="alert alert-danger my-5">{error}</div>;

  return (
    <>
      {doctors.map((doctor) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={doctor._id}>
          <div className={`card h-100 ${styles.doctorCard}`}>
            <div className={styles.imageWrapper}>
              <img
                src={`${process.env.REACT_APP_API_URL}/${doctor.img.replace(/\\/g, "/")}`}
                className={`${styles.image} card-img-top`}
                alt={doctor.name}
                onError={(e) => {
                  e.target.src = "/placeholder-doctor.jpg";
                  e.target.onerror = null;
                }}
              />
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className={styles.socialLink}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className={styles.socialLink}>
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
