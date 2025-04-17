import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faMessage } from "@fortawesome/free-solid-svg-icons";
import styles from "./Blogs.module.css"; // adjust if needed

function Blogs() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/blogPosts`);
        console.log(response.data);
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

  return (
    <section
      className={`${styles.blog} ${styles["padding-tb"]} ${styles["home-bg-color"]}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`${styles["blog-header"]} text-center mb-5`}>
              <h2 className="fw-light">News Feed</h2>
              <h2 className="fw-bolder">Be The First To New Stories</h2>
            </div>
            <div className="row justify-content-center">
              {data?.map((blog, index) => (
                <div key={index} className="col-12 col-xl-4 col-md-6">
                  <div className={`${styles["post-item"]} mb-xl-0`}>
                    <div className={`${styles["post-img"]} overflow-hidden`}>
                      <img
                        src={`${process.env.REACT_APP_API_URL}/${blog?.imgSrc}`}
                        alt="post"
                        className="w-100"
                      />
                    </div>
                    <div className={styles["post-content"]}>
                      <span className={styles.meta}>
                        By <a href="#">Admin</a>{" "}
                        {new Date(blog.date).toLocaleDateString()}
                      </span>
                      <h4>
                        <a href="#">{blog?.title}</a>
                      </h4>
                      <p>{blog?.content.slice(0, 40)}</p>
                    </div>
                    <div className={styles["blog-footer"]}>
                      <Link to="/blogs" className={styles.viewall}>
                        Read More{" "}
                        <FontAwesomeIcon icon={faAnglesRight} size="xs" />
                      </Link>
                      <a href="#" className="blog-comment">
                        <FontAwesomeIcon icon={faMessage} className="me-2" /> 30
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;

