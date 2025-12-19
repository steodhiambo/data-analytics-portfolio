import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-blue-100 dark:from-dark-900 dark:to-dark-800 pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">John Doe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
            Data Engineer & Analyst
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Designing scalable data pipelines and delivering actionable insights that drive business impact. 
            Specialized in building robust, efficient systems that process millions of records daily.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="btn-primary inline-block"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="btn-secondary inline-block"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full overflow-hidden shadow-2xl">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-800 rounded-lg shadow-lg p-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium">Open to opportunities</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDownIcon className="h-8 w-8 text-gray-600 dark:text-gray-400" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;