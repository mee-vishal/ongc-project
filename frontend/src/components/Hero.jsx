import { useState, useEffect } from 'react';
import { ChevronDown, Zap, Target, TrendingUp, Activity, Database, Shield } from 'lucide-react';
import rig from '../assets/rig.png';
import vr from '../assets/vr.png';


function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // High-quality oil & gas industry images
  const backgroundImages = [
     rig,
     vr,
    'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1920&q=80', // Oil rig at sunset
    'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920&q=80', // Industrial facility
    'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&q=80', // Oil platform
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Image carousel
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(imageInterval);
    };
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Real-time Analysis',
      description: 'Instant predictions powered by AI',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Target,
      title: 'Precision Drilling',
      description: 'Optimize ROP with accuracy',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      title: 'Performance Boost',
      description: 'Maximize operational efficiency',
      color: 'from-red-500 to-pink-500',
    },
  ];

  const stats = [
    { icon: Activity, value: '99.9%', label: 'Accuracy' },
    { icon: Database, value: '10M+', label: 'Data Points' },
    { icon: Shield, value: '24/7', label: 'Monitoring' },
  ];

  return (
    <section id="hero" className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Image Carousel with Parallax */}
      <div className="absolute inset-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: `scale(${1 + scrollY * 0.0002}) translateY(${scrollY * 0.3}px)`,
            }}
          >
            <img
              src={img}
              alt={`ONGC Drilling ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Multi-layered Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/30 via-transparent to-yellow-900/30"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse-slow"></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-yellow-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-4 border-orange-500/20 rotate-45 animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-10 w-40 h-40 border-4 border-red-500/20 rounded-full animate-bounce-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-16">
        {/* Hero Text */}
        <div className={`text-center max-w-6xl transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-full border border-yellow-500/30 shadow-lg shadow-yellow-500/20 animate-fade-in">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-yellow-400 font-semibold text-sm md:text-base tracking-wide">
              AI-Powered Drilling Solutions
            </span>
          </div>
          
          {/* Main Heading with Gradient Animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
            <span className="text-white block mb-2">Welcome to</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text animate-gradient-x drop-shadow-2xl">
              ONGC ROP
            </span>
            <span className="text-white text-3xl md:text-5xl lg:text-6xl block mt-2">
              Prediction System
            </span>
          </h1>
          
          {/* Subtitle with Typing Effect */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Revolutionize drilling performance with cutting-edge machine learning algorithms and real-time predictive analytics
          </p>

          {/* CTA Buttons with Advanced Animations */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
           <button
  onClick={() => {
    document.getElementById("prediction")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="group relative px-10 py-5 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl font-bold text-lg text-gray-900 overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50 active:scale-95"
>
  <span className="relative z-10 flex items-center justify-center gap-2">
    Get Started
    <svg
      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
</button>

            
      <button
  onClick={() => {
    document.getElementById("interns")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="group px-10 py-5 bg-white/5 backdrop-blur-xl rounded-2xl font-bold text-lg text-white border-2 border-white/30 transform transition-all duration-500 hover:bg-white/10 hover:scale-110 hover:border-yellow-500/70 hover:shadow-2xl hover:shadow-white/20 active:scale-95"
>
  <span className="flex items-center justify-center gap-2">
    Meet Developers
    <svg
      className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </span>
</button>

          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 transform transition-all duration-700 hover:bg-white/10 hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Icon className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature Cards with Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden transform transition-all duration-700 hover:bg-white/10 hover:scale-105 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/20 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200 + 400}ms` }}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon with Glow Effect */}
                <div className={`relative mb-4 inline-flex p-4 bg-gradient-to-br ${feature.color} rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
          <span className="text-yellow-500 text-sm font-semibold tracking-wider">Scroll Down</span>
          <ChevronDown className="h-8 w-8 text-yellow-500 animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 2px, transparent 2px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 2px, transparent 2px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}

export default Hero;