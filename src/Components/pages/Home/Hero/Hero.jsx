import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Hero() {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/hero`
        );
        setHeroData(response.data[0]);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load hero content");
        console.error("Error fetching hero data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  if (error) return (
    <div className="alert alert-danger text-center m-5">
      {error}
      <button 
        className="btn btn-sm btn-outline-danger ms-3"
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  );

  if (!heroData) return null;

  return (
    <section className={styles.hero}>
      <img
        src={`${process.env.REACT_APP_API_URL}/${heroData.heroCover.replace(/\\/g, "/")}`}
        alt="Healthcare Background"
        className={styles["background-img"]}
        onError={(e) => {
          e.target.src = "/default-hero.jpg";
          e.target.onerror = null;
        }}
      />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8">
            <div className={`${styles["hero-content"]} text-center text-md-start`}>
              <h2 className="text-white mb-3">{heroData.header}</h2>
              <h1 className="text-white mb-4">
                <span className="text-primary">{heroData.coloredDesc}</span> {heroData.desc}
              </h1>
              <a
                href="#appointment"
                className="btn btn-primary rounded-1 mt-3 px-4 py-2 fs-5"
              >
                Get Appointments{" "}
                <FontAwesomeIcon icon={faAnglesRight} size="sm" className="ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;