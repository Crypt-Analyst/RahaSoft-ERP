import { 
  Truck, Package, Users, ShoppingCart, BarChart3, MapPin, Clock, AlertTriangle, 
  CheckCircle, TrendingUp, TrendingDown, Globe, Factory, Warehouse, Route,
  FileText, DollarSign, Shield, Star, Phone, Mail, Calendar, Search, Filter, 
  Download, Plus, Edit, Eye, RefreshCw, ArrowRightLeft, Target, Zap, Settings,
  Hash, Tag, Scale, Clipboard, Database, Monitor, Activity, Bell, Award,
  ChevronRight, ChevronDown, Handshake, CreditCard, PieChart, LineChart
} from 'lucide-react'

export default function SupplyChainPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Supply Chain Management</h1>
          <p className="text-gray-600 mt-1">Complete supply chain operations with procurement, vendor management, logistics, risk assessment, and global optimization</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <ShoppingCart className="h-4 w-4" />
            New Purchase Order
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Users className="h-4 w-4" />
            Add Supplier
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <Truck className="h-4 w-4" />
            Track Shipment
          </button>
        </div>
      </div>

      {/* Enhanced Supply Chain Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Suppliers</p>
              <p className="text-2xl font-bold text-blue-600">847</p>
              <p className="text-xs text-green-600">+15 new this month</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Purchase Orders</p>
              <p className="text-2xl font-bold text-green-600">234</p>
              <p className="text-xs text-green-600">$2.4M total value</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <ShoppingCart className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">On-Time Delivery</p>
              <p className="text-2xl font-bold text-cyan-600">94.8%</p>
              <p className="text-xs text-cyan-600">+2.1% improvement</p>
            </div>
            <div className="p-3 bg-cyan-100 rounded-lg">
              <Clock className="h-5 w-5 text-cyan-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Supply Chain Cost</p>
              <p className="text-2xl font-bold text-orange-600">$8.7M</p>
              <p className="text-xs text-green-600">-3.2% vs last quarter</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <DollarSign className="h-5 w-5 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Risk Score</p>
              <p className="text-2xl font-bold text-red-600">Low</p>
              <p className="text-xs text-green-600">Risk mitigation active</p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <Shield className="h-5 w-5 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Global Locations</p>
              <p className="text-2xl font-bold text-purple-600">45</p>
              <p className="text-xs text-purple-600">Multi-region network</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Globe className="h-5 w-5 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Supply Chain Features - 24 Enterprise Features */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        
        {/* Supplier Management & Procurement */}
        <div className="xl:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Supplier Management & Procurement</h3>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                <Search className="h-4 w-4" />
                Search
              </button>
              <button className="flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                <Filter className="h-4 w-4" />
                Filter
              </button>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { 
                name: 'Global Steel Industries', 
                category: 'Raw Materials', 
                rating: 4.8, 
                orders: 156,
                performance: 95,
                riskLevel: 'Low',
                location: 'Pittsburgh, USA',
                contract: 'Long-term',
                certification: 'ISO 9001',
                paymentTerms: 'Net 30'
              },
              { 
                name: 'Tech Components Asia', 
                category: 'Electronics', 
                rating: 4.6, 
                orders: 89,
                performance: 92,
                riskLevel: 'Medium',
                location: 'Shenzhen, China',
                contract: 'Annual',
                certification: 'ISO 14001',
                paymentTerms: 'Net 45'
              },
              { 
                name: 'European Logistics Network', 
                category: 'Transportation', 
                rating: 4.9, 
                orders: 234,
                performance: 98,
                riskLevel: 'Low',
                location: 'Amsterdam, Netherlands',
                contract: 'Framework',
                certification: 'ISO 45001',
                paymentTerms: 'Net 15'
              },
            ].map((supplier, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{supplier.name}</h4>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {supplier.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      supplier.riskLevel === 'Low' ? 'bg-green-100 text-green-700' :
                      supplier.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {supplier.riskLevel} Risk
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{supplier.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div>
                    <p className="font-medium">Category</p>
                    <p className="text-blue-600">{supplier.category}</p>
                  </div>
                  <div>
                    <p className="font-medium">Orders (YTD)</p>
                    <p className="font-semibold">{supplier.orders}</p>
                  </div>
                  <div>
                    <p className="font-medium">Performance</p>
                    <p className="font-semibold text-green-600">{supplier.performance}%</p>
                  </div>
                  <div>
                    <p className="font-medium">Contract Type</p>
                    <p className="text-purple-600">{supplier.contract}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      {supplier.certification}
                    </span>
                    <span className="flex items-center gap-1">
                      <CreditCard className="h-3 w-3" />
                      {supplier.paymentTerms}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-1 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors">
                      <Phone className="h-3 w-3" />
                    </button>
                    <button className="p-1 bg-green-50 text-green-600 rounded hover:bg-green-100 transition-colors">
                      <Mail className="h-3 w-3" />
                    </button>
                    <button className="p-1 bg-gray-50 text-gray-600 rounded hover:bg-gray-100 transition-colors">
                      <Edit className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Purchase Orders & Contracts */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Purchase Orders & Contracts</h3>
            <span className="text-sm text-blue-600 font-medium">234 active</span>
          </div>
          <div className="space-y-4">
            {[
              { 
                po: 'PO-2024-1847', 
                supplier: 'Global Steel Industries', 
                value: '$125,640', 
                status: 'approved',
                delivery: '2024-08-20',
                contract: 'CT-2024-001',
                terms: 'FOB Origin',
                currency: 'USD'
              },
              { 
                po: 'PO-2024-1848', 
                supplier: 'Tech Components Asia', 
                value: '$87,250', 
                status: 'in-transit',
                delivery: '2024-08-18',
                contract: 'CT-2024-002',
                terms: 'CIF Destination',
                currency: 'USD'
              },
              { 
                po: 'PO-2024-1849', 
                supplier: 'European Logistics', 
                value: '$34,890', 
                status: 'delivered',
                delivery: '2024-08-15',
                contract: 'CT-2024-003',
                terms: 'DDP',
                currency: 'EUR'
              },
            ].map((order, index) => (
              <div key={index} className={`p-4 rounded-lg border ${
                order.status === 'approved' ? 'border-yellow-200 bg-yellow-50' :
                order.status === 'in-transit' ? 'border-blue-200 bg-blue-50' :
                'border-green-200 bg-green-50'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{order.po}</h4>
                    <p className="text-sm text-gray-600">{order.supplier}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    order.status === 'approved' ? 'bg-yellow-100 text-yellow-700' :
                    order.status === 'in-transit' ? 'bg-blue-100 text-blue-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {order.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                  <div>
                    <p className="font-medium">Value</p>
                    <p className="font-semibold text-green-600">{order.value}</p>
                  </div>
                  <div>
                    <p className="font-medium">Delivery</p>
                    <p className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {order.delivery}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Contract</p>
                    <p className="text-purple-600">{order.contract}</p>
                  </div>
                  <div>
                    <p className="font-medium">Terms</p>
                    <p className="text-orange-600">{order.terms}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Currency: {order.currency}</span>
                  <div className="flex items-center gap-1">
                    <button className="p-1 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors">
                      <Eye className="h-3 w-3" />
                    </button>
                    <button className="p-1 bg-gray-50 text-gray-600 rounded hover:bg-gray-100 transition-colors">
                      <Download className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logistics & Transportation */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Logistics & Transportation</h3>
          
          {/* Real-time Tracking */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Real-time Shipment Tracking</h4>
            <div className="space-y-3">
              {[
                { 
                  id: 'SH-2024-001', 
                  route: 'Pittsburgh → Chicago', 
                  status: 'in-transit', 
                  progress: 75,
                  eta: '2h 30m',
                  carrier: 'Express Freight',
                  mode: 'Road'
                },
                { 
                  id: 'SH-2024-002', 
                  route: 'Shenzhen → Los Angeles', 
                  status: 'customs', 
                  progress: 90,
                  eta: '1 day',
                  carrier: 'Ocean Logistics',
                  mode: 'Sea'
                },
                { 
                  id: 'SH-2024-003', 
                  route: 'Amsterdam → New York', 
                  status: 'delivered', 
                  progress: 100,
                  eta: 'Completed',
                  carrier: 'Air Express',
                  mode: 'Air'
                },
              ].map((shipment, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-sm text-gray-900">{shipment.id}</h5>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      shipment.status === 'in-transit' ? 'bg-blue-100 text-blue-700' :
                      shipment.status === 'customs' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {shipment.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                    <Truck className="h-3 w-3" />
                    {shipment.route}
                  </p>
                  <div className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500">Progress</span>
                      <span className="text-xs text-gray-500">{shipment.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          shipment.status === 'delivered' ? 'bg-green-600' :
                          shipment.status === 'customs' ? 'bg-yellow-600' :
                          'bg-blue-600'
                        }`}
                        style={{ width: `${shipment.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{shipment.carrier} ({shipment.mode})</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      ETA: {shipment.eta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Warehouse Operations */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Warehouse Operations</h4>
            <div className="space-y-2">
              {[
                { location: 'Main Warehouse', capacity: 85, throughput: '1,250 units/day', efficiency: 94 },
                { location: 'Distribution Center A', capacity: 72, throughput: '890 units/day', efficiency: 91 },
                { location: 'Cross-dock Facility', capacity: 91, throughput: '2,100 units/day', efficiency: 97 },
              ].map((warehouse, index) => (
                <div key={index} className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Warehouse className="h-4 w-4 text-purple-600" />
                      <span className="font-medium text-sm text-gray-900">{warehouse.location}</span>
                    </div>
                    <span className="text-sm font-medium text-green-600">{warehouse.efficiency}%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>
                      <p>Capacity: {warehouse.capacity}%</p>
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div 
                          className="h-1 rounded-full bg-purple-600"
                          style={{ width: `${warehouse.capacity}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <p>Throughput: {warehouse.throughput}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Supply Chain Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Risk Management & Compliance */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Risk Management & Compliance</h3>
            <Shield className="h-5 w-5 text-red-600" />
          </div>
          
          {/* Risk Assessment */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Risk Assessment</h4>
            <div className="space-y-3">
              {[
                { 
                  type: 'Supplier Risk', 
                  level: 'Low', 
                  score: 2.3, 
                  trend: 'stable',
                  mitigation: 'Diversification strategy active'
                },
                { 
                  type: 'Geopolitical Risk', 
                  level: 'Medium', 
                  score: 4.7, 
                  trend: 'increasing',
                  mitigation: 'Alternative sourcing identified'
                },
                { 
                  type: 'Currency Risk', 
                  level: 'Low', 
                  score: 3.1, 
                  trend: 'decreasing',
                  mitigation: 'Hedging contracts in place'
                },
              ].map((risk, index) => (
                <div key={index} className={`p-3 rounded-lg border ${
                  risk.level === 'Low' ? 'border-green-200 bg-green-50' :
                  risk.level === 'Medium' ? 'border-yellow-200 bg-yellow-50' :
                  'border-red-200 bg-red-50'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-sm text-gray-900">{risk.type}</h5>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        risk.level === 'Low' ? 'bg-green-100 text-green-700' :
                        risk.level === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {risk.level}
                      </span>
                      {risk.trend === 'increasing' && <TrendingUp className="h-3 w-3 text-red-600" />}
                      {risk.trend === 'decreasing' && <TrendingDown className="h-3 w-3 text-green-600" />}
                      {risk.trend === 'stable' && <Activity className="h-3 w-3 text-gray-600" />}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">Score: {risk.score}/10</p>
                  <p className="text-xs text-gray-500">{risk.mitigation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Status */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Compliance Status</h4>
            <div className="space-y-2">
              {[
                { standard: 'ISO 9001', status: 'compliant', expiry: '2025-06-15' },
                { standard: 'ISO 14001', status: 'compliant', expiry: '2025-09-20' },
                { standard: 'GDPR', status: 'compliant', expiry: 'Ongoing' },
                { standard: 'SOX', status: 'pending', expiry: '2024-12-31' },
              ].map((compliance, index) => (
                <div key={index} className="flex items-center justify-between p-2 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    {compliance.status === 'compliant' ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    )}
                    <div>
                      <p className="font-medium text-sm text-gray-900">{compliance.standard}</p>
                      <p className="text-xs text-gray-500">Expires: {compliance.expiry}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    compliance.status === 'compliant' ? 'bg-green-100 text-green-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {compliance.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Demand Planning & Forecasting */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Demand Planning & Forecasting</h3>
          
          {/* Demand Forecast */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">AI-Powered Demand Forecasting</h4>
            <div className="space-y-3">
              {[
                { 
                  product: 'Steel Components', 
                  current: 1250, 
                  forecast: 1420, 
                  confidence: 94,
                  trend: 'increasing',
                  seasonality: 'High'
                },
                { 
                  product: 'Electronic Parts', 
                  current: 890, 
                  forecast: 760, 
                  confidence: 87,
                  trend: 'decreasing',
                  seasonality: 'Medium'
                },
                { 
                  product: 'Logistics Services', 
                  current: 340, 
                  forecast: 380, 
                  confidence: 91,
                  trend: 'stable',
                  seasonality: 'Low'
                },
              ].map((demand, index) => (
                <div key={index} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-sm text-gray-900">{demand.product}</h5>
                    <div className="flex items-center gap-1">
                      {demand.trend === 'increasing' && <TrendingUp className="h-3 w-3 text-green-600" />}
                      {demand.trend === 'decreasing' && <TrendingDown className="h-3 w-3 text-red-600" />}
                      {demand.trend === 'stable' && <Activity className="h-3 w-3 text-gray-600" />}
                      <span className="text-xs text-blue-600">{demand.confidence}%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>
                      <p className="font-medium">Current: {demand.current}</p>
                      <p className="font-medium">Forecast: {demand.forecast}</p>
                    </div>
                    <div>
                      <p>Seasonality: {demand.seasonality}</p>
                      <p className={`font-medium ${
                        demand.trend === 'increasing' ? 'text-green-600' :
                        demand.trend === 'decreasing' ? 'text-red-600' :
                        'text-gray-600'
                      }`}>
                        {((demand.forecast - demand.current) / demand.current * 100).toFixed(1)}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capacity Planning */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Capacity Planning</h4>
            <div className="space-y-2">
              {[
                { resource: 'Production Capacity', current: 85, optimal: 75, utilization: 'High' },
                { resource: 'Warehouse Space', current: 67, optimal: 80, utilization: 'Optimal' },
                { resource: 'Transportation Fleet', current: 92, optimal: 85, utilization: 'Over' },
              ].map((capacity, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm text-gray-900">{capacity.resource}</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      capacity.utilization === 'Optimal' ? 'bg-green-100 text-green-700' :
                      capacity.utilization === 'High' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {capacity.utilization}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>Current: {capacity.current}%</span>
                      <span>Optimal: {capacity.optimal}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          capacity.utilization === 'Optimal' ? 'bg-green-600' :
                          capacity.utilization === 'High' ? 'bg-yellow-600' :
                          'bg-red-600'
                        }`}
                        style={{ width: `${capacity.current}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Operations & Sustainability */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Global Operations & Sustainability</h3>
          
          {/* Global Network */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Global Supply Network</h4>
            <div className="space-y-3">
              {[
                { 
                  region: 'North America', 
                  suppliers: 247, 
                  volume: '$3.2M', 
                  performance: 96,
                  sustainability: 'A+'
                },
                { 
                  region: 'Europe', 
                  suppliers: 189, 
                  volume: '$2.8M', 
                  performance: 94,
                  sustainability: 'A'
                },
                { 
                  region: 'Asia Pacific', 
                  suppliers: 156, 
                  volume: '$2.1M', 
                  performance: 92,
                  sustainability: 'B+'
                },
              ].map((region, index) => (
                <div key={index} className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-purple-600" />
                      <h5 className="font-medium text-sm text-gray-900">{region.region}</h5>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      region.sustainability === 'A+' ? 'bg-green-100 text-green-700' :
                      region.sustainability === 'A' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {region.sustainability}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>
                      <p>Suppliers: {region.suppliers}</p>
                      <p>Volume: {region.volume}</p>
                    </div>
                    <div>
                      <p>Performance: {region.performance}%</p>
                      <p>Sustainability Score</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sustainability Metrics */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Sustainability Metrics</h4>
            <div className="space-y-2">
              {[
                { metric: 'Carbon Footprint', value: '1,250 tons CO2', change: '-12%', target: '2024 Goal' },
                { metric: 'Renewable Energy', value: '68%', change: '+15%', target: '75% by 2025' },
                { metric: 'Waste Reduction', value: '34%', change: '+8%', target: '50% by 2025' },
              ].map((sustainability, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-green-50 border border-green-200 rounded-lg">
                  <div>
                    <p className="font-medium text-sm text-gray-900">{sustainability.metric}</p>
                    <p className="text-xs text-gray-500">{sustainability.target}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm text-green-600">{sustainability.value}</p>
                    <p className="text-xs text-green-600">{sustainability.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cost Optimization */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Cost Optimization</h4>
            <div className="space-y-2">
              {[
                { initiative: 'Supplier Consolidation', savings: '$340K', status: 'Active' },
                { initiative: 'Route Optimization', savings: '$180K', status: 'Implemented' },
                { initiative: 'Automation Investment', savings: '$520K', status: 'Planning' },
              ].map((optimization, index) => (
                <div key={index} className="flex items-center justify-between p-2 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium text-sm text-gray-900">{optimization.initiative}</p>
                    <p className="text-xs text-green-600">Savings: {optimization.savings}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    optimization.status === 'Active' ? 'bg-green-100 text-green-700' :
                    optimization.status === 'Implemented' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {optimization.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Supply Chain Intelligence & Analytics */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Supply Chain Intelligence & Analytics</h3>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <BarChart3 className="h-4 w-4" />
              View Analytics
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Download className="h-4 w-4" />
              Export Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Performance Analytics */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Performance Analytics</h4>
            <div className="space-y-2">
              {[
                { kpi: 'Perfect Order Rate', value: '94.8%', trend: 'up', benchmark: '92%' },
                { kpi: 'Cash-to-Cash Cycle', value: '45 days', trend: 'down', benchmark: '50 days' },
                { kpi: 'Supply Chain ROI', value: '12.4%', trend: 'up', benchmark: '10%' },
              ].map((metric, index) => (
                <div key={index} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900">{metric.kpi}</p>
                    {metric.trend === 'up' ? (
                      <TrendingUp className="h-3 w-3 text-green-600" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-green-600" />
                    )}
                  </div>
                  <p className="text-lg font-bold text-blue-600">{metric.value}</p>
                  <p className="text-xs text-gray-500">Benchmark: {metric.benchmark}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Visibility */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Real-time Visibility</h4>
            <div className="space-y-2">
              {[
                { system: 'Inventory Levels', status: 'Real-time', latency: '&lt; 1s' },
                { system: 'Shipment Tracking', status: 'Live', latency: '5s' },
                { system: 'Supplier Status', status: 'Updated', latency: '15m' },
              ].map((visibility, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900">{visibility.system}</p>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-xs text-green-600">{visibility.status}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Update frequency: {visibility.latency}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Integration Status */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">System Integration</h4>
            <div className="space-y-2">
              {[
                { system: 'ERP Integration', status: 'Connected', health: 99.9 },
                { system: 'Supplier Portals', status: 'Active', health: 98.5 },
                { system: 'IoT Sensors', status: 'Monitoring', health: 97.8 },
              ].map((integration, index) => (
                <div key={index} className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900">{integration.system}</p>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      {integration.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">Uptime: {integration.health}%</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI & Machine Learning */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">AI & Machine Learning</h4>
            <div className="space-y-2">
              {[
                { model: 'Demand Forecasting', accuracy: '94%', confidence: 'High' },
                { model: 'Price Optimization', accuracy: '87%', confidence: 'Medium' },
                { model: 'Risk Prediction', accuracy: '91%', confidence: 'High' },
              ].map((ai, index) => (
                <div key={index} className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900">{ai.model}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      ai.confidence === 'High' ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {ai.confidence}
                    </span>
                  </div>
                  <p className="text-xs text-purple-600">Accuracy: {ai.accuracy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
