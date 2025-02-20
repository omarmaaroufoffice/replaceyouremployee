import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
  CodeBracketIcon,
  PresentationChartLineIcon,
  CurrencyDollarIcon,
  UserIcon,
  BoltIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  ClockIcon,
  ShieldCheckIcon,
  BeakerIcon,
  LightBulbIcon,
  FireIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'The Meeting Master 3000',
    description: 'Replace that one person who loves scheduling meetings about meetings. Our AI can schedule, attend, and nod thoughtfully during calls without checking Instagram.',
    icon: DocumentTextIcon,
    features: [
      "Never says 'let's circle back'",
      "Doesn't ask 'can everyone see my screen?'",
      'Zero awkward small talk',
      'No connection issues (allegedly)',
      'Never forgets to unmute',
    ],
  },
  {
    name: 'The Email Whisperer',
    description: 'Tired of passive-aggressive email chains and "per my last email" battles? Our AI handles all communication with zero emotional baggage.',
    icon: ChatBubbleBottomCenterTextIcon,
    features: [
      'Never uses Comic Sans',
      'Perfect email timing',
      'No reply-all disasters',
      'Zero emoji confusion',
      'Actually reads attachments',
    ],
  },
  {
    name: 'The Code Ninja',
    description: "Replace developers who spend 90% of their time on Stack Overflow. Our AI actually reads documentation and doesn't blame the previous developer.",
    icon: CodeBracketIcon,
    features: [
      'No coffee dependencies',
      'Bug-free* (*terms apply)',
      'No strong opinions about tabs vs spaces',
      "Never says 'it works on my machine'",
      'Actually writes comments',
    ],
  },
  {
    name: 'The Spreadsheet Sorcerer',
    description: 'Swap out your Excel wizards who guard their macros like ancient secrets. Our AI handles numbers without emotional attachment to formatting.',
    icon: PresentationChartLineIcon,
    features: [
      'Never messes up VLOOKUP',
      "Doesn't crash Excel",
      'No color-coding obsession',
      'Pivot tables in milliseconds',
      'Zero circular references',
    ],
  },
  {
    name: 'The Money Mystic',
    description: 'Replace financial analysts who make predictions based on their horoscope. Our AI crunches numbers without needing a coffee break every 20 minutes.',
    icon: CurrencyDollarIcon,
    features: [
      'Never blames the market',
      'Actually balances books',
      'No creative accounting',
      "Doesn't expense fancy lunches",
      'Zero rounding errors',
    ],
  },
  {
    name: 'The HR Harmonizer',
    description: 'Upgrade from HR representatives who mainly forward emails about birthday cakes. Our AI manages people without playing favorites or organizing trust falls.',
    icon: UserIcon,
    features: [
      'No mandatory fun',
      'Zero bias in hiring',
      'Never loses paperwork',
      'No awkward conversations',
      'Actually follows up',
    ],
  },
];

const implementationSteps = [
  {
    name: 'Liberation Analysis',
    description: 'We analyze your workplace drama and identify which humans are ready for their next career as Instagram influencers.',
  },
  {
    name: 'AI Customization',
    description: 'We customize our AI to match your needs, minus the requests for casual Fridays and office snacks.',
  },
  {
    name: 'Seamless Integration',
    description: 'Our AI integrates with your systems faster than you can say "two weeks notice."',
  },
  {
    name: 'Quality Assurance',
    description: "We ensure everything works perfectly, without any 'it\\'s not a bug, it\\'s a feature' excuses.",
  },
  {
    name: 'Freedom Deployment',
    description: 'Launch your new AI workforce while your former employees start their YouTube channels.',
  },
];

// Enhanced service features with real-time metrics
const enhancedServices = [
  {
    name: 'The Meeting Master 3000',
    description: 'Replace that one person who loves scheduling meetings about meetings. Our AI can schedule, attend, and nod thoughtfully during calls without checking Instagram.',
    icon: DocumentTextIcon,
    features: [
      "Never says 'let's circle back'",
      "Doesn't ask 'can everyone see my screen?'",
      'Zero awkward small talk',
      'No connection issues (allegedly)',
      'Never forgets to unmute',
    ],
    metrics: {
      efficiency: 98,
      costSaving: 85,
      satisfaction: 99,
    },
    testimonial: {
      quote: "Haven't had a pointless meeting since implementation!",
      author: "Former Meeting Addict",
      role: "Now Professional Surfer"
    }
  },
  // ... Add enhanced metrics and testimonials for other services ...
];

// New interactive features
const interactiveDemo = {
  steps: [
    {
      title: "AI Analysis",
      description: "Watch as our AI analyzes your current workflow",
      duration: 2000,
      animation: "scan"
    },
    {
      title: "Optimization",
      description: "Witness real-time process optimization",
      duration: 1500,
      animation: "optimize"
    },
    {
      title: "Implementation",
      description: "See seamless integration in action",
      duration: 2500,
      animation: "implement"
    }
  ]
};

