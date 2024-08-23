import { Button } from './components/Button';
import { Card } from './components/Card';
import { Avatar } from './components/Avatar';
import { Badge } from './components/Badge';
import { Input } from './components/Input';
import { Label } from './components/Label';

import { useState } from 'react';
import { Bell, Calendar, Heart, Home, Users } from 'lucide-react';
import { AlumniDashboard } from './dashboard/AlumniDashboard';
import { AuthPages } from './auth/AuthPages';

export default function MainComponent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);


  const renderContent = () => {
    switch (currentPage) {
      case 'alumniDashboard':
        return <AlumniDashboard />;
      case 'authPages':
        return <AuthPages />;
      // Add more cases as per your application's pages
      default:
        return <div>Home Page Content</div>;
    }
  };

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
          <a href="#" className="text-white hover:text-gray-400">
            <Home className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-400">
            <Users className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-400">
            <Calendar className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-400">
            <Heart className="h-6 w-6" />
          </a>
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
          onClick={() => setCurrentPage("alumniDashboard")}
        >
          U
        </button>
      </div>
    </div>
  </div>
</header>

{/* Example of Modal Styling */}
{isLogoutModalOpen && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <p className="text-xl">Are you sure you want to logout?</p>
      <div className="mt-4 flex space-x-2">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => setIsLogoutModalOpen(false)}
        >
          Cancel
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Confirm Logout
        </button>
      </div>
    </div>
  </div>
)}


      <main className="flex-grow">
        {currentPage === "home" ? (
          <div className="space-y-12 py-8">
            <HeroSection setCurrentPage={setCurrentPage} />
            <UpcomingEvents />
            <SuccessStories />
            <RecentNews />
          </div>
        ) : currentPage === "alumniDashboard" ? (
          <AlumniDashboard setCurrentPage={setCurrentPage} />
        ) : (
          <AuthPages setCurrentPage={setCurrentPage} />
        )}
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
                  setIsLogoutModalOpen(false);
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
  );
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
        onClick={() => setCurrentPage('login')}
      >
        Get Started
      </button>
    </section>
  );
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
  );
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
                  onClick={() => setCurrentPage('alumniDashboard')}
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
  );
}


function RecentNews({ setCurrentPage }) {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Recent News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((news) => (
          <div key={news} className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow bg-white">
            <img 
              src={`alumni.jpg`} 
              alt={`News ${news}`} 
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
  );
}

