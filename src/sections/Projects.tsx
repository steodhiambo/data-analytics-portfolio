import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Real-time Streaming Pipeline",
      description: "Built a scalable Kafka + Spark streaming pipeline processing 500K+ events per second with sub-second latency. Implemented fault tolerance and automatic recovery mechanisms.",
      technologies: ["Apache Kafka", "Apache Spark", "Scala", "Redis"],
      impact: "Reduced processing latency by 80% and enabled real-time analytics for 10M+ users",
      image: "/path/to/streaming-pipeline.jpg",
      githubUrl: "https://github.com/username/streaming-pipeline",
      demoUrl: "https://demo.example.com",
      caseStudy: "#"
    },
    {
      id: 2,
      title: "End-to-End ETL with dbt & Airflow",
      description: "Designed and implemented a comprehensive ETL workflow using Airflow and dbt for a retail company with 2TB+ daily data volume.",
      technologies: ["Airflow", "dbt", "PostgreSQL", "Python"],
      impact: "Automated 100+ daily data transformations and reduced manual work by 90%",
      image: "/path/to/etl-workflow.jpg",
      githubUrl: "https://github.com/username/etl-workflow",
      demoUrl: "https://demo.example.com",
      caseStudy: "#"
    },
    {
      id: 3,
      title: "Interactive Sales Dashboard",
      description: "Created an interactive sales dashboard with React frontend connecting to BigQuery backend, serving 500+ daily users.",
      technologies: ["React", "BigQuery", "Chart.js", "Looker Studio"],
      impact: "Enabled data-driven decisions, improving sales forecasting accuracy by 35%",
      image: "/path/to/sales-dashboard.jpg",
      githubUrl: "https://github.com/username/sales-dashboard",
      demoUrl: "https://demo.example.com",
      caseStudy: "#"
    },
    {
      id: 4,
      title: "Data Lake Migration",
      description: "Migrated legacy data warehouse to modern S3-based data lake with Glue catalog and Athena querying layer.",
      technologies: ["AWS S3", "AWS Glue", "AWS Athena", "Lambda"],
      impact: "Reduced storage costs by 60% and improved query performance by 45%",
      image: "/path/to/data-lake.jpg",
      githubUrl: "https://github.com/username/data-lake",
      demoUrl: "https://demo.example.com",
      caseStudy: "#"
    },
    {
      id: 5,
      title: "Predictive Analytics Engine",
      description: "Built a machine learning model integrated into data pipeline to predict customer churn with 92% accuracy.",
      technologies: ["Python", "TensorFlow", "Kubeflow", "MLflow"],
      impact: "Increased customer retention by 25% and prevented $2M+ in revenue loss",
      image: "/path/to/predictive-model.jpg",
      githubUrl: "https://github.com/username/predictive-model",
      demoUrl: "https://demo.example.com",
      caseStudy: "#"
    },
    {
      id: 6,
      title: "Cost Optimization Framework",
      description: "Developed automated cost optimization framework for cloud data infrastructure reducing monthly spend by 40%.",
      technologies: ["Terraform", "Python", "CloudWatch", "DataDog"],
      impact: "Achieved $100K+ annual savings while maintaining SLA requirements",
      image: "/path/to/cost-optimization.jpg",
      githubUrl: "https://github.com/username/cost-optimization",
      demoUrl: "https://demo.example.com",
      caseStudy: "#"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
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
          Showcasing impactful data solutions that drive business value
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
};

export default Projects;