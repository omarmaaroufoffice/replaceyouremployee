import React from 'react';
import { motion } from 'framer-motion';
import {
  LightBulbIcon,
  CogIcon,
  ChartBarIcon,
  DocumentCheckIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const solutions = [
  {
    name: 'Natural Language Processing',
    description: 'Advanced AI that understands and responds to human language naturally, perfect for customer service and communication roles.',
    icon: LightBulbIcon,
    capabilities: [
      'Multi-language support',
      'Context understanding',
      'Sentiment analysis',
      'Natural conversation flow',
    ],
  },
  {
    name: 'Process Automation',
    description: 'Streamline repetitive tasks and workflows with intelligent automation that learns and improves over time.',
    icon: CogIcon,
    capabilities: [
      'Workflow optimization',
      'Error reduction',
      '24/7 operation',
      'Scalable processing',
    ],
  },
  {
    name: 'Data Analysis & Reporting',
    description: 'Transform raw data into actionable insights with AI that processes and analyzes information faster than human analysts.',
    icon: ChartBarIcon,
    capabilities: [
      'Real-time analytics',
      'Pattern recognition',
      'Predictive modeling',
      'Automated reporting',
    ],
  },
  {
    name: 'Document Processing',
    description: 'Intelligent document handling and management that understands context and extracts relevant information.',
    icon: DocumentCheckIcon,
    capabilities: [
      'OCR capabilities',
      'Content categorization',
      'Information extraction',
      'Automated filing',
    ],
  },
  {
    name: 'Decision Support',
    description: 'AI-powered decision-making support that analyzes multiple factors to provide optimal recommendations.',
    icon: SparklesIcon,
    capabilities: [
      'Risk assessment',
      'Option analysis',
      'Recommendation engine',
      'Learning from outcomes',
    ],
  },
  {
    name: 'Implementation & Integration',
    description: 'Seamless integration with your existing systems and processes for immediate productivity gains.',
    icon: RocketLaunchIcon,
    capabilities: [
      'Custom configuration',
      'API integration',
      'Legacy system support',
      'Scalable deployment',
    ],
  },
];

const implementationSteps = [
  {
    name: 'Analysis',
    description: 'We analyze your current employee roles and processes to identify the best AI replacement solution.',
  },
  {
    name: 'Configuration',
    description: 'Our AI solutions are customized to match your specific requirements and business processes.',
  },
  {
    name: 'Integration',
    description: 'Seamless integration with your existing systems and workflows for minimal disruption.',
  },
  {
    name: 'Testing',
    description: 'Rigorous testing to ensure the AI solution meets or exceeds human performance levels.',
  },
  {
    name: 'Deployment',
    description: 'Smooth deployment with careful monitoring and optimization for best results.',
  },
];

const SolutionsPage: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Advanced AI Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our cutting-edge AI technologies are designed to replace human workers with more efficient,
            reliable, and cost-effective solutions.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {solutions.map((solution) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <solution.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {solution.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{solution.description}</p>
                  <ul className="mt-4 space-y-2">
                    {solution.capabilities.map((capability) => (
                      <li key={capability} className="flex items-center">
                        <svg className="h-4 w-4 text-primary-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* Implementation Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-32 max-w-7xl sm:mt-40"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Implementation Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our streamlined process ensures a smooth transition from human workers to AI solutions
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-5">
              {implementationSteps.map((step, index) => (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="relative pl-9"
                >
                  <div className="flex items-center justify-start">
                    <div className="absolute left-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-white">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      {step.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-32 max-w-7xl text-center"
        >
          <div className="relative isolate overflow-hidden bg-primary-600 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Workforce?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              Get started with our AI solutions today and see the difference in efficiency and cost savings.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact us now
              </a>
              <a href="/pricing" className="text-sm font-semibold leading-6 text-white">
                View pricing <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionsPage; 