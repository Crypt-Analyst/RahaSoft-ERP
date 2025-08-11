import { 
  TrendingUp, ShoppingCart, Target, Users, DollarSign, BarChart3, Mail, Phone, Plus, Calendar,
  FileText, Globe, Search, Filter, Download, Edit, Eye, Zap, Megaphone, Share2,
  MessageSquare, Star, Award, Gift, Percent, Clock, ArrowRightLeft, RefreshCw,
  MapPin, Smartphone, Monitor, PieChart, LineChart, Activity, Bell, Settings,
  Tag, Hash, Clipboard, BookOpen, Database, Headphones, Video, Camera
} from 'lucide-react'

export default function SalesPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sales & Marketing</h1>
          <p className="text-gray-600 mt-1">Complete sales automation, marketing campaigns, analytics, and customer engagement platform</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Megaphone className="h-4 w-4" />
            New Campaign
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <ShoppingCart className="h-4 w-4" />
            Create Order
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <Users className="h-4 w-4" />
            Lead Capture
          </button>
        </div>
      </div>

      {/* Enhanced Sales & Marketing Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
              <p className="text-2xl font-bold text-green-600">$487K</p>
              <p className="text-xs text-green-600">+18% vs last month</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">New Orders</p>
              <p className="text-2xl font-bold text-blue-600">156</p>
              <p className="text-xs text-blue-600">This month</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <ShoppingCart className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
              <p className="text-2xl font-bold text-purple-600">12</p>
              <p className="text-xs text-purple-600">8 email, 4 social</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Megaphone className="h-5 w-5 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-orange-600">24.7%</p>
              <p className="text-xs text-orange-600">Lead to customer</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <Target className="h-5 w-5 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Marketing ROI</p>
              <p className="text-2xl font-bold text-teal-600">347%</p>
              <p className="text-xs text-teal-600">Campaign performance</p>
            </div>
            <div className="p-3 bg-teal-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-teal-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Customer LTV</p>
              <p className="text-2xl font-bold text-indigo-600">$2,847</p>
              <p className="text-xs text-indigo-600">Average lifetime value</p>
            </div>
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Star className="h-5 w-5 text-indigo-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Live Sales & Marketing Features Grid - All 18 Features */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sales Pipeline Management */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BarChart3 className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Sales Pipeline</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Prospects</span>
              <span className="text-blue-600 font-bold">127</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="text-sm font-medium text-yellow-800">Qualified Leads</span>
              <span className="text-yellow-600 font-bold">89</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Closing Soon</span>
              <span className="text-green-600 font-bold">23</span>
            </div>
            <button className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              Manage Pipeline
            </button>
          </div>
        </div>

        {/* Lead Management */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Lead Management</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">New Leads</span>
              <span className="text-green-600 font-bold">34</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <span className="text-sm font-medium text-orange-800">Follow-ups Due</span>
              <span className="text-orange-600 font-bold">17</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="text-sm font-medium text-purple-800">Hot Leads</span>
              <span className="text-purple-600 font-bold">12</span>
            </div>
            <button className="w-full p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
              Lead Dashboard
            </button>
          </div>
        </div>

        {/* Order Processing */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <ShoppingCart className="h-5 w-5 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Order Processing</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <span className="text-sm font-medium text-orange-800">Pending Orders</span>
              <span className="text-orange-600 font-bold">45</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Processing</span>
              <span className="text-blue-600 font-bold">23</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Shipped Today</span>
              <span className="text-green-600 font-bold">67</span>
            </div>
            <button className="w-full p-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium">
              Order Center
            </button>
          </div>
        </div>

        {/* Campaign Management */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Megaphone className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Campaign Management</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="text-sm font-medium text-purple-800">Active Campaigns</span>
              <span className="text-purple-600 font-bold">12</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Email Open Rate</span>
              <span className="text-green-600 font-bold">34.7%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Click-through Rate</span>
              <span className="text-blue-600 font-bold">8.9%</span>
            </div>
            <button className="w-full p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
              Campaign Hub
            </button>
          </div>
        </div>
      </div>

      {/* Sales & Marketing Features Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Customer Analytics */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <PieChart className="h-5 w-5 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Customer Analytics</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg">
              <span className="text-sm font-medium text-indigo-800">Customer LTV</span>
              <span className="text-indigo-600 font-bold">$2,847</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Retention Rate</span>
              <span className="text-green-600 font-bold">89.3%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="text-sm font-medium text-yellow-800">Churn Risk</span>
              <span className="text-yellow-600 font-bold">23 customers</span>
            </div>
            <button className="w-full p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
              Analytics Hub
            </button>
          </div>
        </div>

        {/* Marketing Automation */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-cyan-100 rounded-lg">
              <Zap className="h-5 w-5 text-cyan-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Marketing Automation</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg">
              <span className="text-sm font-medium text-cyan-800">Active Workflows</span>
              <span className="text-cyan-600 font-bold">18</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Auto Responses</span>
              <span className="text-green-600 font-bold">1,247</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="text-sm font-medium text-purple-800">Triggered Emails</span>
              <span className="text-purple-600 font-bold">89</span>
            </div>
            <button className="w-full p-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-sm font-medium">
              Automation Center
            </button>
          </div>
        </div>

        {/* Social Media Management */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-pink-100 rounded-lg">
              <Share2 className="h-5 w-5 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Social Media</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
              <span className="text-sm font-medium text-pink-800">Scheduled Posts</span>
              <span className="text-pink-600 font-bold">24</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Engagement Rate</span>
              <span className="text-blue-600 font-bold">12.4%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Followers Growth</span>
              <span className="text-green-600 font-bold">+347</span>
            </div>
            <button className="w-full p-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-sm font-medium">
              Social Hub
            </button>
          </div>
        </div>

        {/* Email Marketing */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-100 rounded-lg">
              <Mail className="h-5 w-5 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Email Marketing</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="text-sm font-medium text-red-800">Subscribers</span>
              <span className="text-red-600 font-bold">12,847</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Open Rate</span>
              <span className="text-green-600 font-bold">28.7%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Sent This Week</span>
              <span className="text-blue-600 font-bold">4,234</span>
            </div>
            <button className="w-full p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
              Email Center
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Sales & Marketing Features Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sales Forecasting */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <LineChart className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Sales Forecasting</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
              <span className="text-sm font-medium text-emerald-800">Q4 Forecast</span>
              <span className="text-emerald-600 font-bold">$1.2M</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Accuracy Rate</span>
              <span className="text-blue-600 font-bold">94.2%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="text-sm font-medium text-purple-800">AI Predictions</span>
              <span className="text-purple-600 font-bold">Active</span>
            </div>
            <button className="w-full p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium">
              Forecast Dashboard
            </button>
          </div>
        </div>

        {/* Loyalty Programs */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Gift className="h-5 w-5 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Loyalty Programs</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
              <span className="text-sm font-medium text-amber-800">Active Members</span>
              <span className="text-amber-600 font-bold">5,247</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Points Redeemed</span>
              <span className="text-green-600 font-bold">89,340</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Tier Upgrades</span>
              <span className="text-blue-600 font-bold">23</span>
            </div>
            <button className="w-full p-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium">
              Loyalty Center
            </button>
          </div>
        </div>

        {/* Promotions & Discounts */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-violet-100 rounded-lg">
              <Percent className="h-5 w-5 text-violet-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Promotions</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-violet-50 rounded-lg">
              <span className="text-sm font-medium text-violet-800">Active Promos</span>
              <span className="text-violet-600 font-bold">7</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <span className="text-sm font-medium text-orange-800">Discount Usage</span>
              <span className="text-orange-600 font-bold">1,234</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Revenue Impact</span>
              <span className="text-green-600 font-bold">+$89K</span>
            </div>
            <button className="w-full p-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors text-sm font-medium">
              Promo Manager
            </button>
          </div>
        </div>

        {/* Product Recommendations */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Award className="h-5 w-5 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Product Recommendations</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
              <span className="text-sm font-medium text-teal-800">AI Suggestions</span>
              <span className="text-teal-600 font-bold">2,847</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="text-sm font-medium text-purple-800">Click Rate</span>
              <span className="text-purple-600 font-bold">23.4%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Conversion</span>
              <span className="text-green-600 font-bold">8.9%</span>
            </div>
            <button className="w-full p-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium">
              AI Recommendations
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row - Advanced Features */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Event Marketing */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-rose-100 rounded-lg">
              <Calendar className="h-5 w-5 text-rose-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Event Marketing</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-rose-50 rounded-lg">
              <span className="text-sm font-medium text-rose-800">Upcoming Events</span>
              <span className="text-rose-600 font-bold">5</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Registrations</span>
              <span className="text-blue-600 font-bold">347</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Event ROI</span>
              <span className="text-green-600 font-bold">234%</span>
            </div>
            <button className="w-full p-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm font-medium">
              Event Center
            </button>
          </div>
        </div>

        {/* Content Marketing */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-lime-100 rounded-lg">
              <BookOpen className="h-5 w-5 text-lime-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Content Marketing</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-lime-50 rounded-lg">
              <span className="text-sm font-medium text-lime-800">Published Posts</span>
              <span className="text-lime-600 font-bold">89</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="text-sm font-medium text-purple-800">Total Views</span>
              <span className="text-purple-600 font-bold">45.2K</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Engagement</span>
              <span className="text-blue-600 font-bold">8.7%</span>
            </div>
            <button className="w-full p-2 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition-colors text-sm font-medium">
              Content Hub
            </button>
          </div>
        </div>

        {/* Sales Communication */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-sky-100 rounded-lg">
              <MessageSquare className="h-5 w-5 text-sky-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Sales Communication</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
              <span className="text-sm font-medium text-sky-800">Active Chats</span>
              <span className="text-sky-600 font-bold">23</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Response Time</span>
              <span className="text-green-600 font-bold">&lt; 2 min</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="text-sm font-medium text-yellow-800">Pending Follow-ups</span>
              <span className="text-yellow-600 font-bold">17</span>
            </div>
            <button className="w-full p-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium">
              Communication Hub
            </button>
          </div>
        </div>

        {/* Multi-Channel Integration */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-slate-100 rounded-lg">
              <Globe className="h-5 w-5 text-slate-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Multi-Channel</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-800">Connected Channels</span>
              <span className="text-slate-600 font-bold">8</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Sync Status</span>
              <span className="text-green-600 font-bold">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Data Points</span>
              <span className="text-blue-600 font-bold">12.4K</span>
            </div>
            <button className="w-full p-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium">
              Channel Manager
            </button>
          </div>
        </div>
      </div>

      {/* Live Sales & Marketing Activity Feed */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Live Sales & Marketing Activity</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-600 font-medium">Real-time Updates</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Pipeline Activities */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Sales Pipeline Updates</h4>
            <div className="space-y-3">
              {[
                { contact: 'John Smith - Acme Corp', action: 'Moved to "Closing Soon"', value: '$45,000', time: '5 min ago', type: 'success' },
                { contact: 'Sarah Johnson - TechStart', action: 'Scheduled demo call', value: '$12,000', time: '12 min ago', type: 'info' },
                { contact: 'Mike Davis - GlobalTech', action: 'Sent proposal', value: '$78,000', time: '25 min ago', type: 'info' },
                { contact: 'Lisa Chen - InnovateCo', action: 'Deal won!', value: '$23,000', time: '45 min ago', type: 'success' },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
                  <div className={`w-3 h-3 rounded-full mt-2 ${
                    activity.type === 'success' ? 'bg-green-500' :
                    activity.type === 'info' ? 'bg-blue-500' : 'bg-yellow-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.contact}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-green-600 font-medium">{activity.value}</span>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing Campaign Performance */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Campaign Performance Updates</h4>
            <div className="space-y-3">
              {[
                { campaign: 'Summer Sale Email Campaign', metric: 'Open rate: 34.7%', performance: '+12% vs avg', time: '8 min ago', type: 'success' },
                { campaign: 'Social Media Product Launch', metric: 'Engagement: 8.9%', performance: 'Meeting targets', time: '15 min ago', type: 'info' },
                { campaign: 'LinkedIn Lead Generation', metric: '23 new leads captured', performance: '+45% this week', time: '32 min ago', type: 'success' },
                { campaign: 'Retargeting Display Ads', metric: 'CTR: 2.4%', performance: 'Below threshold', time: '1 hour ago', type: 'warning' },
              ].map((campaign, index) => (
                <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    campaign.type === 'success' ? 'bg-green-500' :
                    campaign.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{campaign.campaign}</p>
                    <p className="text-sm text-gray-600">{campaign.metric}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className={`text-xs font-medium ${
                        campaign.type === 'success' ? 'text-green-600' :
                        campaign.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                      }`}>{campaign.performance}</span>
                      <span className="text-xs text-gray-500">{campaign.time}</span>
                    </div>
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
