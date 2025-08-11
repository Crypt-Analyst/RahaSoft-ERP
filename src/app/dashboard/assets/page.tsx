'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AssetManagementPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const assetMetrics = [
    { name: 'Total Assets', value: '12,847', change: '+234', trend: 'up', icon: '▦' },
    { name: 'Asset Value', value: '$8.5M', change: '+12.3%', trend: 'up', icon: '$' },
    { name: 'Due for Maintenance', value: '89', change: '+15', trend: 'up', icon: '⚙' },
    { name: 'Depreciation (YTD)', value: '$1.2M', change: '+8.7%', trend: 'up', icon: '↓' },
    { name: 'Compliance Rate', value: '94%', change: '+2.1%', trend: 'up', icon: '✓' },
    { name: 'Utilization Rate', value: '87%', change: '+5.2%', trend: 'up', icon: '◉' }
  ]

  const assetModules = [
    { name: 'Asset Register', description: 'Complete inventory of all assets', href: '/dashboard/assets/register', icon: '▦', count: '12,847', category: 'core' },
    { name: 'Asset Tracking', description: 'Real-time location and status tracking', href: '/dashboard/assets/tracking', icon: '◉', count: 'Live', category: 'core' },
    { name: 'Maintenance Management', description: 'Preventive and corrective maintenance', href: '/dashboard/assets/maintenance', icon: '⚙', count: '89 Due', category: 'maintenance' },
    { name: 'Depreciation Calculation', description: 'Automated depreciation schedules', href: '/dashboard/assets/depreciation', icon: '$', count: '$1.2M YTD', category: 'financial' },
    { name: 'Asset Lifecycle', description: 'From acquisition to disposal', href: '/dashboard/assets/lifecycle', icon: '◑', count: '5 Stages', category: 'lifecycle' },
    { name: 'Barcode/RFID Tagging', description: 'Physical asset identification', href: '/dashboard/assets/tagging', icon: '▣', count: '98% Tagged', category: 'tracking' },
    { name: 'Check-in/Check-out', description: 'Asset assignment and returns', href: '/dashboard/assets/checkin', icon: '↔', count: '245 Active', category: 'allocation' },
    { name: 'Asset Valuation', description: 'Current market value assessment', href: '/dashboard/assets/valuation', icon: '◈', count: '$8.5M', category: 'financial' },
    { name: 'Compliance Tracking', description: 'Regulatory and policy compliance', href: '/dashboard/assets/compliance', icon: '✓', count: '94%', category: 'compliance' },
    { name: 'Warranty Management', description: 'Track warranties and service contracts', href: '/dashboard/assets/warranty', icon: '◎', count: '456', category: 'warranty' },
    { name: 'Asset Auditing', description: 'Physical verification and audits', href: '/dashboard/assets/auditing', icon: '◔', count: 'Q4 2024', category: 'audit' },
    { name: 'Insurance Management', description: 'Asset insurance tracking', href: '/dashboard/assets/insurance', icon: '▤', count: '2,345', category: 'insurance' },
    { name: 'Lease Management', description: 'Leased asset tracking and renewals', href: '/dashboard/assets/leasing', icon: '◈', count: '234', category: 'leasing' },
    { name: 'Asset Disposal', description: 'End-of-life asset management', href: '/dashboard/assets/disposal', icon: '●', count: '45 Pending', category: 'disposal' },
    { name: 'Mobile Asset Scanning', description: 'Mobile app for asset management', href: '/dashboard/assets/mobile', icon: '◐', count: 'iOS/Android', category: 'mobile' },
    { name: 'Asset Reports', description: 'Comprehensive asset reporting', href: '/dashboard/assets/reports', icon: '↗', count: '25 Reports', category: 'reporting' },
    { name: 'Integration Hub', description: 'Connect with ERP and other systems', href: '/dashboard/assets/integrations', icon: '◎', count: '12 Systems', category: 'integration' },
    { name: 'Budget Planning', description: 'Asset-related budget management', href: '/dashboard/assets/budgeting', icon: '$', count: '$2.5M', category: 'planning' },
    { name: 'Performance Metrics', description: 'Asset utilization and ROI', href: '/dashboard/assets/performance', icon: '◉', count: '87% Util', category: 'analytics' },
    { name: 'Vendor Management', description: 'Asset vendor and supplier tracking', href: '/dashboard/assets/vendors', icon: '◈', count: '156', category: 'vendor' }
  ]

  const moduleCategories = [
    { id: 'core', name: 'Core Asset Management', color: 'blue' },
    { id: 'tracking', name: 'Tracking & Identification', color: 'green' },
    { id: 'maintenance', name: 'Maintenance Management', color: 'purple' },
    { id: 'financial', name: 'Financial Management', color: 'orange' },
    { id: 'lifecycle', name: 'Lifecycle Management', color: 'indigo' },
    { id: 'allocation', name: 'Allocation & Assignment', color: 'pink' },
    { id: 'compliance', name: 'Compliance & Audit', color: 'red' },
    { id: 'warranty', name: 'Warranty & Service', color: 'yellow' },
    { id: 'insurance', name: 'Insurance Management', color: 'cyan' },
    { id: 'leasing', name: 'Lease Management', color: 'teal' },
    { id: 'disposal', name: 'Disposal Management', color: 'emerald' },
    { id: 'mobile', name: 'Mobile Solutions', color: 'slate' },
    { id: 'reporting', name: 'Reports & Analytics', color: 'violet' },
    { id: 'integration', name: 'System Integration', color: 'rose' },
    { id: 'planning', name: 'Planning & Budgeting', color: 'amber' },
    { id: 'analytics', name: 'Performance Analytics', color: 'lime' },
    { id: 'vendor', name: 'Vendor Management', color: 'sky' },
    { id: 'audit', name: 'Audit Management', color: 'stone' }
  ]

  const maintenanceItems = [
    { id: 1, asset: 'Server Rack A-01', type: 'Preventive', dueDate: '2024-02-20', priority: 'high', technician: 'John Smith' },
    { id: 2, asset: 'HVAC Unit B-12', type: 'Inspection', dueDate: '2024-02-22', priority: 'medium', technician: 'Mike Johnson' },
    { id: 3, asset: 'Generator C-05', type: 'Corrective', dueDate: '2024-02-18', priority: 'critical', technician: 'Sarah Wilson' },
    { id: 4, asset: 'Vehicle Fleet-15', type: 'Service', dueDate: '2024-02-25', priority: 'low', technician: 'David Kumar' }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Asset Management</h1>
          <p className="text-gray-600 mt-2">Comprehensive asset lifecycle management</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Add Asset
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Schedule Maintenance
          </button>
        </div>
      </div>

      {/* Asset Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assetMetrics.map((metric, index) => (
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

      {/* Complete Asset Management Features by Category */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Asset Management Features</h2>
        
        {moduleCategories.map((category) => {
          const categoryModules = assetModules.filter(module => module.category === category.id);
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
              { id: 'overview', name: 'Asset Overview' },
              { id: 'maintenance', name: 'Maintenance Schedule' },
              { id: 'performance', name: 'Asset Performance' },
              { id: 'analytics', name: 'Asset Analytics' }
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Asset Health Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Asset Utilization</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '87%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">87%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Maintenance Compliance</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '94%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">94%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Asset Condition</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '91%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">Excellent</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">▦ Register New Asset</span>
                    <p className="text-sm text-gray-600">Add new asset to inventory</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">⚙ Schedule Maintenance</span>
                    <p className="text-sm text-gray-600">Plan preventive maintenance</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">↗ Generate Report</span>
                    <p className="text-sm text-gray-600">Asset performance reports</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'maintenance' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Maintenance</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View Full Schedule →</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Asset</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Due Date</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Priority</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Technician</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {maintenanceItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{item.asset}</td>
                        <td className="py-3 px-4 text-gray-600">{item.type}</td>
                        <td className="py-3 px-4 text-gray-600">{item.dueDate}</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            item.priority === 'critical' ? 'bg-red-100 text-red-700' :
                            item.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                            item.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{item.technician}</td>
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
                <h3 className="text-lg font-semibold text-gray-900">Asset Performance Metrics</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View Detailed Performance →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">◉</div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Current</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Utilization Rate</h4>
                  <p className="text-sm text-gray-600">87% average utilization</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">$</div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">ROI</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Return on Investment</h4>
                  <p className="text-sm text-gray-600">12.5% annual ROI</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">⚙</div>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Uptime</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Asset Uptime</h4>
                  <p className="text-sm text-gray-600">99.2% availability</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Asset Analytics Dashboard</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Export Analytics →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">↗</div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Trending</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Asset Trends</h4>
                  <p className="text-sm text-gray-600">Value and usage patterns</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">$</div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Cost</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cost Analysis</h4>
                  <p className="text-sm text-gray-600">TCO and operational costs</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">◑</div>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Lifecycle</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Lifecycle Analysis</h4>
                  <p className="text-sm text-gray-600">Age and replacement planning</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">⚙</div>
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Maintenance</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Maintenance Analytics</h4>
                  <p className="text-sm text-gray-600">Cost and schedule analysis</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
