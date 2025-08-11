'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function KnowledgeManagementPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const knowledgeMetrics = [
    { name: 'Knowledge Articles', value: '3,567', change: '+156', trend: 'up', icon: '📖' },
    { name: 'Search Queries', value: '14.2K', change: '+23.4%', trend: 'up', icon: '🔍' },
    { name: 'Expert Contributors', value: '245', change: '+12', trend: 'up', icon: '👨‍🏫' },
    { name: 'Avg. Resolution Time', value: '4.2 min', change: '-15%', trend: 'down', icon: '⏱️' },
    { name: 'Knowledge Rating', value: '4.7/5', change: '+0.3', trend: 'up', icon: '⭐' },
    { name: 'Content Views', value: '45.8K', change: '+18.7%', trend: 'up', icon: '👁️' }
  ]

  const knowledgeModules = [
    { name: 'Knowledge Base', description: 'Centralized repository of organizational knowledge', href: '/dashboard/knowledge/knowledge-base', icon: '📚', count: '3,567 Articles', category: 'base' },
    { name: 'Document Management', description: 'Store and organize documents efficiently', href: '/dashboard/knowledge/documents', icon: '📄', count: '12,450 Docs', category: 'documents' },
    { name: 'Expert Directory', description: 'Find subject matter experts in organization', href: '/dashboard/knowledge/experts', icon: '👨‍🏫', count: '245 Experts', category: 'experts' },
    { name: 'Content Creation', description: 'Create and edit knowledge articles', href: '/dashboard/knowledge/content-creation', icon: '✍️', count: 'Rich Editor', category: 'creation' },
    { name: 'Search & Discovery', description: 'AI-powered content search and recommendations', href: '/dashboard/knowledge/search', icon: '🔍', count: 'AI-Powered', category: 'search' },
    { name: 'Version Control', description: 'Track changes and maintain document versions', href: '/dashboard/knowledge/version-control', icon: '🔄', count: 'Git-like', category: 'versioning' },
    { name: 'Collaboration Tools', description: 'Real-time editing and commenting features', href: '/dashboard/knowledge/collaboration', icon: '👥', count: 'Live Collab', category: 'collaboration' },
    { name: 'Knowledge Analytics', description: 'Track usage and identify knowledge gaps', href: '/dashboard/knowledge/analytics', icon: '📊', count: '25 Reports', category: 'analytics' },
    { name: 'Content Approval', description: 'Review and approval workflows', href: '/dashboard/knowledge/approval', icon: '✅', count: '89 Pending', category: 'approval' },
    { name: 'Training Materials', description: 'Educational content and learning paths', href: '/dashboard/knowledge/training', icon: '🎓', count: '156 Courses', category: 'training' },
    { name: 'FAQ Management', description: 'Frequently asked questions database', href: '/dashboard/knowledge/faq', icon: '❓', count: '567 FAQs', category: 'faq' },
    { name: 'Knowledge Mining', description: 'Extract insights from unstructured data', href: '/dashboard/knowledge/mining', icon: '⛏️', count: 'AI Mining', category: 'mining' },
    { name: 'Content Templates', description: 'Standardized templates for consistency', href: '/dashboard/knowledge/templates', icon: '📝', count: '45 Templates', category: 'templates' },
    { name: 'Access Control', description: 'Manage permissions and security levels', href: '/dashboard/knowledge/access-control', icon: '🔒', count: 'Role-Based', category: 'security' },
    { name: 'Mobile Knowledge App', description: 'Access knowledge on mobile devices', href: '/dashboard/knowledge/mobile', icon: '📱', count: 'iOS/Android', category: 'mobile' },
    { name: 'Integration Hub', description: 'Connect with external knowledge sources', href: '/dashboard/knowledge/integrations', icon: '🔗', count: '15 APIs', category: 'integration' },
    { name: 'Content Taxonomy', description: 'Organize content with tags and categories', href: '/dashboard/knowledge/taxonomy', icon: '🏷️', count: '234 Tags', category: 'taxonomy' },
    { name: 'Knowledge Metrics', description: 'Measure knowledge management effectiveness', href: '/dashboard/knowledge/metrics', icon: '📈', count: 'KPIs', category: 'metrics' },
    { name: 'Archive Management', description: 'Manage outdated and legacy content', href: '/dashboard/knowledge/archive', icon: '📦', count: '1,234 Archived', category: 'archive' },
    { name: 'Knowledge Sharing', description: 'Social features for knowledge sharing', href: '/dashboard/knowledge/sharing', icon: '🤝', count: 'Social Features', category: 'sharing' }
  ]

  const moduleCategories = [
    { id: 'base', name: 'Knowledge Repository', color: 'blue' },
    { id: 'documents', name: 'Document Management', color: 'green' },
    { id: 'experts', name: 'Expert Networks', color: 'purple' },
    { id: 'creation', name: 'Content Creation', color: 'orange' },
    { id: 'search', name: 'Search & Discovery', color: 'indigo' },
    { id: 'versioning', name: 'Version Control', color: 'pink' },
    { id: 'collaboration', name: 'Collaboration', color: 'red' },
    { id: 'analytics', name: 'Analytics & Insights', color: 'yellow' },
    { id: 'approval', name: 'Approval Workflows', color: 'cyan' },
    { id: 'training', name: 'Training & Learning', color: 'teal' },
    { id: 'faq', name: 'FAQ Management', color: 'emerald' },
    { id: 'mining', name: 'Knowledge Mining', color: 'slate' },
    { id: 'templates', name: 'Content Templates', color: 'violet' },
    { id: 'security', name: 'Security & Access', color: 'rose' },
    { id: 'mobile', name: 'Mobile Access', color: 'amber' },
    { id: 'integration', name: 'System Integration', color: 'lime' },
    { id: 'taxonomy', name: 'Content Organization', color: 'sky' },
    { id: 'metrics', name: 'Performance Metrics', color: 'stone' },
    { id: 'archive', name: 'Archive Management', color: 'zinc' },
    { id: 'sharing', name: 'Knowledge Sharing', color: 'neutral' }
  ]

  const recentActivity = [
    { type: 'create', user: 'Sarah Wilson', action: 'Created new article', item: '"API Integration Guide"', time: '2 hours ago' },
    { type: 'update', user: 'Mike Johnson', action: 'Updated document', item: '"Security Protocols"', time: '4 hours ago' },
    { type: 'approve', user: 'Lisa Chen', action: 'Approved content', item: '"Employee Handbook v2.1"', time: '6 hours ago' },
    { type: 'comment', user: 'John Smith', action: 'Added comment to', item: '"Project Management Best Practices"', time: '1 day ago' }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Knowledge Management</h1>
          <p className="text-gray-600 mt-2">Comprehensive knowledge base for organizational learning</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Create Article
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Search Knowledge
          </button>
        </div>
      </div>

      {/* Knowledge Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {knowledgeMetrics.map((metric, index) => (
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

      {/* Complete Knowledge Management Features by Category */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Knowledge Management Features</h2>
        
        {moduleCategories.map((category) => {
          const categoryModules = knowledgeModules.filter(module => module.category === category.id);
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
              emerald: { header: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-700' },
              slate: { header: 'text-slate-700', badge: 'bg-slate-100 text-slate-700' },
              violet: { header: 'text-violet-700', badge: 'bg-violet-100 text-violet-700' },
              rose: { header: 'text-rose-700', badge: 'bg-rose-100 text-rose-700' },
              amber: { header: 'text-amber-700', badge: 'bg-amber-100 text-amber-700' },
              lime: { header: 'text-lime-700', badge: 'bg-lime-100 text-lime-700' },
              sky: { header: 'text-sky-700', badge: 'bg-sky-100 text-sky-700' },
              stone: { header: 'text-stone-700', badge: 'bg-stone-100 text-stone-700' },
              zinc: { header: 'text-zinc-700', badge: 'bg-zinc-100 text-zinc-700' },
              neutral: { header: 'text-neutral-700', badge: 'bg-neutral-100 text-neutral-700' }
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
              { id: 'overview', name: 'Knowledge Overview' },
              { id: 'activity', name: 'Recent Activity' },
              { id: 'analytics', name: 'Knowledge Analytics' },
              { id: 'gaps', name: 'Knowledge Gaps' }
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Knowledge Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Content Utilization</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '76%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">76%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Search Success Rate</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '84%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">84%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Expert Participation</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '68%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">68%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">📖 Browse Knowledge Base</span>
                    <p className="text-sm text-gray-600">Explore organizational knowledge</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">✍️ Create New Article</span>
                    <p className="text-sm text-gray-600">Add to knowledge repository</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">🔍 Search Knowledge</span>
                    <p className="text-sm text-gray-600">Find relevant information</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Recent Knowledge Activity</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View All Activity →</button>
              </div>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${
                      activity.type === 'create' ? 'bg-green-500' :
                      activity.type === 'update' ? 'bg-blue-500' :
                      activity.type === 'approve' ? 'bg-purple-500' :
                      'bg-orange-500'
                    }`}>
                      {activity.type === 'create' ? '✍' :
                       activity.type === 'update' ? '📝' :
                       activity.type === 'approve' ? '✅' :
                       '💬'}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action} {activity.item}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Knowledge Analytics Dashboard</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Export Analytics →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">📈</div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Usage</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Content Usage</h4>
                  <p className="text-sm text-gray-600">Track article views and searches</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">👥</div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Contributors</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Expert Activity</h4>
                  <p className="text-sm text-gray-600">Monitor expert contributions</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">⭐</div>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Quality</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Content Quality</h4>
                  <p className="text-sm text-gray-600">Rating and feedback analysis</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">🎯</div>
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Gaps</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Knowledge Gaps</h4>
                  <p className="text-sm text-gray-600">Identify missing content areas</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gaps' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Knowledge Gaps Analysis</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Generate Gap Report →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl text-red-600">⚠️</div>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">High Priority</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">API Documentation</h4>
                  <p className="text-sm text-gray-600">Missing technical documentation for new APIs</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl text-yellow-600">⚡</div>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Medium Priority</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Training Materials</h4>
                  <p className="text-sm text-gray-600">Need updated onboarding content</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl text-blue-600">ℹ️</div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Low Priority</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Best Practices</h4>
                  <p className="text-sm text-gray-600">Industry best practices documentation</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
