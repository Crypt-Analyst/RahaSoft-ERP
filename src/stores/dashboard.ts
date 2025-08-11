import { create } from 'zustand'

interface DashboardMetrics {
  revenue: {
    current: number
    previous: number
    change: number
    trend: 'up' | 'down'
  }
  orders: {
    current: number
    previous: number
    change: number
    trend: 'up' | 'down'
  }
  customers: {
    current: number
    previous: number
    change: number
    trend: 'up' | 'down'
  }
  inventory: {
    current: number
    previous: number
    change: number
    trend: 'up' | 'down'
  }
}

interface SalesData {
  date: string
  revenue: number
  orders: number
  customers: number
}

interface TopProduct {
  id: string
  name: string
  sales: number
  revenue: number
  change: number
  trend: 'up' | 'down'
}

interface RecentActivity {
  id: string
  type: 'sale' | 'customer' | 'inventory' | 'payment'
  description: string
  amount?: number
  time: string
}

interface AlertItem {
  id: string
  type: 'warning' | 'error' | 'info'
  title: string
  description: string
  action?: string
  urgent: boolean
}

interface DashboardState {
  metrics: DashboardMetrics
  salesData: SalesData[]
  topProducts: TopProduct[]
  recentActivity: RecentActivity[]
  alerts: AlertItem[]
  isLoading: boolean
  lastUpdated: Date
  refreshData: () => void
  markAlertAsRead: (id: string) => void
}

// Generate realistic sample data
const generateSalesData = (): SalesData[] => {
  const data: SalesData[] = []
  const baseDate = new Date()
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(baseDate)
    date.setDate(date.getDate() - i)
    
    // Create realistic patterns - weekends lower, month-end higher
    const dayOfWeek = date.getDay()
    const dayOfMonth = date.getDate()
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
    const isMonthEnd = dayOfMonth > 25
    
    let baseRevenue = 15000 + Math.random() * 10000
    if (isWeekend) baseRevenue *= 0.7
    if (isMonthEnd) baseRevenue *= 1.3
    
    const orders = Math.floor((baseRevenue / 150) + Math.random() * 50)
    const customers = Math.floor(orders * 0.8 + Math.random() * 20)
    
    data.push({
      date: date.toISOString().split('T')[0],
      revenue: Math.round(baseRevenue),
      orders,
      customers
    })
  }
  
  return data
}

const generateTopProducts = (): TopProduct[] => [
  {
    id: '1',
    name: 'Professional Services Package',
    sales: 156,
    revenue: 234000,
    change: 12.5,
    trend: 'up'
  },
  {
    id: '2',
    name: 'Enterprise Software License',
    sales: 89,
    revenue: 178000,
    change: -3.2,
    trend: 'down'
  },
  {
    id: '3',
    name: 'Consultation Hours',
    sales: 234,
    revenue: 117000,
    change: 18.7,
    trend: 'up'
  },
  {
    id: '4',
    name: 'Training Program',
    sales: 67,
    revenue: 80400,
    change: 7.3,
    trend: 'up'
  },
  {
    id: '5',
    name: 'Support Subscription',
    sales: 445,
    revenue: 66750,
    change: 4.1,
    trend: 'up'
  }
]

const generateRecentActivity = (): RecentActivity[] => [
  {
    id: '1',
    type: 'sale',
    description: 'New order from Acme Corporation',
    amount: 25000,
    time: '2 minutes ago'
  },
  {
    id: '2',
    type: 'customer',
    description: 'New customer registration: TechStart Inc.',
    time: '15 minutes ago'
  },
  {
    id: '3',
    type: 'payment',
    description: 'Payment received from Global Systems',
    amount: 15750,
    time: '32 minutes ago'
  },
  {
    id: '4',
    type: 'inventory',
    description: 'Low stock alert: Professional Services',
    time: '1 hour ago'
  },
  {
    id: '5',
    type: 'sale',
    description: 'Quote approved by MegaCorp Ltd.',
    amount: 45000,
    time: '2 hours ago'
  },
  {
    id: '6',
    type: 'customer',
    description: 'Customer support ticket resolved',
    time: '3 hours ago'
  }
]

