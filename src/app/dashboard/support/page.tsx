'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const supportMetrics = [
    { name: 'Open Tickets', value: '247', change: '-12.5%', trend: 'down', icon: '●' },
    { name: 'Resolved Today', value: '89', change: '+23.4%', trend: 'up', icon: '✓' },
    { name: 'Avg Response Time', value: '2.3h', change: '-18.2%', trend: 'down', icon: '⏱' },
    { name: 'Customer Satisfaction', value: '4.8/5', change: '+5.2%', trend: 'up', icon: '★' },
    { name: 'Active Agents', value: '34', change: '+6', trend: 'up', icon: '◎' },
    { name: 'Knowledge Articles', value: '456', change: '+24', trend: 'up', icon: '▣' }
  ]

  const supportModules = [
    { name: 'Ticket Management', description: 'Create, assign, and track support tickets', href: '/dashboard/support/tickets', icon: '●', count: '247', category: 'core' },
    { name: 'Live Chat', description: 'Real-time customer chat support', href: '/dashboard/support/chat', icon: '💬', count: 'Active', category: 'core' },
    { name: 'Help Desk Portal', description: 'Customer self-service portal', href: '/dashboard/support/portal', icon: '◎', count: '1,234', category: 'core' },
    { name: 'Knowledge Base', description: 'Searchable help articles and FAQs', href: '/dashboard/support/knowledge', icon: '▣', count: '456', category: 'core' },
    { name: 'Agent Dashboard', description: 'Support agent work interface', href: '/dashboard/support/agents', icon: '◈', count: '34', category: 'core' },
    { name: 'SLA Management', description: 'Service level agreement tracking', href: '/dashboard/support/sla', icon: '⏱', count: '12', category: 'management' },
    { name: 'Escalation Rules', description: 'Automated ticket escalation workflows', href: '/dashboard/support/escalation', icon: '↗', count: '8', category: 'automation' },
    { name: 'Customer Feedback', description: 'Satisfaction surveys and ratings', href: '/dashboard/support/feedback', icon: '★', count: '4.8/5', category: 'analytics' },
    { name: 'Multi-Channel Support', description: 'Email, phone, chat, social media', href: '/dashboard/support/channels', icon: '▤', count: '6', category: 'communication' },
    { name: 'Team Collaboration', description: 'Internal team communication tools', href: '/dashboard/support/collaboration', icon: '◎', count: 'Active', category: 'collaboration' },
    { name: 'Asset Tracking', description: 'Track customer equipment and warranties', href: '/dashboard/support/assets', icon: '▦', count: '2,345', category: 'tracking' },
    { name: 'Case History', description: 'Complete customer interaction history', href: '/dashboard/support/history', icon: '◑', count: '12,567', category: 'tracking' },
    { name: 'Automated Responses', description: 'AI-powered auto-replies and routing', href: '/dashboard/support/automation', icon: '⚡', count: '78%', category: 'automation' },
    { name: 'Performance Analytics', description: 'Agent and team performance metrics', href: '/dashboard/support/analytics', icon: '↗', count: 'Live', category: 'analytics' },
    { name: 'Video Support', description: 'Screen sharing and video calls', href: '/dashboard/support/video', icon: '◐', count: 'Available', category: 'communication' },
    { name: 'Mobile Support App', description: 'Support agents mobile application', href: '/dashboard/support/mobile', icon: '◉', count: 'iOS/Android', category: 'mobile' },
    { name: 'Third-party Integrations', description: 'Connect with external tools', href: '/dashboard/support/integrations', icon: '◎', count: '15', category: 'integration' },
    { name: 'Reporting Dashboard', description: 'Comprehensive support reports', href: '/dashboard/support/reports', icon: '▤', count: '25', category: 'reporting' },
    { name: 'Quality Assurance', description: 'Monitor and review support quality', href: '/dashboard/support/qa', icon: '✓', count: '92%', category: 'quality' },
    { name: 'Workflow Automation', description: 'Custom support process workflows', href: '/dashboard/support/workflows', icon: '⚙', count: '18', category: 'automation' }
  ]

  const moduleCategories = [
    { id: 'core', name: 'Core Support', color: 'blue' },
    { id: 'communication', name: 'Communication', color: 'green' },
    { id: 'automation', name: 'Automation', color: 'purple' },
    { id: 'analytics', name: 'Analytics & Reporting', color: 'orange' },
    { id: 'management', name: 'Management', color: 'indigo' },
    { id: 'tracking', name: 'Tracking & History', color: 'pink' },
    { id: 'collaboration', name: 'Collaboration', color: 'red' },
    { id: 'quality', name: 'Quality Assurance', color: 'yellow' },
    { id: 'mobile', name: 'Mobile Support', color: 'cyan' },
    { id: 'integration', name: 'Integrations', color: 'teal' },
    { id: 'reporting', name: 'Reporting', color: 'emerald' }
  ]

  const recentTickets = [
    { id: 'T-001', subject: 'Login Issues', customer: 'John Smith', priority: 'high', status: 'open', agent: 'Sarah Wilson', created: '2 hours ago' },
    { id: 'T-002', subject: 'Payment Processing Error', customer: 'TechCorp Inc', priority: 'critical', status: 'in_progress', agent: 'Mike Johnson', created: '4 hours ago' },
    { id: 'T-003', subject: 'Feature Request', customer: 'Global Dynamics', priority: 'medium', status: 'pending', agent: 'Lisa Chen', created: '1 day ago' },
    { id: 'T-004', subject: 'Data Export Issue', customer: 'Innovation Labs', priority: 'low', status: 'resolved', agent: 'David Kumar', created: '2 days ago' }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customer Support & Service Management</h1>
          <p className="text-gray-600 mt-2">Complete customer service solution for support excellence</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            New Ticket
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Live Chat
          </button>
        </div>
      </div>

      {/* Support Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {supportMetrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl">{metric.icon}</div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                metric.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">{metric.name}</h3>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Complete Support Features by Category */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Support Features</h2>
        
        {moduleCategories.map((category) => {
          const categoryModules = supportModules.filter(module => module.category === category.id);
          if (categoryModules.length === 0) return null;
          
          // Define static color classes
          const getColorClasses = (color: string) => {
            const colorMap: { [key: string]: { header: string; badge: string } } = {
              blue: { header: 'text-blue-700', badge: 'bg-blue-100 text-blue-700' },
              green: { header: 'text-green-700', badge: 'bg-green-100 text-green-700' },
              purple: { header: 'text-purple-700', badge: 'bg-purple-100 text-purple-700' },
              orange: { header: 'text-orange-700', badge: 'bg-orange-100 text-orange-700' },
              indigo: { header: 'text-indigo-700', badge: 'bg-indigo-100 text-indigo-700' },
              pink: { header: 'text-pink-700', badge: 'bg-pink-100 text-pink-700' },
              red: { header: 'text-red-700', badge: 'bg-red-100 text-red-700' },
              yellow: { header: 'text-yellow-700', badge: 'bg-yellow-100 text-yellow-700' },
              cyan: { header: 'text-cyan-700', badge: 'bg-cyan-100 text-cyan-700' },
              teal: { header: 'text-teal-700', badge: 'bg-teal-100 text-teal-700' },
              emerald: { header: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-700' }
            };
            return colorMap[color] || { header: 'text-gray-700', badge: 'bg-gray-100 text-gray-700' };
          };
          
          const colors = getColorClasses(category.color);
          
          return (
            <div key={category.id} className="mb-8">
              <h3 className={`text-lg font-semibold mb-4 ${colors.header}`}>
                {category.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {categoryModules.map((module, index) => (
                  <Link key={index} href={module.href}>
                    <div className="group bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-2xl">{module.icon}</div>
                        <span className={`text-xs ${colors.badge} px-2 py-1 rounded-full`}>
                          {module.count}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{module.name}</h4>
                      <p className="text-sm text-gray-600">{module.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', name: 'Support Overview' },
              { id: 'tickets', name: 'Recent Tickets' },
              { id: 'performance', name: 'Team Performance' },
              { id: 'analytics', name: 'Support Analytics' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Support Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">First Response Time</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">2.3h</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Resolution Rate</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">92%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Customer Satisfaction</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '96%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">4.8/5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">● Create New Ticket</span>
                    <p className="text-sm text-gray-600">Log customer support request</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">💬 Start Live Chat</span>
                    <p className="text-sm text-gray-600">Real-time customer assistance</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">▣ Update Knowledge Base</span>
                    <p className="text-sm text-gray-600">Add new help articles</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tickets' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Recent Support Tickets</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View All Tickets →</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Ticket ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Subject</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Customer</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Priority</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Agent</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Created</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentTickets.map((ticket) => (
                      <tr key={ticket.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-blue-600">{ticket.id}</td>
                        <td className="py-3 px-4 font-medium">{ticket.subject}</td>
                        <td className="py-3 px-4 text-gray-600">{ticket.customer}</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            ticket.priority === 'critical' ? 'bg-red-100 text-red-700' :
                            ticket.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                            ticket.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            ticket.status === 'resolved' ? 'bg-green-100 text-green-700' :
                            ticket.status === 'in_progress' ? 'bg-blue-100 text-blue-700' :
                            ticket.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {ticket.status.replace('_', ' ').charAt(0).toUpperCase() + ticket.status.replace('_', ' ').slice(1)}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{ticket.agent}</td>
                        <td className="py-3 px-4 text-gray-600">{ticket.created}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Team Performance Metrics</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View Detailed Reports →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">●</div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Today</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tickets Resolved</h4>
                  <p className="text-sm text-gray-600">89 tickets closed today</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">⏱</div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Avg</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                  <p className="text-sm text-gray-600">2.3 hours average</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">★</div>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Rating</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Satisfaction Score</h4>
                  <p className="text-sm text-gray-600">4.8/5 customer rating</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Support Analytics Dashboard</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Export Analytics →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">↗</div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Weekly</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ticket Trends</h4>
                  <p className="text-sm text-gray-600">Volume and patterns</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">◎</div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Live</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Agent Workload</h4>
                  <p className="text-sm text-gray-600">Current assignments</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">▤</div>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Monthly</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Category Analysis</h4>
                  <p className="text-sm text-gray-600">Issue categorization</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">★</div>
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Survey</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Feedback Trends</h4>
                  <p className="text-sm text-gray-600">Customer satisfaction</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
