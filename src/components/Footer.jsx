import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook size={24} />, href: "#", label: "Facebook" },
    { icon: <FaTwitter size={24} />, href: "#", label: "Twitter" },
    { icon: <FaLinkedin size={24} />, href: "#", label: "LinkedIn" },
    { icon: <FaInstagram size={24} />, href: "#", label: "Instagram" },
    { icon: <FaGithub size={24} />, href: "#", label: "GitHub" }
  ];

  const footerLinks = {
    "Services": [
      "Cloud Solutions",
      "Mobile Development",
      "AI & Machine Learning",
      "Cybersecurity",
      "Custom Software",
      "Data Analytics"
    ],
    "Company": [
      "About Us",
      "Our Team",
      "Careers",
      "News & Blog",
      "Contact Us",
      "Support"
    ],
    "Resources": [
      "Documentation",
      "Case Studies",
      "White Papers",
      "API Reference",
      "Developer Tools",
      "Community"
    ]
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              GS3
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Empowering businesses with cutting-edge technology solutions. 
              We transform ideas into digital reality and help organizations 
              thrive in the modern world.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 hover-scale"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-6">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest insights and updates.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:flex-shrink-0">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover-scale whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} GS3. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-all duration-300 hover-scale"
              aria-label="Scroll to top"
            >
              <FaArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
