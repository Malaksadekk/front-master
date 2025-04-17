import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import featureItem1 from "../../../../assets/images/feature-item1.png";
import featureItem2 from "../../../../assets/images/feature-item2.png";
import featureItem3 from "../../../../assets/images/feature-item3.png";
import featureItem4 from "../../../../assets/images/feature-item4.png";
import styles from "../Home.module.css";

function Feature() {
  return (
    <section
      className={`${styles.feature} padding-tb ${styles["home-bg-color"]}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`${styles["feature-header"]} text-center mb-5`}>
              <h2 className="fw-light">We Offer Specialized</h2>
              <h2 className="fw-bolder">Orthopedics To Meet Your Needs</h2>
            </div>
            <div className="feature-content">
              <div className="row justify-content-center g-4">
                <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className={`${styles["feature-item"]} bg-white`}>
                    <div className="img-box mb-4">
                      <img src={featureItem1} alt="feature-img" />
                    </div>
                    <div className={styles["text-box"]}>
                      <h4>Medical Treatment</h4>
                      <p>
                        Lorem ipsum dolor sit amete consectetur adipisicing
                        elite. vlote optio animi?
                      </p>
                      <a href="#" className="text-dark">
                        <span className="fw-bolder">
                          Read More{" "}
                          <FontAwesomeIcon icon={faAnglesRight} size="xs" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className={`${styles["feature-item"]} bg-white`}>
                    <div className="img-box mb-4">
                      <img src={featureItem2} alt="feature-img" />
                    </div>
                    <div className={styles["text-box"]}>
                      <h4>Emergency Help</h4>
                      <p>
                        Lorem ipsum dolor sit amete consectetur adipisicing
                        elite. vlote optio animi?
                      </p>
                      <a href="#" className="text-dark">
                        <span className="fw-bolder">
                          Read More{" "}
                          <FontAwesomeIcon icon={faAnglesRight} size="xs" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className={`${styles["feature-item"]} bg-white`}>
                    <div className="img-box mb-4">
                      <img src={featureItem3} alt="feature-img" />
                    </div>
                    <div className={styles["text-box"]}>
                      <h4>Medical Professionals</h4>
                      <p>
                        Lorem ipsum dolor sit amete consectetur adipisicing
                        elite. vlote optio animi?
                      </p>
                      <a href="#" className="text-dark">
                        <span className="fw-bolder">
                          Read More{" "}
                          <FontAwesomeIcon icon={faAnglesRight} size="xs" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className={`${styles["feature-item"]} bg-white`}>
                    <div className="img-box mb-4">
                      <img src={featureItem4} alt="feature-img" />
                    </div>
                    <div className={styles["text-box"]}>
                      <h4>Qualified Doctors</h4>
                      <p>
                        Lorem ipsum dolor sit amete consectetur adipisicing
                        elite. vlote optio animi?
                      </p>
                      <a href="#" className="text-dark">
                        <span className="fw-bolder">
                          Read More{" "}
                          <FontAwesomeIcon icon={faAnglesRight} size="xs" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
