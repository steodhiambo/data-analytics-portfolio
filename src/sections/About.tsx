import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-primary-600 mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        ></motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Senior Data Engineer & Analyst with 7+ Years Experience
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            I specialize in designing and implementing scalable data architectures that power data-driven decision-making. 
            My expertise spans across the entire data lifecycle - from raw data ingestion to actionable insights.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Over the years, I've built real-time data pipelines processing over 500K events per second, 
            reduced data processing latency by 75%, and implemented cost-effective solutions that cut infrastructure expenses by 40%. 
            My approach combines technical excellence with strategic thinking to deliver measurable business impact.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            I hold a Master's degree in Data Science and am certified in AWS Solutions Architect and Google Cloud Data Engineer.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-white">Education</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">M.S. Data Science, Stanford University</p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-white">Certifications</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">AWS, GCP, Azure Data Engineer</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;