'use client'

import { 
  DollarSign, 
  TrendingUp, 
  CreditCard, 
  FileText, 
  Plus,
  Search,
  Download,
  Filter
} from 'lucide-react'
import { StatCard, DashboardCard } from '@/components/dashboard-cards'
import { formatCurrency } from '@/lib/utils'

const accountingStats = [
  {
    title: 'Total Revenue',
    value: formatCurrency(2847592),
    change: { value: '+15.3% from last month', trend: 'up' as const },
    icon: <DollarSign className="h-6 w-6 text-green-600" />
  },
  {
    title: 'Outstanding Invoices',
    value: formatCurrency(127840),
    change: { value: '-8.2% from last month', trend: 'down' as const },
    icon: <FileText className="h-6 w-6 text-orange-600" />
  },
  {
    title: 'Monthly Expenses',
    value: formatCurrency(89450),
    change: { value: '+3.1% from last month', trend: 'up' as const },
    icon: <CreditCard className="h-6 w-6 text-red-600" />
  },
  {
    title: 'Net Profit',
    value: formatCurrency(456780),
    change: { value: '+12.8% from last month', trend: 'up' as const },
    icon: <TrendingUp className="h-6 w-6 text-blue-600" />
  }
]

const recentTransactions = [
  {
    id: 'TXN-001',
    description: 'Payment from Acme Corp - Invoice #INV-2024-001',
    amount: 15000,
    type: 'credit',
    date: '2024-08-08',
    status: 'completed'
  },
  {
    id: 'TXN-002',
    description: 'Office Supplies - Staples Inc.',
    amount: 450,
    type: 'debit',
    date: '2024-08-07',
    status: 'completed'
  },
  {
    id: 'TXN-003',
    description: 'Software License - Adobe Creative Suite',
    amount: 599,
    type: 'debit',
    date: '2024-08-07',
    status: 'pending'
  },
  {
    id: 'TXN-004',
    description: 'Consulting Services - TechFlow Solutions',
    amount: 8500,
    type: 'credit',
    date: '2024-08-06',
    status: 'completed'
  }
]

const outstandingInvoices = [
  {
    invoice: 'INV-2024-089',
    customer: 'Global Tech Solutions',
    amount: 12500,
    dueDate: '2024-08-15',
    overdue: false
  },
  {
    invoice: 'INV-2024-087',
    customer: 'StartupFlow Inc.',
    amount: 8200,
    dueDate: '2024-08-12',
    overdue: false
  },
  {
    invoice: 'INV-2024-084',
    customer: 'Enterprise Corp',
    amount: 25000,
    dueDate: '2024-08-05',
    overdue: true
  }
]

export default function AccountingDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Accounting</h1>
          <p className="text-gray-600">Manage your financial data and transactions</p>
        </div>
        <div className="flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Invoice
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {accountingStats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Transactions */}
        <DashboardCard 
          title="Recent Transactions"
          action={
            <div className="flex space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Filter className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Search className="h-4 w-4" />
              </button>
            </div>
          }
        >
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
                  <p className="text-xs text-gray-500">{transaction.id} • {transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-semibold ${
                    transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'credit' ? '+' : '-'}{formatCurrency(transaction.amount)}
                  </p>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>

        {/* Outstanding Invoices */}
        <DashboardCard 
          title="Outstanding Invoices"
          action={
            <button className="text-sm text-blue-600 hover:text-blue-700">
              View All
            </button>
          }
        >
          <div className="space-y-4">
            {outstandingInvoices.map((invoice) => (
              <div key={invoice.invoice} className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{invoice.invoice}</p>
                  <p className="text-xs text-gray-500">{invoice.customer}</p>
                  <p className="text-xs text-gray-500">Due: {invoice.dueDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">
                    {formatCurrency(invoice.amount)}
                  </p>
                  {invoice.overdue && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Overdue
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      {/* Quick Actions */}
      <DashboardCard title="Quick Actions">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
            <FileText className="h-8 w-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Create Invoice</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors">
            <CreditCard className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Record Payment</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors">
            <DollarSign className="h-8 w-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Add Expense</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-colors">
            <TrendingUp className="h-8 w-8 text-orange-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">View Reports</span>
          </button>
        </div>
      </DashboardCard>
    </div>
  )
}
