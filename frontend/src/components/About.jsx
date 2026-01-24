import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Database, Users, Target, Cpu, BarChart3, Zap, Shield, CheckCircle, X, Brain, Layers, GitBranch, Activity } from 'lucide-react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ wells: 0, accuracy: 0 });
  const [showTechDetails, setShowTechDetails] = useState(false);
  const techSectionRef = useRef(null);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const scrollToTechSection = () => {
    setShowTechDetails(true);
    setTimeout(() => {
      if (techSectionRef.current) {
        techSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const wellsTarget = 500;
    const accuracyTarget = 95;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        wells: Math.floor(wellsTarget * progress),
        accuracy: Math.floor(accuracyTarget * progress)
      });
      
      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters({ wells: wellsTarget, accuracy: accuracyTarget });
      }
    }, duration / steps);
  };

  const features = [
    {
      icon: Database,
      title: "Real-time Data Processing",
      description: "Processing drilling parameters instantly for accurate predictions",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cpu,
      title: "Advanced ML Models",
      description: "Predict ROP and optimize drilling operations with AI",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Expert Collaboration",
      description: "Guided by ONGC specialists and academic researchers",
      color: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { icon: Target, value: "7000+", label: "Data Rows", color: "from-blue-500 to-cyan-500" },
    { icon: BarChart3, value: `${counters.accuracy}%`, label: "Accuracy Rate", color: "from-purple-500 to-pink-500" },
    { icon: Zap, value: "Real-time", label: "Predictions", color: "from-orange-500 to-red-500" },
    { icon: Shield, value: "Data", label: "Monitoring", color: "from-green-500 to-emerald-500" },
  ];

  const capabilities = [
    "Machine learning-based ROP prediction",
    "Real-time drilling parameter analysis",
    "Performance optimization recommendations",
    "Multi-basin well tracking",
    "Predictive maintenance insights",
    "Data-driven decision support"
  ];

  const techDetails = {
    overview: "Our ROP Prediction System combines advanced machine learning algorithms with domain expertise in petroleum engineering to deliver real-time drilling optimization. The system analyzes multiple parameters simultaneously to predict Rate of Penetration with industry-leading accuracy.",
    
    technologies: [
      {
        icon: Brain,
        title: "Machine Learning Models",
        description: "Advanced regression algorithms including Random Forest, XGBoost, and Neural Networks trained on extensive drilling datasets",
        color: "from-blue-500 to-cyan-500"
      },
      {
        icon: Layers,
        title: "Data Processing Pipeline",
        description: "Real-time ETL pipeline processing drilling parameters with feature engineering and normalization",
        color: "from-purple-500 to-pink-500"
      },
      {
        icon: GitBranch,
        title: "Model Architecture",
        description: "Ensemble learning approach combining multiple models for robust predictions across diverse geological conditions",
        color: "from-orange-500 to-red-500"
      },
      {
        icon: Activity,
        title: "Real-time Analytics",
        description: "Sub-second prediction latency with continuous model updating based on new drilling data",
        color: "from-green-500 to-emerald-500"
      }
    ],

    workflow: [
      { step: "1", title: "Data Collection", description: "Gathering real-time drilling parameters: Depth, WOB, RPM, Flow Rate" },
      { step: "2", title: "Preprocessing", description: "Data cleaning, normalization, and feature engineering" },
      { step: "3", title: "Model Prediction", description: "Ensemble ML models analyze parameters and predict ROP" },
      { step: "4", title: "Optimization", description: "System provides actionable recommendations for drilling optimization" },
      { step: "5", title: "Monitoring", description: "Continuous performance tracking and model refinement" }
    ],

    keyFeatures: [
      "Multi-parameter analysis with correlation detection",
      "Adaptive learning from real-time drilling outcomes",
      "Geological formation-specific model tuning",
      "Automated anomaly detection and alerts",
      "Historical data comparison and benchmarking",
      "Integration with existing ONGC systems"
    ]
  };

  return (
    <section ref={sectionRef} id="about" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Main About Content */}
      <div className={`transition-all duration-500 ${showTechDetails ? 'opacity-0 scale-95 pointer-events-none absolute' : 'opacity-100 scale-100'}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-4">
            <TrendingUp className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Revolutionizing Drilling Analytics</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              ONGC Drilling Analytics
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our platform leverages real-time drilling parameters and cutting-edge machine learning models to predict the Rate of Penetration (ROP) and optimize well performance across multiple basins.
          </p>
        </div>

        {/* Feature Cards */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`group bg-white rounded-3xl shadow-xl p-8 border border-gray-100 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.color} rounded-full transition-all duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  animation: isVisible ? `slideInUp 0.6s ease-out ${idx * 0.1}s both` : 'none'
                }}
              >
                <div className={`inline-flex p-3 bg-gradient-to-br ${stat.color} rounded-xl mb-4 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className={`text-3xl font-extrabold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Capabilities Section */}
        <div className={`bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Capabilities
              </span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive drilling analytics powered by artificial intelligence and domain expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {capabilities.map((capability, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 group"
                style={{
                  animation: isVisible ? `slideInLeft 0.5s ease-out ${idx * 0.1}s both` : 'none'
                }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button 
            onClick={scrollToTechSection}
            className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Learn More About Our Technology
              <TrendingUp className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </button>
        </div>
      </div>
      </div>

      {/* Technology Details View */}
      <div ref={techSectionRef} className={`transition-all duration-500 ${showTechDetails ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none absolute'}`}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Close Button */}
          <button
            onClick={() => setShowTechDetails(false)}
            className="absolute top-0 right-4 z-50 p-3 bg-red-500 hover:bg-red-600 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-90"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                Technology Stack
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {techDetails.overview}
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {techDetails.technologies.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  style={{
                    animation: showTechDetails ? `slideInUp 0.6s ease-out ${idx * 0.15}s both` : 'none'
                  }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                </div>
              );
            })}
          </div>

          {/* Workflow Section */}
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Prediction{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Workflow
              </span>
            </h3>
            <div className="space-y-4">
              {techDetails.workflow.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:scale-102 transition-all"
                  style={{
                    animation: showTechDetails ? `slideInLeft 0.5s ease-out ${idx * 0.1 + 0.5}s both` : 'none'
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div id="analytis" className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Features
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {techDetails.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md hover:scale-105 transition-all"
                  style={{
                    animation: showTechDetails ? `slideInLeft 0.4s ease-out ${idx * 0.08 + 1}s both` : 'none'
                  }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowTechDetails(false)}
              className="px-10 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              Back to Overview
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(20px);
            opacity: 0.6;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.03) 2px, transparent 2px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 2px, transparent 2px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }
      `}</style>
    </section>
  );
}

export default About;