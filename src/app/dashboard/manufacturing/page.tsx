import { 
  Factory, Settings, AlertTriangle, TrendingUp, CheckCircle, Clock, Package, Users, BarChart3, Wrench,
  FileText, Layers, Activity, Target, Zap, Shield, MapPin, Gauge, Cog, Truck,
  ClipboardCheck, Calendar, DollarSign, Plus, Search, Filter, Download, Edit, Eye,
  Tag, RefreshCw, Archive, Globe, Cpu, Database, ArrowRightLeft, Bell, Clipboard,
  PlayCircle, PauseCircle, StopCircle, Hash, Workflow, Building, Timer, Award,
  MonitorSpeaker, BookOpen, FileSpreadsheet, Settings2, Boxes, Headphones
} from 'lucide-react'

export default function ManufacturingPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manufacturing</h1>
          <p className="text-gray-600 mt-1">Complete manufacturing operations with BOM, MRP, production planning, quality control, and multi-plant management</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Package className="h-4 w-4" />
            New Work Order
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <CheckCircle className="h-4 w-4" />
            Quality Check
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <Layers className="h-4 w-4" />
            BOM Manager
          </button>
        </div>
      </div>

      {/* Enhanced Manufacturing Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Production Lines</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-xs text-green-600">8 active, 4 maintenance</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Factory className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Daily Output</p>
              <p className="text-2xl font-bold text-green-600">2,847</p>
              <p className="text-xs text-green-600">+12% vs yesterday</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">OEE Score</p>
              <p className="text-2xl font-bold text-blue-600">87.3%</p>
              <p className="text-xs text-blue-600">Overall equipment effectiveness</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Gauge className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Quality Rate</p>
              <p className="text-2xl font-bold text-green-600">98.7%</p>
              <p className="text-xs text-green-600">Pass rate this week</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Shield className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Work Orders</p>
              <p className="text-2xl font-bold text-orange-600">47</p>
              <p className="text-xs text-orange-600">23 active, 24 pending</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <ClipboardCheck className="h-5 w-5 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Production Cost</p>
              <p className="text-2xl font-bold text-purple-600">$487K</p>
              <p className="text-xs text-purple-600">This month</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <DollarSign className="h-5 w-5 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Live Manufacturing Features Grid - All 20 Features */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* BOM Management & MRP */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Layers className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">BOM & MRP</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Active BOMs</span>
              <span className="text-blue-600 font-bold">347</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">MRP Runs</span>
              <span className="text-green-600 font-bold">Daily</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="text-sm font-medium text-purple-800">Material Shortage</span>
              <span className="text-purple-600 font-bold">3 items</span>
            </div>
            <button className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              Run MRP Analysis
            </button>
          </div>
        </div>

        {/* Production Planning & Scheduling */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Calendar className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Production Planning</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Scheduled Orders</span>
              <span className="text-green-600 font-bold">89</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="text-sm font-medium text-yellow-800">Capacity Usage</span>
              <span className="text-yellow-600 font-bold">83%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Lead Time Avg</span>
              <span className="text-blue-600 font-bold">4.2 days</span>
            </div>
            <button className="w-full p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
              Schedule Production
            </button>
          </div>
        </div>

        {/* Work Orders & Routing */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <ClipboardCheck className="h-5 w-5 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Work Orders</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <span className="text-sm font-medium text-orange-800">Active Orders</span>
              <span className="text-orange-600 font-bold">23</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="text-sm font-medium text-red-800">Urgent Orders</span>
              <span className="text-red-600 font-bold">5</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Completed Today</span>
              <span className="text-green-600 font-bold">12</span>
            </div>
            <button className="w-full p-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium">
              Create Work Order
            </button>
          </div>
        </div>

        {/* Quality Control & Inspection */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Shield className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Quality Control</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Pass Rate</span>
              <span className="text-green-600 font-bold">98.7%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="text-sm font-medium text-yellow-800">Pending Tests</span>
              <span className="text-yellow-600 font-bold">7</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="text-sm font-medium text-red-800">Defects Today</span>
              <span className="text-red-600 font-bold">3</span>
            </div>
            <button className="w-full p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
              QC Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Additional Manufacturing Features Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Shop Floor Control */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <MonitorSpeaker className="h-5 w-5 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Shop Floor Control</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg">
              <span className="text-sm font-medium text-indigo-800">Live Stations</span>
              <span className="text-indigo-600 font-bold">24</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Online Workers</span>
              <span className="text-green-600 font-bold">156</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Real-time Updates</span>
              <span className="text-blue-600 font-bold">Live</span>
            </div>
            <button className="w-full p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
              Shop Floor View
            </button>
          </div>
        </div>

        {/* Maintenance Management */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Wrench className="h-5 w-5 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Maintenance</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="text-sm font-medium text-yellow-800">Scheduled</span>
              <span className="text-yellow-600 font-bold">8</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="text-sm font-medium text-red-800">Overdue</span>
              <span className="text-red-600 font-bold">2</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Completed</span>
              <span className="text-green-600 font-bold">45</span>
            </div>
            <button className="w-full p-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm font-medium">
              Maintenance Schedule
            </button>
          </div>
        </div>

        {/* Capacity Planning */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <BarChart3 className="h-5 w-5 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Capacity Planning</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
              <span className="text-sm font-medium text-teal-800">Utilization</span>
              <span className="text-teal-600 font-bold">87%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Available Hours</span>
              <span className="text-blue-600 font-bold">1,240</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="text-sm font-medium text-purple-800">Bottlenecks</span>
              <span className="text-purple-600 font-bold">2</span>
            </div>
            <button className="w-full p-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium">
              Capacity Analysis
            </button>
          </div>
        </div>

        {/* Multi-Plant Operations */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-pink-100 rounded-lg">
              <Building className="h-5 w-5 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Multi-Plant</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
              <span className="text-sm font-medium text-pink-800">Active Plants</span>
              <span className="text-pink-600 font-bold">5</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Total Production</span>
              <span className="text-green-600 font-bold">14,235</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Cross-Plant Orders</span>
              <span className="text-blue-600 font-bold">12</span>
            </div>
            <button className="w-full p-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-sm font-medium">
              Plant Overview
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Manufacturing Features Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Cost Management */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <DollarSign className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Cost Management</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
              <span className="text-sm font-medium text-emerald-800">Standard Cost</span>
              <span className="text-emerald-600 font-bold">$487K</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="text-sm font-medium text-red-800">Actual Cost</span>
              <span className="text-red-600 font-bold">$493K</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="text-sm font-medium text-yellow-800">Variance</span>
              <span className="text-yellow-600 font-bold">+1.2%</span>
            </div>
            <button className="w-full p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium">
              Cost Analysis
            </button>
          </div>
        </div>

        {/* Production Reporting */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-violet-100 rounded-lg">
              <FileSpreadsheet className="h-5 w-5 text-violet-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Production Reports</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-violet-50 rounded-lg">
              <span className="text-sm font-medium text-violet-800">Daily Reports</span>
              <span className="text-violet-600 font-bold">Auto</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">KPI Dashboard</span>
              <span className="text-blue-600 font-bold">Live</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Custom Reports</span>
              <span className="text-green-600 font-bold">23</span>
            </div>
            <button className="w-full p-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors text-sm font-medium">
              Generate Report
            </button>
          </div>
        </div>

        {/* Integration Hub */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-cyan-100 rounded-lg">
              <ArrowRightLeft className="h-5 w-5 text-cyan-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Integration Hub</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg">
              <span className="text-sm font-medium text-cyan-800">ERP Sync</span>
              <span className="text-cyan-600 font-bold">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">API Calls</span>
              <span className="text-green-600 font-bold">2.4K</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="text-sm font-medium text-purple-800">Connections</span>
              <span className="text-purple-600 font-bold">8</span>
            </div>
            <button className="w-full p-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-sm font-medium">
              Integration Setup
            </button>
          </div>
        </div>

        {/* Training & Compliance */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-100 rounded-lg">
              <BookOpen className="h-5 w-5 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Training & Compliance</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
              <span className="text-sm font-medium text-amber-800">Training Modules</span>
              <span className="text-amber-600 font-bold">24</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Certified Staff</span>
              <span className="text-green-600 font-bold">89%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="text-sm font-medium text-red-800">Pending Certs</span>
              <span className="text-red-600 font-bold">17</span>
            </div>
            <button className="w-full p-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium">
              Training Portal
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row - Advanced Features */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Inventory Integration */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-slate-100 rounded-lg">
              <Boxes className="h-5 w-5 text-slate-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Inventory Integration</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-800">Raw Materials</span>
              <span className="text-slate-600 font-bold">1,247</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="text-sm font-medium text-yellow-800">WIP Inventory</span>
              <span className="text-yellow-600 font-bold">89</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Finished Goods</span>
              <span className="text-green-600 font-bold">2,156</span>
            </div>
            <button className="w-full p-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium">
              Inventory View
            </button>
          </div>
        </div>

        {/* Workflow Automation */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-rose-100 rounded-lg">
              <Workflow className="h-5 w-5 text-rose-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Workflow Automation</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-rose-50 rounded-lg">
              <span className="text-sm font-medium text-rose-800">Active Workflows</span>
              <span className="text-rose-600 font-bold">12</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Automated Tasks</span>
              <span className="text-green-600 font-bold">347</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Time Saved</span>
              <span className="text-blue-600 font-bold">240h</span>
            </div>
            <button className="w-full p-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm font-medium">
              Workflow Designer
            </button>
          </div>
        </div>

        {/* Performance Analytics */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-lime-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-lime-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Performance Analytics</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-lime-50 rounded-lg">
              <span className="text-sm font-medium text-lime-800">Efficiency Score</span>
              <span className="text-lime-600 font-bold">91.2%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Throughput</span>
              <span className="text-blue-600 font-bold">2,847/day</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="text-sm font-medium text-purple-800">Predictive Alerts</span>
              <span className="text-purple-600 font-bold">3</span>
            </div>
            <button className="w-full p-2 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition-colors text-sm font-medium">
              Analytics Dashboard
            </button>
          </div>
        </div>

        {/* Mobile Manufacturing */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-sky-100 rounded-lg">
              <Headphones className="h-5 w-5 text-sky-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Mobile Manufacturing</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
              <span className="text-sm font-medium text-sky-800">Mobile Users</span>
              <span className="text-sky-600 font-bold">89</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">App Downloads</span>
              <span className="text-green-600 font-bold">156</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <span className="text-sm font-medium text-orange-800">Offline Sync</span>
              <span className="text-orange-600 font-bold">Active</span>
            </div>
            <button className="w-full p-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium">
              Mobile Portal
            </button>
          </div>
        </div>
      </div>

      {/* Live Production Feed */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Live Production Feed</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-600 font-medium">Live Updates</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Production Status */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Production Line Status</h4>
            <div className="space-y-3">
              {[
                { line: 'Assembly Line A', status: 'running', output: '342/350', efficiency: 98 },
                { line: 'Testing Line B', status: 'running', output: '428/400', efficiency: 107 },
                { line: 'Packaging Line C', status: 'maintenance', output: '0/600', efficiency: 0 },
                { line: 'QC Line D', status: 'running', output: '267/300', efficiency: 89 },
              ].map((line, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      line.status === 'running' ? 'bg-green-500' : 
                      line.status === 'maintenance' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                    <span className="font-medium text-gray-900">{line.line}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{line.output}</div>
                    <div className={`text-xs ${
                      line.efficiency >= 100 ? 'text-green-600' :
                      line.efficiency >= 90 ? 'text-blue-600' :
                      line.efficiency > 0 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {line.efficiency}% efficiency
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Recent Manufacturing Activities</h4>
            <div className="space-y-3">
              {[
                { time: '2 min ago', action: 'Work Order WO-2024-001 completed', type: 'success' },
                { time: '5 min ago', action: 'Quality check passed for Batch B-789', type: 'success' },
                { time: '8 min ago', action: 'Maintenance scheduled for Line C', type: 'warning' },
                { time: '12 min ago', action: 'New BOM created for Product SKU-456', type: 'info' },
                { time: '15 min ago', action: 'Material shortage alert for Component X', type: 'error' },
                { time: '18 min ago', action: 'Production target exceeded on Line B', type: 'success' },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'success' ? 'bg-green-500' :
                    activity.type === 'warning' ? 'bg-yellow-500' :
                    activity.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
