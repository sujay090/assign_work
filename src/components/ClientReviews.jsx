import React, { useEffect, useRef, useState } from 'react';
import { FaStar, FaQuoteLeft, FaQuoteRight, FaBuilding, FaUserTie, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ClientReviews = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const cardsRef = useRef([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const testimonialRef = useRef(null);
  const quoteRef = useRef(null);

  const reviews = [
    {
      name: "Sarah Johnson",
      position: "Chief Technology Officer",
      company: "TechCorp International",
      industry: "Technology",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      review: "GS3 transformed our entire digital infrastructure with exceptional precision and innovation. Their expertise in cloud solutions and AI implementation exceeded our highest expectations. The team's professionalism and strategic approach delivered measurable results that transformed our business operations.",
      rating: 5,
      projectValue: "$2.5M",
      completionTime: "8 months",
      improvements: "300% efficiency increase"
    },
    {
      name: "Michael Chen",
      position: "Chief Executive Officer",
      company: "InnovateLab Solutions",
      industry: "Healthcare Technology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      review: "Working with GS3 was a transformative experience for our healthcare startup. They delivered a cutting-edge mobile platform that revolutionized patient care delivery. Their attention to regulatory compliance and user experience is absolutely unmatched in the industry.",
      rating: 5,
      projectValue: "$1.8M",
      completionTime: "6 months",
      improvements: "250% user engagement"
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Director",
      company: "Global Dynamics Corp",
      industry: "Manufacturing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      review: "The cybersecurity solutions and IoT implementation provided by GS3 revolutionized our manufacturing processes. Their proactive approach to security and 24/7 enterprise support ensures our global operations run seamlessly with zero downtime.",
      rating: 5,
      projectValue: "$3.2M",
      completionTime: "12 months",
      improvements: "99.9% uptime achieved"
    },
    {
      name: "David Kumar",
      position: "Head of Digital Transformation",
      company: "Financial Dynamics Ltd",
      industry: "Financial Services",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      review: "GS3's fintech solutions and blockchain implementation transformed our financial operations completely. Their deep understanding of regulatory requirements and innovative approach to secure transactions set new industry standards for our organization.",
      rating: 5,
      projectValue: "$4.1M",
      completionTime: "10 months",
      improvements: "500% transaction speed"
    },
    {
      name: "Lisa Thompson",
      position: "Chief Innovation Officer",
      company: "RetailTech Enterprises",
      industry: "Retail Technology",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      review: "The AI-powered retail analytics platform developed by GS3 transformed our customer experience and operational efficiency. Their machine learning algorithms and predictive analytics have given us unprecedented insights into consumer behavior patterns.",
      rating: 5,
      projectValue: "$2.9M",
      completionTime: "9 months",
      improvements: "400% ROI increase"
    }
  ];

  const clientStats = [
    { number: "150+", label: "Enterprise Clients", icon: FaBuilding },
    { number: "98%", label: "Client Satisfaction", icon: FaStar },
    { number: "500+", label: "Projects Delivered", icon: FaUserTie },
    { number: "50+", label: "Countries Served", icon: FaBuilding }
  ];

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stats Animation
      gsap.fromTo(statsRef.current.children,
        { opacity: 0, y: 30, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards Animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, x: -100, rotationY: -15 },
            { opacity: 1, x: 0, rotationY: 0, duration: 1, delay: index * 0.2, ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Quote Animation
      if (quoteRef.current) {
        gsap.fromTo(quoteRef.current,
          { opacity: 0, scale: 0.5, rotation: -5 },
          { opacity: 1, scale: 1, rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.3)",
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-play testimonials
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentTestimonial(prev => (prev + 1) % reviews.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, reviews.length]);

  // Testimonial change animation
  useEffect(() => {
    if (testimonialRef.current) {
      gsap.fromTo(testimonialRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [currentTestimonial]);

  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, i) => (
      <FaStar key={i} className="text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
    ));
  };

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % reviews.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Professional Header Section */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-block">
            <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
              Client Excellence
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              What Our <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Partners</span> Say
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Trusted by industry leaders worldwide to deliver exceptional technology solutions
            </p>
          </div>
        </div>

        {/* Client Statistics */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {clientStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
                  <IconComponent className="text-blue-400 text-2xl" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Featured Testimonial Spotlight */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 shadow-2xl">
            <div ref={testimonialRef} className="lg:flex items-center space-y-8 lg:space-y-0 lg:space-x-12">
              {/* Client Image & Info */}
              <div className="lg:w-1/3 text-center lg:text-left">
                <div className="relative inline-block">
                  <img
                    src={reviews[currentTestimonial]?.image}
                    alt={reviews[currentTestimonial]?.name}
                    className="w-32 h-32 rounded-full mx-auto lg:mx-0 object-cover border-4 border-blue-500/30 shadow-lg"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-800"></div>
                </div>
                <div className="mt-6">
                  <h4 className="text-2xl font-bold text-white mb-1">
                    {reviews[currentTestimonial]?.name}
                  </h4>
                  <p className="text-blue-400 font-medium mb-1">
                    {reviews[currentTestimonial]?.position}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {reviews[currentTestimonial]?.company}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">
                    {reviews[currentTestimonial]?.industry}
                  </span>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:w-2/3">
                <div className="space-y-6">
                  {/* Quote with animation */}
                  <div ref={quoteRef} className="relative">
                    <FaQuoteLeft className="text-blue-600/30 text-4xl absolute -top-4 -left-4" />
                    <blockquote className="text-xl text-gray-200 leading-relaxed pl-8 pr-8 italic">
                      "{reviews[currentTestimonial]?.review}"
                    </blockquote>
                    <FaQuoteRight className="text-blue-600/30 text-2xl absolute -bottom-2 -right-2" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 pl-8">
                    <div className="flex space-x-1">
                      {renderStars(reviews[currentTestimonial]?.rating)}
                    </div>
                    <span className="text-gray-400 text-sm ml-3">Exceptional Service</span>
                  </div>

                  {/* Project Metrics */}
                  <div className="grid md:grid-cols-3 gap-4 pl-8">
                    <div className="bg-gray-700/30 rounded-lg p-4 text-center">
                      <div className="text-lg font-bold text-white">{reviews[currentTestimonial]?.projectValue}</div>
                      <div className="text-gray-400 text-xs">Project Value</div>
                    </div>
                    <div className="bg-gray-700/30 rounded-lg p-4 text-center">
                      <div className="text-lg font-bold text-white">{reviews[currentTestimonial]?.completionTime}</div>
                      <div className="text-gray-400 text-xs">Completion Time</div>
                    </div>
                    <div className="bg-gray-700/30 rounded-lg p-4 text-center">
                      <div className="text-lg font-bold text-white">{reviews[currentTestimonial]?.improvements}</div>
                      <div className="text-gray-400 text-xs">Business Impact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-12 space-x-6">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gray-700/50 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <FaChevronLeft className="text-gray-400 group-hover:text-white" />
              </button>
              
              <div className="flex space-x-3">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-blue-500 scale-125'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gray-700/50 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <FaChevronRight className="text-gray-400 group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Client Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.slice(0, 3).map((review, index) => (
            <div
              key={index}
              ref={(el) => cardsRef.current[index] = el}
              className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group hover:scale-105"
            >
              {/* Professional Card Header */}
              <div className="flex items-center mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover border-3 border-gray-600 group-hover:border-blue-500 transition-colors duration-300"
                />
                <div className="ml-4 flex-1">
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {review.name}
                  </h4>
                  <p className="text-blue-400 text-sm font-medium">{review.position}</p>
                  <p className="text-gray-400 text-xs">{review.company}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-200 leading-relaxed text-sm italic mb-6">
                "{review.review.substring(0, 120)}..."
              </p>

              {/* Industry Badge */}
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">
                  {review.industry}
                </span>
                <span className="text-gray-500 text-xs">View Full Case →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Professional CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-12 border border-blue-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your business with innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Success Story
              </button>
              <button className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                View All Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
