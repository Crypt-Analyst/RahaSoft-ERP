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
  TrendingUp
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navigationItems = [
  {
    title: 'Dashboard',
    href: '/',
    icon: Home,
  },
  {
    title: 'Accounting',
    href: '/accounting',
    icon: Calculator,
    children: [
      { title: 'General Ledger', href: '/accounting/general-ledger' },
      { title: 'Invoices', href: '/accounting/invoices' },
      { title: 'Payments', href: '/accounting/payments' },
      { title: 'Reports', href: '/accounting/reports' },
    ]
  },
  {
    title: 'Inventory',
    href: '/inventory',
    icon: Package,
    children: [
      { title: 'Products', href: '/inventory/products' },
      { title: 'Stock Levels', href: '/inventory/stock' },
      { title: 'Warehouses', href: '/inventory/warehouses' },
      { title: 'Procurement', href: '/inventory/procurement' },
    ]
  },
  {
    title: 'CRM',
    href: '/crm',
    icon: Users,
    children: [
      { title: 'Customers', href: '/crm/customers' },
      { title: 'Leads', href: '/crm/leads' },
      { title: 'Opportunities', href: '/crm/opportunities' },
      { title: 'Sales Pipeline', href: '/crm/pipeline' },
    ]
  },
  {
    title: 'HR',
    href: '/hr',
    icon: Briefcase,
    children: [
      { title: 'Employees', href: '/hr/employees' },
      { title: 'Payroll', href: '/hr/payroll' },
      { title: 'Attendance', href: '/hr/attendance' },
      { title: 'Performance', href: '/hr/performance' },
    ]
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: Calendar,
    children: [
      { title: 'All Projects', href: '/projects' },
      { title: 'Tasks', href: '/projects/tasks' },
      { title: 'Time Tracking', href: '/projects/time' },
      { title: 'Resources', href: '/projects/resources' },
    ]
  },
  {
    title: 'Sales',
    href: '/sales',
    icon: TrendingUp,
    children: [
      { title: 'Orders', href: '/sales/orders' },
      { title: 'Quotes', href: '/sales/quotes' },
      { title: 'Products', href: '/sales/products' },
      { title: 'Analytics', href: '/sales/analytics' },
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
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r bg-gray-50/40">
      <div className="flex h-16 items-center border-b px-6">
        <Building2 className="h-8 w-8 text-blue-600" />
        <span className="ml-3 text-xl font-bold text-gray-900">RahaSoft ERP</span>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
          
          return (
            <div key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.title}
              </Link>
              {item.children && isActive && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        'block rounded-md px-3 py-1 text-sm transition-colors',
                        pathname === child.href
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-500 hover:text-gray-700'
                      )}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </div>
  )
}
