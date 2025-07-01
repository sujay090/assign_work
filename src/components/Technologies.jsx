import React, { useEffect, useRef } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaAngular,
  FaVuejs,
  FaJava,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaCloud,
  FaMicrosoft,
  FaGoogle,
  FaApple,
  FaAndroid,
  FaLinux,
  FaWindows
} from "react-icons/fa";

import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiKubernetes,
  SiTensorflow,
  SiNextdotjs,
  SiGraphql,
  SiRedis,
  SiElasticsearch,
  SiJenkins,
  SiTerraform,
  SiGooglecloud,
  SiSpring,
  SiDjango,
  SiFlask,
  SiExpress,
  SiFirebase,
  SiMysql,
  SiNginx,
  SiApache,
  SiJira,
  SiSlack
} from "react-icons/si";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  const sectionRef = useRef(null);
  const scrollContainer1Ref = useRef(null);
  const scrollContainer2Ref = useRef(null);
  const scrollContainer3Ref = useRef(null);
  const titleRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const frontendTechnologies = [
    { name: "React", icon: <FaReact className="text-5xl text-blue-500" />, category: "Frontend", expertise: "Expert" },
    { name: "Next.js", icon: <SiNextdotjs className="text-5xl text-white" />, category: "Frontend", expertise: "Expert" },
    { name: "Angular", icon: <FaAngular className="text-5xl text-red-600" />, category: "Frontend", expertise: "Advanced" },
    { name: "Vue.js", icon: <FaVuejs className="text-5xl text-green-500" />, category: "Frontend", expertise: "Advanced" },
    { name: "TypeScript", icon: <SiTypescript className="text-5xl text-blue-600" />, category: "Language", expertise: "Expert" },
    { name: "GraphQL", icon: <SiGraphql className="text-5xl text-pink-500" />, category: "API", expertise: "Advanced" }
  ];

  const backendTechnologies = [
    { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-600" />, category: "Backend", expertise: "Expert" },
    { name: "Python", icon: <FaPython className="text-5xl text-yellow-500" />, category: "Backend", expertise: "Expert" },
    { name: "Java", icon: <FaJava className="text-5xl text-red-500" />, category: "Backend", expertise: "Advanced" },
    { name: "Spring", icon: <SiSpring className="text-5xl text-green-600" />, category: "Framework", expertise: "Advanced" },
    { name: "Django", icon: <SiDjango className="text-5xl text-green-700" />, category: "Framework", expertise: "Advanced" },
    { name: "Express", icon: <SiExpress className="text-5xl text-white" />, category: "Framework", expertise: "Expert" },
    { name: "PHP", icon: <FaPhp className="text-5xl text-purple-600" />, category: "Backend", expertise: "Intermediate" },
    { name: "Laravel", icon: <FaLaravel className="text-5xl text-red-500" />, category: "Framework", expertise: "Intermediate" }
  ];

  const infrastructureTechnologies = [
    { name: "AWS", icon: <FaAws className="text-5xl text-orange-500" />, category: "Cloud", expertise: "Expert" },
    { name: "Google Cloud", icon: <SiGooglecloud className="text-5xl text-blue-500" />, category: "Cloud", expertise: "Advanced" },
    { name: "Docker", icon: <FaDocker className="text-5xl text-blue-500" />, category: "DevOps", expertise: "Expert" },
    { name: "Kubernetes", icon: <SiKubernetes className="text-5xl text-blue-600" />, category: "DevOps", expertise: "Expert" },
    { name: "Terraform", icon: <SiTerraform className="text-5xl text-purple-600" />, category: "DevOps", expertise: "Advanced" },
    { name: "Jenkins", icon: <SiJenkins className="text-5xl text-blue-600" />, category: "CI/CD", expertise: "Advanced" },
    { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-500" />, category: "Database", expertise: "Expert" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-5xl text-blue-700" />, category: "Database", expertise: "Expert" },
    { name: "Redis", icon: <SiRedis className="text-5xl text-red-600" />, category: "Database", expertise: "Advanced" },
    { name: "TensorFlow", icon: <SiTensorflow className="text-5xl text-orange-500" />, category: "AI/ML", expertise: "Expert" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced Title animation with full-width effect
      gsap.fromTo(titleRef.current,
        { 
          opacity: 0, 
          y: 150, 
          scale: 0.7,
          rotationX: 45
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
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate individual title elements for full-width effect
      const titleElements = titleRef.current.querySelectorAll('.title-element');
      titleElements.forEach((element, index) => {
        gsap.fromTo(element,
          { 
            opacity: 0, 
            x: index % 2 === 0 ? -200 : 200,
            scale: 0.5
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Full-width background gradient animation
      const gradientBar = titleRef.current.querySelector('.gradient-bar');
      if (gradientBar) {
        gsap.fromTo(gradientBar,
          { width: 0, opacity: 0 },
          {
            width: "100%",
            opacity: 1,
            duration: 1.5,
            delay: 0.8,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Animate decorative lines across full width
      const decorativeLines = titleRef.current.querySelectorAll('.absolute.top-1\\/2, .absolute.top-1\\/4, .absolute.bottom-1\\/4');
      decorativeLines.forEach((line, index) => {
        gsap.fromTo(line,
          { 
            scaleX: 0,
            opacity: 0
          },
          {
            scaleX: 1,
            opacity: 1,
            duration: 2,
            delay: 1 + (index * 0.3),
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Section headers animation with ScrollTrigger
      const animateSectionHeaders = () => {
        const headers = sectionRef.current.querySelectorAll('.section-header');
        headers.forEach((header, index) => {
          gsap.fromTo(header,
            { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: header,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });
      };

      // Enhanced infinite scroll with ScrollTrigger control
      const setupScrollTriggerInfiniteScroll = (container, direction = 1, speed = 50, triggerElement) => {
        if (!container || container.children.length === 0) return;

        // Initial setup
        gsap.set(container, { 
          x: direction === 1 ? 0 : -container.scrollWidth / 2,
          opacity: 0 
        });

        // Fade in animation
        gsap.to(container, {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: triggerElement,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        // Infinite scroll animation with ScrollTrigger
        let scrollAnimation = gsap.to(container, {
          x: direction === 1 ? -container.scrollWidth / 2 : 0,
          duration: speed,
          ease: "none",
          repeat: -1,
          paused: true,
          modifiers: {
            x: gsap.utils.unitize(value => parseFloat(value) % (container.scrollWidth / 2))
          }
        });

        // Control animation based on scroll position
        ScrollTrigger.create({
          trigger: triggerElement,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => scrollAnimation.play(),
          onLeave: () => scrollAnimation.pause(),
          onEnterBack: () => scrollAnimation.play(),
          onLeaveBack: () => scrollAnimation.pause()
        });

        // Pause on hover
        container.addEventListener('mouseenter', () => scrollAnimation.pause());
        container.addEventListener('mouseleave', () => {
          if (ScrollTrigger.isInViewport(triggerElement)) {
            scrollAnimation.play();
          }
        });

        return scrollAnimation;
      };

      // Individual card animations within containers
      const animateCards = (container, delay = 0) => {
        if (!container) return;
        
        gsap.fromTo(container.children,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            delay: delay,
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      };

      // Setup all infinite scrolls with different triggers
      if (scrollContainer1Ref.current && section1Ref.current) {
        setupScrollTriggerInfiniteScroll(scrollContainer1Ref.current, 1, 60, section1Ref.current);
        animateCards(scrollContainer1Ref.current, 0.3);
      }
      
      if (scrollContainer2Ref.current && section2Ref.current) {
        setupScrollTriggerInfiniteScroll(scrollContainer2Ref.current, -1, 80, section2Ref.current);
        animateCards(scrollContainer2Ref.current, 0.5);
      }
      
      if (scrollContainer3Ref.current && section3Ref.current) {
        setupScrollTriggerInfiniteScroll(scrollContainer3Ref.current, 1, 70, section3Ref.current);
        animateCards(scrollContainer3Ref.current, 0.7);
      }

      // Background elements animation
      gsap.fromTo(sectionRef.current.querySelectorAll('.bg-element'),
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate section headers
      animateSectionHeaders();

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const TechCard = ({ tech }) => (
    <div 
      className="tech-card flex-shrink-0 w-72 sm:w-80 mx-2 sm:mx-4 bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group"
      style={{ minWidth: '280px' }}
    >
      <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
        <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-700/50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <div className="scale-75 sm:scale-90 md:scale-100">
            {tech.icon}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 truncate">
              {tech.name}
            </h3>
            <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 ml-2 ${
              tech.expertise === 'Expert' ? 'bg-green-600/20 text-green-300' :
              tech.expertise === 'Advanced' ? 'bg-blue-600/20 text-blue-300' :
              'bg-yellow-600/20 text-yellow-300'
            }`}>
              {tech.expertise}
            </span>
          </div>
          <p className="text-blue-400 font-medium mb-1 sm:mb-2 text-sm sm:text-base">{tech.category}</p>
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-gray-600 rounded-full h-1.5 sm:h-2">
              <div className={`h-full rounded-full ${
                tech.expertise === 'Expert' ? 'bg-green-500 w-full' :
                tech.expertise === 'Advanced' ? 'bg-blue-500 w-4/5' :
                'bg-yellow-500 w-3/5'
              }`}></div>
            </div>
            <span className="text-gray-400 text-xs sm:text-sm flex-shrink-0">{
              tech.expertise === 'Expert' ? '90%+' :
              tech.expertise === 'Advanced' ? '80%' : '60%'
            }</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        <div className="bg-element absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="bg-element absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="bg-element absolute top-1/2 left-0 w-full h-96 bg-gradient-to-r from-blue-600/3 via-purple-600/3 to-pink-600/3 blur-3xl transform -translate-y-1/2"></div>
      </div>

      {/* Full-width title section */}
      <div className="w-full relative z-10 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Professional Header - Full Width Animation */}
          <div ref={titleRef} className="text-center mb-20 relative">
            <div className="w-full">
              <span className="title-element text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                Technology Excellence
              </span>
              <h2 className="title-element text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Our <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">Technology</span> Stack
              </h2>
              <div className="gradient-bar h-1 sm:h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-6 sm:mb-8 rounded-full shadow-lg shadow-blue-500/25"></div>
              <p className="title-element text-gray-300 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-light px-4">
                Cutting-edge technologies powering enterprise-grade solutions across the globe
              </p>
            </div>
            
            {/* Full-width decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform -translate-y-1/2"></div>
              <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
              <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width technology sections */}
      <div className="w-full relative z-10">

        {/* Frontend Technologies - Left to Right Scroll - Full Width */}
        <div ref={section1Ref} className="mb-16 w-full">
          <div className="section-header mb-6 sm:mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Frontend & UI Technologies</h3>
            <p className="text-gray-400 text-sm sm:text-base">Modern user interfaces and client-side development</p>
          </div>
          <div className="w-full overflow-hidden">
            <div ref={scrollContainer1Ref} className="flex will-change-transform">
              {/* Duplicate cards for seamless infinite scroll */}
              {[...frontendTechnologies, ...frontendTechnologies].map((tech, index) => (
                <TechCard key={`frontend-${index}`} tech={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Backend Technologies - Right to Left Scroll - Full Width */}
        <div ref={section2Ref} className="mb-16 w-full">
          <div className="section-header mb-6 sm:mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Backend & Server Technologies</h3>
            <p className="text-gray-400 text-sm sm:text-base">Robust server-side architecture and frameworks</p>
          </div>
          <div className="w-full overflow-hidden">
            <div ref={scrollContainer2Ref} className="flex will-change-transform">
              {/* Duplicate cards for seamless infinite scroll */}
              {[...backendTechnologies, ...backendTechnologies].map((tech, index) => (
                <TechCard key={`backend-${index}`} tech={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Infrastructure Technologies - Left to Right Scroll - Full Width */}
        <div ref={section3Ref} className="mb-16 w-full">
          <div className="section-header mb-6 sm:mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Cloud & Infrastructure</h3>
            <p className="text-gray-400 text-sm sm:text-base">Scalable cloud solutions and DevOps excellence</p>
          </div>
          <div className="w-full overflow-hidden">
            <div ref={scrollContainer3Ref} className="flex will-change-transform">
              {/* Duplicate cards for seamless infinite scroll */}
              {[...infrastructureTechnologies, ...infrastructureTechnologies].map((tech, index) => (
                <TechCard key={`infrastructure-${index}`} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for smooth animations */}
      <style jsx>{`
        .will-change-transform {
          will-change: transform;
        }
        
        /* Pause animation on hover */
        .overflow-hidden:hover .will-change-transform {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Technologies;
