import { Award, Briefcase, MapPin, Book, Target, Users } from 'lucide-react';

function Mentor() {
  const mentor = {
    name: "Nishithishwer",
    designation: "Chief Engineer (Drilling)",
    department: "Well Planning & Drilling (R&D)",
    institute: "Institute of Drilling & Well Engineering, ONGC, Dehradun",
    team: "ONGC-BP TSP Team",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    expertise: [
      "Well Planning & Design",
      "Drilling Operations Management",
      "Research & Development",
      "Team Leadership",
      "Performance Analytics"
    ],
    mentorshipFocus: [
      "Guiding interns in applying machine learning to drilling operations",
      "Bridging theoretical knowledge with practical field applications",
      "Developing innovative solutions for well performance optimization",
      "Fostering a culture of research and continuous learning"
    ]
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-40 right-20 w-32 h-32 border-4 border-yellow-500 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border-4 border-orange-500 rotate-45 animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30 mb-4">
            <Award className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-400">Project Leadership</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
              Mentor
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Expert guidance and leadership driving innovation in drilling technology
          </p>
        </div>

        {/* Main Mentor Card */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-8 p-8 md:p-12">
            {/* Left Section - Photo */}
            <div className="lg:col-span-1 flex flex-col items-center">
              {/* Profile Photo */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-2xl opacity-50"></div>
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-3xl border-4 border-white/30 shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={mentor.photo}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Chief Engineer
                </div>
              </div>
            </div>

            {/* Right Section - Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Name & Title */}
              <div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                  {mentor.name}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-yellow-400">
                    <Briefcase className="h-5 w-5" />
                    <span className="font-semibold text-lg">{mentor.designation}</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-gray-300">
                    <Book className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{mentor.department}</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{mentor.institute}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-orange-400">
                    <Users className="h-5 w-5" />
                    <span className="font-semibold">{mentor.team}</span>
                  </div>
                </div>
              </div>

              {/* Expertise */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-yellow-400" />
                  Areas of Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-300 text-sm font-semibold rounded-full backdrop-blur-sm hover:scale-105 transition-transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mentorship Focus */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Book className="h-5 w-5 text-blue-400" />
                  Mentorship Focus
                </h4>
                <ul className="space-y-3">
                  {mentor.mentorshipFocus.map((focus, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex-shrink-0"></div>
                      <span className="text-gray-300 leading-relaxed">{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default Mentor;