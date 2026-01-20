import nitjLogo from '../assets/nitj.jpg';
import upesLogo from '../assets/upeslogo.png';
import plaksha from '../assets/plaksha.jpeg';
import uday from '../assets/uday.png';
import vishal from '../assets/vishal.png';

import { useState } from 'react';
import { GraduationCap, MapPin, Award, Linkedin, Mail, Star, ChevronRight, X, Briefcase, Code, Target } from 'lucide-react';

function Interns() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedIntern, setSelectedIntern] = useState(null);

  const interns = [
    {
      name: "Plaksha Kapoor",
      college: "Dr. B.R. Ambedkar National Institute of Technology Jalandhar",
      collegeLogo:nitjLogo ,
      department: "Industrial & Production Engineering",
      year: "3rd Year",
      photo:plaksha,
      color: "from-blue-500 to-cyan-500",
      skills: ["Machine Learning", "Data Analysis", "Python & data pre-processing"],
      bio: "Passionate about leveraging AI and machine learning to optimize industrial processes. Focused on developing predictive models for drilling operations.",
      responsibilities: [
        "Data preprocessing and feature engineering for ROP prediction model",
        "Implementing machine learning algorithms using Python and scikit-learn",
        "Analyzing drilling parameters and their impact on performance",
        "Creating data visualizations and performance dashboards"
      ],
      achievements: [
        "Improved model accuracy by 15% through advanced feature selection",
        "Developed automated data cleaning pipeline",
        "Published research paper on drilling optimization"
      ]
    },
        {
      name: "Vishal Mishra",
      college: "Dr. B.R. Ambedkar National Institute of Technology Jalandhar",
      collegeLogo: nitjLogo,
      department: "Industrial & Production Engineering",
      year: "3rd Year",
      photo:vishal,
      color: "from-orange-500 to-red-500",
      skills: ["Process Optimization", "AI Integration", "Project Management"],
      bio: "Specializing in process optimization and system integration. Leading the development of user-friendly interfaces for the prediction system.",
      responsibilities: [
        "Frontend development and UI/UX design",
        "API integration and backend connectivity",
        "Project documentation and technical writing",
        "User testing and feedback implementation"
      ],
      achievements: [
        "Designed intuitive prediction interface with 95% user satisfaction",
        "Implemented real-time prediction system with sub-second response",
        "Created comprehensive project documentation"
      ]
    },
    {
      
      name: "Uday Kaler",
      college: "University of Petroleum and Energy Studies, Dehradun",
      collegeLogo:upesLogo,
      department: "Petroleum Engineering",
      year: "3rd Year",
      photo: uday,
      color: "from-purple-500 to-pink-500",
      skills: ["Drilling Operations", "Reservoir Analysis", "Well Design"],
      bio: "Petroleum engineering specialist with deep understanding of drilling mechanics and reservoir behavior. Bridging domain expertise with data science.",
      responsibilities: [
        "Domain expertise consultation for model development",
        "Validating predictions against industry standards",
        "Researching drilling parameters and their relationships",
        "Testing model performance with real-world scenarios"
      ],
      achievements: [
        "Identified critical drilling parameters for ROP optimization",
        "Contributed to algorithm refinement with domain knowledge",
        "Conducted field data validation studies"
      ]
    },

  ];

  return (
    <section id="interns" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-40 right-20 w-32 h-32 border-4 border-blue-500 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border-4 border-purple-500 rotate-45 animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-4">
            <GraduationCap className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Our Talented Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              Research Interns
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Brilliant minds working together to revolutionize drilling technology with AI and machine learning
          </p>
        </div>

        {/* Interns Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {interns.map((intern, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${intern.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* College Logo */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg p-1 transform transition-transform group-hover:scale-110">
                  <img
                    src={intern.collegeLogo}
                    alt={`${intern.college} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Profile Photo */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${intern.color} rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                  <div className={`relative w-32 h-32 mx-auto rounded-full border-4 border-white shadow-2xl overflow-hidden transform transition-transform group-hover:scale-110`}>
                    <img
                      src={intern.photo}
                      alt={intern.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Star Badge */}
                  <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${intern.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1`}>
                    <Star className="h-3 w-3 fill-current" />
                    Intern
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    {intern.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-1">
                    <GraduationCap className="h-4 w-4" />
                    <span className="font-semibold">{intern.department}</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Award className="h-4 w-4" />
                    <span>{intern.year}</span>
                  </div>
                </div>

                {/* College Name */}
                <div className="flex items-start gap-2 text-sm text-gray-600 mb-4 p-3 bg-gray-50 rounded-xl">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="font-medium leading-tight">{intern.college}</span>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {intern.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className={`px-3 py-1 bg-gradient-to-r ${intern.color} text-white text-xs font-semibold rounded-full shadow-md transform transition-transform hover:scale-110`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>


                {/* View Details Button */}
                <button
                  onClick={() => setSelectedIntern(intern)}
                  className={`w-full bg-gradient-to-r ${intern.color} text-white font-semibold py-3 px-4 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2`}
                >
                  <span>View Details</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${intern.color} opacity-0 group-hover:opacity-20 rounded-br-full transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
        
          
         
          
        
        </div>
      </div>

      {/* Detailed Modal */}
      {selectedIntern && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
            {/* Modal Header */}
            <div className={`relative bg-gradient-to-r ${selectedIntern.color} p-8 text-white`}>
              <button
                onClick={() => setSelectedIntern(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden">
                    <img
                      src={selectedIntern.photo}
                      alt={selectedIntern.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2">{selectedIntern.name}</h3>
                  <p className="text-white/90 mb-2">{selectedIntern.department} • {selectedIntern.year}</p>
                  <p className="text-white/80 text-sm">{selectedIntern.college}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Bio */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  About
                </h4>
                <p className="text-gray-700 leading-relaxed">{selectedIntern.bio}</p>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Core Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedIntern.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 bg-gradient-to-r ${selectedIntern.color} text-white font-semibold rounded-full shadow-md`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {selectedIntern.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${selectedIntern.color} flex-shrink-0`}></div>
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-600" />
                  Key Achievements
                </h4>
                <div className="space-y-3">
                  {selectedIntern.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className={`mt-1 p-1 bg-gradient-to-r ${selectedIntern.color} rounded-full flex-shrink-0`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-700 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}

export default Interns;
