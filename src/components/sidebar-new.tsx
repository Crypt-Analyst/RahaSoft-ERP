'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  BarChart3, 
  Building2, 
  Calculator, 
  Calendar, 
  FileText, 
  Home, 
  Package, 
  Settings, 
  Users, 
  Briefcase,
  CreditCard,
  TrendingUp,
  UserCheck,
  Target,
  Factory,
  ShoppingCart,
  MessageSquare,
  Shield,
  Database,
  Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navigationItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: Home,
  },
  {
    title: 'CRM',
    href: '/crm',
    icon: Users,
    children: [
      { title: 'Dashboard', href: '/crm' },
      { title: 'Leads', href: '/crm/leads' },
      { title: 'Contacts', href: '/crm/contacts' },
      { title: 'Deals', href: '/crm/deals' },
      { title: 'Activities', href: '/crm/activities' },
      { title: 'Reports', href: '/crm/reports' },
    ]
  },
  {
    title: 'Accounting',
    href: '/accounting',
    icon: Calculator,
    children: [
      { title: 'Dashboard', href: '/accounting' },
      { title: 'Invoices', href: '/accounting/invoices' },
      { title: 'Payments', href: '/accounting/payments' },
      { title: 'General Ledger', href: '/accounting/general-ledger' },
      { title: 'Reports', href: '/accounting/reports' },
    ]
  },
  {
    title: 'Human Resources',
    href: '/hr',
    icon: UserCheck,
    children: [
      { title: 'Dashboard', href: '/hr' },
      { title: 'Employees', href: '/hr/employees' },
      { title: 'Payroll', href: '/hr/payroll' },
      { title: 'Time Tracking', href: '/hr/time-tracking' },
      { title: 'Performance', href: '/hr/performance' },
    ]
  },
  {
    title: 'Inventory',
    href: '/inventory',
    icon: Package,
    children: [
      { title: 'Dashboard', href: '/inventory' },
      { title: 'Products', href: '/inventory/products' },
      { title: 'Stock Levels', href: '/inventory/stock' },
      { title: 'Warehouses', href: '/inventory/warehouses' },
      { title: 'Procurement', href: '/inventory/procurement' },
    ]
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: Target,
    children: [
      { title: 'Dashboard', href: '/projects' },
      { title: 'All Projects', href: '/projects/all' },
      { title: 'Tasks', href: '/projects/tasks' },
      { title: 'Time Tracking', href: '/projects/time' },
      { title: 'Resources', href: '/projects/resources' },
    ]
  },
  {
    title: 'Manufacturing',
    href: '/manufacturing',
    icon: Factory,
    children: [
      { title: 'Dashboard', href: '/manufacturing' },
      { title: 'Production', href: '/manufacturing/production' },
      { title: 'Quality Control', href: '/manufacturing/quality' },
      { title: 'Work Orders', href: '/manufacturing/work-orders' },
      { title: 'BOM', href: '/manufacturing/bom' },
    ]
  },
  {
    title: 'Sales & Marketing',
    href: '/sales',
    icon: TrendingUp,
    children: [
      { title: 'Dashboard', href: '/sales' },
      { title: 'Orders', href: '/sales/orders' },
      { title: 'Campaigns', href: '/sales/campaigns' },
      { title: 'Analytics', href: '/sales/analytics' },
      { title: 'Forecasting', href: '/sales/forecasting' },
    ]
  },
  {
    title: 'Reports',
    href: '/reports',
    icon: BarChart3,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
    children: [
      { title: 'General', href: '/settings/general' },
      { title: 'Users & Permissions', href: '/settings/users' },
      { title: 'Integrations', href: '/settings/integrations' },
      { title: 'Security', href: '/settings/security' },
    ]
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col fixed inset-y-0 z-50">
      <div className="flex h-full flex-col border-r bg-white">
        {/* Logo */}
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              RahaSoft
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-4 py-6 overflow-y-auto">
          {navigationItems.map((item) => (
            <NavigationItem
              key={item.href}
              item={item}
              pathname={pathname}
            />
          ))}
        </nav>

        {/* User Profile */}
        <div className="border-t p-4">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-sm font-medium text-white">BB</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Bilford Bwire</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface NavigationItemProps {
  item: {
    title: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    children?: { title: string; href: string }[]
  }
  pathname: string
}

function NavigationItem({ item, pathname }: NavigationItemProps) {
  const Icon = item.icon
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
  
  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          'group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors',
          isActive
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
            : 'text-gray-700 hover:bg-gray-100'
        )}
      >
        <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
        {item.title}
      </Link>
    )
  }

  return (
    <div className="space-y-1">
      <Link
        href={item.href}
        className={cn(
          'group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors',
          isActive
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
            : 'text-gray-700 hover:bg-gray-100'
        )}
      >
        <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
        {item.title}
      </Link>
      
      {isActive && item.children && (
        <div className="ml-6 space-y-1">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                'block rounded-lg px-3 py-2 text-sm transition-colors',
                pathname === child.href
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
