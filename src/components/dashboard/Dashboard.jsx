import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.displayName || user?.email}</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-sm font-medium text-gray-500 mb-1">Total Messages</div>
            <div className="text-3xl font-bold text-[#075E54]">1,234</div>
            <div className="text-xs text-green-600 mt-2">↑ 12% from last month</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-sm font-medium text-gray-500 mb-1">Response Rate</div>
            <div className="text-3xl font-bold text-[#075E54]">98.5%</div>
            <div className="text-xs text-green-600 mt-2">↑ 2% from last month</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-sm font-medium text-gray-500 mb-1">Avg Response Time</div>
            <div className="text-3xl font-bold text-[#075E54]">45s</div>
            <div className="text-xs text-green-600 mt-2">↓ 5s from last month</div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { time: '2 minutes ago', text: 'Automated response sent to customer inquiry' },
              { time: '15 minutes ago', text: 'New customer conversation started' },
              { time: '1 hour ago', text: 'Response template updated' },
              { time: '2 hours ago', text: 'Analytics report generated' }
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 py-2 border-b last:border-0">
                <div className="w-2 h-2 bg-[#25D366] rounded-full mt-2"></div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{activity.text}</div>
                  <div className="text-xs text-gray-500">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Account Details */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500">Email</label>
              <div className="mt-1 text-gray-900">{user?.email}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Plan</label>
              <div className="mt-1 text-gray-900">Pro Plan</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">WhatsApp Numbers</label>
              <div className="mt-1 text-gray-900">2 Connected</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Next Billing Date</label>
              <div className="mt-1 text-gray-900">August 1, 2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
