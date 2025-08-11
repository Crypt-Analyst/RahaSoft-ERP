'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CompliancePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const complianceMetrics = [
    { name: 'Active Policies', value: '156', change: '+12', trend: 'up', icon: '▣' },
    { name: 'Risk Assessments', value: '45', change: '+8', trend: 'up', icon: '⚠' },
    { name: 'Compliance Score', value: '94%', change: '+2.1%', trend: 'up', icon: '✓' },
    { name: 'Open Issues', value: '23', change: '-18', trend: 'down', icon: '●' },
    { name: 'Audits Completed', value: '12', change: '+3', trend: 'up', icon: '◎' },
    { name: 'Training Completion', value: '87%', change: '+5.2%', trend: 'up', icon: '◈' }
  ]

  const complianceModules = [
    { name: 'Policy Management', description: 'Create, maintain, and distribute policies', href: '/dashboard/compliance/policies', icon: '▣', count: '156', category: 'core' },
    { name: 'Risk Assessment', description: 'Identify and evaluate business risks', href: '/dashboard/compliance/risk-assessment', icon: '⚠', count: '45', category: 'risk' },
    { name: 'Audit Management', description: 'Plan, execute, and track audits', href: '/dashboard/compliance/audits', icon: '◎', count: '12', category: 'audit' },
    { name: 'Incident Management', description: 'Track and resolve compliance incidents', href: '/dashboard/compliance/incidents', icon: '●', count: '23', category: 'incident' },
    { name: 'Regulatory Tracking', description: 'Monitor regulatory changes and updates', href: '/dashboard/compliance/regulatory', icon: '↗', count: 'Live', category: 'regulatory' },
    { name: 'Compliance Training', description: 'Employee compliance education programs', href: '/dashboard/compliance/training', icon: '◈', count: '87%', category: 'training' },
    { name: 'Document Control', description: 'Version control for compliance documents', href: '/dashboard/compliance/documents', icon: '▤', count: '2,345', category: 'documents' },
    { name: 'Risk Monitoring', description: 'Continuous risk assessment and alerts', href: '/dashboard/compliance/monitoring', icon: '◔', count: 'Active', category: 'risk' },
    { name: 'Vendor Compliance', description: 'Third-party compliance verification', href: '/dashboard/compliance/vendors', icon: '◈', count: '89', category: 'vendor' },
    { name: 'Data Privacy (GDPR)', description: 'Data protection and privacy compliance', href: '/dashboard/compliance/privacy', icon: '▦', count: 'GDPR Ready', category: 'privacy' },
    { name: 'SOX Compliance', description: 'Sarbanes-Oxley financial compliance', href: '/dashboard/compliance/sox', icon: '$', count: 'SOX 404', category: 'financial' },
    { name: 'ISO Certification', description: 'ISO standards compliance tracking', href: '/dashboard/compliance/iso', icon: '◉', count: 'ISO 27001', category: 'standards' },
    { name: 'Compliance Reporting', description: 'Automated compliance reports', href: '/dashboard/compliance/reporting', icon: '↗', count: '24', category: 'reporting' },
    { name: 'Risk Register', description: 'Centralized risk documentation', href: '/dashboard/compliance/register', icon: '▤', count: '156', category: 'risk' },
    { name: 'Control Testing', description: 'Test effectiveness of controls', href: '/dashboard/compliance/testing', icon: '✓', count: '92%', category: 'testing' },
    { name: 'Compliance Dashboard', description: 'Real-time compliance overview', href: '/dashboard/compliance/dashboard', icon: '◎', count: 'Live', category: 'analytics' },
    { name: 'Workflow Automation', description: 'Automate compliance processes', href: '/dashboard/compliance/workflows', icon: '⚡', count: '18', category: 'automation' },
    { name: 'Legal Hold', description: 'Litigation hold management', href: '/dashboard/compliance/legal-hold', icon: '⚖', count: '5', category: 'legal' },
    { name: 'Whistleblower Portal', description: 'Anonymous reporting system', href: '/dashboard/compliance/whistleblower', icon: '◐', count: 'Secure', category: 'reporting' },
    { name: 'Business Continuity', description: 'Disaster recovery and BCP planning', href: '/dashboard/compliance/continuity', icon: '◑', count: 'Plans: 8', category: 'continuity' }
  ]

  const moduleCategories = [
    { id: 'core', name: 'Core Compliance', color: 'blue' },
    { id: 'risk', name: 'Risk Management', color: 'red' },
    { id: 'audit', name: 'Audit & Testing', color: 'purple' },
    { id: 'regulatory', name: 'Regulatory Compliance', color: 'orange' },
    { id: 'privacy', name: 'Data Privacy', color: 'indigo' },
    { id: 'financial', name: 'Financial Compliance', color: 'green' },
    { id: 'standards', name: 'Standards & Certifications', color: 'pink' },
    { id: 'incident', name: 'Incident Management', color: 'red' },
    { id: 'training', name: 'Training & Education', color: 'yellow' },
    { id: 'vendor', name: 'Vendor Management', color: 'cyan' },
    { id: 'documents', name: 'Document Management', color: 'slate' },
    { id: 'reporting', name: 'Reporting & Analytics', color: 'emerald' },
    { id: 'testing', name: 'Testing & Validation', color: 'violet' },
    { id: 'analytics', name: 'Analytics & Dashboards', color: 'teal' },
    { id: 'automation', name: 'Automation', color: 'rose' },
    { id: 'legal', name: 'Legal Management', color: 'amber' },
    { id: 'continuity', name: 'Business Continuity', color: 'lime' }
  ]

  const riskItems = [
    { id: 1, title: 'Data Breach Risk', category: 'Cybersecurity', probability: 'Medium', impact: 'High', status: 'active', owner: 'IT Security Team' },
    { id: 2, title: 'Regulatory Changes', category: 'Compliance', probability: 'High', impact: 'Medium', status: 'monitoring', owner: 'Legal Team' },
    { id: 3, title: 'Vendor Dependencies', category: 'Operational', probability: 'Low', impact: 'High', status: 'mitigated', owner: 'Procurement' },
    { id: 4, title: 'Market Volatility', category: 'Financial', probability: 'High', impact: 'Medium', status: 'active', owner: 'Finance Team' }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Compliance & Risk Management</h1>
          <p className="text-gray-600 mt-2">Enterprise-grade compliance and risk management with 20 comprehensive modules</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            New Risk Assessment
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Compliance Report
          </button>
        </div>
      </div>

      {/* Compliance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {complianceMetrics.map((metric, index) => (
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

      {/* Complete Compliance Features by Category */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Compliance & Risk Management Suite (20 Modules)</h2>
        
        {moduleCategories.map((category) => {
          const categoryModules = complianceModules.filter(module => module.category === category.id);
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
              lime: { header: 'text-lime-700', badge: 'bg-lime-100 text-lime-700' }
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
              { id: 'overview', name: 'Compliance Overview' },
              { id: 'risks', name: 'Risk Register' },
              { id: 'audits', name: 'Active Audits' },
              { id: 'analytics', name: 'Compliance Analytics' }
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Health</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Overall Compliance Score</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '94%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">94%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Risk Assessment Coverage</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '87%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">87%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Training Completion</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '87%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">87%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">⚠ New Risk Assessment</span>
                    <p className="text-sm text-gray-600">Conduct comprehensive risk evaluation</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">◎ Schedule Audit</span>
                    <p className="text-sm text-gray-600">Plan internal or external audit</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">▣ Update Policy</span>
                    <p className="text-sm text-gray-600">Revise compliance policies</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'risks' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Risk Register</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View All Risks →</button>
              </div>
              <div className="space-y-3">
                {riskItems.map((risk) => (
                  <div key={risk.id} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900">{risk.title}</h4>
                          <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                            {risk.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>Probability: <span className={`font-medium ${
                            risk.probability === 'High' ? 'text-red-600' :
                            risk.probability === 'Medium' ? 'text-yellow-600' : 'text-green-600'
                          }`}>{risk.probability}</span></span>
                          <span>Impact: <span className={`font-medium ${
                            risk.impact === 'High' ? 'text-red-600' :
                            risk.impact === 'Medium' ? 'text-yellow-600' : 'text-green-600'
                          }`}>{risk.impact}</span></span>
                          <span>Owner: {risk.owner}</span>
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        risk.status === 'active' ? 'bg-red-100 text-red-700' :
                        risk.status === 'monitoring' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {risk.status.charAt(0).toUpperCase() + risk.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'audits' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Active Audits</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View Audit Calendar →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">◎</div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">In Progress</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">SOX 404 Audit</h4>
                  <p className="text-sm text-gray-600">Financial controls assessment</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">▦</div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Planned</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">ISO 27001 Review</h4>
                  <p className="text-sm text-gray-600">Information security audit</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">▣</div>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">External</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">GDPR Compliance</h4>
                  <p className="text-sm text-gray-600">Data privacy assessment</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Compliance Analytics</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Export Analytics →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">↗</div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Trending</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Compliance Trends</h4>
                  <p className="text-sm text-gray-600">Historical performance</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">⚠</div>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Risk Map</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Risk Heat Map</h4>
                  <p className="text-sm text-gray-600">Visual risk assessment</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">◈</div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Training</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Training Metrics</h4>
                  <p className="text-sm text-gray-600">Completion rates</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">▤</div>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Audit</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Audit Results</h4>
                  <p className="text-sm text-gray-600">Finding analysis</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
