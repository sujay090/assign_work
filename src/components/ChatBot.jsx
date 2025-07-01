import React, { useState, useRef, useEffect } from 'react';
import { 
  FaComments, 
  FaTimes, 
  FaPaperPlane, 
  FaRobot, 
  FaUser,
  FaExpand
} from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm GS3 Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatWindowRef = useRef(null);

  // Predefined responses for demo purposes
  const botResponses = {
    greeting: [
      "Hello! Welcome to GS3. How can I assist you today?",
      "Hi there! I'm here to help with any questions about our services.",
      "Welcome! What would you like to know about GS3?"
    ],
    services: [
      "We offer a wide range of services including Cloud Solutions, Mobile Development, AI & Machine Learning, Cybersecurity, Custom Software, and Data Analytics. Which service interests you most?",
      "GS3 specializes in cutting-edge technology solutions. We can help with cloud migration, mobile apps, AI implementation, security solutions, and more. What's your project about?"
    ],
    pricing: [
      "Our pricing varies based on project scope and requirements. Would you like to schedule a free consultation to discuss your specific needs?",
      "We offer competitive pricing tailored to your project. Let's discuss your requirements - shall I connect you with our sales team?"
    ],
    contact: [
      "You can reach us at info@gs3.com or call +1 (555) 123-4567. Would you like me to help you schedule a meeting?",
      "I'd be happy to connect you with our team! You can email us at info@gs3.com or use our contact form. What's the best way to reach you?"
    ],
    technology: [
      "We work with cutting-edge technologies including React, Node.js, Python, AWS, Docker, Kubernetes, TensorFlow, and many more. What technology stack are you interested in?",
      "Our tech stack includes modern frameworks and cloud platforms. We specialize in React, Python, AWS, AI/ML tools, and DevOps technologies. What's your project requirements?"
    ],
    default: [
      "That's an interesting question! Could you provide more details so I can better assist you?",
      "I'd love to help you with that. Can you tell me more about what you're looking for?",
      "Let me connect you with the right person. Meanwhile, feel free to browse our services or contact us directly.",
      "That's a great question! For detailed information, I recommend speaking with our experts. Would you like me to arrange a consultation?"
    ]
  };

  const quickActions = [
    { text: "Our Services", key: "services" },
    { text: "Pricing Info", key: "pricing" },
    { text: "Contact Us", key: "contact" },
    { text: "Technologies", key: "technology" }
  ];

  // Scroll to bottom when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  // Handle click outside to close chat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsMinimized(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getRandomResponse = (category) => {
    const responses = botResponses[category] || botResponses.default;
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const categorizeMessage = (message) => {
    const msg = message.toLowerCase();
    
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return 'greeting';
    }
    if (msg.includes('service') || msg.includes('what do you do') || msg.includes('offerings')) {
      return 'services';
    }
    if (msg.includes('price') || msg.includes('cost') || msg.includes('pricing') || msg.includes('budget')) {
      return 'pricing';
    }
    if (msg.includes('contact') || msg.includes('reach') || msg.includes('call') || msg.includes('email')) {
      return 'contact';
    }
    if (msg.includes('technology') || msg.includes('tech') || msg.includes('framework') || msg.includes('stack')) {
      return 'technology';
    }
    
    return 'default';
  };

  const sendMessage = (messageText = null) => {
    const text = messageText || inputMessage.trim();
    if (!text) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const category = categorizeMessage(text);
      const botResponse = getRandomResponse(category);
      
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div 
          ref={chatWindowRef}
          className={`bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl transition-all duration-300 mb-4 ${
            isMinimized ? 'w-80 h-16' : 'w-80 sm:w-96 h-96 sm:h-[500px]'
          }`}
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <FaRobot className="text-white text-sm" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">GS3 Assistant</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-xs">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
                title={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                {isMinimized ? <FaExpand size={14} /> :<></>}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
                title="Close chat"
              >
                <FaTimes size={14} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div className="h-64 sm:h-80 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${
                      message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user' 
                          ? 'bg-blue-600' 
                          : 'bg-gradient-to-r from-purple-500 to-blue-500'
                      }`}>
                        {message.sender === 'user' ? (
                          <FaUser className="text-white text-xs" />
                        ) : (
                          <FaRobot className="text-white text-xs" />
                        )}
                      </div>
                      <div className={`rounded-2xl px-3 py-2 ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800 text-gray-200 border border-gray-700/50'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <span className={`text-xs mt-1 block ${
                          message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
                        }`}>
                          {formatTime(message.timestamp)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <FaRobot className="text-white text-xs" />
                      </div>
                      <div className="bg-gray-800 border border-gray-700/50 rounded-2xl px-3 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              <div className="px-4 py-2 border-t border-gray-700/50">
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => sendMessage(action.text)}
                      className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-1 rounded-full text-xs transition-all duration-200 border border-gray-600/50 hover:border-blue-500/50"
                    >
                      {action.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-700/50">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="w-full bg-gray-800 border border-gray-600/50 rounded-full px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <button
                    onClick={() => sendMessage()}
                    disabled={!inputMessage.trim()}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed p-2 rounded-full transition-all duration-200 group"
                  >
                    <FaPaperPlane className="text-white text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
      >
        <div className="relative z-10">
          {isOpen ? (
            <FaTimes size={20} className="group-hover:rotate-90 transition-transform duration-300" />
          ) : (
            <FaComments size={20} className="group-hover:scale-110 transition-transform duration-300" />
          )}
        </div>
        
        {/* Notification dot (optional) */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </button>
    </div>
  );
};

export default ChatBot;
