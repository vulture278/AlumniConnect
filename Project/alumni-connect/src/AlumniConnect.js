import React, { useState } from 'react'
import { Bell, Calendar, Heart, Home, Users, Briefcase, GraduationCap, ChevronRight } from 'lucide-react'

export default function AlumniConnectV3() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />
      case 'events':
        return <EventsPage />
      case 'jobs':
        return <JobsPage />
      case 'directory':
        return <DirectoryPage />
      case 'donations':
        return <DonationsPage />
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-gray-800 border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">
            AlumniMilap
          </a>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <button onClick={() => setCurrentPage('home')} className="text-white hover:text-gray-400">
                  <Home className="h-6 w-6" />
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('events')} className="text-white hover:text-gray-400">
                  <Calendar className="h-6 w-6" />
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('jobs')} className="text-white hover:text-gray-400">
                  <Briefcase className="h-6 w-6" />
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('directory')} className="text-white hover:text-gray-400">
                  <Users className="h-6 w-6" />
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('donations')} className="text-white hover:text-gray-400">
                  <Heart className="h-6 w-6" />
                </button>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#">
              <Bell className="h-6 w-6 text-gray-300" />
            </a>
            <div className="relative">
              <button
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600"
              >
                U
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-gray-400">
            &copy; 2024 AlumniMilap. All rights reserved.
          </p>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Help & Support
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsLogoutModalOpen(true)}
                  className="text-gray-400 hover:text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </footer>

      {isLogoutModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
            <p className="mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsLogoutModalOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Implement logout logic here
                  setIsLogoutModalOpen(false)
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function HomePage({ setCurrentPage }) {
  return (
    <div className="space-y-12 py-8">
      <HeroSection setCurrentPage={setCurrentPage} />
      <UpcomingEvents />
      <SuccessStories setCurrentPage={setCurrentPage} />
      <RecentNews setCurrentPage={setCurrentPage} />
    </div>
  )
}

function HeroSection({ setCurrentPage }) {
  return (
    <section className="container mx-auto px-4 text-center bg-blue-50 py-12">
      <h1 className="text-5xl font-extrabold mb-4 text-blue-700">Welcome to AlumniMilap</h1>
      <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
        Empowering alumni to connect, grow, and give back
      </p>
      <button 
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700"
        onClick={() => setCurrentPage('events')}
      >
        Get Started
      </button>
    </section>
  )
}

function UpcomingEvents() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((event) => (
          <div key={event} className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow bg-white">
            <Calendar className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Alumni Networking Night</h3>
            <p className="text-gray-600 mb-4">Join us for an evening of networking and career opportunities.</p>
            <p className="text-sm text-gray-500 mb-4">June 15, 2024 | 7:00 PM</p>
            <button className="w-full border border-gray-300 rounded px-4 py-2 bg-blue-50 hover:bg-blue-100">Register</button>
          </div>
        ))}
      </div>
    </section>
  )
}

function SuccessStories({ setCurrentPage }) {
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
                <button
                  onClick={() => setCurrentPage('directory')}
                  className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function RecentNews({ setCurrentPage }) {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Recent News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((news) => (
          <div key={news} className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow bg-white">
            <img 
              src="alumni.jpg"
              // alt={News ${news}} 
              className="w-full h-48 object-cover rounded-lg mb-4" 
            />
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Alumni Spotlight</h3>
            <p className="text-gray-600 mb-4">
              Our alumni have been featured in a recent article for their contributions to the tech industry.
            </p>
            <button className="w-full border border-gray-300 rounded px-4 py-2 bg-blue-50 hover:bg-blue-100">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  )
}

function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Events and Reunions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((event) => (
              <div key={event} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <Calendar className="h-10 w-10 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Annual Alumni Gala</h3>
                    <p className="text-gray-600">Join us for an evening of celebration and networking.</p>
                    <p className="text-sm text-gray-500">September 20, 2024 | 7:00 PM</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Event Calendar</h2>
          <div className="border rounded-lg p-4 shadow-sm">
            <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-500">
              Calendar Component
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function JobsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Job Portal</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Latest Job Listings</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((job) => (
              <div key={job} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">Software Engineer</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">Full-time</span>
                </div>
                <p className="text-gray-600 mb-1">TechCorp Inc.</p>
                <p className="text-gray-600 mb-4">Develop cutting-edge software solutions for our clients.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">Apply Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Job Search</h2>
          <div className="border rounded-lg p-4 shadow-sm">
            <form className="space-y-4">
              <div>
                <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">Keyword</label>
                <input type="text" id="keyword" name="keyword" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Software Engineer" />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <input type="text" id="location" name="location" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. San Francisco" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Search Jobs</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

function DirectoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Alumni Directory</h1>
      <div className="mb-6">
        <div className="relative max-w-md">
          <input type="text" placeholder="Search alumni..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Users className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((alumni) => (
          <div key={alumni} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">JD</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>
                <p className="text-gray-600">Class of 2010</p>
                <p className="text-gray-600">Software Engineer at TechCorp</p>
                <div className="flex space-x-2 mt-2">
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    {/* <Mail className="h-4 w-4 inline-block mr-1" /> */}
                    Contact
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    <Users className="h-4 w-4 inline-block mr-1" />
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DonationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Support Your Alma Mater</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
          <div className="border rounded-lg p-6 shadow-sm">
            <form className="space-y-4">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Donation Amount</label>
                <input type="number" id="amount" name="amount" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter amount" />
              </div>
              <div>
                <label htmlFor="fund" className="block text-sm font-medium text-gray-700">Select Fund</label>
                <select id="fund" name="fund" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option>Scholarship Fund</option>
                  <option>Research Fund</option>
                  <option>Athletics Fund</option>
                  <option>General Fund</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Donate Now</button>
            </form>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Donation Impact</h2>
          <div className="border rounded-lg p-6 shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">Supported 100+ students with scholarships</span>
              </li>
              <li className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">Funded 20 research projects</span>
              </li>
              <li className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">Improved campus facilities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

