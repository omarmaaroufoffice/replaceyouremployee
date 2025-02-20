import React from 'react';
import { motion } from 'framer-motion';
import {
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
  CodeBracketIcon,
  PresentationChartLineIcon,
  CurrencyDollarIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Administrative AI Assistant',
    description: 'Replace administrative staff with AI that handles emails, scheduling, document management, and basic customer service.',
    icon: DocumentTextIcon,
    features: [
      'Email management and response',
      'Calendar scheduling and optimization',
      'Document organization and filing',
      'Basic customer support',
      'Data entry and processing',
    ],
  },
  {
    name: 'Customer Service AI',
    description: 'Implement 24/7 customer support with AI that handles inquiries, complaints, and support tickets more efficiently than human agents.',
    icon: ChatBubbleBottomCenterTextIcon,
    features: [
      'Multi-language support',
      'Real-time response',
      'Sentiment analysis',
      'Automated ticket routing',
      'Customer satisfaction monitoring',
    ],
  },
  {
    name: 'Development & IT AI',
    description: 'Replace developers and IT staff with AI solutions that can code, debug, and maintain your technical infrastructure.',
    icon: CodeBracketIcon,
    features: [
      'Code generation and review',
      'Bug detection and fixing',
      'System maintenance',
      'Performance optimization',
      'Security monitoring',
    ],
  },
  {
    name: 'Sales & Marketing AI',
    description: 'Transform your sales and marketing with AI that generates leads, creates content, and manages campaigns better than human teams.',
    icon: PresentationChartLineIcon,
    features: [
      'Lead generation and qualification',
      'Content creation and optimization',
      'Campaign management',
      'Market analysis',
      'Performance tracking',
    ],
  },
  {
    name: 'Financial Analysis AI',
    description: 'Replace financial analysts with AI that provides deeper insights, faster analysis, and more accurate forecasting.',
    icon: CurrencyDollarIcon,
    features: [
      'Financial modeling',
      'Risk assessment',
      'Market analysis',
      'Investment recommendations',
      'Report generation',
    ],
  },
  {
    name: 'HR & Recruitment AI',
    description: 'Streamline HR processes with AI that handles recruitment, employee management, and performance analysis.',
    icon: UserIcon,
    features: [
      'Resume screening',
      'Candidate matching',
      'Performance evaluation',
      'Employee engagement analysis',
      'HR policy compliance',
    ],
  },
];

const ServicesPage: React.FC = () => {
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
            Replace Any Role with AI
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI solutions can replace various roles in your organization, providing better performance at just 10% of the cost. Choose your replacement solution below.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">
                    {service.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {service.description}
                  </dd>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg className="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto p-6 bg-gray-50 rounded-b-2xl">
                  <a
                    href="/contact"
                    className="block w-full text-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-32 max-w-7xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Don't see your role listed?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We can create custom AI solutions for any role in your organization.
            Contact us to discuss your specific needs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage; 