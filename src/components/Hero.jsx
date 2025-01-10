import React from 'react';
import ChatDemo from './ChatDemo';

export default function Hero() {
  return (
    <div className="bg-[#075E54] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 text-sm mb-8">
              <span className="mr-2">🚀</span>
              Powered by Advanced AI
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Automate Your WhatsApp Messaging with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12">
              Save time, engage customers, and streamline communication.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="btn-primary">Start Free Trial</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-end">
            <div className="bg-black p-1 rounded-lg shadow-2xl">
              <ChatDemo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
