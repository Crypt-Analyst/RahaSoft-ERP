import { BarChart3, TrendingUp, Download, Calendar, Filter, FileText, PieChart, Users, DollarSign } from 'lucide-react'

export default function ReportsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Generate insights and analyze business performance across all modules</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900">$2.87M</p>
              <p className="text-sm text-green-600 font-medium">+15.3% YoY</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Customers</p>
              <p className="text-3xl font-bold text-blue-600">1,247</p>
              <p className="text-sm text-blue-600 font-medium">+8.7% this month</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Projects Completed</p>
              <p className="text-3xl font-bold text-purple-600">89</p>
              <p className="text-sm text-purple-600 font-medium">This quarter</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <BarChart3 className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Efficiency Score</p>
              <p className="text-3xl font-bold text-orange-600">94.2%</p>
              <p className="text-sm text-orange-600 font-medium">Excellent</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Report Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Financial Reports */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Financial Reports</h3>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Profit & Loss Statement', period: 'Monthly', status: 'ready' },
              { name: 'Cash Flow Analysis', period: 'Quarterly', status: 'ready' },
              { name: 'Revenue by Product', period: 'Weekly', status: 'generating' },
              { name: 'Budget vs Actual', period: 'Monthly', status: 'ready' },
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div>
                  <p className="font-medium text-gray-900">{report.name}</p>
                  <p className="text-sm text-gray-600">{report.period}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    report.status === 'ready' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {report.status}
                  </span>
                  {report.status === 'ready' && <Download className="h-4 w-4 text-gray-400" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Reports */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BarChart3 className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Operational Reports</h3>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Production Efficiency', period: 'Daily', status: 'ready' },
              { name: 'Inventory Turnover', period: 'Monthly', status: 'ready' },
              { name: 'Quality Control Metrics', period: 'Weekly', status: 'ready' },
              { name: 'Employee Productivity', period: 'Monthly', status: 'generating' },
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div>
                  <p className="font-medium text-gray-900">{report.name}</p>
                  <p className="text-sm text-gray-600">{report.period}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    report.status === 'ready' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {report.status}
                  </span>
                  {report.status === 'ready' && <Download className="h-4 w-4 text-gray-400" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reports */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Customer Reports</h3>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Customer Acquisition', period: 'Monthly', status: 'ready' },
              { name: 'Churn Analysis', period: 'Quarterly', status: 'ready' },
              { name: 'Customer Lifetime Value', period: 'Annual', status: 'ready' },
              { name: 'Satisfaction Survey', period: 'Quarterly', status: 'generating' },
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div>
                  <p className="font-medium text-gray-900">{report.name}</p>
                  <p className="text-sm text-gray-600">{report.period}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    report.status === 'ready' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {report.status}
                  </span>
                  {report.status === 'ready' && <Download className="h-4 w-4 text-gray-400" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Report Activity</h3>
          <div className="space-y-4">
            {[
              { report: 'Monthly Financial Summary', action: 'Generated', user: 'John Smith', time: '2 hours ago' },
              { report: 'Inventory Turnover Report', action: 'Downloaded', user: 'Sarah Wilson', time: '4 hours ago' },
              { report: 'Customer Acquisition Report', action: 'Shared', user: 'Mike Johnson', time: '6 hours ago' },
              { report: 'Production Efficiency Report', action: 'Generated', user: 'Emma Davis', time: '1 day ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.report}</p>
                  <p className="text-sm text-gray-600">{activity.action} by {activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Report Generator</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Financial Summary</option>
                <option>Sales Performance</option>
                <option>Inventory Status</option>
                <option>Project Progress</option>
                <option>HR Analytics</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
                <option>Last 12 months</option>
                <option>Custom range</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
              <div className="flex gap-2">
                <button className="flex-1 p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">PDF</button>
                <button className="flex-1 p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">Excel</button>
                <button className="flex-1 p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">CSV</button>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <BarChart3 className="h-4 w-4" />
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
