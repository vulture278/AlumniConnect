import { Button } from './components/Button';
import { Card } from './components/Card';
import { Avatar } from './components/Avatar';
import { Badge } from './components/Badge';
import { Input } from './components/Input';
import { Label } from './components/Label';

import { useState } from 'react'
import { Bell, Calendar, ChevronRight, Heart, Home, LogOut, Search, Settings, Users } from 'lucide-react'

export default function Component() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-900">AlumniConnect</a>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900"><Home className="h-6 w-6" /></a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900"><Users className="h-6 w-6" /></a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900"><Calendar className="h-6 w-6" /></a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900"><Heart className="h-6 w-6" /></a></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#"><Bell className="h-6 w-6 text-gray-500" /></a>
            <div className="relative">
              <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                U
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        <div className="space-y-12 py-8">
          <HeroSection />
          <UpcomingEvents />
          <SuccessStories />
          <RecentNews />
        </div>
      </main>
      
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-gray-600">&copy; 2024 AlumniConnect. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Settings</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Help & Support</a></li>
              <li><button onClick={() => setIsLogoutModalOpen(true)} className="text-gray-600 hover:text-gray-900">Logout</button></li>
            </ul>
          </nav>
        </div>
      </footer>
      
      {isLogoutModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
            <p className="mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-end space-x-4">
              <button onClick={() => setIsLogoutModalOpen(false)} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Cancel</button>
              <button onClick={() => {
                // Implement logout logic here
                setIsLogoutModalOpen(false)
              }} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function HeroSection() {
  return (
    <section className="container mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to AlumniConnect</h1>
      <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">Empowering alumni to connect, grow, and give back</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Get Started</button>
    </section>
  )
}

function UpcomingEvents() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((event) => (
          <div key={event} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Calendar className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Alumni Networking Night</h3>
            <p className="text-gray-600 mb-4">Join us for an evening of networking and career opportunities.</p>
            <p className="text-sm text-gray-500 mb-4">June 15, 2024 | 7:00 PM</p>
            <button className="w-full border border-gray-300 rounded px-4 py-2 hover:bg-gray-50">Register</button>
          </div>
        ))}
      </div>
    </section>
  )
}

function SuccessStories() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((story) => (
          <div key={story} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">AL</div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900">Jane Doe</h3>
                <p className="text-gray-600 mb-2">Class of 2015</p>
                <p className="text-gray-700">Launched a successful tech startup, revolutionizing the industry.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function RecentNews() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Recent News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((news) => (
          <div key={news} className="border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <img src={`/placeholder.svg?height=200&width=400&text=News${news}`} alt={`News ${news}`} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">University Launches New Program</h3>
              <p className="text-gray-600 mb-4">Exciting new opportunities for students in emerging fields.</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                Read More <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
