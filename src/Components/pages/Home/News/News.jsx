import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../Home.module.css";

function News() {
  return (
    <section className={styles.news}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className={`${styles["news-content"]} d-flex justify-content-xl-between align-items-center justify-content-center flex-wrap`}
            >
              <div className={styles["news-header"]}>
                <div
                  className={`${styles["news-title"]} text-center text-md-left`}
                >
                  <h2>Join Our Newsletter</h2>
                </div>
              </div>
              <div className={styles["news-input"]}>
                <label htmlFor="text">
                  <FontAwesomeIcon icon={faPaperPlane} size="xs" />
                </label>
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Enter Your Email"
                />
                <button
                  className=""
                  type="submit"
                  value="Submit-Now"
                  name="submit"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
