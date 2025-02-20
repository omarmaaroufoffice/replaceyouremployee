import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  BoltIcon,
  FireIcon,
  HeartIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

interface PricingTier {
  name: string;
  description: string;
  price: number;
  features: string[];
  savings: number;
  roi: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  popularFeatures: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter Liberation",
    description: "Perfect for small teams ready to embrace the AI revolution",
    price: 10,
    features: [
      "Up to 5 AI replacements",
      "Basic automation workflows",
      "24/7 AI operation",
      "Email support",
      "90% cost reduction guarantee"
    ],
    savings: 450000,
    roi: 4500,
    icon: RocketLaunchIcon,
    popularFeatures: ["Cost savings", "Basic automation"]
  },
  {
    name: "Department Domination",
    description: "Ideal for entire departments ready for full automation",
    price: 20,
    features: [
      "Up to 25 AI replacements",
      "Advanced workflow automation",
      "Priority processing",
      "24/7 premium support",
      "95% cost reduction guarantee",
      "Custom AI training"
    ],
    savings: 2375000,
    roi: 9875,
    icon: SparklesIcon,
    popularFeatures: ["Advanced automation", "Priority support"]
  },
  {
    name: "Total Transformation",
    description: "Complete company-wide AI revolution",
    price: 30,
    features: [
      "Unlimited AI replacements",
      "Enterprise workflow automation",
      "Dedicated AI optimization team",
      "99% cost reduction guarantee",
      "Custom integration support",
      "Advanced analytics dashboard",
      "AI strategy consulting"
    ],
    savings: 9500000,
    roi: 15833,
    icon: BoltIcon,
    popularFeatures: ["Unlimited scale", "Enterprise features"]
  }
];

const savingsCalculator = {
  roles: [
    { title: "Entry Level", baseCost: 45000 },
    { title: "Mid Level", baseCost: 75000 },
    { title: "Senior Level", baseCost: 120000 },
    { title: "Management", baseCost: 150000 },
    { title: "Executive", baseCost: 250000 }
  ],
  benefits: [
    { name: "Healthcare", percentage: 20 },
    { name: "Equipment", percentage: 5 },
    { name: "Training", percentage: 10 },
    { name: "Office Space", percentage: 15 },
    { name: "Other Benefits", percentage: 10 }
  ]
};

