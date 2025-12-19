import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0 }) => {
  return (
    <motion.div
      className="card group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
    >
      <div className="mb-4 overflow-hidden rounded-lg">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
      </div>

      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>

      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-700">
        <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
          <span className="inline-block mr-2">💡</span>{project.impact}
        </p>
      </div>

      <div className="mt-6 flex justify-between">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <CodeBracketIcon className="h-5 w-5 mr-1" /> Code
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          Live Demo <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;