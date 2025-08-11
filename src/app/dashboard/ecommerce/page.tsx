'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function EcommercePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const ecommerceMetrics = [
    { name: 'Online Orders', value: '2,847', change: '+23.5%', trend: 'up', icon: '🛒' },
    { name: 'Revenue (Online)', value: '$485K', change: '+18.7%', trend: 'up', icon: '$' },
    { name: 'Conversion Rate', value: '3.2%', change: '+0.8%', trend: 'up', icon: '↗' },
    { name: 'Active Products', value: '1,247', change: '+89', trend: 'up', icon: '▦' },
    { name: 'Customer Reviews', value: '4.6/5', change: '+0.2', trend: 'up', icon: '★' },
    { name: 'Cart Abandonment', value: '68%', change: '-5.2%', trend: 'down', icon: '🛑' }
  ]

  const ecommerceModules = [
    { name: 'Online Store Builder', description: 'Create and customize online storefronts', href: '/dashboard/ecommerce/store-builder', icon: '🏪', count: '5 Stores', category: 'storefront' },
    { name: 'Product Catalog Management', description: 'Manage online product listings', href: '/dashboard/ecommerce/catalog', icon: '▦', count: '1,247', category: 'products' },
    { name: 'Shopping Cart', description: 'Advanced shopping cart functionality', href: '/dashboard/ecommerce/cart', icon: '🛒', count: 'Active', category: 'cart' },
    { name: 'Payment Gateway Integration', description: 'Multiple payment methods support', href: '/dashboard/ecommerce/payments', icon: '💳', count: '12 Gateways', category: 'payments' },
    { name: 'Order Management', description: 'Process and track online orders', href: '/dashboard/ecommerce/orders', icon: '📦', count: '2,847', category: 'orders' },
    { name: 'Inventory Synchronization', description: 'Real-time stock sync across channels', href: '/dashboard/ecommerce/inventory-sync', icon: '◉', count: 'Live Sync', category: 'inventory' },
    { name: 'Multi-Channel Selling', description: 'Sell on multiple platforms', href: '/dashboard/ecommerce/multi-channel', icon: '🌐', count: '8 Channels', category: 'channels' },
    { name: 'Customer Portal', description: 'Self-service customer accounts', href: '/dashboard/ecommerce/customer-portal', icon: '👤', count: '5,234', category: 'customer' },
    { name: 'Digital Marketing Tools', description: 'SEO, email marketing, campaigns', href: '/dashboard/ecommerce/marketing', icon: '📢', count: '24 Campaigns', category: 'marketing' },
    { name: 'Analytics & Reporting', description: 'E-commerce performance insights', href: '/dashboard/ecommerce/analytics', icon: '📊', count: '15 Reports', category: 'analytics' },
    { name: 'Mobile Commerce', description: 'Mobile-optimized shopping experience', href: '/dashboard/ecommerce/mobile', icon: '📱', count: 'Responsive', category: 'mobile' },
    { name: 'Shipping & Logistics', description: 'Shipping rates and label printing', href: '/dashboard/ecommerce/shipping', icon: '🚚', count: '6 Carriers', category: 'shipping' },
    { name: 'Tax Management', description: 'Automated tax calculations', href: '/dashboard/ecommerce/tax', icon: '💰', count: 'Global Tax', category: 'tax' },
    { name: 'Discount & Promotions', description: 'Coupons, sales, and special offers', href: '/dashboard/ecommerce/promotions', icon: '🎫', count: '45 Active', category: 'promotions' },
    { name: 'Customer Reviews', description: 'Product reviews and ratings system', href: '/dashboard/ecommerce/reviews', icon: '★', count: '4.6/5', category: 'reviews' },
    { name: 'Wishlist & Favorites', description: 'Customer wishlist functionality', href: '/dashboard/ecommerce/wishlist', icon: '❤️', count: '1,234', category: 'engagement' },
    { name: 'Search & Filtering', description: 'Advanced product search capabilities', href: '/dashboard/ecommerce/search', icon: '🔍', count: 'AI-Powered', category: 'search' },
    { name: 'Content Management', description: 'CMS for product descriptions and pages', href: '/dashboard/ecommerce/cms', icon: '📝', count: '567 Pages', category: 'content' },
    { name: 'API & Integrations', description: 'Connect with third-party services', href: '/dashboard/ecommerce/integrations', icon: '🔗', count: '25 APIs', category: 'integration' },
    { name: 'Security & Compliance', description: 'PCI DSS and security features', href: '/dashboard/ecommerce/security', icon: '🔒', count: 'PCI Compliant', category: 'security' }
  ]

  const moduleCategories = [
    { id: 'storefront', name: 'Storefront Management', color: 'blue' },
    { id: 'products', name: 'Product Management', color: 'green' },
    { id: 'cart', name: 'Shopping Cart', color: 'purple' },
    { id: 'payments', name: 'Payment Processing', color: 'orange' },
    { id: 'orders', name: 'Order Management', color: 'indigo' },
    { id: 'inventory', name: 'Inventory Management', color: 'pink' },
    { id: 'channels', name: 'Multi-Channel', color: 'red' },
    { id: 'customer', name: 'Customer Experience', color: 'yellow' },
    { id: 'marketing', name: 'Digital Marketing', color: 'cyan' },
    { id: 'analytics', name: 'Analytics & Reports', color: 'teal' },
    { id: 'mobile', name: 'Mobile Commerce', color: 'emerald' },
    { id: 'shipping', name: 'Shipping & Logistics', color: 'slate' },
    { id: 'tax', name: 'Tax Management', color: 'violet' },
    { id: 'promotions', name: 'Promotions & Discounts', color: 'rose' },
    { id: 'reviews', name: 'Reviews & Ratings', color: 'amber' },
    { id: 'engagement', name: 'Customer Engagement', color: 'lime' },
    { id: 'search', name: 'Search & Discovery', color: 'sky' },
    { id: 'content', name: 'Content Management', color: 'stone' },
    { id: 'integration', name: 'Integrations', color: 'zinc' },
    { id: 'security', name: 'Security & Compliance', color: 'neutral' }
  ]

  const recentOrders = [
    { id: 'ORD-001', customer: 'John Smith', amount: 245.99, status: 'processing', channel: 'Website', date: '2 hours ago' },
    { id: 'ORD-002', customer: 'Sarah Wilson', amount: 89.50, status: 'shipped', channel: 'Mobile App', date: '4 hours ago' },
    { id: 'ORD-003', customer: 'Mike Johnson', amount: 156.75, status: 'delivered', channel: 'Amazon', date: '1 day ago' },
    { id: 'ORD-004', customer: 'Lisa Chen', amount: 325.00, status: 'pending', channel: 'eBay', date: '2 days ago' }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">E-Commerce & Online Sales Integration</h1>
          <p className="text-gray-600 mt-2">Complete omnichannel e-commerce solution</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Add Product
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Process Orders
          </button>
        </div>
      </div>

      {/* E-commerce Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecommerceMetrics.map((metric, index) => (
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

      {/* Complete E-commerce Features by Category */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">E-Commerce Features</h2>
        
        {moduleCategories.map((category) => {
          const categoryModules = ecommerceModules.filter(module => module.category === category.id);
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
              lime: { header: 'text-lime-700', badge: 'bg-lime-100 text-lime-700' },
              sky: { header: 'text-sky-700', badge: 'bg-sky-100 text-sky-700' },
              stone: { header: 'text-stone-700', badge: 'bg-stone-100 text-stone-700' },
              zinc: { header: 'text-zinc-700', badge: 'bg-zinc-100 text-zinc-700' },
              neutral: { header: 'text-neutral-700', badge: 'bg-neutral-100 text-neutral-700' }
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
              { id: 'overview', name: 'E-commerce Overview' },
              { id: 'orders', name: 'Recent Orders' },
              { id: 'performance', name: 'Sales Performance' },
              { id: 'analytics', name: 'E-commerce Analytics' }
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">E-commerce Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Conversion Rate</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '64%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">3.2%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Average Order Value</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">$156</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Customer Satisfaction</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">4.6/5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">▦ Add Product</span>
                    <p className="text-sm text-gray-600">Add new product to catalog</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">📦 Process Orders</span>
                    <p className="text-sm text-gray-600">Review and fulfill orders</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">📊 View Analytics</span>
                    <p className="text-sm text-gray-600">Sales performance reports</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Recent Online Orders</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View All Orders →</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Order ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Customer</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Amount</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Channel</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-blue-600">{order.id}</td>
                        <td className="py-3 px-4 font-medium">{order.customer}</td>
                        <td className="py-3 px-4 text-right font-semibold">${order.amount}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                            order.status === 'shipped' ? 'bg-blue-100 text-blue-700' :
                            order.status === 'processing' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{order.channel}</td>
                        <td className="py-3 px-4 text-gray-600">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Sales Performance Metrics</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View Detailed Performance →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">$</div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Revenue</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Monthly Revenue</h4>
                  <p className="text-sm text-gray-600">$485K this month</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">🛒</div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Orders</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Total Orders</h4>
                  <p className="text-sm text-gray-600">2,847 orders processed</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">↗</div>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Growth</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Growth Rate</h4>
                  <p className="text-sm text-gray-600">23.5% month-over-month</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">E-commerce Analytics Dashboard</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Export Analytics →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">📊</div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Traffic</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Website Traffic</h4>
                  <p className="text-sm text-gray-600">Visitor patterns and sources</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">🛒</div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Cart</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cart Analysis</h4>
                  <p className="text-sm text-gray-600">Abandonment and recovery</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">★</div>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Products</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Product Performance</h4>
                  <p className="text-sm text-gray-600">Best and worst sellers</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">👤</div>
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Customers</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Customer Insights</h4>
                  <p className="text-sm text-gray-600">Behavior and demographics</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