const PricingPage: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<number>(1);
  const [calculatorState, setCalculatorState] = useState({
    roleType: 'Mid Level',
    employeeCount: 10,
    benefitsIncluded: true
  });
  const [showROIPopup, setShowROIPopup] = useState(false);
  const [animateNumbers, setAnimateNumbers] = useState(false);

  useEffect(() => {
    // Start number animation when component mounts
    setAnimateNumbers(true);
  }, []);

  const calculateTotalSavings = () => {
    const role = savingsCalculator.roles.find(r => r.title === calculatorState.roleType);
    if (!role) return 0;

    let totalCost = role.baseCost * calculatorState.employeeCount;
    
    if (calculatorState.benefitsIncluded) {
      const benefitsPercentage = savingsCalculator.benefits.reduce((acc, benefit) => acc + benefit.percentage, 0);
      totalCost *= (1 + benefitsPercentage / 100);
    }

    return totalCost * 0.9; // 90% savings
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const PricingMetrics = () => {
    const metrics = [
      { icon: ChartBarIcon, label: "Performance Metrics", value: "+500%" },
      { icon: CurrencyDollarIcon, label: "Cost Savings", value: "90%" },
      { icon: ClockIcon, label: "Time Saved", value: "1000hrs/mo" },
      { icon: UserGroupIcon, label: "Teams Liberated", value: "100+" },
      { icon: StarIcon, label: "Success Rate", value: "99.9%" },
      { icon: FireIcon, label: "Efficiency Boost", value: "10x" },
      { icon: HeartIcon, label: "AI Satisfaction", value: "100%" },
      { icon: GlobeAltIcon, label: "Global Coverage", value: "24/7" },
    ];

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-xl shadow-lg">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center p-4">
            <metric.icon className="h-8 w-8 mx-auto text-primary-600" />
            <p className="mt-2 font-semibold text-gray-900">{metric.value}</p>
            <p className="text-sm text-gray-600">{metric.label}</p>
          </div>
        ))}
      </div>
    );
  };

  const ROICalculator = () => {
    const animateNumbers = async (start: number, end: number, element: HTMLElement) => {
      const duration = 1000;
      const frames = 60;
      const increment = (end - start) / frames;
      
      for(let i = 0; i <= frames; i++) {
        const current = Math.round(start + (increment * i));
        element.textContent = current.toLocaleString();
        await new Promise(resolve => setTimeout(resolve, duration / frames));
      }
    };

    return (
      <div className="mt-8">
        <button 
          onClick={() => setShowROIPopup(true)}
          className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700"
        >
          Calculate Your ROI
        </button>
      </div>
    );
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
            Revolutionary Pricing for Revolutionary Change
            <span className="block text-lg font-normal mt-2 text-primary-600">
              Invest in the future, save on the past
            </span>
          </h2>
        </motion.div>

        {/* Interactive Pricing Tiers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              className={`relative rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200 transition-all duration-300 ${
                selectedTier === index ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
              onClick={() => setSelectedTier(index)}
            >
              <div className="flex items-center gap-4">
                <tier.icon className="h-8 w-8 text-primary-600" />
                <h3 className="text-lg font-semibold">{tier.name}</h3>
              </div>

              <p className="mt-4 text-sm text-gray-600">{tier.description}</p>

              <div className="mt-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.price}%
                  </span>
                  <span className="text-sm text-gray-600 ml-1">of human cost</span>
                </div>

                <motion.div
                  className="mt-6"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* ROI Metrics */}
                <div className="mt-8 space-y-4">
                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-primary-900">Annual Savings</div>
                    <motion.div
                      className="text-2xl font-bold text-primary-600"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      ${tier.savings.toLocaleString()}
                    </motion.div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-green-900">ROI</div>
                    <motion.div
                      className="text-2xl font-bold text-green-600"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {tier.roi}%
                    </motion.div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 block w-full rounded-md bg-primary-600 px-3.5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 bg-gray-50 rounded-2xl p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Calculate Your Liberation Savings
            </h3>
            <p className="mt-2 text-gray-600">
              See exactly how much you'll save by embracing the AI revolution
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* Calculator Controls */}
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Role Type</label>
                <select
                  value={calculatorState.roleType}
                  onChange={(e) => setCalculatorState(prev => ({ ...prev, roleType: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  {savingsCalculator.roles.map(role => (
                    <option key={role.title} value={role.title}>{role.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Number of Employees</label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={calculatorState.employeeCount}
                  onChange={(e) => setCalculatorState(prev => ({ ...prev, employeeCount: parseInt(e.target.value) }))}
                  className="mt-1 w-full"
                />
                <div className="text-sm text-gray-600 mt-1">
                  {calculatorState.employeeCount} employees
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={calculatorState.benefitsIncluded}
                  onChange={(e) => setCalculatorState(prev => ({ ...prev, benefitsIncluded: e.target.checked }))}
                  className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <label className="ml-2 text-sm text-gray-700">
                  Include benefits in calculation
                </label>
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900">Your Potential Savings</h4>
                
                <div className="mt-6 grid gap-4">
                  <motion.div
                    className="bg-green-50 rounded-lg p-4"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-sm font-medium text-green-800">Annual Savings</div>
                    <div className="text-3xl font-bold text-green-600">
                      ${calculateTotalSavings().toLocaleString()}
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      className="bg-blue-50 rounded-lg p-4"
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="text-sm font-medium text-blue-800">Monthly Savings</div>
                      <div className="text-2xl font-bold text-blue-600">
                        ${(calculateTotalSavings() / 12).toLocaleString()}
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-purple-50 rounded-lg p-4"
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <div className="text-sm font-medium text-purple-800">5-Year Savings</div>
                      <div className="text-2xl font-bold text-purple-600">
                        ${(calculateTotalSavings() * 5).toLocaleString()}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ROI Popup */}
        <AnimatePresence>
          {showROIPopup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 flex items-center justify-center z-50"
            >
              <div className="bg-white rounded-xl p-8 shadow-2xl max-w-lg w-full mx-4">
                <h4 className="text-xl font-bold text-gray-900">Detailed ROI Analysis</h4>
                {/* Add detailed ROI content here */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <PricingMetrics />
        <ROICalculator />
      </div>
    </div>
  );
};

export default PricingPage; 