// Live metrics display
const liveMetrics = {
  activeServices: 15000,
  tasksCompleted: "1M+",
  successRate: "99.99%",
  uptime: "100%"
};

const ServiceMetrics = () => {
  const metrics = [
    { icon: BoltIcon, label: "Processing Speed", value: "1ms" },
    { icon: SparklesIcon, label: "Accuracy Rate", value: "99.99%" },
    { icon: RocketLaunchIcon, label: "Implementation Time", value: "24hrs" },
    { icon: ChartBarIcon, label: "Efficiency Gain", value: "10x" },
    { icon: ClockIcon, label: "Uptime", value: "99.999%" },
    { icon: ShieldCheckIcon, label: "Security Score", value: "A+" },
    { icon: BeakerIcon, label: "Innovation Index", value: "Perfect" },
    { icon: LightBulbIcon, label: "AI Intelligence", value: "∞" },
    { icon: FireIcon, label: "Performance", value: "Unlimited" },
    { icon: StarIcon, label: "Customer Rating", value: "5.0" }
  ];

  const [showMetrics, setShowMetrics] = useState(true);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {showMetrics && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6 bg-white rounded-xl shadow-lg"
        >
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="text-center p-4 cursor-pointer hover:bg-gray-50 rounded-lg"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedService(metric.label)}
            >
              <metric.icon className="h-8 w-8 mx-auto text-primary-600" />
              <p className="mt-2 font-semibold text-gray-900">{metric.value}</p>
              <p className="text-sm text-gray-600">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ServicesPage: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [showMetrics, setShowMetrics] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  useEffect(() => {
    // Auto-advance demo steps
    const timer = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % interactiveDemo.steps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

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
            Choose Your Employee Replacement
            <br />
            <span className="text-sm text-gray-500">(Now with 100% Less Water Cooler Drama)</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Browse our collection of AI solutions that work 24/7 without complaining about the office temperature or asking about remote work policies.
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
                    {service.icon && React.createElement(service.icon, {
                      className: "h-6 w-6 text-white",
                      "aria-hidden": "true"
                    })}
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
                    Replace Your Humans
                  </a>
                </div>
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
              The Path to Workplace Peace
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our five-step journey to replacing office politics with pure digital harmony
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
              Ready to Upgrade Your Workforce?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              Join the revolution of businesses who've said goodbye to coffee runs and hello to 24/7 productivity.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start the AI Takeover
              </a>
              <a href="/pricing" className="text-sm font-semibold leading-6 text-white">
                Calculate Human Savings <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* New Interactive Demo Section */}
        <div className="relative mt-20 bg-gradient-to-r from-primary-900 to-primary-800 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Watch AI in Action
              </h2>
              <p className="mt-4 text-lg text-primary-200">
                Experience the future of work in real-time
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {interactiveDemo.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className={`rounded-lg bg-white/10 p-6 backdrop-blur-lg ${
                    activeDemo === index ? 'ring-2 ring-primary-400' : ''
                  }`}
                  variants={itemVariants}
                  initial="hidden"
                  animate="show"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-primary-200">{step.description}</p>
                  {activeDemo === index && (
                    <motion.div
                      className="mt-4 h-1 bg-primary-400"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: step.duration / 1000 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Metrics Dashboard */}
        <div className="mt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Real-Time Performance Metrics
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Watch our AI services outperform human capabilities
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {Object.entries(liveMetrics).map(([key, value]) => (
                <motion.div
                  key={key}
                  className="rounded-lg bg-white p-6 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <dt className="text-sm font-medium text-gray-600">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </dt>
                  <dd className="mt-2 text-3xl font-bold text-primary-600">
                    {value}
                  </dd>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Service Cards */}
        <div className="mt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {enhancedServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedService(index)}
                >
                  {/* Service content */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{service.name}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>

                  {/* Metrics visualization */}
                  <div className="mt-6 space-y-4">
                    {Object.entries(service.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="flex justify-between text-sm">
                          <span>{key}</span>
                          <span>{value}%</span>
                        </div>
                        <div className="mt-1 h-2 rounded-full bg-gray-200">
                          <motion.div
                            className="h-full rounded-full bg-primary-600"
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <blockquote className="italic text-gray-600">
                      "{service.testimonial.quote}"
                    </blockquote>
                    <div className="mt-2 text-sm">
                      <span className="font-medium">{service.testimonial.author}</span>
                      <span className="text-gray-500"> - {service.testimonial.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <ServiceMetrics />
      </div>
    </div>
  );
};

export default ServicesPage; 