import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Hero() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/hero");
        console.log(response.data[0]);

        setData(response.data[0]);
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

  return (
    <section className={styles.hero}>
      <img
        src={`http://localhost:5000/${data.heroCover}`}
        alt="Background Image"
        className={styles["background-img"]}
      />
      <div className={"container"}>
        <div className="row">
          <div className="col-12">
            <div
              className={`${styles["hero-content"]} text-center text-md-start`}
            >
              <h2 className="">{data.header}</h2>
              <h1>
                <b className="text-primary">{data.coloredDesc}</b> {data.desc}
              </h1>
              <a
                href="#appointment"
                className="btn btn-primary rounded-0 mt-3 px-3 py-2"
              >
                Get Appoinments{" "}
                <FontAwesomeIcon icon={faAnglesRight} size="xs" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
