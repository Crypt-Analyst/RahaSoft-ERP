'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function WorkflowAutomationPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const workflowMetrics = [
    { name: 'Active Workflows', value: '342', change: '+28', trend: 'up', icon: '⚙️' },
    { name: 'Automation Rate', value: '78%', change: '+12%', trend: 'up', icon: '🤖' },
    { name: 'Time Saved', value: '1,245 hrs', change: '+234 hrs', trend: 'up', icon: '⏰' },
    { name: 'Process Efficiency', value: '94%', change: '+8%', trend: 'up', icon: '📈' },
    { name: 'Error Reduction', value: '67%', change: '+15%', trend: 'up', icon: '✅' },
    { name: 'Cost Savings', value: '$89K', change: '+$23K', trend: 'up', icon: '💰' }
  ]

  const workflowModules = [
    { name: 'Process Designer', description: 'Visual workflow design and modeling', href: '/dashboard/workflow/process-designer', icon: '🎨', count: '342 Flows', category: 'design' },
    { name: 'Automation Engine', description: 'Execute automated business processes', href: '/dashboard/workflow/automation-engine', icon: '⚙️', count: 'Real-time', category: 'automation' },
    { name: 'Rule Management', description: 'Define and manage business rules', href: '/dashboard/workflow/rules', icon: '📋', count: '1,567 Rules', category: 'rules' },
    { name: 'Task Automation', description: 'Automate repetitive tasks and actions', href: '/dashboard/workflow/task-automation', icon: '🤖', count: '2,847 Tasks', category: 'tasks' },
    { name: 'Approval Workflows', description: 'Multi-step approval and review processes', href: '/dashboard/workflow/approvals', icon: '✅', count: '156 Pending', category: 'approval' },
    { name: 'Integration Connectors', description: 'Connect with external systems and APIs', href: '/dashboard/workflow/connectors', icon: '🔗', count: '45 APIs', category: 'integration' },
    { name: 'Triggers & Events', description: 'Event-driven workflow automation', href: '/dashboard/workflow/triggers', icon: '⚡', count: '1,234 Events', category: 'triggers' },
    { name: 'Data Processing', description: 'Automated data transformation and validation', href: '/dashboard/workflow/data-processing', icon: '📊', count: 'ETL Pipelines', category: 'data' },
    { name: 'Notification System', description: 'Automated alerts and notifications', href: '/dashboard/workflow/notifications', icon: '🔔', count: '5,678 Alerts', category: 'notifications' },
    { name: 'Performance Monitoring', description: 'Monitor workflow performance and metrics', href: '/dashboard/workflow/monitoring', icon: '📈', count: 'Live Metrics', category: 'monitoring' },
    { name: 'Error Handling', description: 'Exception management and recovery', href: '/dashboard/workflow/error-handling', icon: '🚨', count: '23 Errors', category: 'errors' },
    { name: 'Workflow Templates', description: 'Pre-built workflow templates', href: '/dashboard/workflow/templates', icon: '📝', count: '89 Templates', category: 'templates' },
    { name: 'Version Control', description: 'Track workflow changes and versions', href: '/dashboard/workflow/version-control', icon: '🔄', count: 'Git-like', category: 'versioning' },
    { name: 'Testing & Validation', description: 'Test workflows before deployment', href: '/dashboard/workflow/testing', icon: '🧪', count: '234 Tests', category: 'testing' },
    { name: 'Scheduled Tasks', description: 'Time-based and recurring workflows', href: '/dashboard/workflow/scheduler', icon: '📅', count: '456 Schedules', category: 'scheduling' },
    { name: 'Mobile Workflows', description: 'Mobile-optimized workflow execution', href: '/dashboard/workflow/mobile', icon: '📱', count: 'iOS/Android', category: 'mobile' },
    { name: 'Analytics & Reporting', description: 'Workflow performance analytics', href: '/dashboard/workflow/analytics', icon: '📊', count: '25 Reports', category: 'analytics' },
    { name: 'Security & Compliance', description: 'Secure workflow execution and auditing', href: '/dashboard/workflow/security', icon: '🔒', count: 'Audit Trail', category: 'security' },
    { name: 'API Management', description: 'RESTful APIs for workflow operations', href: '/dashboard/workflow/api', icon: '🌐', count: 'REST APIs', category: 'api' },
    { name: 'Human Tasks', description: 'Workflows requiring human intervention', href: '/dashboard/workflow/human-tasks', icon: '👤', count: '678 Tasks', category: 'human' }
  ]

  const moduleCategories = [
    { id: 'design', name: 'Process Design', color: 'blue' },
    { id: 'automation', name: 'Automation Engine', color: 'green' },
    { id: 'rules', name: 'Business Rules', color: 'purple' },
    { id: 'tasks', name: 'Task Automation', color: 'orange' },
    { id: 'approval', name: 'Approval Processes', color: 'indigo' },
    { id: 'integration', name: 'System Integration', color: 'pink' },
    { id: 'triggers', name: 'Event Triggers', color: 'red' },
    { id: 'data', name: 'Data Processing', color: 'yellow' },
    { id: 'notifications', name: 'Notification System', color: 'cyan' },
    { id: 'monitoring', name: 'Performance Monitoring', color: 'teal' },
    { id: 'errors', name: 'Error Management', color: 'emerald' },
    { id: 'templates', name: 'Workflow Templates', color: 'slate' },
    { id: 'versioning', name: 'Version Control', color: 'violet' },
    { id: 'testing', name: 'Testing & QA', color: 'rose' },
    { id: 'scheduling', name: 'Task Scheduling', color: 'amber' },
    { id: 'mobile', name: 'Mobile Workflows', color: 'lime' },
    { id: 'analytics', name: 'Analytics & Reports', color: 'sky' },
    { id: 'security', name: 'Security & Audit', color: 'stone' },
    { id: 'api', name: 'API Management', color: 'zinc' },
    { id: 'human', name: 'Human Interaction', color: 'neutral' }
  ]

  const recentWorkflows = [
    { id: 'WF-001', name: 'Invoice Approval Process', status: 'running', executions: 45, success: 96, lastRun: '2 mins ago' },
    { id: 'WF-002', name: 'Employee Onboarding', status: 'paused', executions: 12, success: 100, lastRun: '1 hour ago' },
    { id: 'WF-003', name: 'Customer Data Sync', status: 'running', executions: 234, success: 98, lastRun: '5 mins ago' },
    { id: 'WF-004', name: 'Report Generation', status: 'completed', executions: 8, success: 100, lastRun: '3 hours ago' }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Workflow Automation</h1>
          <p className="text-gray-600 mt-2">Complete business process automation</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Create Workflow
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Monitor Processes
          </button>
        </div>
      </div>

      {/* Workflow Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workflowMetrics.map((metric, index) => (
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

      {/* Complete Workflow Automation Features by Category */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Workflow Automation Features</h2>
        
        {moduleCategories.map((category) => {
          const categoryModules = workflowModules.filter(module => module.category === category.id);
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
              { id: 'overview', name: 'Workflow Overview' },
              { id: 'active', name: 'Active Workflows' },
              { id: 'performance', name: 'Performance Metrics' },
              { id: 'automation', name: 'Automation Insights' }
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Automation Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Success Rate</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '96%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">96%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Processing Speed</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '89%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">Fast</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Resource Utilization</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '72%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">72%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">🎨 Design Workflow</span>
                    <p className="text-sm text-gray-600">Create new automation process</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">⚙️ Monitor Executions</span>
                    <p className="text-sm text-gray-600">Track workflow performance</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">📊 View Analytics</span>
                    <p className="text-sm text-gray-600">Automation insights and reports</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'active' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Active Workflow Processes</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View All Workflows →</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Workflow ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Name</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Executions</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Success Rate</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Last Run</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentWorkflows.map((workflow) => (
                      <tr key={workflow.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-blue-600">{workflow.id}</td>
                        <td className="py-3 px-4 font-medium">{workflow.name}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            workflow.status === 'running' ? 'bg-green-100 text-green-700' :
                            workflow.status === 'paused' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {workflow.status.charAt(0).toUpperCase() + workflow.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right font-semibold">{workflow.executions}</td>
                        <td className="py-3 px-4 text-right font-semibold">{workflow.success}%</td>
                        <td className="py-3 px-4 text-gray-600">{workflow.lastRun}</td>
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
                <h3 className="text-lg font-semibold text-gray-900">Performance Analytics</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Export Performance Data →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">⚡</div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Speed</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Execution Speed</h4>
                  <p className="text-sm text-gray-600">Average processing time</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">💪</div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Reliability</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">System Reliability</h4>
                  <p className="text-sm text-gray-600">Uptime and error rates</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">📊</div>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Efficiency</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Process Efficiency</h4>
                  <p className="text-sm text-gray-600">Resource optimization metrics</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'automation' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Automation Intelligence Dashboard</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View Detailed Insights →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">🤖</div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">AI</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Predictions</h4>
                  <p className="text-sm text-gray-600">Process optimization suggestions</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">⚠️</div>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Alerts</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Smart Alerts</h4>
                  <p className="text-sm text-gray-600">Proactive issue detection</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">📈</div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Trends</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Usage Trends</h4>
                  <p className="text-sm text-gray-600">Automation adoption patterns</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">🎯</div>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">ROI</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">ROI Analysis</h4>
                  <p className="text-sm text-gray-600">Automation return on investment</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
