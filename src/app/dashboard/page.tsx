import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Package, 
  Calendar,
  Bell,
  Plus,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'
import { formatCurrency, formatDate } from '@/lib/utils'

interface StatCardProps {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: React.ComponentType<{ className?: string }>
}

function StatCard({ title, value, change, trend, icon: Icon }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <div className="flex items-center mt-2">
            {trend === 'up' ? (
              <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm font-medium ${
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {change}
            </span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${
          trend === 'up' ? 'bg-green-100' : 'bg-blue-100'
        }`}>
          <Icon className={`h-6 w-6 ${
            trend === 'up' ? 'text-green-600' : 'text-blue-600'
          }`} />
        </div>
      </div>
    </div>
  )
}

interface DashboardCardProps {
  title: string
  children: React.ReactNode
  action?: React.ReactNode
}

function DashboardCard({ title, children, action }: DashboardCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {action}
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  )
}

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Revenue',
      value: formatCurrency(324560),
      change: '+12.5%',
      trend: 'up' as const,
      icon: DollarSign
    },
    {
      title: 'Active Projects',
      value: '24',
      change: '+3',
      trend: 'up' as const,
      icon: TrendingUp
    },
    {
      title: 'Team Members',
      value: '156',
      change: '+8',
      trend: 'up' as const,
      icon: Users
    },
    {
      title: 'Inventory Items',
      value: '2,847',
      change: '-23',
      trend: 'down' as const,
      icon: Package
    }
  ]

  const recentActivities = [
    {
      id: 1,
      action: 'New invoice created',
      description: 'Invoice #INV-2024-001 for $5,240',
      time: '2 hours ago',
      type: 'invoice'
    },
    {
      id: 2,
      action: 'Project milestone completed',
      description: 'Website Redesign - Phase 2',
      time: '4 hours ago',
      type: 'project'
    },
    {
      id: 3,
      action: 'New team member added',
      description: 'Sarah Johnson joined as Product Manager',
      time: '1 day ago',
      type: 'team'
    },
    {
      id: 4,
      action: 'Inventory alert',
      description: 'Low stock warning for 5 items',
      time: '2 days ago',
      type: 'inventory'
    }
  ]

  const upcomingTasks = [
    {
      id: 1,
      title: 'Review Q4 Financial Reports',
      dueDate: '2024-01-15',
      priority: 'high',
      assignee: 'John Doe'
    },
    {
      id: 2,
      title: 'Client Meeting - Project Alpha',
      dueDate: '2024-01-16',
      priority: 'medium',
      assignee: 'Jane Smith'
    },
    {
      id: 3,
      title: 'Update Inventory System',
      dueDate: '2024-01-18',
      priority: 'low',
      assignee: 'Mike Johnson'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your business.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>This Month</span>
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Quick Action</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <DashboardCard 
          title="Recent Activities" 
          action={
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          }
        >
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>

        {/* Upcoming Tasks */}
        <DashboardCard 
          title="Upcoming Tasks" 
          action={
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          }
        >
          <div className="space-y-4">
            {upcomingTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{task.title}</p>
                  <p className="text-xs text-gray-600">
                    Due: {formatDate(task.dueDate)} • {task.assignee}
                  </p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  task.priority === 'high' 
                    ? 'bg-red-100 text-red-800'
                    : task.priority === 'medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      {/* Quick Actions */}
      <DashboardCard title="Quick Actions">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">Create Invoice</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">Add Customer</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
            <Package className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">Manage Inventory</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
            <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">View Reports</span>
          </button>
        </div>
      </DashboardCard>
    </div>
  )
}
