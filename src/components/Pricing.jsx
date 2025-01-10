import React from 'react';

export default function Pricing() {
  return (
    <div className="py-24 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-gray-600">Choose the plan that works best for you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pro Plan */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">Pro Plan</h3>
                <p className="text-gray-600">GPT-4 Powered</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold">£33.20<span className="text-xl text-gray-600">/mo</span></p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#25D366] mb-2">Everything in Pro GPT-3.5</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#25D366] mr-2">✓</span>
                    Unlimited auto-replies
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25D366] mr-2">✓</span>
                    Multiple WhatsApp accounts (up to 3)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25D366] mr-2">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25D366] mr-2">✓</span>
                    Customizable response templates
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25D366] mr-2">✓</span>
                    30-day message history
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#25D366] mb-2">GPT-4 Powered Responses</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#25D366] mr-2">✓</span>
                    Enhanced context understanding
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25D366] mr-2">✓</span>
                    Improved response quality
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25D366] mr-2">✓</span>
                    Advanced conversation handling
                  </li>
                </ul>
              </div>
            </div>

            <button className="w-full btn-primary mt-8">Start Free Trial</button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-[#25D366]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">Enterprise Plan</h3>
                <p className="text-gray-600">GPT-4 Powered</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold">£51.88<span className="text-xl text-gray-600">/mo</span></p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#25D366] mb-2">Everything in Pro GPT-4, plus:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#25D366] mr-2">✓</span>
                    Unlimited message history
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25D366] mr-2">✓</span>
                    Dedicated Account Manager
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25D366] mr-2">✓</span>
                    Custom AI Training
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25D366] mr-2">✓</span>
                    Full API Access
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25D366] mr-2">✓</span>
                    SLA Guarantee
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#25D366] mb-2">Advanced Features</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#25D366] mr-2">✓</span>
                    Team Collaboration Tools
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25D366] mr-2">✓</span>
                    Advanced Analytics & Reporting
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25D366] mr-2">✓</span>
                    Premium Support
                  </li>
                </ul>
              </div>
            </div>

            <button className="w-full btn-secondary mt-8">Contact Sales</button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need help choosing the right plan?</p>
          <button className="text-[#25D366] font-semibold hover:text-[#075E54]">
            Contact our team →
          </button>
        </div>
      </div>
    </div>
  );
}
