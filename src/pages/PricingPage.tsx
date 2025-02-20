import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const features = [
  'No upfront costs or commitments',
  'Pay only 10% of current employee costs',
  'Only pay if you are satisfied with results',
  '24/7 AI operation without breaks',
  'Instant scalability',
  'Consistent performance',
  'No training or onboarding needed',
  'Seamless integration with existing systems',
];

const PricingPage: React.FC = () => {
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
            Simple, Risk-Free Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Replace your employees with AI solutions and only pay 10% of your current costs. No upfront fees, no risk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-7xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
        >
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Pay Only For Success
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Our revolutionary pricing model means you only pay when our AI solution successfully replaces your employee.
              Save 90% on your current employee costs while getting better performance and reliability.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary-600">
                What's included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Pay only</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">10%</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    of current costs
                  </span>
                </p>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Only pay if you're satisfied with the AI replacement
                </p>
                <a
                  href="/contact"
                  className="mt-10 block w-full rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Get started today
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Example savings section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-32 max-w-7xl sm:mt-40"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              See Your Potential Savings
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Here's how much you could save by replacing different roles with our AI solutions
            </p>
          </div>

          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {[
              { role: 'Customer Service Rep', currentCost: 45000, saving: 40500 },
              { role: 'Administrative Assistant', currentCost: 52000, saving: 46800 },
              { role: 'Sales Representative', currentCost: 65000, saving: 58500 },
              { role: 'Data Entry Specialist', currentCost: 38000, saving: 34200 },
            ].map((item) => (
              <div
                key={item.role}
                className="flex flex-col rounded-xl bg-primary-600 p-8 hover:bg-primary-500 transition-colors"
              >
                <dt className="text-sm leading-6">{item.role}</dt>
                <dd className="mt-2">
                  <span className="text-2xl font-bold tracking-tight">
                    ${item.currentCost.toLocaleString()}
                  </span>
                  <span className="text-sm"> / year</span>
                </dd>
                <dd className="mt-4 text-sm">
                  Save ${item.saving.toLocaleString()} annually
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-32 max-w-7xl text-center"
        >
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Reduce Your Costs by 90%?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Start your risk-free journey today. No upfront costs, only pay when you're satisfied with the results.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started now
              </a>
              <a href="/services" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage; 