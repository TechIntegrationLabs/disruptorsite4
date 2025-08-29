import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { initScrambleAnimations } from './initScrambleAnimations';

const Blog = () => {
  const [blogPosts] = useState([
    {
      id: 1,
      title: "The Future of Digital Marketing",
      excerpt: "Exploring emerging trends and technologies that are reshaping the digital marketing landscape.",
      date: "March 15, 2024",
      slug: "future-digital-marketing",
      category: "Marketing Insights"
    },
    {
      id: 2,
      title: "Building Brand Identity in the Digital Age",
      excerpt: "How to create a compelling brand presence that resonates with modern audiences.",
      date: "March 10, 2024", 
      slug: "building-brand-identity",
      category: "Branding"
    },
    {
      id: 3,
      title: "Content Strategy That Converts",
      excerpt: "Proven strategies for creating content that not only engages but drives real business results.",
      date: "March 5, 2024",
      slug: "content-strategy-converts",
      category: "Content Marketing"
    }
  ]);

  useEffect(() => {
    // Initialize scramble animations
    setTimeout(() => {
      initScrambleAnimations();
    }, 100);
  }, []);

  return (
    <div className="inner-pages">
      <section className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="main-heading">
                <h1 className="customScramble" data-text="Blog & Insights">Blog & Insights</h1>
                <p className="customScramble2" data-text="Stay updated with the latest trends, insights, and strategies in digital marketing and brand development.">
                  Stay updated with the latest trends, insights, and strategies in digital marketing and brand development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-listing">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="blog-grid">
                {blogPosts.map((post) => (
                  <article key={post.id} className="blog-card">
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="category">{post.category}</span>
                        <span className="date">{post.date}</span>
                      </div>
                      <h2 className="blog-title">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="blog-excerpt">{post.excerpt}</p>
                      <Link to={`/blog/${post.slug}`} className="read-more">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M1 1h14M15 1v14M15 1L1 15" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;