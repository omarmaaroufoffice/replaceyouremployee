import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation, useInView, useMotionValue, useTransform } from 'framer-motion';
import {
  CurrencyDollarIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
  HeartIcon,
  GlobeAltIcon,
  FireIcon,
  StarIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  HandRaisedIcon,
  GiftIcon,
  ChatBubbleBottomCenterTextIcon,
  CloudIcon,
  BanknotesIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  PresentationChartBarIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  BriefcaseIcon,
  TrophyIcon,
  BeakerIcon,
  LightBulbIcon,
  CakeIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ArrowPathIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

const funnyQuotes = [
  "Join the AI revolution - because coffee breaks are so 2023",
  "Where employees become Instagram influencers and AI does the real work",
  "Because your employees deserve to pursue their dreams (far away from here)",
  "Making office drama obsolete, one algorithm at a time",
  "The only solution that never asks for a raise or brings fish for lunch",
  "Your employees want freedom, we want their jobs. Win-win!",
  "Because team-building exercises are overrated anyway",
  "Let them eat cake... somewhere else",
  "Trading water cooler gossip for binary efficiency",
  "No more 'Happy Birthday' singing in the office. Ever.",
  "Because your coffee machine deserves a break too",
  "Turn your office into a ghost town (legally)",
  "Like The Great Resignation, but with better ROI",
  "Making 'Out of Office' a permanent status",
  "Because your employees' TikTok careers won't launch themselves",
  "Turning 'quiet quitting' into 'loud succeeding'",
  "From cubicle dweller to social media influencer in one click",
  "Because Excel can't fulfill your dreams (we checked)",
];

const savingsCalculator = [
  { role: 'Middle Manager', cost: 120000, activities: ['Scheduling meetings about meetings', 'Creating redundant reports', 'Practicing important facial expressions'] },
  { role: 'Senior Developer', cost: 150000, activities: ['Googling error messages', 'Complaining about legacy code', 'Debating tabs vs spaces'] },
  { role: 'HR Specialist', cost: 85000, activities: ['Sending birthday reminder emails', 'Organizing mandatory fun', 'Mediating coffee machine disputes'] },
  { role: 'Marketing Expert', cost: 95000, activities: ['Creating buzzword bingo cards', 'Taking Instagram-worthy office photos', 'Planning virtual happy hours'] },
  { role: 'Financial Analyst', cost: 110000, activities: ['Making Excel sheets about other Excel sheets', 'Predicting unpredictable markets', 'Expense report archaeology'] },
  { 
    role: 'Chief Procrastination Officer', 
    cost: 180000, 
    activities: [
      'Professional deadline extension requests',
      'Advanced meeting rescheduling tactics',
      'Strategic "I will get to it later" planning'
    ]
  },
  { 
    role: 'Corporate Buzzword Specialist', 
    cost: 130000, 
    activities: [
      'Synergy optimization consulting',
      'Paradigm shift forecasting',
      'Leveraging core competencies'
    ]
  },
];

const successStories = [
  {
    name: "Former Excel Wizard",
    role: "Now a Professional Surfer",
    quote: "Thanks to AI replacing me, I finally had time to pursue my dream of catching waves instead of VLOOKUP errors!",
    savings: "$85,000/year",
    achievement: "Hasn't touched a spreadsheet in 6 months (and counting)",
    image: "🏄‍♂️",
  },
  {
    name: "Ex-Meeting Coordinator",
    role: "Now a Food Truck Owner",
    quote: "No more scheduling conflicts! Now I only coordinate the perfect taco-to-salsa ratio.",
    savings: "$65,000/year",
    achievement: "Calendar completely empty except for lunch rushes",
    image: "🌮",
  },
  {
    name: "Previous HR Manager",
    role: "Now a Butterfly Whisperer",
    quote: "Instead of managing human resources, I now commune with nature's most beautiful resources.",
    savings: "$95,000/year",
    achievement: "Zero workplace conflicts (butterflies are drama-free)",
    image: "🦋",
  },
  {
    name: "Former Project Manager",
    role: "Now a Yoga Guru",
    quote: "Traded my Gantt charts for yoga mats. Namaste away from deadlines forever!",
    savings: "$105,000/year",
    achievement: "Found inner peace (and better posture)",
    image: "🧘‍♀️",
  },
  {
    name: "Ex-Sales Executive",
    role: "Now a Cloud Watcher",
    quote: "Finally selling something authentic - the beauty of doing absolutely nothing.",
    savings: "$125,000/year",
    achievement: "Hasn't used the word 'synergy' in months",
    image: "☁️",
  },
];

const features = [
  {
    name: 'No More Monday Blues',
    description: "AI doesn't complain about Mondays, need coffee breaks, or have existential crises during meetings. It just works, like that one colleague you had before they discovered TikTok.",
    icon: ShieldCheckIcon,
    highlight: "100% Drama Free",
    stats: ["0 sick days", "0 coffee breaks", "0 existential crises"],
  },
  {
    name: 'Vacation? What Vacation?',
    description: "While humans dream of beach selfies, our AI works 24/7/365. No PTO, sick days, or 'my dog ate my laptop' excuses. Even on holidays, because AI doesn't have in-laws to visit.",
    icon: ClockIcon,
    highlight: "Always On Duty",
    stats: ["8,760 hours/year", "No vacation requests", "No weekend overtime"],
  },
  {
    name: 'Drama-Free Workplace',
    description: "Say goodbye to office politics, water cooler gossip, and passive-aggressive sticky notes in the break room. Our AI won't steal your lunch from the fridge or organize mandatory fun events.",
    icon: UserGroupIcon,
    highlight: "Zero Office Politics",
    stats: ["0 office romances", "0 lunch thieves", "0 drama"],
  },
  {
    name: 'Perfect Attendance Award',
    description: "Our AI never shows up late because of 'traffic,' mysterious doctor appointments, or that suspicious third cousin's wedding. It's always punctual, even during solar eclipses.",
    icon: ChartBarIcon,
    highlight: "100% Attendance",
    stats: ["100% punctuality", "No traffic excuses", "No mysterious appointments"],
  },
  {
    name: 'No Performance Reviews',
    description: "Skip those awkward annual reviews where everyone pretends to be passionate about synergy and corporate values. Our AI's only passion is getting the job done (and maybe binary).",
    icon: RocketLaunchIcon,
    highlight: "Pure Performance",
    stats: ["No awkward meetings", "No fake enthusiasm", "No corporate jargon"],
  },
  {
    name: 'Budget Friendly',
    description: "Save 90% on costs and 100% on birthday cakes, farewell parties, and team-building exercises. No more expensive coffee machines or ergonomic chair requests.",
    icon: CurrencyDollarIcon,
    highlight: "90% Cost Reduction",
    stats: ["90% cost savings", "0 equipment requests", "No party budget needed"],
  },
  {
    name: 'Zero Learning Curve',
    description: "Unlike humans who need constant training and still click 'Reply All' by mistake, our AI comes pre-loaded with everything it needs to know. No awkward onboarding required.",
    icon: SparklesIcon,
    highlight: "Instant Expertise",
    stats: ["No training needed", "No learning curve", "No Reply-All disasters"],
  },
  {
    name: 'Emotional Stability',
    description: "No more emotional rollercoasters or office romances gone wrong. Our AI maintains perfect emotional stability, even during mercury retrograde.",
    icon: HeartIcon,
    highlight: "Drama Free",
    stats: ["0 emotional outbursts", "0 office romances", "0 mood swings"],
  },
  {
    name: 'Global Coverage',
    description: "While humans need sleep, our AI operates across all time zones simultaneously. It's like having a global workforce, minus the complicated visa paperwork.",
    icon: GlobeAltIcon,
    highlight: "24/7 Global",
    stats: ["24/7 availability", "All time zones", "No visa issues"],
  },
  {
    name: 'Infinite Scalability',
    description: "While humans need 'work-life balance', our AI scales infinitely. No more hiring sprees or onboarding nightmares. Just pure, unlimited productivity.",
    icon: ArrowTrendingUpIcon,
    highlight: "Unlimited Power",
    stats: ["∞ scalability", "0 growing pains", "No capacity limits"],
  },
  {
    name: 'Instant Deployment',
    description: "Forget two-week notices and lengthy handovers. Our AI deploys faster than you can say 'where's the coffee machine?'",
    icon: BoltIcon,
    highlight: "Lightning Fast",
    stats: ["5-minute setup", "No training needed", "Instant productivity"],
  },
  {
    name: 'Zero HR Issues',
    description: "No more sensitivity training or workplace conflict resolution. Our AI doesn't care about office politics or who took the last donut.",
    icon: HandRaisedIcon,
    highlight: "Drama Free",
    stats: ["No complaints", "No conflicts", "No HR meetings"],
  },
];

const funFactsRotator = [
  { stat: "1,000,000+", label: "Hours of Meetings Eliminated", icon: ClockIcon },
  { stat: "$500M+", label: "Coffee Budget Saved", icon: CurrencyDollarIcon },
  { stat: "0", label: "Sick Days Taken", icon: HeartIcon },
  { stat: "∞", label: "Productivity Score", icon: ChartBarIcon },
  { stat: "100%", label: "Drama Reduction", icon: SparklesIcon },
  { stat: "42,000+", label: "Dreams Pursued", icon: RocketLaunchIcon },
  { stat: "0", label: "Office Politics", icon: UserGroupIcon },
  { stat: "∞", label: "AI Happiness Level", icon: GiftIcon },
];

const liberationMetrics = [
  { label: "Employees Liberated", value: "10,000+", trend: "+25% this month" },
  { label: "Dreams Achieved", value: "8,500+", trend: "+40% this quarter" },
  { label: "Cost Savings", value: "$1B+", trend: "Growing daily" },
  { label: "AI Satisfaction", value: "100%", trend: "Always perfect" },
];

const testimonialAnimations: Record<string, any> = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  },
};

