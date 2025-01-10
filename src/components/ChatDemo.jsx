import React, { useState, useEffect, useRef } from 'react';

export default function ChatDemo() {
  const [messages, setMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingUser, setTypingUser] = useState(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const TypingIndicator = ({ user }) => (
    <div className={`flex ${user === 'customer' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] rounded-lg p-3 ${
        user === 'customer' ? 'bg-[#DCF8C6]' : 'bg-white'
      } text-black shadow-sm`}>
        <div className="flex space-x-2 items-center h-6">
          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );

  const demoMessages = [
    {
      type: 'customer',
      text: 'Hi! I have a question about your services.',
      time: '10:30',
      typingTime: 2000
    },
    {
      type: 'bot',
      text: 'Hello! 👋 I\'m BotResponz, your AI assistant. How can I help you today?',
      time: '10:30',
      typingTime: 3000
    },
    {
      type: 'customer',
      text: 'What are your business hours?',
      time: '10:31',
      typingTime: 2000
    },
    {
      type: 'bot',
      text: 'We\'re open Monday to Friday, 9 AM to 6 PM EST. Our AI assistant (that\'s me!) is available 24/7 to help with general inquiries and support. 🕒',
      time: '10:31',
      typingTime: 4000
    },
    {
      type: 'customer',
      text: 'Great! Can you help me schedule a consultation?',
      time: '10:32',
      typingTime: 3000
    },
    {
      type: 'bot',
      text: 'Of course! I can help you with that. Would you prefer a morning or afternoon slot? I\'ll make sure our team follows up with specific time options. 📅',
      time: '10:32',
      typingTime: 4000
    },
    {
      type: 'customer',
      text: 'Morning would be better for me.',
      time: '10:33',
      typingTime: 2000
    },
    {
      type: 'bot',
      text: 'Perfect! We have morning slots available next week. Could you also let me know your preferred time zone? This helps us schedule accurately. 🌍',
      time: '10:33',
      typingTime: 4000
    },
    {
      type: 'customer',
      text: 'I\'m in EST.',
      time: '10:33',
      typingTime: 1500
    },
    {
      type: 'bot',
      text: 'Thanks! I\'ve noted that. One more question - are you interested in our Pro or Enterprise plan? This will help us prepare the right information for your consultation. 💼',
      time: '10:34',
      typingTime: 4000
    },
    {
      type: 'customer',
      text: 'The Pro plan looks good. What kind of onboarding support do you provide?',
      time: '10:34',
      typingTime: 3500
    },
    {
      type: 'bot',
      text: 'With the Pro plan, you\'ll get full onboarding support including: \n\n✓ Setup assistance\n✓ Team training session\n✓ Custom response templates\n✓ Integration support\n\nWould you like me to explain any of these in detail? 🎯',
      time: '10:35',
      typingTime: 5000
    },
    {
      type: 'customer',
      text: 'That sounds comprehensive. How long does the setup usually take?',
      time: '10:35',
      typingTime: 3000
    },
    {
      type: 'bot',
      text: 'Most businesses are up and running within 24-48 hours! Our team will help you with the WhatsApp Business API connection and initial response configuration. We\'ll make sure everything is optimized for your specific needs. ⚡',
      time: '10:36',
      typingTime: 4500
    },
    {
      type: 'customer',
      text: 'Perfect! Yes, let\'s schedule that consultation.',
      time: '10:36',
      typingTime: 2500
    },
    {
      type: 'bot',
      text: 'Excellent choice! I\'ve scheduled a team member to reach out to you within the next hour with available morning slots for next week. They\'ll also provide a detailed onboarding timeline. Is there anything else you\'d like to know in the meantime? 🌟',
      time: '10:37',
      typingTime: 5000
    },
    {
      type: 'customer',
      text: 'No, that covers everything. Thanks for your help!',
      time: '10:37',
      typingTime: 2500
    },
    {
      type: 'bot',
      text: 'You\'re welcome! Looking forward to having you onboard with BotResponz. If you think of any other questions, feel free to ask - I\'m here 24/7! Have a great day! 👋',
      time: '10:38',
      typingTime: 4000
    }
  ];

  useEffect(() => {
    if (currentMessageIndex < demoMessages.length) {
      const currentMessage = demoMessages[currentMessageIndex];
      
      // Start typing animation
      setTypingUser(currentMessage.type);
      setIsTyping(true);
      scrollToBottom();

      // Show typing for the specified duration
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setTypingUser(null);
        setMessages(prev => [...prev, currentMessage]);
        
        // Schedule the next message
        const nextTimer = setTimeout(() => {
          setCurrentMessageIndex(prev => prev + 1);
        }, currentMessage.type === 'customer' ? 4000 : 2000); // Longer pause after customer messages

        return () => clearTimeout(nextTimer);
      }, currentMessage.typingTime);

      return () => clearTimeout(typingTimer);
    }
  }, [currentMessageIndex]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="bg-[#F0F2F5] rounded-lg shadow-lg max-w-sm w-full border-4 border-[#075E54]">
      {/* Chat Header */}
      <div className="bg-[#075E54] text-white p-4 rounded-t-lg">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-[#075E54] font-bold">B</span>
          </div>
          <div className="ml-3">
            <div className="font-semibold">BotResponz</div>
            <div className="text-xs opacity-75">AI Assistant</div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div 
        ref={chatContainerRef}
        className="bg-[#E4E4E4] h-96 p-4 overflow-y-auto space-y-4 scroll-smooth"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'customer' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.type === 'customer'
                  ? 'bg-[#DCF8C6] text-black'
                  : 'bg-white text-black'
              } shadow-sm whitespace-pre-line`}
            >
              <div className="text-sm font-medium">{message.text}</div>
              <div className="text-right mt-1">
                <span className="text-xs text-gray-500">{message.time}</span>
              </div>
            </div>
          </div>
        ))}
        {isTyping && <TypingIndicator user={typingUser} />}
      </div>

      {/* Chat Input */}
      <div className="bg-[#F0F2F5] p-4 rounded-b-lg border-t border-gray-200">
        <div className="flex items-center bg-white rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 outline-none text-black"
            disabled
          />
          <button className="ml-2 text-[#075E54]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