const generateAlerts = (): AlertItem[] => [
  {
    id: '1',
    type: 'warning',
    title: 'Low Inventory Alert',
    description: 'Professional Services package is running low (12 remaining)',
    action: 'Restock Now',
    urgent: false
  },
  {
    id: '2',
    type: 'error',
    title: 'Payment Overdue',
    description: 'Invoice #INV-2024-0156 is 15 days overdue ($8,750)',
    action: 'Send Reminder',
    urgent: true
  },
  {
    id: '3',
    type: 'info',
    title: 'Monthly Report Ready',
    description: 'Your January business report is ready for review',
    action: 'View Report',
    urgent: false
  },
  {
    id: '4',
    type: 'warning',
    title: 'License Expiring',
    description: 'Enterprise software license expires in 7 days',
    action: 'Renew License',
    urgent: true
  }
]

export const useDashboardStore = create<DashboardState>((set, get) => {
  const salesData = generateSalesData()
  const currentMonthRevenue = salesData.slice(-30).reduce((sum, day) => sum + day.revenue, 0)
  const previousMonthRevenue = salesData.slice(-60, -30).reduce((sum, day) => sum + day.revenue, 0)
  const revenueChange = ((currentMonthRevenue - previousMonthRevenue) / previousMonthRevenue) * 100

  const currentMonthOrders = salesData.slice(-30).reduce((sum, day) => sum + day.orders, 0)
  const previousMonthOrders = salesData.slice(-60, -30).reduce((sum, day) => sum + day.orders, 0)
  const ordersChange = ((currentMonthOrders - previousMonthOrders) / previousMonthOrders) * 100

  const currentCustomers = 1245
  const previousCustomers = 1156
  const customersChange = ((currentCustomers - previousCustomers) / previousCustomers) * 100

  const currentInventory = 2847
  const previousInventory = 2923
  const inventoryChange = ((currentInventory - previousInventory) / previousInventory) * 100

  return {
    metrics: {
      revenue: {
        current: currentMonthRevenue,
        previous: previousMonthRevenue,
        change: Math.round(revenueChange * 10) / 10,
        trend: revenueChange >= 0 ? 'up' : 'down'
      },
      orders: {
        current: currentMonthOrders,
        previous: previousMonthOrders,
        change: Math.round(ordersChange * 10) / 10,
        trend: ordersChange >= 0 ? 'up' : 'down'
      },
      customers: {
        current: currentCustomers,
        previous: previousCustomers,
        change: Math.round(customersChange * 10) / 10,
        trend: customersChange >= 0 ? 'up' : 'down'
      },
      inventory: {
        current: currentInventory,
        previous: previousInventory,
        change: Math.round(inventoryChange * 10) / 10,
        trend: inventoryChange >= 0 ? 'up' : 'down'
      }
    },
    salesData,
    topProducts: generateTopProducts(),
    recentActivity: generateRecentActivity(),
    alerts: generateAlerts(),
    isLoading: false,
    lastUpdated: new Date(),
    
    refreshData: () => {
      set({ isLoading: true })
      
      // Simulate API call
      setTimeout(() => {
        const newSalesData = generateSalesData()
        const newCurrentMonthRevenue = newSalesData.slice(-30).reduce((sum, day) => sum + day.revenue, 0)
        const newPreviousMonthRevenue = newSalesData.slice(-60, -30).reduce((sum, day) => sum + day.revenue, 0)
        const newRevenueChange = ((newCurrentMonthRevenue - newPreviousMonthRevenue) / newPreviousMonthRevenue) * 100

        set({
          salesData: newSalesData,
          topProducts: generateTopProducts(),
          recentActivity: generateRecentActivity(),
          metrics: {
            ...get().metrics,
            revenue: {
              current: newCurrentMonthRevenue,
              previous: newPreviousMonthRevenue,
              change: Math.round(newRevenueChange * 10) / 10,
              trend: newRevenueChange >= 0 ? 'up' : 'down'
            }
          },
          isLoading: false,
          lastUpdated: new Date()
        })
      }, 1000)
    },
    
    markAlertAsRead: (id: string) => {
      set({
        alerts: get().alerts.filter(alert => alert.id !== id)
      })
    }
  }
})