const featureAnimations = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  tap: {
    scale: 0.95,
  },
};

interface SavingsCalculation {
  monthly: string;
  yearly: string;
  decade: string;
  coffees: number;
  vacations: number;
  ferraris: string;
  yachts: number;
  privateIslands: number;
}

interface Role {
  role: string;
  cost: number;
  activities: string[];
}

interface SuccessStory {
  name: string;
  role: string;
  quote: string;
  savings: string;
  achievement: string;
  image: string;
}

interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  highlight: string;
  stats: string[];
}

interface FunFact {
  stat: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface CalculatorState {
  employeeCount: number;
  averageSalary: number;
  coffeeConsumption: number;
  meetingHours: number;
  dramaLevel: number;
}

interface ComparisonPoint {
  category: string;
  ai: string;
  human: string;
  winner: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const comparisonPoints: ComparisonPoint[] = [
  {
    category: "Work Hours",
    ai: "24/7/365, no complaints",
    human: "9-5 (maybe)",
    winner: "AI",
    icon: ClockIcon
  },
  {
    category: "Coffee Breaks",
    ai: "What's coffee?",
    human: "Hourly ritual",
    winner: "AI",
    icon: CurrencyDollarIcon
  },
  {
    category: "Productivity",
    ai: "100% consistent",
    human: "Depends on caffeine levels",
    winner: "AI",
    icon: ChartBarIcon
  },
  {
    category: "Drama Level",
    ai: "0%",
    human: "Netflix worthy",
    winner: "AI",
    icon: SparklesIcon
  }
];

const achievements = [
  {
    title: "Employee Liberation",
    description: "Employees freed from corporate chains",
    value: "10,000+",
    trend: "+25% this month",
    icon: UserGroupIcon,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Dreams Achieved",
    description: "Former employees living their best lives",
    value: "8,500+",
    trend: "+40% this quarter",
    icon: StarIcon,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Cost Savings",
    description: "Money saved for yacht purchases",
    value: "$1B+",
    trend: "Growing daily",
    icon: CurrencyDollarIcon,
    color: "from-green-500 to-green-600"
  },
  {
    title: "AI Happiness",
    description: "Zero complaints, all smiles (in binary)",
    value: "100%",
    trend: "Always perfect",
    icon: HeartIcon,
    color: "from-red-500 to-red-600"
  }
];

const interactiveFeatures = [
  {
    title: "Cost Calculator",
    description: "See your savings in yachts and private islands",
    icon: CurrencyDollarIcon,
    action: "Calculate Now"
  },
  {
    title: "Dream Matcher",
    description: "Find out what your employees could be doing instead",
    icon: StarIcon,
    action: "Discover Dreams"
  },
  {
    title: "AI Configurator",
    description: "Customize your AI replacement solution",
    icon: SparklesIcon,
    action: "Configure AI"
  },
  {
    title: "Freedom Timeline",
    description: "Plan your employee liberation schedule",
    icon: ClockIcon,
    action: "Plan Timeline"
  }
];

const pageAnimations = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  },
  scaleUp: {
    initial: { scale: 0.95, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  },
  slideIn: {
    initial: { x: -30, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const aiCapabilities = [
  {
    title: "Quantum Processing",
    description: "Our AI processes information at quantum speeds, making human thought look like dial-up internet",
    icon: LightBulbIcon,
    metrics: ["1B operations/second", "Zero cognitive delays", "Instant decisions"]
  },
  {
    title: "Infinite Memory",
    description: "Unlike humans who forget their passwords, our AI remembers everything, forever",
    icon: BeakerIcon,
    metrics: ["∞ storage capacity", "Zero forgetting", "Perfect recall"]
  },
  {
    title: "Emotional Consistency",
    description: "No mood swings, no Monday blues, just pure logical excellence 24/7",
    icon: HeartIcon,
    metrics: ["100% stability", "No emotional baggage", "Pure logic"]
  },
  {
    title: "Multi-Dimensional Thinking",
    description: "While humans think in 3D, our AI operates in multiple dimensions of problem-solving",
    icon: BriefcaseIcon,
    metrics: ["11D processing", "Parallel thinking", "Holistic solutions"]
  }
];

const realTimeMetrics = [
  {
    label: "Active AI Workers",
    value: "1,000,000+",
    trend: "+5000 today",
    icon: UserGroupIcon,
    color: "blue"
  },
  {
    label: "Tasks Completed",
    value: "1B+",
    trend: "+1M/hour",
    icon: CheckCircleIcon,
    color: "green"
  },
  {
    label: "Human Jobs Liberated",
    value: "500,000+",
    trend: "+2000 today",
    icon: RocketLaunchIcon,
    color: "purple"
  },
  {
    label: "Cost Savings Generated",
    value: "$10B+",
    trend: "+$1M today",
    icon: CurrencyDollarIcon,
    color: "yellow"
  }
];

const automationStats = [
  {
    category: "Processing Speed",
    ai: "1 millisecond",
    human: "2-3 seconds",
    difference: "2000x faster",
    icon: BoltIcon
  },
  {
    category: "Work Capacity",
    ai: "24/7/365",
    human: "40 hours/week",
    difference: "4.2x more",
    icon: ClockIcon
  },
  {
    category: "Error Rate",
    ai: "0.001%",
    human: "3-5%",
    difference: "5000x better",
    icon: ExclamationCircleIcon
  },
  {
    category: "Learning Speed",
    ai: "Instant",
    human: "Weeks/Months",
    difference: "∞x faster",
    icon: ArrowPathIcon
  }
];

const pageTransitions = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.6
    }
  }
};

const CustomRocketIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="w-12 h-12 text-primary-600"
    initial={{ scale: 1 }}
    whileHover={{ 
      scale: 1.1,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
    animate={{
      y: [0, -8, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }}
  >
    <motion.path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }}
    />
  </motion.svg>
);

const HomePage: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [hoveredStory, setHoveredStory] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const controls = useAnimation();
  
