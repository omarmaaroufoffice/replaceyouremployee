import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CurrencyDollarIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Risk-Free Implementation',
    description: 'No upfront costs. Only pay when you are satisfied with the AI solution.',
    icon: ShieldCheckIcon,
  },
  {
    name: '90% Cost Reduction',
    description: 'Pay only 10% of your current employee compensation for better results.',
    icon: CurrencyDollarIcon,
  },
  {
    name: '24/7 Operation',
    description: 'AI solutions work around the clock without breaks or vacation time.',
    icon: ClockIcon,
  },
  {
    name: 'Instant Scalability',
    description: 'Scale your operations up or down instantly without hiring or training.',
    icon: ChartBarIcon,
  },
  {
    name: 'Consistent Performance',
    description: 'Eliminate human error and maintain consistent quality of work.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Seamless Integration',
    description: 'Our AI solutions integrate perfectly with your existing systems.',
    icon: UserGroupIcon,
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
          >
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="/contact" className="inline-flex space-x-6">
                <span className="rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-600/10">
                  What's new
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                  <span>Just launched</span>
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Replace Employees with AI
              <span className="text-primary-600"> Risk-Free</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform your business with AI solutions that outperform human employees. Pay nothing upfront and only 10% of current employee compensation if satisfied with results.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Get started
              </Link>
              <Link to="/solutions" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Value proposition section */}
      <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Future of Work is Here
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Replace human workers with AI solutions that are faster, more reliable, and cost-effective. Only pay 10% of your current employee costs when you're satisfied with the results.
          </p>
        </motion.div>
      </div>

      {/* Features section */}
      <div className="mx-auto max-w-7xl px-6 mt-16 sm:mt-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-2xl lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
        >
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Start your risk-free journey today. No upfront costs, only pay when you're satisfied.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started now
            </Link>
            <Link to="/solutions" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage; 