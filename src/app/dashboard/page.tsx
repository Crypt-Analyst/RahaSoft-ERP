'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DashboardPage() {
  const [timeFrame, setTimeFrame] = useState('week')

  const dashboardMetrics = [
    { 
      name: 'Total Revenue', 
      value: '$2,847,350', 
      change: '+12.5%', 
      trend: 'up',
      color: 'green',
      icon: '💰'
    },
    { 
      name: 'Active Customers', 
      value: '1,247', 
      change: '+8.3%', 
      trend: 'up',
      color: 'blue',
      icon: '👥'
    },
    { 
      name: 'Total Orders', 
      value: '3,456', 
      change: '+18.7%', 
      trend: 'up',
      color: 'purple',
      icon: '📦'
    },
    { 
      name: 'Net Profit', 
      value: '$924,150', 
      change: '+15.2%', 
      trend: 'up',
      color: 'emerald',
      icon: '📈'
    },
    { 
      name: 'Employee Count', 
      value: '247', 
      change: '+3.1%', 
      trend: 'up',
      color: 'orange',
      icon: '👨‍💼'
    },
    { 
      name: 'Projects Active', 
      value: '24', 
      change: '+12.5%', 
      trend: 'up',
      color: 'indigo',
      icon: '🎯'
    }
  ]

  const moduleCards = [
    {
      name: 'Customer Relationship Management',
      description: 'Manage leads, contacts, deals, and customer interactions',
      href: '/dashboard/crm',
      icon: '👥',
      color: 'from-blue-500 to-cyan-600',
      stats: '1,247 active customers'
    },
    {
      name: 'Accounting & Finance',
      description: 'Financial management, invoicing, and reporting',
      href: '/dashboard/accounting',
      icon: '🧮',
      color: 'from-green-500 to-emerald-600',
      stats: '$2.8M monthly revenue'
    },
    {
      name: 'Human Resources',
      description: 'Employee management, payroll, and HR operations',
      href: '/dashboard/hr',
      icon: '👨‍💼',
      color: 'from-purple-500 to-indigo-600',
      stats: '247 employees'
    },
    {
      name: 'Inventory Management',
      description: 'Stock tracking, warehousing, and procurement',
      href: '/dashboard/inventory',
      icon: '📦',
      color: 'from-orange-500 to-red-600',
      stats: '1,847 products'
    },
    {
      name: 'Project Management',
      description: 'Task tracking, time management, and resources',
      href: '/dashboard/projects',
      icon: '🎯',
      color: 'from-teal-500 to-green-600',
      stats: '24 active projects'
    },
    {
      name: 'Manufacturing',
      description: 'Production planning, quality control, and MRP',
      href: '/dashboard/manufacturing',
      icon: '🏭',
      color: 'from-gray-500 to-slate-600',
      stats: '12 production lines'
    },
    {
      name: 'Sales & Marketing',
      description: 'Order processing, campaigns, and analytics',
      href: '/dashboard/sales',
      icon: '📈',
      color: 'from-pink-500 to-rose-600',
      stats: '$487K monthly sales'
    },
    {
      name: 'Supply Chain',
      description: 'Vendor management, purchasing, and logistics',
      href: '/dashboard/supply-chain',
      icon: '🚚',
      color: 'from-amber-500 to-yellow-600',
      stats: '247 suppliers'
    },
    {
      name: 'Business Intelligence',
      description: 'AI insights, analytics, and predictive analysis',
      href: '/dashboard/business-intelligence',
      icon: '🧠',
      color: 'from-violet-500 to-purple-600',
      stats: '89% insight accuracy'
    },
    {
      name: 'Document Management',
      description: 'File storage, version control, workflow approval',
      href: '/dashboard/document-management',
      icon: '📁',
      color: 'from-cyan-500 to-blue-600',
      stats: '24,847 documents'
    }
  ]

  const recentActivities = [
    { type: 'sale', message: 'New order #ORD-2024-001 worth $15,250', time: '5 minutes ago' },
    { type: 'hr', message: 'Sarah Johnson completed onboarding process', time: '12 minutes ago' },
    { type: 'inventory', message: 'Low stock alert: Product SKU-789 (23 units left)', time: '18 minutes ago' },
    { type: 'project', message: 'Project Alpha milestone completed by development team', time: '25 minutes ago' },
    { type: 'finance', message: 'Invoice INV-2024-156 payment received ($8,750)', time: '32 minutes ago' }
  ]

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Welcome back, Bilford!</h1>
          <p className="text-gray-600 mt-2">Here's what's happening with your business today.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <select 
            value={timeFrame} 
            onChange={(e) => setTimeFrame(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 bg-white"
          >
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardMetrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">{metric.icon}</div>
              <span className={`text-xs px-3 py-1 rounded-full ${
                metric.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">{metric.name}</h3>
            <p className={`text-3xl font-bold text-${metric.color}-600`}>{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Quick Access to Modules */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {moduleCards.map((module, index) => (
            <Link key={index} href={module.href}>
              <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform`}>
                  {module.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{module.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                <div className="text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full inline-block">
                  {module.stats}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activities & Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'sale' ? 'bg-green-500' :
                  activity.type === 'hr' ? 'bg-blue-500' :
                  activity.type === 'inventory' ? 'bg-orange-500' :
                  activity.type === 'project' ? 'bg-purple-500' :
                  'bg-gray-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All Activities →
          </button>
        </div>

        {/* System Health */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">System Health</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Database Performance</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '94%'}}></div>
                </div>
                <span className="text-sm font-semibold">94%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Server Uptime</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '99%'}}></div>
                </div>
                <span className="text-sm font-semibold">99.9%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">API Response Time</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '76%'}}></div>
                </div>
                <span className="text-sm font-semibold">76ms</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Storage Usage</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '68%'}}></div>
                </div>
                <span className="text-sm font-semibold">68%</span>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-700 font-medium">✅ All systems operational</p>
          </div>
        </div>
      </div>
    </div>
  )
}
