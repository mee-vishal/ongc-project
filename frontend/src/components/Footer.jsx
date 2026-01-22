import { Linkedin, Twitter, Instagram, ChevronUp } from 'lucide-react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Dashboard', href: '#hero' },
    { name: 'Prediction', href: '#prediction' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Interns', href: '#interns' },
    { name: 'Mentor', href: '#mentor' },
    { name: 'Login/Signup', href: '#login' },
    { name: 'About', href: '#about' },
  ];

  const resources = [
    {
      name: 'Documentation',
      href: 'https://drive.google.com/file/d/1QUsoSXCuXG8m_g-5Sa4IgFFTRO1vxSOv/view?usp=sharing',
    },
    {
      name: 'Github',
      href: 'https://github.com/mee-vishal/ongc-project',
    },
   
    {
      name: 'Support',
      href: '#support',
    },
  ];

  const handleScroll = (href) => {
    if (!href.startsWith('#')) return;
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
      >
        <ChevronUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">O</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">ONGC</h3>
                <p className="text-sm text-gray-400">ROP Prediction System</p>
              </div>
            </div>

            <p className="text-gray-400 mb-4 leading-relaxed">
              Revolutionizing drilling operations through AI-powered Rate of Penetration predictions and real-time analytics.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/oilandnaturalgascorporation/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-blue-400" />
              </a>

              <a
                href="https://twitter.com/ONGC_India"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
              >
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-sky-400" />
              </a>

              <a
                href="https://www.instagram.com/ongcofficial?igsh=MXNvbzVzZzJkYmp0YQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
              >
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-pink-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-500 transition-all"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((resource, idx) => (
                <li key={idx}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-500 transition-all"></span>
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
      `}</style>
    </footer>
  );
}

export default Footer;
