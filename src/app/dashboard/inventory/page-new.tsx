'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function InventoryPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const inventoryMetrics = [
    { name: 'Total Products', value: '12,847', change: '+8.3%', trend: 'up', icon: '▦' },
    { name: 'Active Stock', value: '1,247,892', change: '+12.1%', trend: 'up', icon: '◉' },
    { name: 'Low Stock Items', value: '89', change: '-15.2%', trend: 'down', icon: '⚠' },
    { name: 'Stock Value', value: '$2.8M', change: '+18.7%', trend: 'up', icon: '$' },
    { name: 'Warehouses', value: '8', change: '+2', trend: 'up', icon: '◈' },
    { name: 'Suppliers', value: '156', change: '+12', trend: 'up', icon: '◎' }
  ]

  const inventoryModules = [
    { name: 'Product Catalog', description: 'Products/services with descriptions, SKUs, images', href: '/dashboard/inventory/catalog', icon: '▦', count: '12,847', category: 'core' },
    { name: 'Stock Tracking', description: 'Real-time quantity available updates', href: '/dashboard/inventory/stock', icon: '◉', count: 'Live', category: 'core' },
    { name: 'Stock Alerts', description: 'Low-stock and overstock notifications', href: '/dashboard/inventory/alerts', icon: '⚠', count: '89', category: 'core' },
    { name: 'Multi-Warehouse', description: 'Track stock across multiple locations', href: '/dashboard/inventory/warehouses', icon: '◈', count: '8', category: 'core' },
    { name: 'Batch & Lot Tracking', description: 'Groups of products for quality control', href: '/dashboard/inventory/batches', icon: '◎', count: '1,234', category: 'tracking' },
    { name: 'Serial Number Tracking', description: 'Individual items for warranty/service', href: '/dashboard/inventory/serials', icon: '●', count: '5,678', category: 'tracking' },
    { name: 'Inventory Adjustments', description: 'Manual quantity adjustments', href: '/dashboard/inventory/adjustments', icon: '⚙', count: '245', category: 'operations' },
    { name: 'Purchase Orders', description: 'Create and track supplier orders', href: '/dashboard/inventory/purchase-orders', icon: '▤', count: '456', category: 'procurement' },
    { name: 'Goods Receipt', description: 'Record incoming shipments', href: '/dashboard/inventory/receipts', icon: '↓', count: '789', category: 'procurement' },
    { name: 'Sales Orders', description: 'Link stock to deals or customer orders', href: '/dashboard/inventory/sales-orders', icon: '↗', count: '1,123', category: 'sales' },
    { name: 'Inventory Valuation', description: 'FIFO, LIFO, weighted average costing', href: '/dashboard/inventory/valuation', icon: '$', count: '$2.8M', category: 'valuation' },
    { name: 'Returns Management', description: 'Process customer and supplier returns', href: '/dashboard/inventory/returns', icon: '↺', count: '67', category: 'operations' },
    { name: 'Barcode & QR Scanning', description: 'Fast stock updates and picking', href: '/dashboard/inventory/scanning', icon: '▣', count: 'Active', category: 'automation' },
    { name: 'Stock Transfers', description: 'Move items between warehouses', href: '/dashboard/inventory/transfers', icon: '⇄', count: '134', category: 'operations' },
    { name: 'Demand Forecasting', description: 'Predict stock needs using sales trends', href: '/dashboard/inventory/forecasting', icon: '◔', count: 'Q1 2024', category: 'analytics' },
    { name: 'Supplier Management', description: 'Store and track supplier performance', href: '/dashboard/inventory/suppliers', icon: '◎', count: '156', category: 'suppliers' },
    { name: 'POS Integration', description: 'Sync sales data from retail points', href: '/dashboard/inventory/pos', icon: '◈', count: '12', category: 'integration' },
    { name: 'Inventory Reports', description: 'Stock levels, movement, dead stock', href: '/dashboard/inventory/reports', icon: '↗', count: '24', category: 'reporting' },
    { name: 'Expiry Date Tracking', description: 'For perishable goods management', href: '/dashboard/inventory/expiry', icon: '◑', count: '234', category: 'tracking' },
    { name: 'API & ERP Integration', description: 'Sync with accounting, e-commerce, manufacturing', href: '/dashboard/inventory/integrations', icon: '◎', count: '15', category: 'integration' }
  ]

  const moduleCategories = [
    { id: 'core', name: 'Core Inventory', color: 'blue' },
    { id: 'tracking', name: 'Tracking & Traceability', color: 'green' },
    { id: 'operations', name: 'Operations', color: 'purple' },
    { id: 'procurement', name: 'Procurement', color: 'orange' },
    { id: 'sales', name: 'Sales Integration', color: 'indigo' },
    { id: 'valuation', name: 'Valuation & Costing', color: 'pink' },
    { id: 'automation', name: 'Automation', color: 'red' },
    { id: 'analytics', name: 'Analytics & Forecasting', color: 'yellow' },
    { id: 'suppliers', name: 'Supplier Management', color: 'cyan' },
    { id: 'integration', name: 'Integrations', color: 'teal' },
    { id: 'reporting', name: 'Reporting', color: 'emerald' }
  ]

  const lowStockItems = [
    { id: 1, sku: 'SKU-001', product: 'Wireless Headphones', current: 5, minimum: 20, status: 'critical' },
    { id: 2, sku: 'SKU-045', product: 'USB-C Cables', current: 15, minimum: 50, status: 'low' },
    { id: 3, sku: 'SKU-123', product: 'Phone Cases', current: 8, minimum: 25, status: 'critical' },
    { id: 4, sku: 'SKU-234', product: 'Screen Protectors', current: 22, minimum: 30, status: 'low' }
  ]

  const recentMovements = [
    { id: 1, type: 'incoming', product: 'Laptop Stand', quantity: 100, warehouse: 'Main Warehouse', date: '2024-02-15' },
    { id: 2, type: 'outgoing', product: 'Wireless Mouse', quantity: -25, warehouse: 'Retail Store', date: '2024-02-15' },
    { id: 3, type: 'transfer', product: 'Keyboards', quantity: 50, warehouse: 'Store A → Store B', date: '2024-02-14' },
    { id: 4, type: 'adjustment', product: 'Monitor Arms', quantity: -3, warehouse: 'Main Warehouse', date: '2024-02-14' }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600 mt-2">Complete inventory control for stock management</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Add Product
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Stock Adjustment
          </button>
        </div>
      </div>

      {/* Inventory Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inventoryMetrics.map((metric, index) => (
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

      {/* Complete Inventory Features by Category */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Inventory Management Features</h2>
        
        {moduleCategories.map((category) => {
          const categoryModules = inventoryModules.filter(module => module.category === category.id);
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
              emerald: { header: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-700' }
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
              { id: 'overview', name: 'Inventory Overview' },
              { id: 'alerts', name: 'Stock Alerts' },
              { id: 'movements', name: 'Recent Movements' },
              { id: 'analytics', name: 'Inventory Analytics' }
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Inventory Health</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Stock Accuracy</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '96%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">96%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Turnover Rate</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">7.8x</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Fill Rate</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">92%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">▦ Add New Product</span>
                    <p className="text-sm text-gray-600">Create product with SKU and details</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">⚙ Stock Adjustment</span>
                    <p className="text-sm text-gray-600">Adjust quantities for audits</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">↗ Generate Report</span>
                    <p className="text-sm text-gray-600">Stock levels and movement reports</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'alerts' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Stock Alerts</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View All Alerts →</button>
              </div>
              <div className="space-y-3">
                {lowStockItems.map((item) => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`w-3 h-3 rounded-full ${
                          item.status === 'critical' ? 'bg-red-500' : 'bg-yellow-500'
                        }`}></span>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.product}</h4>
                          <p className="text-sm text-gray-600">{item.sku}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">{item.current}</p>
                        <p className="text-sm text-gray-600">Min: {item.minimum}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'movements' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Recent Stock Movements</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View Movement History →</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Product</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Quantity</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Location</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentMovements.map((movement) => (
                      <tr key={movement.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            movement.type === 'incoming' ? 'bg-green-100 text-green-700' :
                            movement.type === 'outgoing' ? 'bg-red-100 text-red-700' :
                            movement.type === 'transfer' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {movement.type.charAt(0).toUpperCase() + movement.type.slice(1)}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-medium">{movement.product}</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`font-semibold ${
                            movement.quantity > 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {movement.quantity > 0 ? '+' : ''}{movement.quantity}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{movement.warehouse}</td>
                        <td className="py-3 px-4 text-gray-600">{movement.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Inventory Analytics</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View Detailed Analytics →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">↗</div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Daily</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Stock Movement</h4>
                  <p className="text-sm text-gray-600">Track daily in/out movements</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">◔</div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Weekly</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Demand Forecast</h4>
                  <p className="text-sm text-gray-600">Predict future stock needs</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">$</div>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Monthly</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Valuation Report</h4>
                  <p className="text-sm text-gray-600">FIFO/LIFO costing analysis</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
