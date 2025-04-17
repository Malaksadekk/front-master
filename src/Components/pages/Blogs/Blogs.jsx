import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Blogs.module.css';
import axios from 'axios';
import Footer from './../../shared/Footer/Footer';
import backgroundImg from '../../../assets/images/background.jpg';

const Blogs = () => {
  const navigate = useNavigate();
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('http://localhost:5000/api/blogPosts');
        setBlogsData(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleReadMore = (blog) => {
    navigate(`/blog/${blog._id}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <header>
        <section
          className={`${style.heroSection} text-center py-5`}
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
        >
          <h1>From Our Blog</h1>
          <p><strong>Home</strong>-Blogs</p>
        </section>
      </header>
      <div className="container">
        <div className="row d-flex flex-column align-items-center">
          {blogsData.map((blog) => (
            <div key={blog._id} className="mb-4">
              <div className={`card ${style.blogCard} h-100`}>
                <img
                  src={`http://localhost:5000/${blog.imgSrc}`}
                  className={`card-img-top ${style.blogImage}`}
                  alt={blog.title}
                  onError={(e) => {
                    e.target.src = '/placeholder-blog.jpg';
                    e.target.onerror = null;
                  }}
                />
                <div className="card-body">
                  <p className={style.cardBlueText}>
                    By Admin {new Date(blog.date).toLocaleDateString()}
                  </p>
                  <h5 className="card-title" style={{ fontSize: '18px' }}>
                    {blog.title}
                  </h5>
                  <p className="card-text">
                    {blog.content.substring(0, 150)}...
                  </p>
                </div>
                <div className="bg-transparent border-0"> {/* Removed extra space */}
                  <button
                    onClick={() => handleReadMore(blog)}
                    className={`${style.readMore} btn btn-primary button button-primary w-100`}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
