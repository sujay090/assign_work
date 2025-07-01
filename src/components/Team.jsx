import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import CircularGallery from "../StyleComoponents/cardSlide/CircularGallery";
import { useEffect, useState, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const [mobileSize, setMobileSize] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const desktopContainerRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setMobileSize(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileSize >= 768) {
      const ctx = gsap.context(() => {
        // Enhanced Title animation for desktop
        gsap.fromTo(titleRef.current,
          { 
            opacity: 0, 
            y: 100, 
            scale: 0.8,
            rotationX: 30
          },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            rotationX: 0,
            duration: 1.5, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Animate title elements individually
        const titleElements = titleRef.current?.querySelectorAll('.title-element');
        titleElements?.forEach((element, index) => {
          gsap.fromTo(element,
            { 
              opacity: 0, 
              x: index % 2 === 0 ? -150 : 150,
              scale: 0.7
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1,
              delay: index * 0.3,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });

        // Desktop container animation
        gsap.fromTo(desktopContainerRef.current,
          { 
            opacity: 0, 
            scale: 0.9,
            y: 50
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: desktopContainerRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Stats section animation
        if (statsRef.current) {
          gsap.fromTo(statsRef.current,
            { opacity: 0, y: 80 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: statsRef.current,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

      }, sectionRef);

      return () => ctx.revert();
    }
  }, [mobileSize]);
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Visionary leader with 15+ years in technology innovation and strategic business development.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Dr. Priya Sharma",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "AI/ML expert and software architect driving technical excellence and innovation initiatives.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Engineering",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Full-stack engineer and team leader passionate about scalable solutions and clean code.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Kim",
      role: "UX/UI Design Director",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Creative designer focused on user-centered design and exceptional digital experiences.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "David Chen",
      role: "DevOps & Cloud Architect",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Infrastructure expert specializing in cloud solutions, automation, and system reliability.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Lisa Anderson",
      role: "Data Science Lead",
      image:
        "https://images.unsplash.com/photo-1559941080-5d2137aa46b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Data scientist and analytics expert turning complex data into actionable business insights.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ];

  return (
    <section ref={sectionRef} id="team" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      {mobileSize && mobileSize < 768 ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Talented professionals driving innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-scale group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.social.linkedin}
                      className="bg-gray-800/40 backdrop-blur-sm p-2 rounded-full text-white hover:bg-gray-700/60 transition-colors duration-300"
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="bg-gray-800/40 backdrop-blur-sm p-2 rounded-full text-white hover:bg-gray-700/60 transition-colors duration-300"
                    >
                      <FaTwitter size={20} />
                    </a>
                    <a
                      href={member.social.github}
                      className="bg-gray-800/40 backdrop-blur-sm p-2 rounded-full text-white hover:bg-gray-700/60 transition-colors duration-300"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-200 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div ref={statsRef} className="mt-20 bg-gray-800/80 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-100 mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-100 mb-2">200+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-100 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-100 mb-2">25+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10">
          {/* Desktop Enhanced Header */}
          <div ref={titleRef} className="text-center mb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <span className="title-element text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                Our Expert Team
              </span>
              <h2 className="title-element text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                Meet the <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">Visionaries</span>
              </h2>
              <div className="title-element h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
              <p className="title-element text-gray-300 text-xl leading-relaxed font-light">
                World-class professionals driving innovation, creativity, and technological excellence across every project
              </p>
            </div>
          </div>

          {/* Desktop Circular Gallery */}
          <div ref={desktopContainerRef} className="relative">
            <div style={{ height: "600px", position: "relative" }}>
              <CircularGallery bend={4} textColor="#ffffff" borderRadius={0.05} />
            </div>
          </div>

          {/* Desktop Team Stats */}
          <div ref={statsRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Team Excellence</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Our diverse team brings together expertise from around the globe to deliver exceptional results
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="group">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/30 transition-colors duration-300">
                    <span className="text-blue-400 text-2xl font-bold">50+</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Expert</div>
                  <div className="text-blue-200 text-sm">Team Members</div>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600/30 transition-colors duration-300">
                    <span className="text-green-400 text-2xl font-bold">200+</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Successful</div>
                  <div className="text-blue-200 text-sm">Projects Delivered</div>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600/30 transition-colors duration-300">
                    <span className="text-purple-400 text-2xl font-bold">15+</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Years</div>
                  <div className="text-blue-200 text-sm">Industry Experience</div>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600/30 transition-colors duration-300">
                    <span className="text-orange-400 text-2xl font-bold">25+</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Global</div>
                  <div className="text-blue-200 text-sm">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
