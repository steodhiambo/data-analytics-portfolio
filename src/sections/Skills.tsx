import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Engineering",
      skills: ["Apache Spark", "Kafka", "Airflow", "dbt", "Flink", "Delta Lake"],
      icon: "⚙️"
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS (Glue, EMR)", "GCP (BigQuery)", "Azure", "Redshift", "S3"],
      icon: "☁️"
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "Snowflake", "MongoDB", "Cassandra", "MySQL"],
      icon: "🗄️"
    },
    {
      title: "Analytics & Visualization",
      skills: ["Python (Pandas)", "SQL", "Tableau", "Power BI", "Looker", "NumPy"],
      icon: "📊"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "Kubernetes", "Terraform", "CI/CD", "Jenkins"],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-dark-900/50">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Expertise
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
          A comprehensive skill set spanning data engineering, cloud platforms, and analytical tools
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{category.icon}</span>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional skills showcase */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white">Advanced Capabilities</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "ETL/ELT Pipelines", "Real-time Processing", "Data Warehousing", 
            "Machine Learning", "Statistical Analysis", "Business Intelligence"
          ].map((capability, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center bg-primary-100 dark:bg-primary-900/20 rounded-full">
                <div className="w-8 h-8 bg-primary-500 rounded-full"></div>
              </div>
              <span className="text-gray-700 dark:text-gray-300">{capability}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;