import React, { useState, useEffect, useRef } from 'react';

const WorkExamples = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-50px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = parseInt(entry.target.dataset.cardIndex);
        if (entry.isIntersecting) {
          setVisibleCards(prev => new Set([...prev, cardIndex]));
        }
      });
    }, observerOptions);

    // Observe all card elements
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A scalable e-commerce solution with AI-powered recommendations and real-time analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      title: "Financial Dashboard",
      description: "Real-time financial analytics dashboard with advanced data visualization and reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Data Analytics",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"]
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and instant transfers.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "Blockchain", "AI"]
    },
    {
      title: "IoT Manufacturing System",
      description: "Smart manufacturing system with IoT sensors and predictive maintenance capabilities.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "IoT Solutions",
      technologies: ["Azure IoT", "Machine Learning", "Edge Computing", "Power BI"]
    }
  ];

  return (
    <section id="work" className="py-20 bg-gray-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl text-left font-bold text-white mb-4 opacity-0 animate-fade-in-up">
            Featured Projects
          </h2>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => cardRefs.current[index] = el}
              data-card-index={index}
              className={`project-card transform transition-all duration-1000 ease-out ${
                visibleCards.has(index) 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-[-100px] opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="group bg-gray-800/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="lg:flex">
                  {/* Image Section */}
                  <div className={`relative overflow-hidden lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Animated Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 transform group-hover:scale-110 transition-transform duration-300">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        {project.category}
                      </span>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className={`p-8 lg:w-1/2 flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-200 leading-relaxed text-lg">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-blue-300 uppercase tracking-wider">Technologies Used</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer"
                              style={{
                                animationDelay: `${(index * 200) + (techIndex * 100)}ms`
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      <div className="pt-4">
                        <button className="group/btn inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                          <span>View Case Study</span>
                          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Line */}
                <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Project Counter */}
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-10 hidden lg:block">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-full p-4 space-y-2">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  visibleCards.has(index)
                    ? 'bg-blue-500 scale-125'
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .project-card {
          will-change: transform, opacity;
        }

        .project-card:nth-child(even) {
          animation-direction: reverse;
        }
      `}</style>
    </section>
  );
};

export default WorkExamples;
