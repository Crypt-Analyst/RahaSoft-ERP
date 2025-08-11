import { 
  Package, Plus, AlertTriangle, TrendingDown, TrendingUp, Warehouse, ShoppingCart, BarChart3,
  QrCode, Tag, Clock, MapPin, ArrowRightLeft, FileText, Scale, RefreshCw, Calendar,
  Truck, Users, ChevronRight, Search, Filter, Download, Settings, Eye, Edit,
  CheckCircle, XCircle, AlertCircle, DollarSign, Target, TrendingDown as TrendDown
} from 'lucide-react'

export default function InventoryPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600 mt-1">Complete inventory control with real-time tracking, multi-warehouse management, and advanced analytics</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="h-4 w-4" />
            Add Product
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <ShoppingCart className="h-4 w-4" />
            Purchase Order
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <QrCode className="h-4 w-4" />
            Barcode Scanner
          </button>
        </div>
      </div>

      {/* Enhanced Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Products</p>
              <p className="text-2xl font-bold text-gray-900">1,847</p>
              <p className="text-xs text-green-600">+12% vs last month</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Package className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Low Stock Items</p>
              <p className="text-2xl font-bold text-red-600">23</p>
              <p className="text-xs text-red-600">Needs attention</p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Inventory Value</p>
              <p className="text-2xl font-bold text-green-600">$2.8M</p>
              <p className="text-xs text-green-600">FIFO method</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Warehouses</p>
              <p className="text-2xl font-bold text-purple-600">8</p>
              <p className="text-xs text-purple-600">Multi-location</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Warehouse className="h-5 w-5 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Purchase Orders</p>
              <p className="text-2xl font-bold text-orange-600">47</p>
              <p className="text-xs text-orange-600">15 pending</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <FileText className="h-5 w-5 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Stock Turnover</p>
              <p className="text-2xl font-bold text-cyan-600">6.2x</p>
              <p className="text-xs text-cyan-600">Annual rate</p>
            </div>
            <div className="p-3 bg-cyan-100 rounded-lg">
              <RefreshCw className="h-5 w-5 text-cyan-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Content Grid - 20 Enterprise Features */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        
        {/* Product Catalog & Stock Tracking */}
        <div className="xl:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Product Catalog & Real-Time Stock</h3>
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
                name: 'MacBook Pro 16"', 
                sku: 'MBP-16-2024', 
                stock: 45, 
                warehouse: 'Main Warehouse',
                batch: 'BTH-2024-001',
                serial: '12',
                valuation: 'FIFO',
                value: '$89,550',
                expiry: null,
                barcode: '1234567890123'
              },
              { 
                name: 'iPhone 15 Pro', 
                sku: 'IP15-PRO-256', 
                stock: 127, 
                warehouse: 'Electronics Hub',
                batch: 'BTH-2024-002',
                serial: '78',
                valuation: 'Weighted Avg',
                value: '$126,730',
                expiry: null,
                barcode: '1234567890124'
              },
              { 
                name: 'Organic Protein Powder', 
                sku: 'OPP-VAN-2KG', 
                stock: 234, 
                warehouse: 'Health & Wellness',
                batch: 'BTH-2024-003',
                serial: null,
                valuation: 'LIFO',
                value: '$11,700',
                expiry: '2025-12-15',
                barcode: '1234567890125'
              },
            ].map((product, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-medium text-gray-900">{product.name}</h4>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">SKU: {product.sku}</span>
                      {product.expiry && (
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Exp: {product.expiry}
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {product.warehouse}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Batch/Lot</p>
                        <p className="flex items-center gap-1">
                          <Tag className="h-3 w-3" />
                          {product.batch}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Valuation</p>
                        <p className="flex items-center gap-1">
                          <Scale className="h-3 w-3" />
                          {product.valuation}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Value</p>
                        <p className="font-semibold text-green-600">{product.value}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">{product.stock}</p>
                      <p className="text-xs text-gray-500">in stock</p>
                      {product.serial && (
                        <p className="text-xs text-purple-600">{product.serial} tracked items</p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                        <QrCode className="h-4 w-4" />
                      </button>
                      <button className="p-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stock Alerts & Actions */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Stock Alerts</h3>
            <span className="text-sm text-red-600 font-medium">23 alerts</span>
          </div>
          <div className="space-y-4">
            {[
              { type: 'low', name: 'Gaming Chair Pro', current: 3, threshold: 15, action: 'Reorder' },
              { type: 'overstock', name: 'Basic Mouse Pad', current: 1250, threshold: 200, action: 'Discount' },
              { type: 'expiring', name: 'Vitamin C 1000mg', current: 45, expiry: '2024-09-15', action: 'Promote' },
              { type: 'zero', name: 'Wireless Headphones', current: 0, threshold: 25, action: 'Emergency Order' },
            ].map((alert, index) => (
              <div key={index} className={`p-3 rounded-lg border ${
                alert.type === 'low' ? 'border-red-200 bg-red-50' :
                alert.type === 'overstock' ? 'border-orange-200 bg-orange-50' :
                alert.type === 'expiring' ? 'border-yellow-200 bg-yellow-50' :
                'border-red-300 bg-red-100'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {alert.type === 'low' && <AlertTriangle className="h-4 w-4 text-red-600" />}
                  {alert.type === 'overstock' && <TrendingUp className="h-4 w-4 text-orange-600" />}
                  {alert.type === 'expiring' && <Clock className="h-4 w-4 text-yellow-600" />}
                  {alert.type === 'zero' && <XCircle className="h-4 w-4 text-red-700" />}
                  <p className="font-medium text-gray-900 text-sm">{alert.name}</p>
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  {alert.type === 'expiring' ? (
                    <p>Expires: {alert.expiry}</p>
                  ) : (
                    <p>Current: {alert.current} | Target: {alert.threshold}</p>
                  )}
                </div>
                <button className={`w-full px-3 py-1 text-xs rounded transition-colors ${
                  alert.type === 'low' ? 'bg-red-600 text-white hover:bg-red-700' :
                  alert.type === 'overstock' ? 'bg-orange-600 text-white hover:bg-orange-700' :
                  alert.type === 'expiring' ? 'bg-yellow-600 text-white hover:bg-yellow-700' :
                  'bg-red-700 text-white hover:bg-red-800'
                }`}>
                  {alert.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Warehouse & Operations */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Warehouse Operations</h3>
          
          {/* Warehouse Status */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Multi-Warehouse Status</h4>
            <div className="space-y-2">
              {[
                { name: 'Main Warehouse', utilization: 85, items: 1247, status: 'optimal' },
                { name: 'Electronics Hub', utilization: 92, items: 456, status: 'high' },
                { name: 'Health & Wellness', utilization: 67, items: 234, status: 'optimal' },
                { name: 'Furniture Depot', utilization: 45, items: 89, status: 'low' },
              ].map((warehouse, index) => (
                <div key={index} className="flex items-center justify-between p-2 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Warehouse className="h-4 w-4 text-purple-600" />
                    <div>
                      <p className="font-medium text-sm text-gray-900">{warehouse.name}</p>
                      <p className="text-xs text-gray-600">{warehouse.items} items</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{warehouse.utilization}%</p>
                    <div className={`w-16 h-2 rounded-full ${
                      warehouse.status === 'optimal' ? 'bg-green-200' :
                      warehouse.status === 'high' ? 'bg-red-200' :
                      'bg-yellow-200'
                    }`}>
                      <div 
                        className={`h-2 rounded-full ${
                          warehouse.status === 'optimal' ? 'bg-green-600' :
                          warehouse.status === 'high' ? 'bg-red-600' :
                          'bg-yellow-600'
                        }`}
                        style={{ width: `${warehouse.utilization}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Operations */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Quick Operations</h4>
            <div className="grid grid-cols-2 gap-2">
              <button className="flex items-center gap-2 p-2 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <ArrowRightLeft className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">Stock Transfer</span>
              </button>
              <button className="flex items-center gap-2 p-2 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <RefreshCw className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-gray-900">Adjustment</span>
              </button>
              <button className="flex items-center gap-2 p-2 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <Truck className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-900">Goods Receipt</span>
              </button>
              <button className="flex items-center gap-2 p-2 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <Target className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium text-gray-900">Demand Forecast</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Orders & Supplier Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Purchase Orders & Supplier Management</h3>
            <button className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Plus className="h-4 w-4" />
              New PO
            </button>
          </div>
          <div className="space-y-4">
            {[
              { 
                po: 'PO-2024-001', 
                supplier: 'TechSource Inc.', 
                items: 15, 
                value: '$125,640', 
                status: 'pending',
                delivery: '2024-08-15',
                performance: 98
              },
              { 
                po: 'PO-2024-002', 
                supplier: 'HealthMax Distributors', 
                items: 8, 
                value: '$34,280', 
                status: 'shipped',
                delivery: '2024-08-12',
                performance: 95
              },
              { 
                po: 'PO-2024-003', 
                supplier: 'FurniturePlus Ltd.', 
                items: 12, 
                value: '$67,890', 
                status: 'delivered',
                delivery: '2024-08-10',
                performance: 92
              },
            ].map((order, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{order.po}</h4>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {order.supplier}
                    </p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                    order.status === 'shipped' ? 'bg-blue-100 text-blue-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {order.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p className="font-medium">Items: {order.items}</p>
                    <p className="font-medium">Value: {order.value}</p>
                  </div>
                  <div>
                    <p className="font-medium">Delivery: {order.delivery}</p>
                    <p className="font-medium">Supplier Score: {order.performance}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Returns Management & Integration */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Returns Management (RMA) & Integration</h3>
          
          {/* RMA Section */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Recent Returns</h4>
            <div className="space-y-3">
              {[
                { 
                  rma: 'RMA-2024-001', 
                  product: 'MacBook Pro 16"', 
                  reason: 'Defective screen', 
                  status: 'processing',
                  customer: 'John Smith'
                },
                { 
                  rma: 'RMA-2024-002', 
                  product: 'Gaming Chair Pro', 
                  reason: 'Wrong color', 
                  status: 'approved',
                  customer: 'Sarah Johnson'
                },
              ].map((rma, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-sm text-gray-900">{rma.rma}</h5>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      rma.status === 'processing' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {rma.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{rma.product}</p>
                  <p className="text-xs text-gray-500">Reason: {rma.reason}</p>
                  <p className="text-xs text-gray-500">Customer: {rma.customer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Integration Status */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">API & ERP Integration</h4>
            <div className="space-y-2">
              {[
                { system: 'POS System', status: 'connected', lastSync: '2 min ago' },
                { system: 'E-commerce Store', status: 'connected', lastSync: '5 min ago' },
                { system: 'Accounting Module', status: 'connected', lastSync: '1 min ago' },
                { system: 'Manufacturing', status: 'syncing', lastSync: 'In progress' },
              ].map((integration, index) => (
                <div key={index} className="flex items-center justify-between p-2 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      integration.status === 'connected' ? 'bg-green-500' :
                      integration.status === 'syncing' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`} />
                    <span className="text-sm font-medium text-gray-900">{integration.system}</span>
                  </div>
                  <span className="text-xs text-gray-500">{integration.lastSync}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Reports & Analytics */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Inventory Reports & Analytics</h3>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <BarChart3 className="h-4 w-4" />
              View Reports
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Stock Movement History */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Stock Movement</h4>
            <div className="space-y-2">
              {[
                { product: 'iPhone 15 Pro', movement: '+50', type: 'in', time: '2 hours ago' },
                { product: 'MacBook Air', movement: '-12', type: 'out', time: '4 hours ago' },
                { product: 'AirPods Pro', movement: '+25', type: 'in', time: '6 hours ago' },
              ].map((movement, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{movement.product}</p>
                    <p className="text-xs text-gray-500">{movement.time}</p>
                  </div>
                  <span className={`text-sm font-bold ${
                    movement.type === 'in' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {movement.movement}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dead Stock Report */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Dead Stock Analysis</h4>
            <div className="space-y-2">
              {[
                { product: 'Outdated Laptop Model', days: 180, value: '$12,450' },
                { product: 'Old Phone Cases', days: 120, value: '$3,200' },
                { product: 'Legacy Accessories', days: 95, value: '$1,890' },
              ].map((deadStock, index) => (
                <div key={index} className="p-2 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm font-medium text-gray-900">{deadStock.product}</p>
                  <p className="text-xs text-red-600">{deadStock.days} days no movement</p>
                  <p className="text-xs text-gray-600">Value: {deadStock.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expiry Tracking */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Expiry Tracking</h4>
            <div className="space-y-2">
              {[
                { product: 'Vitamin C 1000mg', expiry: '2024-09-15', urgency: 'urgent' },
                { product: 'Protein Powder', expiry: '2024-11-20', urgency: 'medium' },
                { product: 'Energy Bars', expiry: '2025-01-10', urgency: 'low' },
              ].map((expiry, index) => (
                <div key={index} className={`p-2 rounded-lg border ${
                  expiry.urgency === 'urgent' ? 'bg-red-50 border-red-200' :
                  expiry.urgency === 'medium' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-green-50 border-green-200'
                }`}>
                  <p className="text-sm font-medium text-gray-900">{expiry.product}</p>
                  <p className={`text-xs flex items-center gap-1 ${
                    expiry.urgency === 'urgent' ? 'text-red-600' :
                    expiry.urgency === 'medium' ? 'text-yellow-600' :
                    'text-green-600'
                  }`}>
                    <Calendar className="h-3 w-3" />
                    {expiry.expiry}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Demand Forecasting */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Demand Forecasting</h4>
            <div className="space-y-2">
              {[
                { product: 'iPhone 15 Pro', predicted: 85, confidence: 92, trend: 'up' },
                { product: 'MacBook Air', predicted: 34, confidence: 88, trend: 'stable' },
                { product: 'AirPods Pro', predicted: 156, confidence: 95, trend: 'up' },
              ].map((forecast, index) => (
                <div key={index} className="p-2 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm font-medium text-gray-900">{forecast.product}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-blue-600">Next 30 days: {forecast.predicted}</p>
                    <div className="flex items-center gap-1">
                      {forecast.trend === 'up' ? (
                        <TrendingUp className="h-3 w-3 text-green-600" />
                      ) : (
                        <TrendDown className="h-3 w-3 text-gray-600" />
                      )}
                      <span className="text-xs text-gray-600">{forecast.confidence}%</span>
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
