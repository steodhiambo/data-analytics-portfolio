import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '../types';

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Fault-Tolerant Data Pipelines",
      excerpt: "Learn how to design resilient data pipelines that can handle failures gracefully and recover automatically...",
      date: "May 15, 2023",
      readTime: "8 min read",
      image: "/path/to/fault-tolerant-pipelines.jpg"
    },
    {
      id: 2,
      title: "Cost Optimization in Snowflake",
      excerpt: "Practical strategies for reducing Snowflake compute and storage costs without sacrificing performance...",
      date: "April 2, 2023",
      readTime: "10 min read",
      image: "/path/to/snowflake-costs.jpg"
    },
    {
      id: 3,
      title: "Real-Time Analytics at Scale",
      excerpt: "Architectural patterns for processing and analyzing massive data streams with minimal latency...",
      date: "March 18, 2023",
      readTime: "12 min read",
      image: "/path/to/realtime-analytics.jpg"
    }
  ];

  return (
    <section id="blog" className="section-container">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Insights & Articles
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-primary-600 mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        ></motion.div>
        <motion.p
          className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sharing knowledge and experiences in data engineering and analytics
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            className="card group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-4 overflow-hidden rounded-lg">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
            </div>

            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {post.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {post.excerpt}
            </p>

            <a
              href="#"
              className="text-primary-600 dark:text-primary-400 font-medium flex items-center hover:underline"
            >
              Read Article
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.article>
        ))}
      </div>

      <div className="text-center mt-12">
        <motion.a
          href="#"
          className="btn-secondary inline-flex items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          View All Articles
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
};

export default Blog;