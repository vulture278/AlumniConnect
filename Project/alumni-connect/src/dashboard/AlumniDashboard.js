import React from 'react'
import { Bell, Settings, User, Briefcase, Users, Calendar, Heart, ArrowLeft } from 'lucide-react'

export function AlumniDashboard({ setCurrentPage }) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => setCurrentPage('home')}
        className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Home
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white shadow rounded-lg">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Welcome back, John Doe!</h2>
            <div className="flex items-center space-x-4">
              <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-2xl font-bold">
                JD
              </div>
              <div>
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-gray-600">Class of 2015</p>
                <p className="text-gray-600">Software Engineer at TechCorp</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <nav className="space-y-2">
              {[
                { icon: User, label: 'Profile' },
                { icon: Briefcase, label: 'Job Board' },
                { icon: Users, label: 'Network' },
                { icon: Calendar, label: 'Events' },
                { icon: Heart, label: 'Donate' },
                { icon: Settings, label: 'Settings' },
              ].map((item) => (
                <button key={item.label} className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 flex items-center">
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white shadow rounded-lg">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Notifications</h2>
          <ul className="space-y-4">
            {[1, 2, 3].map((notification) => (
              <li key={notification} className="flex items-center space-x-4">
                <Bell className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold">New job posting in your field</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
