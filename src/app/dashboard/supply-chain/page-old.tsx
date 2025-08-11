'use client'

import { useState } from 'react'

export default function SupplyChainPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const supplyChainMetrics = [
    { name: 'Active Suppliers', value: '247', change: '+8.2%', trend: 'up' },
    { name: 'Purchase Orders', value: '1,523', change: '+15.7%', trend: 'up' },
    { name: 'On-Time Delivery', value: '94.8%', change: '+2.1%', trend: 'up' },
    { name: 'Supply Chain Cost', value: '$2.8M', change: '-5.3%', trend: 'down' },
    { name: 'Vendor Performance', value: '91.2%', change: '+3.4%', trend: 'up' },
    { name: 'Lead Time Average', value: '12.5 days', change: '-1.8%', trend: 'down' }
  ]

  const suppliers = [
    { id: 'SUP-001', name: 'Global Materials Inc', category: 'Raw Materials', rating: 4.8, orders: 156, status: 'active' },
    { id: 'SUP-002', name: 'TechComponents Ltd', category: 'Electronics', rating: 4.6, orders: 89, status: 'active' },
    { id: 'SUP-003', name: 'Logistics Solutions', category: 'Transportation', rating: 4.9, orders: 234, status: 'active' },
    { id: 'SUP-004', name: 'Quality Parts Co', category: 'Manufacturing', rating: 4.4, orders: 67, status: 'pending' },
    { id: 'SUP-005', name: 'Swift Delivery', category: 'Logistics', rating: 4.7, orders: 198, status: 'active' }
  ]

  const purchaseOrders = [
    { id: 'PO-2024-001', supplier: 'Global Materials Inc', amount: '$25,400', status: 'delivered', dueDate: '2024-01-15' },
    { id: 'PO-2024-002', supplier: 'TechComponents Ltd', amount: '$18,750', status: 'in-transit', dueDate: '2024-01-18' },
    { id: 'PO-2024-003', supplier: 'Logistics Solutions', amount: '$12,300', status: 'pending', dueDate: '2024-01-20' },
    { id: 'PO-2024-004', supplier: 'Quality Parts Co', amount: '$34,200', status: 'approved', dueDate: '2024-01-25' }
  ]

  const logistics = [
    { id: 'LOG-001', route: 'Warehouse A → Distribution Center', status: 'in-transit', progress: 75, eta: '2h 30m' },
    { id: 'LOG-002', route: 'Supplier → Warehouse B', status: 'scheduled', progress: 0, eta: '4h 15m' },
    { id: 'LOG-003', route: 'Distribution → Customer Site', status: 'delivered', progress: 100, eta: 'Completed' },
    { id: 'LOG-004', route: 'Cross-dock → Regional Hub', status: 'loading', progress: 25, eta: '6h 45m' }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Supply Chain Management</h1>
          <p className="text-gray-600 mt-2">End-to-end supply chain operations and vendor management</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Create PO
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Add Supplier
          </button>
        </div>
      </div>

      {/* Supply Chain Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {supplyChainMetrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-600">{metric.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                metric.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {metric.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', name: 'Overview' },
              { id: 'suppliers', name: 'Suppliers' },
              { id: 'purchase-orders', name: 'Purchase Orders' },
              { id: 'logistics', name: 'Logistics' }
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
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Supply Chain Health</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Supplier Reliability</span>
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '94%'}}></div>
                        </div>
                        <span className="text-sm font-semibold">94%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Inventory Turnover</span>
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '87%'}}></div>
                        </div>
                        <span className="text-sm font-semibold">87%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Cost Efficiency</span>
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: '91%'}}></div>
                        </div>
                        <span className="text-sm font-semibold">91%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="font-medium">Vendor Assessment</span>
                      <p className="text-sm text-gray-600">Evaluate supplier performance</p>
                    </button>
                    <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="font-medium">Create RFQ</span>
                      <p className="text-sm text-gray-600">Request for quotation</p>
                    </button>
                    <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="font-medium">Track Shipment</span>
                      <p className="text-sm text-gray-600">Monitor delivery status</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'suppliers' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Supplier Management</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Add New Supplier
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Supplier ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Name</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Category</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Rating</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Orders</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {suppliers.map((supplier) => (
                      <tr key={supplier.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-mono text-sm">{supplier.id}</td>
                        <td className="py-3 px-4 text-sm font-medium">{supplier.name}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{supplier.category}</td>
                        <td className="py-3 px-4 text-center">
                          <div className="flex items-center justify-center">
                            <span className="text-yellow-500 mr-1">★</span>
                            <span className="text-sm font-semibold">{supplier.rating}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center text-sm">{supplier.orders}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            supplier.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {supplier.status.charAt(0).toUpperCase() + supplier.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'purchase-orders' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Purchase Orders</h3>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Create Purchase Order
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">PO Number</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Supplier</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Amount</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Due Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {purchaseOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-mono text-sm">{order.id}</td>
                        <td className="py-3 px-4 text-sm">{order.supplier}</td>
                        <td className="py-3 px-4 text-sm font-semibold text-right">{order.amount}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{order.dueDate}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                            order.status === 'in-transit' ? 'bg-blue-100 text-blue-700' :
                            order.status === 'approved' ? 'bg-purple-100 text-purple-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {order.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'logistics' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Logistics & Transportation</h3>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Schedule Shipment
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {logistics.map((shipment) => (
                  <div key={shipment.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{shipment.id}</h4>
                        <p className="text-sm text-gray-600">{shipment.route}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        shipment.status === 'delivered' ? 'bg-green-100 text-green-700' :
                        shipment.status === 'in-transit' ? 'bg-blue-100 text-blue-700' :
                        shipment.status === 'loading' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {shipment.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{shipment.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                          style={{width: `${shipment.progress}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">ETA:</span>
                      <span className="font-medium">{shipment.eta}</span>
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