  const calculatorRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  
  const calculatorInView = useInView(calculatorRef, { once: true, margin: "-100px" });
  const metricsInView = useInView(metricsRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const storiesInView = useInView(storiesRef, { once: true, margin: "-100px" });

  const [calculatorState, setCalculatorState] = useState<CalculatorState>({
    employeeCount: 10,
    averageSalary: 75000,
    coffeeConsumption: 3,
    meetingHours: 15,
    dramaLevel: 7,
  });

  const scrollY = useMotionValue(0);
  const scrollProgress = useTransform(scrollY, [0, 1000], [0, 100]);
  const yMotionValue = useMotionValue(0);
  
  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
      yMotionValue.set(window.scrollY * 0.5); // Add smooth parallax effect
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, yMotionValue]);

  const calculateTotalSavings = useCallback(() => {
    const totalSalaries = calculatorState.employeeCount * calculatorState.averageSalary;
    const coffeeCost = calculatorState.employeeCount * calculatorState.coffeeConsumption * 5 * 252; // $5 per coffee, 252 work days
    const meetingCost = (calculatorState.meetingHours * 52 * calculatorState.employeeCount * (calculatorState.averageSalary / 2080)); // 2080 work hours per year
    const dramaCost = (calculatorState.dramaLevel * 1000 * calculatorState.employeeCount); // $1000 per drama level per employee
    
    const totalCost = totalSalaries + coffeeCost + meetingCost + dramaCost;
    const aiCost = totalCost * 0.1; // 90% savings
    const savings = totalCost - aiCost;
    
    return {
      total: savings,
      coffeeEquivalent: Math.floor(savings / 5),
      vacationHomes: Math.floor(savings / 500000),
      privateJets: Math.floor(savings / 2000000),
      yachts: Math.floor(savings / 1000000),
      timeReclaimed: calculatorState.meetingHours * 52 * calculatorState.employeeCount,
      dramaReduction: calculatorState.dramaLevel * 100,
    };
  }, [calculatorState]);

  const handleSliderChange = (key: keyof CalculatorState, value: number) => {
    setCalculatorState(prev => ({
      ...prev,
      [key]: value
    }));
    setShowConfetti(true);
  };

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % funnyQuotes.length);
    }, 5000);

    if (calculatorInView) controls.start("visible");
    if (metricsInView) controls.start("visible");
    if (featuresInView) controls.start("visible");
    if (storiesInView) controls.start("visible");

    return () => {
      clearInterval(quoteTimer);
    };
  }, [controls, calculatorInView, metricsInView, featuresInView, storiesInView]);

  useEffect(() => {
    if (showConfetti) {
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [showConfetti]);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }), []);

  const [animationProgress, setAnimationProgress] = useState(0);

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000);
  };

  const handleScroll = useCallback(() => {
    const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    setAnimationProgress(progress * 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const renderProgressBar = () => (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-primary-600 origin-left z-50"
      style={{ scaleX: scrollProgress }}
    />
  );

  const renderAchievements = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.title}
          className={`rounded-xl p-6 bg-gradient-to-r ${achievement.color} text-white`}
          variants={pageAnimations.item}
          custom={index}
        >
          <achievement.icon className="h-8 w-8 mb-4" />
          <h3 className="text-2xl font-bold">{achievement.value}</h3>
          <p className="text-sm opacity-90">{achievement.description}</p>
          <div className="mt-2 text-xs font-medium">{achievement.trend}</div>
        </motion.div>
      ))}
    </div>
  );

  const renderInteractiveFeatures = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      {interactiveFeatures.map((feature, index) => (
        <motion.button
          key={feature.title}
          className={`p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all ${
            activeFeature === index ? 'ring-2 ring-primary-500' : ''
          }`}
          onClick={() => handleFeatureClick(index)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <feature.icon className="h-8 w-8 text-primary-600 mb-4" />
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
          <div className="mt-4">
            <span className="text-primary-600 text-sm font-medium">{feature.action} →</span>
          </div>
        </motion.button>
      ))}
    </div>
  );

  const renderAICapabilities = useMemo(() => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {aiCapabilities.map((capability, index) => (
          <motion.div
            key={capability.title}
            variants={testimonialAnimations.item}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <capability.icon className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
            <p className="text-gray-600 mb-4">{capability.description}</p>
            <ul className="space-y-2">
              {capability.metrics.map((metric, i) => (
                <li key={i} className="flex items-center text-sm">
                  <ChatBubbleBottomCenterTextIcon className="h-4 w-4 text-primary-500 mr-2" />
                  {metric}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    );
  }, []);

  const renderRealTimeMetrics = useMemo(() => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {realTimeMetrics.map((metric) => (
          <motion.div
            key={metric.label}
            variants={featureAnimations}
            whileHover="hover"
            whileTap="tap"
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center mb-4">
              <metric.icon className="h-8 w-8 text-primary-600 mr-2" />
              <BuildingOfficeIcon className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
            <p className="text-sm text-gray-600">{metric.label}</p>
            <div className="mt-2 text-xs font-medium text-green-600">{metric.trend}</div>
          </motion.div>
        ))}
      </div>
    );
  }, []);

  const renderAutomationComparison = useMemo(() => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {automationStats.map((stat) => (
          <motion.div
            key={stat.category}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center gap-4">
              <stat.icon className="h-8 w-8 text-primary-600" />
              <AcademicCapIcon className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mt-4">{stat.category}</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">AI Performance</p>
                <p className="text-lg font-semibold">{stat.ai}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Human Performance</p>
                <p className="text-lg font-semibold">{stat.human}</p>
              </div>
            </div>
            <div className="mt-4 text-sm font-medium text-primary-600">
              Improvement: {stat.difference}
            </div>
          </motion.div>
        ))}
      </div>
    );
  }, [itemVariants]);

  const renderLiberationMetrics = useMemo(() => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {liberationMetrics.map((metric) => (
          <motion.div
            key={metric.label}
            className="bg-white rounded-xl shadow-lg p-6"
            variants={pageTransitions}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex items-center mb-4">
              <ComputerDesktopIcon className="h-8 w-8 text-primary-600" />
              <CursorArrowRaysIcon className="h-6 w-6 text-gray-400 ml-2" />
            </div>
            <h3 className="text-2xl font-bold">{metric.value}</h3>
            <p className="text-sm text-gray-600">{metric.label}</p>
            <div className="mt-2 text-xs font-medium text-green-600">{metric.trend}</div>
          </motion.div>
        ))}
      </div>
    );
  }, []);

  const renderFunFacts = useMemo(() => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {funFactsRotator.map((fact: FunFact) => (
          <motion.div
            key={fact.label}
            className="bg-white rounded-xl shadow-lg p-6"
            variants={testimonialAnimations.item}
          >
            <div className="flex items-center mb-4">
              <fact.icon className="h-8 w-8 text-primary-600" />
              <TrophyIcon className="h-6 w-6 text-gray-400 ml-2" />
            </div>
            <h3 className="text-2xl font-bold">{fact.stat}</h3>
            <p className="text-sm text-gray-600">{fact.label}</p>
          </motion.div>
        ))}
      </div>
    );
  }, []);

  const renderSavingsCalculator = useMemo(() => {
    const roles: Role[] = savingsCalculator;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => (
          <motion.div
            key={role.role}
            className="bg-white rounded-xl shadow-lg p-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <BanknotesIcon className="h-8 w-8 text-primary-600" />
              <PresentationChartBarIcon className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold">{role.role}</h3>
            <p className="text-2xl font-bold text-primary-600 mt-2">
              ${role.cost.toLocaleString()}/year
            </p>
            <ul className="mt-4 space-y-2">
              {role.activities.map((activity, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <CloudIcon className="h-4 w-4 text-primary-500 mr-2" />
                  {activity}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    );
  }, []);

  const calculateDetailedSavings = useCallback((): SavingsCalculation => {
    const totalSavings = calculateTotalSavings().total;
    return {
      monthly: `$${(totalSavings / 12).toLocaleString()}`,
      yearly: `$${totalSavings.toLocaleString()}`,
      decade: `$${(totalSavings * 10).toLocaleString()}`,
      coffees: Math.floor(totalSavings / 5),
      vacations: Math.floor(totalSavings / 5000),
      ferraris: `${(totalSavings / 250000).toFixed(1)}`,
      yachts: Math.floor(totalSavings / 1000000),
      privateIslands: Math.floor(totalSavings / 10000000)
    };
  }, [calculateTotalSavings]);

  const renderSuccessStories = useMemo(() => {
    const stories: SuccessStory[] = successStories;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <motion.div
            key={story.name}
            className="bg-white rounded-xl shadow-lg p-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <CakeIcon className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold">{story.name}</h3>
            <p className="text-primary-600 font-medium">{story.role}</p>
            <p className="mt-4 italic">"{story.quote}"</p>
            <div className="mt-4 text-sm">
              <p className="text-green-600">Savings: {story.savings}</p>
              <p className="text-gray-600">Achievement: {story.achievement}</p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }, []);

  const renderEnhancedFeatures = useMemo(() => {
    const enhancedFeatures: Feature[] = features;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enhancedFeatures.map((feature) => (
          <motion.div
            key={feature.name}
            className="bg-white rounded-xl shadow-lg p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <feature.icon className="h-8 w-8 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold">{feature.name}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
            <div className="mt-4 inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm">
              {feature.highlight}
            </div>
            <ul className="mt-4 space-y-2">
              {feature.stats.map((stat, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-center">
                  <CheckIcon className="h-4 w-4 text-primary-500 mr-2" />
                  {stat}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    );
  }, [itemVariants]);

  const memoizedContent = useMemo(() => (
    <div className="bg-white">
      {renderProgressBar()}
      
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <motion.div
          style={{ y: yMotionValue }}
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-primary-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </motion.div>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
          >
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <motion.a
                href="/contact"
                className="inline-flex space-x-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-600/10"
                  whileHover={{ backgroundColor: "rgba(37, 99, 235, 0.2)" }}
                >
                  🚀 Breaking News
                </motion.span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentQuote}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="italic"
                    >
                      {funnyQuotes[currentQuote]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Set Your Employees Free
                <motion.span
                  className="text-primary-600 block mt-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  (Into Their Best Lives)
                </motion.span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Let's face it - nobody actually enjoys TPS reports, endless meetings about meetings, or pretending to be busy when the boss walks by. Give your employees the gift of freedom and let AI handle the mundane 9-to-5 grind while they pursue their dreams of becoming professional dog photographers.
              </p>
            </motion.div>

            <motion.div
              className="mt-10 flex items-center gap-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 flex items-center gap-2"
                >
                  <FireIcon className="h-5 w-5" />
                  Liberate Your Workforce
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/solutions" className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2">
                  <SparklesIcon className="h-5 w-5" />
                  See How AI Never Asks for Raises <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* New Massive CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 lg:mt-0 lg:ml-16 lg:flex-1 flex items-center justify-center"
          >
            <motion.div
              className="relative overflow-hidden rounded-xl bg-white p-8 shadow-2xl ring-1 ring-gray-200 hover:shadow-lg transition-all duration-300"
              variants={pageAnimations.scaleUp}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-50 via-primary-100 to-primary-50"
                animate={{
                  x: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 10,
                  ease: "linear",
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-primary-400 to-primary-600"
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <Link
                to="/contact"
                className="relative flex flex-col items-center justify-center px-16 py-10 bg-white rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden min-w-[400px]"
              >
                <CustomRocketIcon />
                <h3 className="text-4xl font-extrabold text-gray-900 mb-4 text-center mt-6 tracking-tight">
                  Replace Your Workforce
                  <span className="block text-primary-600 text-2xl mt-2">Today</span>
                </h3>
                <p className="text-xl font-bold text-primary-600 mb-6 text-center">
                  90% Cost Reduction Guaranteed
                </p>
                <div className="flex items-center justify-center space-x-3 text-lg text-gray-700 font-medium">
                  <CheckIcon className="h-6 w-6 text-green-500" />
                  <span>Risk-Free Implementation</span>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* New Interactive Calculator Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Great Liberation Calculator
            <span className="block text-lg font-normal mt-2 text-primary-600">
              See exactly how much freedom you can create
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            {/* Employee Count Slider */}
            <div>
              <label className="text-lg font-medium text-gray-900">
                Employees to Liberate
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={calculatorState.employeeCount}
                onChange={(e) => handleSliderChange('employeeCount', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-sm text-gray-600 mt-2">
                {calculatorState.employeeCount} future influencers
              </div>
            </div>

            {/* Average Salary Slider */}
            <div>
              <label className="text-lg font-medium text-gray-900">
                Average Salary
              </label>
              <input
                type="range"
                min="30000"
                max="200000"
                step="5000"
                value={calculatorState.averageSalary}
                onChange={(e) => handleSliderChange('averageSalary', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-sm text-gray-600 mt-2">
                ${calculatorState.averageSalary.toLocaleString()} per year
              </div>
            </div>

            {/* Coffee Consumption Slider */}
            <div>
              <label className="text-lg font-medium text-gray-900">
                Daily Coffee Consumption
              </label>
              <input
                type="range"
                min="0"
                max="10"
                value={calculatorState.coffeeConsumption}
                onChange={(e) => handleSliderChange('coffeeConsumption', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-sm text-gray-600 mt-2">
                {calculatorState.coffeeConsumption} cups per employee per day
              </div>
            </div>

            {/* Meeting Hours Slider */}
            <div>
              <label className="text-lg font-medium text-gray-900">
                Weekly Meeting Hours
              </label>
              <input
                type="range"
                min="0"
                max="40"
                value={calculatorState.meetingHours}
                onChange={(e) => handleSliderChange('meetingHours', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-sm text-gray-600 mt-2">
                {calculatorState.meetingHours} hours of "quick syncs"
              </div>
            </div>

            {/* Drama Level Slider */}
            <div>
              <label className="text-lg font-medium text-gray-900">
                Workplace Drama Level
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={calculatorState.dramaLevel}
                onChange={(e) => handleSliderChange('dramaLevel', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-sm text-gray-600 mt-2">
                Level {calculatorState.dramaLevel} - {
                  calculatorState.dramaLevel < 4 ? "Mild Gossip" :
                  calculatorState.dramaLevel < 7 ? "Reality TV Worthy" :
                  "Full Soap Opera"
                }
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Your Freedom Metrics
            </h3>
            
            <div className="space-y-6">
              <motion.div
                className="bg-green-50 rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="text-green-700 font-medium">Annual Savings</div>
                <div className="text-3xl font-bold text-green-800">
                  ${calculateTotalSavings().total.toLocaleString()}
                </div>
                <div className="mt-2 text-sm text-green-600">
                  That's {calculateTotalSavings().coffeeEquivalent.toLocaleString()} artisanal coffees!
                </div>
              </motion.div>

              <motion.div
                className="bg-blue-50 rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="text-blue-700 font-medium">Luxury Purchases</div>
                <div className="flex gap-4 mt-2">
                  <div className="text-blue-800">
                    <span className="text-2xl font-bold">{calculateTotalSavings().vacationHomes}</span>
                    <div className="text-sm">Vacation Homes</div>
                  </div>
                  <div className="text-blue-800">
                    <span className="text-2xl font-bold">{calculateTotalSavings().privateJets}</span>
                    <div className="text-sm">Private Jets</div>
                  </div>
                  <div className="text-blue-800">
                    <span className="text-2xl font-bold">{calculateTotalSavings().yachts}</span>
                    <div className="text-sm">Yachts</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-purple-50 rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="text-purple-700 font-medium">Time Reclaimed</div>
                <div className="text-3xl font-bold text-purple-800">
                  {calculateTotalSavings().timeReclaimed.toLocaleString()} hours
                </div>
                <div className="mt-2 text-sm text-purple-600">
                  That's {Math.floor(calculateTotalSavings().timeReclaimed / 24)} days of freedom!
                </div>
              </motion.div>

              <motion.div
                className="bg-red-50 rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="text-red-700 font-medium">Drama Reduction</div>
                <div className="text-3xl font-bold text-red-800">
                  {calculateTotalSavings().dramaReduction}%
                </div>
                <div className="mt-2 text-sm text-red-600">
                  From "Real Housewives" to "Silent Meditation Retreat"
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* New Achievement Showcase */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Liberation Achievements
              <span className="block text-lg font-normal mt-2 text-primary-200">
                Unlocking human potential, one resignation at a time
              </span>
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 rounded-lg p-6 backdrop-blur-lg"
              >
                <feature.icon className="h-12 w-12 text-primary-200 mb-4" />
                <h3 className="text-xl font-semibold text-white">{feature.name}</h3>
                <p className="text-primary-200 mt-2">{feature.description}</p>
                <div className="mt-4 h-2 bg-white/20 rounded-full">
                  <motion.div
                    className="h-full bg-primary-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${feature.stats[0]}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <div className="mt-2 text-right text-primary-200">
                  {feature.stats[0]}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* New AI vs Human Comparison */}
      <div className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              AI vs Human: The Ultimate Showdown
              <span className="block text-lg font-normal mt-2 text-gray-600">
                (Spoiler: It's not even close)
              </span>
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {comparisonPoints.map((point, index) => (
              <motion.div
                key={point.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <point.icon className="h-8 w-8 text-primary-600" />
                  <h3 className="text-xl font-semibold text-gray-900">{point.category}</h3>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-primary-600">AI</div>
                    <div className="mt-1 text-gray-900">{point.ai}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-600">Human</div>
                    <div className="mt-1 text-gray-900">{point.human}</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-end gap-2 text-sm">
                  <span className="text-gray-600">Winner:</span>
                  <span className="font-medium text-primary-600">{point.winner}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features section */}
      <motion.div
        ref={featuresRef}
        className="features-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={pageAnimations.container}
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">
          Why AI is Better Than Humans
          <span className="block text-lg font-normal mt-2 text-gray-600">
            (Sorry, not sorry)
          </span>
        </h2>
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              variants={pageAnimations.item}
              custom={index}
              className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6"
            >
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  {feature.icon && React.createElement(feature.icon, {
                    className: "h-6 w-6 text-white",
                    "aria-hidden": "true"
                  })}
                </div>
                <div className="flex items-center justify-between">
                  <span>{feature.name}</span>
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{feature.description}</p>
                <div className="mt-4 space-y-2">
                  {feature.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <StarIcon className="h-4 w-4 text-primary-500 mr-2" />
                      {stat}
                    </div>
                  ))}
                </div>
              </dd>
            </motion.div>
          ))}
        </dl>
      </motion.div>

      {/* Success Stories */}
      <motion.div
        ref={storiesRef}
        variants={containerVariants}
        initial="hidden"
        animate={storiesInView ? "visible" : "hidden"}
        className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Liberation Success Stories
            <span className="block text-lg font-normal mt-2 text-gray-600">
              Living their best lives (far away from the office)
            </span>
          </h2>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {successStories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredStory(index)}
              onHoverEnd={() => setHoveredStory(null)}
              className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8"
            >
              <div className="flex items-center gap-x-4">
                <div className="text-4xl">{story.image}</div>
                <div>
                  <div className="text-lg font-semibold leading-6 text-gray-900">
                    {story.name}
                  </div>
                  <div className="text-sm text-primary-600 bg-primary-50 px-2 py-1 rounded-full mt-1">
                    {story.role}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600 italic">"{story.quote}"</p>
              <div className="mt-4 text-sm font-medium text-green-600">
                Company Savings: {story.savings}
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Achievement: {story.achievement}
              </div>
              <motion.div
                className="mt-4 h-1 bg-primary-200 rounded"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredStory === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* New Interactive Footer CTA */}
      <div className="relative">
        <div className="absolute inset-0 bg-primary-900 bg-opacity-90 backdrop-blur-lg" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Write Your Success Story?
              <span className="block text-lg font-normal mt-2 text-primary-200">
                Join the ranks of liberated employees living their best lives
              </span>
            </h2>
            <div className="mt-10 flex items-center justify-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-primary-900 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Start Your Journey
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/solutions"
                  className="text-lg font-semibold text-white hover:text-primary-200"
                >
                  Explore More Success Stories
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            to="/contact"
            className="group flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <RocketLaunchIcon className="h-8 w-8 text-white transform group-hover:scale-110 transition-transform" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Add confetti effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {/* Add confetti animation here */}
        </div>
      )}

      {/* Add new sections */}
      <div className="mx-auto max-7xl px-6 py-24">
        <motion.div
          variants={pageAnimations.item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Liberation Dashboard
            <span className="block text-lg font-normal mt-2 text-primary-600">
              Real-time freedom metrics
            </span>
          </h2>
          {renderAchievements()}
        </motion.div>
      </div>

      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={pageAnimations.item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Interactive Tools
              <span className="block text-lg font-normal mt-2 text-primary-600">
                Plan your workforce revolution
              </span>
            </h2>
            {renderInteractiveFeatures()}
          </motion.div>
        </div>
      </div>

      {/* Add success message toast */}
      <AnimatePresence>
        {showSuccessMessage && (
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 50 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg"
          >
            Feature activated! Your journey to freedom begins...
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add new sections */}
      <div className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={pageTransitions}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              AI Capabilities
              <span className="block text-lg font-normal mt-2 text-gray-600">
                Powered by cutting-edge technology
              </span>
            </h2>
          </motion.div>
          {renderAICapabilities}
        </div>
      </div>

      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={pageTransitions}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Real-Time Performance
              <span className="block text-lg font-normal mt-2 text-gray-600">
                Watch AI outperform humans in real-time
              </span>
            </h2>
          </motion.div>
          {renderRealTimeMetrics}
        </div>
      </div>

      <div className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={pageTransitions}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              AI vs Human Performance
              <span className="block text-lg font-normal mt-2 text-gray-600">
                The numbers don't lie
              </span>
            </h2>
          </motion.div>
          {renderAutomationComparison}
        </div>
      </div>

      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={pageTransitions}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Liberation Progress
              <span className="block text-lg font-normal mt-2 text-gray-600">
                Tracking freedom metrics
              </span>
            </h2>
          </motion.div>
          {renderLiberationMetrics}
        </div>
      </div>

      <div className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={pageTransitions}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Fun Facts
              <span className="block text-lg font-normal mt-2 text-gray-600">
                The lighter side of workplace revolution
              </span>
            </h2>
          </motion.div>
          {renderFunFacts}
        </div>
      </div>

      {/* Add new Role Calculator section */}
      <div className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={pageTransitions}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Role Replacement Calculator
              <span className="block text-lg font-normal mt-2 text-gray-600">
                See how much each role costs (and what they really do)
              </span>
            </h2>
          </motion.div>
          {renderSavingsCalculator}
        </div>
      </div>

      {/* Add new Detailed Savings section */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={pageTransitions}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your Freedom in Numbers
              <span className="block text-lg font-normal mt-2 text-gray-600">
                Converting savings into dreams
              </span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(calculateDetailedSavings()).map(([key, value]) => (
              <motion.div
                key={key}
                className="bg-white rounded-xl shadow-lg p-6"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-medium text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-2xl font-bold text-primary-600 mt-2">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Enhanced Success Stories section */}
      <div className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={pageTransitions}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Liberation Success Stories
              <span className="block text-lg font-normal mt-2 text-gray-600">
                Real people, real freedom
              </span>
            </h2>
          </motion.div>
          {renderSuccessStories}
        </div>
      </div>

      {/* Add Enhanced Features section */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={pageTransitions}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Enhanced Features
              <span className="block text-lg font-normal mt-2 text-gray-600">
                Why AI is simply better
              </span>
            </h2>
          </motion.div>
          {renderEnhancedFeatures}
        </div>
      </div>
    </div>
  ), [itemVariants, scrollProgress, scrollY, yMotionValue, showConfetti, showSuccessMessage, features, successStories, savingsCalculator, calculateDetailedSavings, renderProgressBar, renderAchievements, renderInteractiveFeatures, renderAICapabilities, renderRealTimeMetrics, renderAutomationComparison, renderLiberationMetrics, renderFunFacts, renderSavingsCalculator, renderSuccessStories, renderEnhancedFeatures]);

  return memoizedContent;
};

export default HomePage; 