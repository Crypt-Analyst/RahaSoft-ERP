'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CRMPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const crmMetrics = [
    { name: 'Total Leads', value: '2,847', change: '+12.5%', trend: 'up', icon: '●' },
    { name: 'Active Contacts', value: '1,247', change: '+8.3%', trend: 'up', icon: '◉' },
    { name: 'Total Accounts', value: '456', change: '+18.7%', trend: 'up', icon: '▦' },
    { name: 'Active Deals', value: '89', change: '+15.2%', trend: 'up', icon: '◆' },
    { name: 'Pipeline Value', value: '$2.8M', change: '+22.1%', trend: 'up', icon: '$' },
    { name: 'Conversion Rate', value: '24.5%', change: '+3.2%', trend: 'up', icon: '↗' }
  ]

  const leads = [
    { id: 1, name: "TechStart Solutions", contact: "Sarah Wilson", score: 92, source: "Website", status: "hot" },
    { id: 2, name: "Digital Innovations", contact: "Mark Rodriguez", score: 78, source: "LinkedIn", status: "warm" },
    { id: 3, name: "Future Systems", contact: "Lisa Chen", score: 65, source: "Referral", status: "cold" },
    { id: 4, name: "Global Ventures", contact: "David Kumar", score: 88, source: "Trade Show", status: "hot" }
  ]

  const deals = [
    { id: 1, name: "Enterprise Software License", account: "TechCorp Inc", value: 125000, stage: "Proposal", probability: 75, closeDate: "2024-02-15" },
    { id: 2, name: "Cloud Migration Project", account: "StartupXYZ", value: 85000, stage: "Negotiation", probability: 60, closeDate: "2024-02-28" },
    { id: 3, name: "CRM Implementation", account: "Global Dynamics", value: 195000, stage: "Demo", probability: 40, closeDate: "2024-03-15" },
    { id: 4, name: "Data Analytics Platform", account: "Innovation Labs", value: 240000, stage: "Qualification", probability: 25, closeDate: "2024-04-01" }
  ]

  const activities = [
    { id: 1, type: "call", title: "Follow-up call with TechCorp", description: "Discuss contract terms and implementation timeline", time: "10:00 AM", contact: "John Smith", priority: "high" },
    { id: 2, type: "meeting", title: "Product demo for StartupXYZ", description: "Showcase CRM features and ROI benefits", time: "2:00 PM", contact: "Jane Doe", priority: "high" },
    { id: 3, type: "email", title: "Send proposal to Global Dynamics", description: "Custom pricing and project timeline", time: "4:00 PM", contact: "Mike Johnson", priority: "medium" },
    { id: 4, type: "task", title: "Prepare contract documents", description: "Legal review and approval process", time: "End of day", contact: "Legal Team", priority: "low" }
  ]

  const crmModules = [
    { name: 'Leads', description: 'Prospects not yet qualified', href: '/dashboard/crm/leads', icon: '●', count: '2,847', category: 'core' },
    { name: 'Contacts', description: 'People with established relationships', href: '/dashboard/crm/contacts', icon: '◉', count: '1,247', category: 'core' },
    { name: 'Accounts', description: 'Organizations linked to contacts', href: '/dashboard/crm/accounts', icon: '▦', count: '456', category: 'core' },
    { name: 'Deals', description: 'Potential sales opportunities', href: '/dashboard/crm/deals', icon: '◆', count: '89', category: 'core' },
    { name: 'Pipelines', description: 'Visual sales process flow', href: '/dashboard/crm/pipelines', icon: '◈', count: '5', category: 'core' },
    { name: 'Activities', description: 'Calls, meetings, follow-ups', href: '/dashboard/crm/activities', icon: '◑', count: '234', category: 'core' },
    { name: 'Reports', description: 'Custom and real-time analytics', href: '/dashboard/crm/reports', icon: '↗', count: '12', category: 'analytics' },
    { name: 'Forecasting', description: 'Predict future sales', href: '/dashboard/crm/forecasting', icon: '◔', count: 'Q1 2024', category: 'analytics' },
    { name: 'Marketing', description: 'Campaigns and automation', href: '/dashboard/crm/marketing', icon: '✉', count: '18', category: 'marketing' },
    { name: 'Email & SMS', description: 'Two-way messaging integration', href: '/dashboard/crm/messaging', icon: '◈', count: 'Active', category: 'communication' },
    { name: 'Support', description: 'Customer service tickets', href: '/dashboard/crm/support', icon: '◎', count: '67', category: 'service' },
    { name: 'Knowledge Base', description: 'Self-service resources', href: '/dashboard/crm/knowledge', icon: '▣', count: '145', category: 'service' },
    { name: 'Documents', description: 'Contracts and proposals', href: '/dashboard/crm/documents', icon: '▤', count: '892', category: 'documents' },
    { name: 'Territory Management', description: 'Geographic assignments', href: '/dashboard/crm/territories', icon: '⬟', count: '8', category: 'management' },
    { name: 'Calendar Integration', description: 'Sync with external calendars', href: '/dashboard/crm/calendar', icon: '◑', count: 'Synced', category: 'integration' },
    { name: 'Mobile CRM', description: 'Mobile app access', href: '/dashboard/crm/mobile', icon: '◐', count: 'Active', category: 'mobile' },
    { name: 'Integration Hub', description: 'API connections', href: '/dashboard/crm/integrations', icon: '◎', count: '12', category: 'integration' },
    { name: 'Workflow Automation', description: 'Automated processes', href: '/dashboard/crm/workflows', icon: '⚡', count: '24', category: 'automation' },
    { name: 'AI Analytics', description: 'Predictive insights', href: '/dashboard/crm/ai', icon: '◉', count: 'Active', category: 'ai' },
    { name: 'Social Media', description: 'Social platform integration', href: '/dashboard/crm/social', icon: '◐', count: '5', category: 'social' },
    { name: 'Call Center', description: 'Telephony integration', href: '/dashboard/crm/telephony', icon: '☎', count: 'Active', category: 'communication' },
    { name: 'Quoting', description: 'Generate quotes and invoices', href: '/dashboard/crm/quoting', icon: '$', count: '156', category: 'sales' },
    { name: 'Product Catalog', description: 'Product and price book', href: '/dashboard/crm/products', icon: '▦', count: '1,247', category: 'sales' },
    { name: 'Audit Logs', description: 'Track changes and compliance', href: '/dashboard/crm/audit', icon: '▤', count: 'Enabled', category: 'compliance' },
    { name: 'Custom Fields', description: 'Tailor CRM to business needs', href: '/dashboard/crm/customization', icon: '⚙', count: '67', category: 'customization' },
    { name: 'Partner Management', description: 'Non-customer relationships', href: '/dashboard/crm/partners', icon: '◈', count: '89', category: 'management' },
    { name: 'Training Tools', description: 'User onboarding and help', href: '/dashboard/crm/training', icon: '◎', count: 'Available', category: 'training' },
    { name: 'Multi-Currency', description: 'Global currency support', href: '/dashboard/crm/currency', icon: '◈', count: '15', category: 'globalization' },
    { name: 'Multi-Language', description: 'International language support', href: '/dashboard/crm/languages', icon: '◉', count: '12', category: 'globalization' },
    { name: 'Data Migration', description: 'Import/export tools', href: '/dashboard/crm/migration', icon: '↗', count: 'Ready', category: 'data' }
  ]

  const moduleCategories = [
    { id: 'core', name: 'Core CRM', color: 'blue' },
    { id: 'sales', name: 'Sales', color: 'green' },
    { id: 'marketing', name: 'Marketing', color: 'purple' },
    { id: 'service', name: 'Customer Service', color: 'orange' },
    { id: 'analytics', name: 'Analytics & BI', color: 'indigo' },
    { id: 'communication', name: 'Communication', color: 'pink' },
    { id: 'automation', name: 'Automation', color: 'red' },
    { id: 'integration', name: 'Integrations', color: 'yellow' },
    { id: 'ai', name: 'AI & Machine Learning', color: 'cyan' },
    { id: 'mobile', name: 'Mobile', color: 'teal' },
    { id: 'social', name: 'Social Media', color: 'emerald' },
    { id: 'documents', name: 'Document Management', color: 'slate' },
    { id: 'management', name: 'Management', color: 'violet' },
    { id: 'compliance', name: 'Compliance & Security', color: 'rose' },
    { id: 'customization', name: 'Customization', color: 'amber' },
    { id: 'training', name: 'Training & Support', color: 'lime' },
    { id: 'globalization', name: 'Globalization', color: 'sky' },
    { id: 'data', name: 'Data Management', color: 'stone' }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customer Relationship Management</h1>
          <p className="text-gray-600 mt-2">Complete CRM solution with 30+ enterprise features for sales, marketing, and customer success</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Add Lead
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Create Deal
          </button>
        </div>
      </div>

      {/* CRM Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crmMetrics.map((metric, index) => (
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

      {/* Complete CRM Features by Category */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete CRM Feature Suite (Enterprise Modules)</h2>
        
        {moduleCategories.map((category) => {
          const categoryModules = crmModules.filter(module => module.category === category.id);
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
              stone: { header: 'text-stone-700', badge: 'bg-stone-100 text-stone-700' }
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
              { id: 'overview', name: 'Overview' },
              { id: 'leads', name: 'Recent Leads' },
              { id: 'deals', name: 'Active Deals' },
              { id: 'activities', name: 'Today\'s Activities' }
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Pipeline Health</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Lead Qualification Rate</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '68%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">68%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Deal Conversion Rate</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '24%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">24%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Customer Satisfaction</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">4.6/5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">● Import Leads</span>
                    <p className="text-sm text-gray-600">Upload leads from CSV or integrations</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">✉ Send Campaign</span>
                    <p className="text-sm text-gray-600">Create and send email campaigns</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">↗ Generate Report</span>
                    <p className="text-sm text-gray-600">Custom sales and marketing reports</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'leads' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Recent Leads</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View All Leads →</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Company</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Contact</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Score</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Source</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{lead.name}</td>
                        <td className="py-3 px-4 text-gray-600">{lead.contact}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="font-semibold text-blue-600">{lead.score}</span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{lead.source}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            lead.status === 'hot' ? 'bg-red-100 text-red-700' :
                            lead.status === 'warm' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'deals' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Active Deals</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View Pipeline →</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Deal Name</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Account</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Value</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Stage</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Probability</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Close Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {deals.map((deal) => (
                      <tr key={deal.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{deal.name}</td>
                        <td className="py-3 px-4 text-gray-600">{deal.account}</td>
                        <td className="py-3 px-4 text-right font-semibold">${deal.value.toLocaleString()}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                            {deal.stage}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">{deal.probability}%</td>
                        <td className="py-3 px-4 text-gray-600">{deal.closeDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'activities' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Today's Activities</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View Calendar →</button>
              </div>
              <div className="space-y-3">
                {activities.map((activity) => (
                  <div key={activity.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          activity.type === 'call' ? 'bg-green-100 text-green-600' :
                          activity.type === 'meeting' ? 'bg-blue-100 text-blue-600' :
                          activity.type === 'email' ? 'bg-purple-100 text-purple-600' :
                          'bg-orange-100 text-orange-600'
                        }`}>
                          {activity.type === 'call' ? '☎' :
                           activity.type === 'meeting' ? '◉' :
                           activity.type === 'email' ? '✉' : '✓'}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                            <span>⏰ {activity.time}</span>
                            <span>◉ {activity.contact}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        activity.priority === 'high' ? 'bg-red-100 text-red-700' :
                        activity.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {activity.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
