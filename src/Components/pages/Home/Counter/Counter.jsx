import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import counter1 from "../../../../assets/images/counter1.png";
import counter2 from "../../../../assets/images/counter2.png";
import counter3 from "../../../../assets/images/counter3.png";
import counter4 from "../../../../assets/images/counter4.png";
import styles from "../Home.module.css";

function Counter() {
  return (
    <section className={styles.counter}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12">
            <div
              className={`${styles["counter-item"]} d-flex justify-content-center flex-wrap align-items-center`}
            >
              <div className={`${styles["counter-img"]} me-3`}>
                <img src={counter1} alt="counter" />
              </div>
              <div className={styles["counter-content"]}>
                <h3 className={styles.number}>
                  <span className={`${styles["counter-number"]} me-2`}>
                    152
                  </span>
                  <FontAwesomeIcon icon={faPlus} size="xs" />
                </h3>
                <p className={`${styles["post-content"]} text-white`}>
                  Patients Every Day
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div
              className={`${styles["counter-item"]} d-flex justify-content-center flex-wrap align-items-center`}
            >
              <div className={`${styles["counter-img"]} me-3`}>
                <img src={counter2} alt="counter" />
              </div>
              <div className={styles["counter-content"]}>
                <h3 className={styles.number}>
                  <span className={`${styles["counter-number"]} me-2`}>
                    122
                  </span>
                  <FontAwesomeIcon icon={faPlus} size="xs" />
                </h3>
                <p className={`${styles["post-content"]} text-white`}>
                  Qualified Doctors
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div
              className={`${styles["counter-item"]} d-flex justify-content-center flex-wrap align-items-center`}
            >
              <div className={`${styles["counter-img"]} me-3`}>
                <img src={counter3} alt="counter" />
              </div>
              <div className={styles["counter-content"]}>
                <h3 className={styles.number}>
                  <span className={`${styles["counter-number"]} me-2`}>3</span>
                  <FontAwesomeIcon icon={faPlus} size="xs" />
                </h3>
                <p className={`${styles["post-content"]} text-white`}>
                  Years Experience
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div
              className={`${styles["counter-item"]} d-flex justify-content-center flex-wrap align-items-center`}
            >
              <div className={`${styles["counter-img"]} me-3`}>
                <img src={counter4} alt="counter" />
              </div>
              <div className={styles["counter-content"]}>
                <h3 className={styles.number}>
                  <span className={`${styles["counter-number"]} me-2`}>
                    105
                  </span>
                  <FontAwesomeIcon icon={faPlus} size="xs" />
                </h3>
                <p className={`${styles["post-content"]} text-white`}>
                  Diagnosis Verity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
