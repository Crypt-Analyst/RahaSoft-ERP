'use client'

import { Bell, Search, User, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search anything..."
            className="h-10 w-80 rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
            3
          </span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-3 rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          >
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="hidden md:block text-left">
              <div className="text-sm font-medium">Bilford Bwire</div>
              <div className="text-xs text-gray-500">Administrator</div>
            </div>
            <ChevronDown className="h-4 w-4" />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg border">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile Settings
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Company Settings
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Help & Support
              </a>
              <div className="border-t my-1"></div>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Sign Out
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
