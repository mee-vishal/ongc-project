import { Award, Briefcase, MapPin, Book, Target, Users, Sparkles } from 'lucide-react';
import nishithishwerPhoto from '../assets/nishi.png';
import pratimPhoto from '../assets/pratim.png';

function Mentor() {
  const mentors = [
    {
      name: "Nishithishwer",
      designation: "Chief Engineer (Drilling)",
      department: "Well Planning & Drilling (R&D)",
      institute: "Institute of Drilling & Well Engineering, ONGC, Dehradun",
      team: "ONGC-BP TSP Team",
      photo: nishithishwerPhoto,
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
    },
    {
      name: "Mr. Pratim Gogoi",
      designation: "Superintending Engineer (Drilling)",
      department: "IDT, ONGC Dehradun",
      institute: "Institute of Drilling & Well Engineering, ONGC, Dehradun",
      team: "ONGC Drilling Operations Team",
      photo: pratimPhoto,
      expertise: [
        "Drilling Engineering",
        "Operational Supervision",
        "Team Mentorship",
        "Well Performance Monitoring",
        "Field Operations Management"
      ],
      mentorshipFocus: [
        "Hands-on guidance for field operations and drilling activities",
        "Supervision and monitoring of drilling operations excellence",
        "Training interns on operational best practices and safety protocols",
        "Developing technical expertise in drilling engineering fundamentals"
      ]
    }
  ];

  return (
    <section id="mentor" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30 mb-3 sm:mb-4">
            <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yellow-400" />
            <span className="text-xs sm:text-sm font-semibold text-yellow-400">Project Leadership</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 px-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
              Mentors
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Expert guidance and leadership driving innovation in drilling technology
          </p>
        </div>

        {/* Mentor Cards */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {mentors.map((mentor, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:shadow-yellow-500/10 hover:shadow-3xl transition-all duration-300"
            >
              {/* Card Content */}
              <div className="flex flex-col">
                {/* Photo Section - Full width on mobile */}
                <div className="relative w-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-6 sm:p-8">
                  <div className="flex flex-col items-center">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-white/30 shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={mentor.photo}
                          alt={mentor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Name & Badge - Positioned below photo */}
                    <div className="mt-4 text-center">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">{mentor.name}</h3>
                      {mentor.designation && (
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                          <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          <span className="hidden sm:inline">{mentor.designation}</span>
                          <span className="sm:hidden">
                            {mentor.designation.includes("Superintending") 
                              ? <span className="bg-yellow-300 text-orange-900 px-2 py-0.5 rounded">Superintending Engineer</span>
                              : mentor.designation.split("(")[0].trim()
                            }
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5">
                  {/* Info Grid */}
                  <div className="space-y-2.5 sm:space-y-3">
                    {mentor.department && (
                      <div className="flex items-start gap-2.5 sm:gap-3 text-gray-300 bg-white/5 p-2.5 sm:p-3 rounded-xl">
                        <Book className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                        <span className="font-medium text-sm sm:text-base">{mentor.department}</span>
                      </div>
                    )}
                    {mentor.institute && (
                      <div className="flex items-start gap-2.5 sm:gap-3 text-gray-300 bg-white/5 p-2.5 sm:p-3 rounded-xl">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0 text-green-400" />
                        <span className="font-medium text-sm sm:text-base">{mentor.institute}</span>
                      </div>
                    )}
                    {mentor.team && (
                      <div className="flex items-start gap-2.5 sm:gap-3 text-orange-400 bg-orange-500/10 p-2.5 sm:p-3 rounded-xl border border-orange-500/20">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                        <span className="font-semibold text-sm sm:text-base">{mentor.team}</span>
                      </div>
                    )}
                  </div>

                  {/* Expertise */}
                  {mentor.expertise?.length > 0 && (
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                        <span>Expertise</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-300 text-xs sm:text-sm font-semibold rounded-full backdrop-blur-sm hover:scale-105 transition-transform"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mentorship Focus */}
                  {mentor.mentorshipFocus?.length > 0 && (
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                        <span>Mentorship Focus</span>
                      </h4>
                      <ul className="space-y-2 sm:space-y-2.5">
                        {mentor.mentorshipFocus.map((focus, focusIdx) => (
                          <li key={focusIdx} className="flex items-start gap-2.5 sm:gap-3">
                            <div className="mt-1.5 sm:mt-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex-shrink-0"></div>
                            <span className="text-gray-300 leading-relaxed text-sm sm:text-base">{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
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
      `}</style>
    </section>
  );
}

export default Mentor;