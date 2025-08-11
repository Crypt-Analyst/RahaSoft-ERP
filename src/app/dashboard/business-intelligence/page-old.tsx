'use client'

import { useState } from 'react'

export default function BusinessIntelligencePage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const kpiMetrics = [
    { name: 'Revenue Growth', value: '+24.8%', target: '25%', trend: 'up', color: 'green' },
    { name: 'Customer Acquisition', value: '1,247', target: '1,200', trend: 'up', color: 'blue' },
    { name: 'Profit Margin', value: '32.4%', target: '30%', trend: 'up', color: 'purple' },
    { name: 'Market Share', value: '18.7%', target: '20%', trend: 'down', color: 'orange' },
    { name: 'Customer Satisfaction', value: '4.8/5', target: '4.5', trend: 'up', color: 'emerald' },
    { name: 'Operational Efficiency', value: '94.2%', target: '95%', trend: 'down', color: 'indigo' }
  ]

  const aiInsights = [
    {
      type: 'opportunity',
      title: 'Revenue Optimization',
      description: 'Q4 sales data suggests increasing Product Category A pricing by 8% could boost revenue by $340K',
      confidence: 89,
      impact: 'High'
    },
    {
      type: 'warning',
      title: 'Customer Churn Risk',
      description: '23 high-value customers show declining engagement patterns. Immediate intervention recommended',
      confidence: 94,
      impact: 'Critical'
    },
    {
      type: 'trend',
      title: 'Market Trend Analysis',
      description: 'Emerging demand pattern in Region B presents 15% growth opportunity for next quarter',
      confidence: 76,
      impact: 'Medium'
    },
    {
      type: 'efficiency',
      title: 'Process Optimization',
      description: 'Supply chain automation could reduce costs by 12% and improve delivery times by 2.3 days',
      confidence: 82,
      impact: 'High'
    }
  ]

  const dashboards = [
    { 
      name: 'Executive Dashboard', 
      description: 'High-level KPIs and strategic metrics',
      lastUpdated: '2 mins ago',
      widgets: 12,
      category: 'executive'
    },
    { 
      name: 'Sales Performance', 
      description: 'Revenue, pipeline, and conversion analytics',
      lastUpdated: '5 mins ago',
      widgets: 8,
      category: 'sales'
    },
    { 
      name: 'Customer Analytics', 
      description: 'Customer behavior and satisfaction metrics',
      lastUpdated: '1 min ago',
      widgets: 15,
      category: 'customer'
    },
    { 
      name: 'Financial Intelligence', 
      description: 'Financial performance and forecasting',
      lastUpdated: '3 mins ago',
      widgets: 10,
      category: 'finance'
    },
    { 
      name: 'Operational Metrics', 
      description: 'Process efficiency and productivity insights',
      lastUpdated: '7 mins ago',
      widgets: 14,
      category: 'operations'
    },
    { 
      name: 'Market Intelligence', 
      description: 'Market trends and competitive analysis',
      lastUpdated: '10 mins ago',
      widgets: 9,
      category: 'market'
    }
  ]

  const reports = [
    { name: 'Monthly Business Review', type: 'Automated', frequency: 'Monthly', nextRun: '2024-02-01' },
    { name: 'Customer Segmentation Analysis', type: 'AI-Generated', frequency: 'Weekly', nextRun: '2024-01-22' },
    { name: 'Competitive Intelligence Report', type: 'Manual', frequency: 'Quarterly', nextRun: '2024-04-01' },
    { name: 'ROI Performance Summary', type: 'Automated', frequency: 'Weekly', nextRun: '2024-01-21' }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Business Intelligence</h1>
          <p className="text-gray-600 mt-2">AI-powered insights and advanced analytics for strategic decision making</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Create Dashboard
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {/* KPI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kpiMetrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">{metric.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                metric.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {metric.trend === 'up' ? '↗' : '↘'}
              </span>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className={`text-2xl font-bold text-${metric.color}-600`}>{metric.value}</p>
                <p className="text-xs text-gray-500">Target: {metric.target}</p>
              </div>
              <div className={`w-12 h-12 rounded-lg bg-${metric.color}-100 flex items-center justify-center`}>
                <div className={`w-6 h-6 rounded bg-${metric.color}-500`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'dashboard', name: 'Dashboards' },
              { id: 'ai-insights', name: 'AI Insights' },
              { id: 'reports', name: 'Reports' },
              { id: 'analytics', name: 'Advanced Analytics' }
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
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Available Dashboards</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Create New Dashboard
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dashboards.map((dashboard, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                        dashboard.category === 'executive' ? 'from-purple-500 to-indigo-600' :
                        dashboard.category === 'sales' ? 'from-green-500 to-emerald-600' :
                        dashboard.category === 'customer' ? 'from-blue-500 to-cyan-600' :
                        dashboard.category === 'finance' ? 'from-yellow-500 to-orange-600' :
                        dashboard.category === 'operations' ? 'from-red-500 to-pink-600' :
                        'from-gray-500 to-slate-600'
                      } flex items-center justify-center`}>
                        <div className="text-white text-xl">📊</div>
                      </div>
                      <span className="text-xs text-gray-500">{dashboard.widgets} widgets</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{dashboard.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{dashboard.description}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>Updated {dashboard.lastUpdated}</span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        Open →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ai-insights' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">AI-Powered Business Insights</h3>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Refresh Insights
                </button>
              </div>
              <div className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div key={index} className={`border-l-4 p-6 rounded-r-lg ${
                    insight.type === 'opportunity' ? 'border-green-500 bg-green-50' :
                    insight.type === 'warning' ? 'border-red-500 bg-red-50' :
                    insight.type === 'trend' ? 'border-blue-500 bg-blue-50' :
                    'border-purple-500 bg-purple-50'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xl ${
                            insight.type === 'opportunity' ? '💡' :
                            insight.type === 'warning' ? '⚠️' :
                            insight.type === 'trend' ? '📈' :
                            '⚙️'
                          }`}>
                            {insight.type === 'opportunity' ? '💡' :
                             insight.type === 'warning' ? '⚠️' :
                             insight.type === 'trend' ? '📈' : '⚙️'}
                          </span>
                          <h4 className="font-semibold text-gray-900">{insight.title}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            insight.impact === 'Critical' ? 'bg-red-100 text-red-700' :
                            insight.impact === 'High' ? 'bg-orange-100 text-orange-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {insight.impact} Impact
                          </span>
                        </div>
                        <p className="text-gray-700 mb-3">{insight.description}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Confidence:</span>
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full" 
                                style={{width: `${insight.confidence}%`}}
                              ></div>
                            </div>
                            <span className="text-sm font-medium">{insight.confidence}%</span>
                          </div>
                        </div>
                      </div>
                      <button className="ml-4 bg-white px-3 py-1 rounded-lg border hover:bg-gray-50 transition-colors text-sm">
                        Act on Insight
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Automated Reports</h3>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Schedule New Report
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Report Name</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Frequency</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Next Run</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {reports.map((report, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm font-medium">{report.name}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            report.type === 'AI-Generated' ? 'bg-purple-100 text-purple-700' :
                            report.type === 'Automated' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {report.type}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{report.frequency}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{report.nextRun}</td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <button className="text-blue-600 hover:text-blue-700 text-sm">View</button>
                            <button className="text-green-600 hover:text-green-700 text-sm">Edit</button>
                            <button className="text-purple-600 hover:text-purple-700 text-sm">Run Now</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Advanced Analytics Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { 
                    name: 'Predictive Analytics', 
                    description: 'Forecast trends and outcomes using machine learning',
                    icon: '🔮',
                    features: ['Sales Forecasting', 'Demand Planning', 'Risk Assessment']
                  },
                  { 
                    name: 'Customer Segmentation', 
                    description: 'AI-powered customer behavior analysis and clustering',
                    icon: '👥',
                    features: ['Behavioral Segments', 'Value-based Groups', 'Churn Prediction']
                  },
                  { 
                    name: 'Market Analysis', 
                    description: 'Competitive intelligence and market trend analysis',
                    icon: '📊',
                    features: ['Competitor Tracking', 'Market Share', 'Price Analysis']
                  },
                  { 
                    name: 'Performance Analytics', 
                    description: 'Deep dive into operational and financial performance',
                    icon: '⚡',
                    features: ['KPI Tracking', 'Variance Analysis', 'Benchmarking']
                  }
                ].map((tool, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{tool.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{tool.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
                        <div className="space-y-1">
                          {tool.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                              {feature}
                            </div>
                          ))}
                        </div>
                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Launch Tool
                        </button>
                      </div>
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
