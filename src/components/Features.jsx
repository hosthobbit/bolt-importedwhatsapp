import React from 'react';
import { FiMessageSquare, FiClock, FiUsers, FiPieChart } from 'react-icons/fi';

const features = [
  {
    icon: <FiMessageSquare className="h-8 w-8" />,
    title: 'Intelligent Auto-Replies',
    description: 'AI-powered responses that understand context and maintain natural conversations.'
  },
  {
    icon: <FiClock className="h-8 w-8" />,
    title: 'Message Scheduling',
    description: 'Plan and schedule your messages to reach customers at the perfect time.'
  },
  {
    icon: <FiUsers className="h-8 w-8" />,
    title: 'Multi-Account Support',
    description: 'Manage multiple WhatsApp Business accounts from a single dashboard.'
  },
  {
    icon: <FiPieChart className="h-8 w-8" />,
    title: 'Analytics Dashboard',
    description: 'Track performance metrics and gain insights into customer interactions.'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Everything You Need</h2>
          <p className="mt-4 text-xl text-gray-600">
            Powerful features designed to make your messaging more effective
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#25D366] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
