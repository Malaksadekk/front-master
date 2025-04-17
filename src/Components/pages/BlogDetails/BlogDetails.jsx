import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./BlogDetails.module.css"; // Import CSS module
import backgroundImg from "../../../assets/images/background.jpg";
import axios from "axios";
import Footer from "./../../shared/Footer/Footer";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `http://localhost:5000/api/blogPosts/${id}`
        );
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setError("Failed to fetch blog details");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!blog) return <div>Blog not found</div>;

  return (
    <>
      <header>
        <section
          className={`${styles.heroSection} text-center py-5`}
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1>Blog Details</h1>
          <p>
            <strong>Home - Blog - </strong> {blog.title}
          </p>
        </section>
      </header>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className={`card ${styles.blogDetailCard}`}>
              <img
                src={`http://localhost:5000/${blog.imgSrc}`} // Full URL path
                className={`card-img-top ${styles.blogImage}`} // Ensure image width matches card
                alt={blog.title}
                onError={(e) => {
                  e.target.src = "/placeholder-blog.jpg"; // Fallback image
                  e.target.onerror = null; // Prevent infinite loop
                }}
              />
              <div className="card-body">
                <p className={styles.cardBlueText}>
                  By Admin {new Date(blog.date).toLocaleDateString()}
                </p>
                <h2 className="card-title mb-4">{blog.title}</h2>
                <div className="card-text">
                  {blog.content.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
