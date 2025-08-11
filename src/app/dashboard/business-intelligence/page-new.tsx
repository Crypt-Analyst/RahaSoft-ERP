import { 
  BarChart3, TrendingUp, TrendingDown, PieChart, LineChart, Activity, Target, 
  Brain, Zap, AlertTriangle, CheckCircle, Clock, Users, DollarSign, Star,
  Filter, Download, Plus, Search, RefreshCw, Settings, Eye, Share2, Play,
  Calendar, Globe, MapPin, Layers, Database, Monitor, Smartphone, Tablet,
  ArrowUp, ArrowDown, Minus, ChevronRight, Hash, Tag, FileText, Award,
  Lightbulb, TrendingDown as TrendDown, BarChart, PieChart as Pie, Map, Shield
} from 'lucide-react'

export default function BusinessIntelligencePage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Business Intelligence</h1>
          <p className="text-gray-600 mt-1">Advanced analytics, AI insights, interactive dashboards, real-time reporting, and data-driven decision making platform</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <BarChart3 className="h-4 w-4" />
            Create Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Plus className="h-4 w-4" />
            New Dashboard
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <Brain className="h-4 w-4" />
            AI Analysis
          </button>
        </div>
      </div>

      {/* Enhanced BI Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Revenue Growth</p>
              <p className="text-2xl font-bold text-green-600">+24.8%</p>
              <p className="text-xs text-green-600">Above target (25%)</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Dashboards</p>
              <p className="text-2xl font-bold text-blue-600">47</p>
              <p className="text-xs text-blue-600">12 real-time</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Monitor className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">AI Insights</p>
              <p className="text-2xl font-bold text-purple-600">186</p>
              <p className="text-xs text-purple-600">23 critical</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Brain className="h-5 w-5 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Data Sources</p>
              <p className="text-2xl font-bold text-orange-600">34</p>
              <p className="text-xs text-orange-600">All connected</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <Database className="h-5 w-5 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Report Generation</p>
              <p className="text-2xl font-bold text-cyan-600">2,847</p>
              <p className="text-xs text-cyan-600">This month</p>
            </div>
            <div className="p-3 bg-cyan-100 rounded-lg">
              <FileText className="h-5 w-5 text-cyan-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">User Engagement</p>
              <p className="text-2xl font-bold text-indigo-600">94.2%</p>
              <p className="text-xs text-indigo-600">Daily active users</p>
            </div>
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Activity className="h-5 w-5 text-indigo-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive BI Features Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        
        {/* Interactive Dashboards & Real-time Analytics */}
        <div className="xl:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Interactive Dashboards & Real-time Analytics</h3>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                <Play className="h-4 w-4" />
                Live View
              </button>
              <button className="flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                <Settings className="h-4 w-4" />
                Configure
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { 
                name: 'Executive KPI Dashboard', 
                type: 'Real-time', 
                viewers: 45, 
                lastUpdated: '2 min ago',
                widgets: 12,
                drillDown: true,
                mobile: true,
                sharing: 'Public',
                alerts: 3
              },
              { 
                name: 'Sales Performance Analytics', 
                type: 'Interactive', 
                viewers: 89, 
                lastUpdated: '5 min ago',
                widgets: 8,
                drillDown: true,
                mobile: true,
                sharing: 'Department',
                alerts: 1
              },
              { 
                name: 'Financial Insights Portal', 
                type: 'Scheduled', 
                viewers: 23, 
                lastUpdated: '1 hour ago',
                widgets: 15,
                drillDown: false,
                mobile: false,
                sharing: 'Private',
                alerts: 0
              },
            ].map((dashboard, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Monitor className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{dashboard.name}</h4>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          dashboard.type === 'Real-time' ? 'bg-green-100 text-green-700' :
                          dashboard.type === 'Interactive' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {dashboard.type}
                        </span>
                        <span className="text-gray-500">Updated: {dashboard.lastUpdated}</span>
                      </p>
                    </div>
                  </div>
                  {dashboard.alerts > 0 && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full">
                      <AlertTriangle className="h-3 w-3" />
                      <span className="text-xs">{dashboard.alerts}</span>
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div>
                    <p className="font-medium">Active Viewers</p>
                    <p className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {dashboard.viewers}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Widgets</p>
                    <p className="flex items-center gap-1">
                      <Layers className="h-3 w-3" />
                      {dashboard.widgets}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Features</p>
                    <div className="flex items-center gap-1">
                      {dashboard.drillDown && <ArrowDown className="h-3 w-3 text-green-600" />}
                      {dashboard.mobile && <Smartphone className="h-3 w-3 text-blue-600" />}
                      <Share2 className="h-3 w-3 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Access</p>
                    <p className={`text-xs ${
                      dashboard.sharing === 'Public' ? 'text-green-600' :
                      dashboard.sharing === 'Department' ? 'text-blue-600' :
                      'text-gray-600'
                    }`}>
                      {dashboard.sharing}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button className="p-1 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors">
                      <Eye className="h-3 w-3" />
                    </button>
                    <button className="p-1 bg-green-50 text-green-600 rounded hover:bg-green-100 transition-colors">
                      <Share2 className="h-3 w-3" />
                    </button>
                    <button className="p-1 bg-gray-50 text-gray-600 rounded hover:bg-gray-100 transition-colors">
                      <Settings className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Live</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI-Powered Insights & Predictive Analytics */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">AI-Powered Insights</h3>
            <div className="flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
              <Brain className="h-3 w-3" />
              <span className="text-xs">23 Critical</span>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { 
                type: 'opportunity', 
                title: 'Revenue Optimization', 
                insight: 'AI suggests 8% price increase could boost Q4 revenue by $340K',
                confidence: 89,
                impact: 'High',
                category: 'Financial'
              },
              { 
                type: 'warning', 
                title: 'Customer Churn Risk', 
                insight: '23 high-value customers show declining engagement patterns',
                confidence: 94,
                impact: 'Critical',
                category: 'Customer'
              },
              { 
                type: 'trend', 
                title: 'Market Opportunity', 
                insight: 'Emerging demand in Region B presents 15% growth potential',
                confidence: 76,
                impact: 'Medium',
                category: 'Market'
              },
              { 
                type: 'efficiency', 
                title: 'Process Optimization', 
                insight: 'Supply chain automation could reduce costs by 12%',
                confidence: 82,
                impact: 'High',
                category: 'Operations'
              },
            ].map((insight, index) => (
              <div key={index} className={`p-4 rounded-lg border ${
                insight.type === 'opportunity' ? 'border-green-200 bg-green-50' :
                insight.type === 'warning' ? 'border-red-200 bg-red-50' :
                insight.type === 'trend' ? 'border-blue-200 bg-blue-50' :
                'border-purple-200 bg-purple-50'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {insight.type === 'opportunity' && <Lightbulb className="h-4 w-4 text-green-600" />}
                    {insight.type === 'warning' && <AlertTriangle className="h-4 w-4 text-red-600" />}
                    {insight.type === 'trend' && <TrendingUp className="h-4 w-4 text-blue-600" />}
                    {insight.type === 'efficiency' && <Zap className="h-4 w-4 text-purple-600" />}
                    <h4 className="font-medium text-sm text-gray-900">{insight.title}</h4>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    insight.impact === 'Critical' ? 'bg-red-100 text-red-700' :
                    insight.impact === 'High' ? 'bg-orange-100 text-orange-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {insight.impact}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-3">{insight.insight}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      {insight.confidence}% confidence
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="h-3 w-3" />
                      {insight.category}
                    </span>
                  </div>
                  <button className="flex items-center gap-1 px-2 py-1 bg-white rounded hover:bg-gray-50 transition-colors">
                    <ChevronRight className="h-3 w-3" />
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Visualization & Custom Charts */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Visualization & Custom Charts</h3>
          
          {/* Chart Types */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Available Chart Types</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { type: 'Bar Chart', icon: BarChart3, count: 45, color: 'blue' },
                { type: 'Line Chart', icon: LineChart, count: 32, color: 'green' },
                { type: 'Pie Chart', icon: PieChart, count: 28, color: 'purple' },
                { type: 'Area Chart', icon: Activity, count: 19, color: 'orange' },
              ].map((chart, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <chart.icon className={`h-4 w-4 text-${chart.color}-600`} />
                    <span className="font-medium text-sm text-gray-900">{chart.type}</span>
                  </div>
                  <p className="text-xs text-gray-500">{chart.count} active charts</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization Features */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Advanced Features</h4>
            <div className="space-y-2">
              {[
                { feature: 'Interactive Filtering', status: 'active', usage: '89%' },
                { feature: 'Drill-down Capability', status: 'active', usage: '76%' },
                { feature: 'Real-time Updates', status: 'active', usage: '92%' },
                { feature: 'Export to Multiple Formats', status: 'active', usage: '67%' },
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                    <span className="text-sm font-medium text-gray-900">{feature.feature}</span>
                  </div>
                  <span className="text-xs text-gray-500">{feature.usage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart Performance */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Performance Metrics</h4>
            <div className="space-y-2">
              {[
                { metric: 'Average Load Time', value: '1.2s', target: '< 2s', status: 'good' },
                { metric: 'Chart Accuracy', value: '99.7%', target: '> 99%', status: 'excellent' },
                { metric: 'User Interactions', value: '12.4K', target: '10K+', status: 'good' },
              ].map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-2 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium text-sm text-gray-900">{metric.metric}</p>
                    <p className="text-xs text-gray-500">Target: {metric.target}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm text-green-600">{metric.value}</p>
                    <div className={`w-2 h-2 rounded-full ${
                      metric.status === 'excellent' ? 'bg-green-500' :
                      metric.status === 'good' ? 'bg-blue-500' :
                      'bg-yellow-500'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advanced BI Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Advanced Reporting & Automated Alerts */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Advanced Reporting</h3>
            <FileText className="h-5 w-5 text-blue-600" />
          </div>
          
          {/* Report Templates */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Report Templates</h4>
            <div className="space-y-3">
              {[
                { 
                  name: 'Executive Summary', 
                  frequency: 'Weekly', 
                  recipients: 12,
                  format: 'PDF',
                  automation: true
                },
                { 
                  name: 'Sales Performance', 
                  frequency: 'Daily', 
                  recipients: 45,
                  format: 'Excel',
                  automation: true
                },
                { 
                  name: 'Financial Analysis', 
                  frequency: 'Monthly', 
                  recipients: 8,
                  format: 'PowerPoint',
                  automation: false
                },
              ].map((report, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-sm text-gray-900">{report.name}</h5>
                    <div className="flex items-center gap-1">
                      {report.automation && <Zap className="h-3 w-3 text-yellow-600" />}
                      <span className="text-xs text-gray-500">{report.frequency}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>
                      <p>Recipients: {report.recipients}</p>
                    </div>
                    <div>
                      <p>Format: {report.format}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Automated Alerts */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Smart Alerts</h4>
            <div className="space-y-2">
              {[
                { alert: 'Revenue Threshold', condition: '> $100K daily', status: 'active', triggered: 3 },
                { alert: 'Customer Satisfaction', condition: '< 4.0 rating', status: 'active', triggered: 0 },
                { alert: 'Inventory Levels', condition: '< 10% stock', status: 'active', triggered: 12 },
              ].map((alert, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-blue-50 border border-blue-200 rounded-lg">
                  <div>
                    <p className="font-medium text-sm text-gray-900">{alert.alert}</p>
                    <p className="text-xs text-gray-500">{alert.condition}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-xs text-green-600">Active</span>
                    </div>
                    <p className="text-xs text-gray-500">{alert.triggered} today</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Integration & ETL */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Integration & ETL</h3>
          
          {/* Data Sources */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Connected Data Sources</h4>
            <div className="space-y-3">
              {[
                { 
                  source: 'PostgreSQL Database', 
                  type: 'Primary', 
                  status: 'connected',
                  lastSync: '2 min ago',
                  records: '2.4M'
                },
                { 
                  source: 'Salesforce CRM', 
                  type: 'External API', 
                  status: 'connected',
                  lastSync: '5 min ago',
                  records: '156K'
                },
                { 
                  source: 'Google Analytics', 
                  type: 'Web API', 
                  status: 'syncing',
                  lastSync: 'In progress',
                  records: '890K'
                },
              ].map((source, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Database className="h-4 w-4 text-blue-600" />
                      <h5 className="font-medium text-sm text-gray-900">{source.source}</h5>
                    </div>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                      source.status === 'connected' ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        source.status === 'connected' ? 'bg-green-500' : 'bg-yellow-500'
                      }`} />
                      <span className="text-xs">{source.status}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>
                      <p>Type: {source.type}</p>
                      <p>Records: {source.records}</p>
                    </div>
                    <div>
                      <p>Last Sync: {source.lastSync}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ETL Pipelines */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">ETL Pipelines</h4>
            <div className="space-y-2">
              {[
                { pipeline: 'Sales Data Processing', status: 'running', duration: '12 min', success: 98.5 },
                { pipeline: 'Customer Analytics ETL', status: 'completed', duration: '8 min', success: 99.2 },
                { pipeline: 'Financial Reporting', status: 'scheduled', duration: '15 min', success: 97.8 },
              ].map((pipeline, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-purple-50 border border-purple-200 rounded-lg">
                  <div>
                    <p className="font-medium text-sm text-gray-900">{pipeline.pipeline}</p>
                    <p className="text-xs text-gray-500">Duration: {pipeline.duration}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      pipeline.status === 'running' ? 'bg-blue-100 text-blue-700' :
                      pipeline.status === 'completed' ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {pipeline.status}
                    </span>
                    <p className="text-xs text-gray-500">{pipeline.success}% success</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Self-Service Analytics & Mobile Access */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Self-Service Analytics</h3>
          
          {/* User Analytics */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">User Engagement</h4>
            <div className="space-y-3">
              {[
                { 
                  user: 'Sarah Johnson (Marketing)', 
                  role: 'Power User', 
                  dashboards: 8,
                  lastActive: '5 min ago',
                  queries: 24
                },
                { 
                  user: 'Mike Chen (Sales)', 
                  role: 'Regular User', 
                  dashboards: 3,
                  lastActive: '1 hour ago',
                  queries: 12
                },
                { 
                  user: 'Lisa Rodriguez (Finance)', 
                  role: 'Admin', 
                  dashboards: 15,
                  lastActive: '10 min ago',
                  queries: 67
                },
              ].map((user, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h5 className="font-medium text-sm text-gray-900">{user.user}</h5>
                      <p className="text-xs text-gray-500">{user.role}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>{user.lastActive}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>
                      <p>Dashboards: {user.dashboards}</p>
                    </div>
                    <div>
                      <p>Queries: {user.queries}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Access */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Mobile Access</h4>
            <div className="space-y-2">
              {[
                { platform: 'iOS App', users: 234, satisfaction: 4.8, version: '2.1.0' },
                { platform: 'Android App', users: 189, satisfaction: 4.6, version: '2.0.8' },
                { platform: 'Mobile Web', users: 456, satisfaction: 4.4, version: 'Latest' },
              ].map((mobile, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-green-600" />
                    <div>
                      <p className="font-medium text-sm text-gray-900">{mobile.platform}</p>
                      <p className="text-xs text-gray-500">v{mobile.version}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-600">{mobile.users} users</p>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs text-gray-500">{mobile.satisfaction}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Governance */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Data Governance</h4>
            <div className="space-y-2">
              {[
                { aspect: 'Data Quality Score', value: '96.8%', status: 'excellent' },
                { aspect: 'Compliance Rating', value: '100%', status: 'perfect' },
                { aspect: 'Security Level', value: 'Enterprise', status: 'secure' },
              ].map((governance, index) => (
                <div key={index} className="flex items-center justify-between p-2 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="h-3 w-3 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900">{governance.aspect}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-blue-600">{governance.value}</span>
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BI Intelligence & Performance Analytics */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">BI Intelligence & Performance Analytics</h3>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <BarChart3 className="h-4 w-4" />
              Generate Report
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Download className="h-4 w-4" />
              Export All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Performance KPIs */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">System Performance</h4>
            <div className="space-y-2">
              {[
                { kpi: 'Query Response Time', value: '0.8s', trend: 'down', benchmark: '< 2s' },
                { kpi: 'Dashboard Load Time', value: '1.2s', trend: 'stable', benchmark: '< 3s' },
                { kpi: 'Data Refresh Rate', value: '99.7%', trend: 'up', benchmark: '> 95%' },
              ].map((kpi, index) => (
                <div key={index} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900">{kpi.kpi}</p>
                    {kpi.trend === 'up' && <ArrowUp className="h-3 w-3 text-green-600" />}
                    {kpi.trend === 'down' && <ArrowDown className="h-3 w-3 text-green-600" />}
                    {kpi.trend === 'stable' && <Minus className="h-3 w-3 text-gray-600" />}
                  </div>
                  <p className="text-lg font-bold text-blue-600">{kpi.value}</p>
                  <p className="text-xs text-gray-500">Target: {kpi.benchmark}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Analytics */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Usage Analytics</h4>
            <div className="space-y-2">
              {[
                { metric: 'Daily Active Users', value: '1,247', change: '+8.2%' },
                { metric: 'Report Generation', value: '2,847', change: '+15.3%' },
                { metric: 'Dashboard Views', value: '18.5K', change: '+12.7%' },
              ].map((metric, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900">{metric.metric}</p>
                    <span className="text-xs text-green-600">{metric.change}</span>
                  </div>
                  <p className="text-lg font-bold text-green-600">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Quality */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Data Quality</h4>
            <div className="space-y-2">
              {[
                { aspect: 'Completeness', score: 98.5, status: 'excellent' },
                { aspect: 'Accuracy', score: 96.8, status: 'excellent' },
                { aspect: 'Consistency', score: 94.2, status: 'good' },
              ].map((quality, index) => (
                <div key={index} className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900">{quality.aspect}</p>
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <p className="text-lg font-bold text-green-600">{quality.score}%</p>
                  <p className="text-xs text-green-600 capitalize">{quality.status}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ROI & Business Impact */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Business Impact</h4>
            <div className="space-y-2">
              {[
                { impact: 'Decision Speed', improvement: '45%', value: '$2.1M saved' },
                { impact: 'Data Accuracy', improvement: '67%', value: '89% confidence' },
                { impact: 'Process Efficiency', improvement: '34%', value: '12h saved/day' },
              ].map((impact, index) => (
                <div key={index} className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900">{impact.impact}</p>
                    <Award className="h-3 w-3 text-purple-600" />
                  </div>
                  <p className="text-lg font-bold text-purple-600">+{impact.improvement}</p>
                  <p className="text-xs text-purple-600">{impact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
