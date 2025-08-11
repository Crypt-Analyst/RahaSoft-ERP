'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AccountingPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const accountingMetrics = [
    { name: 'Total Revenue', value: '$2.4M', change: '+18.2%', trend: 'up', icon: '$' },
    { name: 'Outstanding Invoices', value: '$347K', change: '-5.3%', trend: 'down', icon: '▤' },
    { name: 'Accounts Receivable', value: '$186K', change: '+12.1%', trend: 'up', icon: '↗' },
    { name: 'Accounts Payable', value: '$94K', change: '-8.7%', trend: 'down', icon: '▤' },
    { name: 'Net Profit Margin', value: '23.5%', change: '+2.1%', trend: 'up', icon: '↗' },
    { name: 'Cash Flow', value: '$412K', change: '+15.8%', trend: 'up', icon: '◈' }
  ]

  const recentInvoices = [
    { id: 'INV-2024-001', customer: 'TechCorp Inc', amount: 25000, status: 'paid', dueDate: '2024-02-15', issueDate: '2024-01-15' },
    { id: 'INV-2024-002', customer: 'StartupXYZ', amount: 18500, status: 'overdue', dueDate: '2024-02-10', issueDate: '2024-01-10' },
    { id: 'INV-2024-003', customer: 'Global Dynamics', amount: 42000, status: 'pending', dueDate: '2024-02-28', issueDate: '2024-01-28' },
    { id: 'INV-2024-004', customer: 'Innovation Labs', amount: 31200, status: 'draft', dueDate: '2024-03-05', issueDate: '2024-02-05' }
  ]

  const expenseCategories = [
    { category: 'Office Supplies', amount: 2450, budget: 3000, percentage: 82 },
    { category: 'Marketing', amount: 8900, budget: 10000, percentage: 89 },
    { category: 'Software Licenses', amount: 5200, budget: 6000, percentage: 87 },
    { category: 'Travel & Entertainment', amount: 3100, budget: 4000, percentage: 78 }
  ]

  const accountingModules = [
    { name: 'Invoicing', description: 'Create, send, and track invoices', href: '/dashboard/accounting/invoicing', icon: '▤', count: '1,247', category: 'core' },
    { name: 'Quoting & Estimates', description: 'Generate and approve quotes', href: '/dashboard/accounting/quotes', icon: '▦', count: '234', category: 'core' },
    { name: 'Payments Tracking', description: 'Record payments and monitor balances', href: '/dashboard/accounting/payments', icon: '◆', count: '892', category: 'core' },
    { name: 'Expense Tracking', description: 'Log and categorize expenses', href: '/dashboard/accounting/expenses', icon: '▣', count: '1,567', category: 'core' },
    { name: 'Tax Management', description: 'Automatic tax calculation (VAT, GST)', href: '/dashboard/accounting/taxes', icon: '▦', count: '15', category: 'compliance' },
    { name: 'Purchase Orders', description: 'Create and manage supplier orders', href: '/dashboard/accounting/purchase-orders', icon: '▦', count: '456', category: 'procurement' },
    { name: 'Billing & Recurring', description: 'Subscriptions and installment billing', href: '/dashboard/accounting/recurring', icon: '◎', count: '89', category: 'billing' },
    { name: 'Accounts Receivable', description: 'Track money customers owe', href: '/dashboard/accounting/receivable', icon: '↗', count: '$186K', category: 'ar' },
    { name: 'Accounts Payable', description: 'Track money owed to suppliers', href: '/dashboard/accounting/payable', icon: '▤', count: '$94K', category: 'ap' },
    { name: 'Bank Reconciliation', description: 'Match bank transactions', href: '/dashboard/accounting/reconciliation', icon: '◈', count: '5 Banks', category: 'banking' },
    { name: 'Multi-Currency', description: 'Handle international transactions', href: '/dashboard/accounting/currency', icon: '◈', count: '12', category: 'international' },
    { name: 'Financial Reports', description: 'P&L, Balance Sheet, Cash Flow', href: '/dashboard/accounting/reports', icon: '↗', count: '24', category: 'reporting' },
    { name: 'Budgeting & Forecasting', description: 'Set budgets and compare performance', href: '/dashboard/accounting/budgeting', icon: '●', count: 'Q1 2024', category: 'planning' },
    { name: 'Audit Logs', description: 'Detailed record of all changes', href: '/dashboard/accounting/audit', icon: '◎', count: 'Enabled', category: 'compliance' },
    { name: 'ERP & Payroll Integration', description: 'Connect to QuickBooks, Xero, SAP', href: '/dashboard/accounting/integrations', icon: '◎', count: '8', category: 'integration' }
  ]

  const moduleCategories = [
    { id: 'core', name: 'Core Accounting', color: 'blue' },
    { id: 'billing', name: 'Billing & Invoicing', color: 'green' },
    { id: 'ar', name: 'Accounts Receivable', color: 'purple' },
    { id: 'ap', name: 'Accounts Payable', color: 'orange' },
    { id: 'procurement', name: 'Procurement', color: 'indigo' },
    { id: 'banking', name: 'Banking & Reconciliation', color: 'teal' },
    { id: 'reporting', name: 'Financial Reporting', color: 'pink' },
    { id: 'planning', name: 'Planning & Budgeting', color: 'red' },
    { id: 'compliance', name: 'Tax & Compliance', color: 'yellow' },
    { id: 'international', name: 'International', color: 'cyan' },
    { id: 'integration', name: 'ERP Integration', color: 'emerald' }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Accounting & Finance</h1>
          <p className="text-gray-600 mt-2">Complete financial management with 15 enterprise accounting features</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Create Invoice
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Record Payment
          </button>
        </div>
      </div>

      {/* Accounting Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accountingMetrics.map((metric, index) => (
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

      {/* Complete Accounting Features by Category */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Accounting Features</h2>
        
        {moduleCategories.map((category) => {
          const categoryModules = accountingModules.filter(module => module.category === category.id);
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
              { id: 'overview', name: 'Financial Overview' },
              { id: 'invoices', name: 'Recent Invoices' },
              { id: 'expenses', name: 'Expense Tracking' },
              { id: 'reports', name: 'Financial Reports' }
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Health</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Revenue Growth</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '82%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">18.2%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Collection Efficiency</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '94%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">94.5%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Expense Control</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">Within Budget</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">▤ Generate Invoice</span>
                    <p className="text-sm text-gray-600">Create new customer invoice</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">◆ Record Payment</span>
                    <p className="text-sm text-gray-600">Log customer or supplier payment</p>
                  </button>
                  <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-medium">↗ Financial Report</span>
                    <p className="text-sm text-gray-600">Generate P&L or Balance Sheet</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'invoices' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Recent Invoices</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View All Invoices →</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Invoice ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Customer</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Amount</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Due Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Issue Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentInvoices.map((invoice) => (
                      <tr key={invoice.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-blue-600">{invoice.id}</td>
                        <td className="py-3 px-4">{invoice.customer}</td>
                        <td className="py-3 px-4 text-right font-semibold">${invoice.amount.toLocaleString()}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            invoice.status === 'paid' ? 'bg-green-100 text-green-700' :
                            invoice.status === 'overdue' ? 'bg-red-100 text-red-700' :
                            invoice.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{invoice.dueDate}</td>
                        <td className="py-3 px-4 text-gray-600">{invoice.issueDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'expenses' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Expense Categories vs Budget</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View Detailed Expenses →</button>
              </div>
              <div className="space-y-4">
                {expenseCategories.map((expense, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-900">{expense.category}</h4>
                      <span className="text-sm text-gray-600">
                        ${expense.amount.toLocaleString()} / ${expense.budget.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          expense.percentage > 90 ? 'bg-red-500' :
                          expense.percentage > 80 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{width: `${expense.percentage}%`}}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{expense.percentage}% of budget used</span>
                      <span>${(expense.budget - expense.amount).toLocaleString()} remaining</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Financial Reports</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Generate Custom Report →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">↗</div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Monthly</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Profit & Loss</h4>
                  <p className="text-sm text-gray-600">Revenue, expenses, and net income</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">◈</div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Quarterly</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Balance Sheet</h4>
                  <p className="text-sm text-gray-600">Assets, liabilities, and equity</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">$</div>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Real-time</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cash Flow</h4>
                  <p className="text-sm text-gray-600">Operating, investing, financing activities</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
