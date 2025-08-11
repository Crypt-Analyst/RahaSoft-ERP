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
  Zap,
  Truck,
  Brain,
  FolderOpen,
  BookOpen,
  Workflow,
  HeadphonesIcon,
  ShieldCheck,
  Wrench
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
    href: '/dashboard/crm',
    icon: Users,
    children: [
      { title: 'Dashboard', href: '/dashboard/crm' },
      { title: 'Leads', href: '/dashboard/crm/leads' },
      { title: 'Contacts', href: '/dashboard/crm/contacts' },
      { title: 'Deals', href: '/dashboard/crm/deals' },
      { title: 'Activities', href: '/dashboard/crm/activities' },
      { title: 'Reports', href: '/dashboard/crm/reports' },
    ]
  },
  {
    title: 'Accounting',
    href: '/dashboard/accounting',
    icon: Calculator,
    children: [
      { title: 'Dashboard', href: '/dashboard/accounting' },
      { title: 'Invoices', href: '/dashboard/accounting/invoices' },
      { title: 'Payments', href: '/dashboard/accounting/payments' },
      { title: 'General Ledger', href: '/dashboard/accounting/general-ledger' },
      { title: 'Reports', href: '/dashboard/accounting/reports' },
    ]
  },
  {
    title: 'Human Resources',
    href: '/dashboard/hr',
    icon: UserCheck,
    children: [
      { title: 'Dashboard', href: '/dashboard/hr' },
      { title: 'Employees', href: '/dashboard/hr/employees' },
      { title: 'Payroll', href: '/dashboard/hr/payroll' },
      { title: 'Time Tracking', href: '/dashboard/hr/time-tracking' },
      { title: 'Performance', href: '/dashboard/hr/performance' },
    ]
  },
  {
    title: 'Inventory',
    href: '/dashboard/inventory',
    icon: Package,
    children: [
      { title: 'Dashboard', href: '/dashboard/inventory' },
      { title: 'Products', href: '/dashboard/inventory/products' },
      { title: 'Stock Levels', href: '/dashboard/inventory/stock' },
      { title: 'Warehouses', href: '/dashboard/inventory/warehouses' },
      { title: 'Procurement', href: '/dashboard/inventory/procurement' },
    ]
  },
  {
    title: 'Projects',
    href: '/dashboard/projects',
    icon: Target,
    children: [
      { title: 'Dashboard', href: '/dashboard/projects' },
      { title: 'All Projects', href: '/dashboard/projects/all' },
      { title: 'Tasks', href: '/dashboard/projects/tasks' },
      { title: 'Time Tracking', href: '/dashboard/projects/time' },
      { title: 'Resources', href: '/dashboard/projects/resources' },
    ]
  },
  {
    title: 'Manufacturing',
    href: '/dashboard/manufacturing',
    icon: Factory,
    children: [
      { title: 'Dashboard', href: '/dashboard/manufacturing' },
      { title: 'Production', href: '/dashboard/manufacturing/production' },
      { title: 'Quality Control', href: '/dashboard/manufacturing/quality' },
      { title: 'Work Orders', href: '/dashboard/manufacturing/work-orders' },
      { title: 'BOM', href: '/dashboard/manufacturing/bom' },
    ]
  },
  {
    title: 'Sales & Marketing',
    href: '/dashboard/sales',
    icon: TrendingUp,
    children: [
      { title: 'Dashboard', href: '/dashboard/sales' },
      { title: 'Orders', href: '/dashboard/sales/orders' },
      { title: 'Campaigns', href: '/dashboard/sales/campaigns' },
      { title: 'Analytics', href: '/dashboard/sales/analytics' },
      { title: 'Forecasting', href: '/dashboard/sales/forecasting' },
    ]
  },
  {
    title: 'Supply Chain',
    href: '/dashboard/supply-chain',
    icon: Truck,
    children: [
      { title: 'Dashboard', href: '/dashboard/supply-chain' },
      { title: 'Suppliers', href: '/dashboard/supply-chain/suppliers' },
      { title: 'Purchase Orders', href: '/dashboard/supply-chain/purchase-orders' },
      { title: 'Logistics', href: '/dashboard/supply-chain/logistics' },
      { title: 'Vendor Management', href: '/dashboard/supply-chain/vendors' },
    ]
  },
  {
    title: 'Business Intelligence',
    href: '/dashboard/business-intelligence',
    icon: Brain,
    children: [
      { title: 'Dashboard', href: '/dashboard/business-intelligence' },
      { title: 'AI Insights', href: '/dashboard/business-intelligence/insights' },
      { title: 'Analytics', href: '/dashboard/business-intelligence/analytics' },
      { title: 'Reports', href: '/dashboard/business-intelligence/reports' },
      { title: 'Predictive Analytics', href: '/dashboard/business-intelligence/predictive' },
    ]
  },
  {
    title: 'Document Management',
    href: '/dashboard/document-management',
    icon: FolderOpen,
    children: [
      { title: 'Dashboard', href: '/dashboard/document-management' },
      { title: 'Documents', href: '/dashboard/document-management/documents' },
      { title: 'Folders', href: '/dashboard/document-management/folders' },
      { title: 'Workflows', href: '/dashboard/document-management/workflows' },
      { title: 'Version Control', href: '/dashboard/document-management/versions' },
    ]
  },
  {
    title: 'Reports',
    href: '/dashboard/reports',
    icon: BarChart3,
  },
  {
    title: 'Customer Support',
    href: '/dashboard/support',
    icon: HeadphonesIcon,
    children: [
      { title: 'Dashboard', href: '/dashboard/support' },
      { title: 'Tickets', href: '/dashboard/support/tickets' },
      { title: 'Live Chat', href: '/dashboard/support/chat' },
      { title: 'Knowledge Base', href: '/dashboard/support/knowledge' },
      { title: 'Analytics', href: '/dashboard/support/analytics' },
    ]
  },
  {
    title: 'Compliance & Risk',
    href: '/dashboard/compliance',
    icon: ShieldCheck,
    children: [
      { title: 'Dashboard', href: '/dashboard/compliance' },
      { title: 'Policies', href: '/dashboard/compliance/policies' },
      { title: 'Risk Assessment', href: '/dashboard/compliance/risk' },
      { title: 'Audit Management', href: '/dashboard/compliance/audit' },
      { title: 'Reports', href: '/dashboard/compliance/reports' },
    ]
  },
  {
    title: 'Asset Management',
    href: '/dashboard/assets',
    icon: Wrench,
    children: [
      { title: 'Dashboard', href: '/dashboard/assets' },
      { title: 'Asset Registry', href: '/dashboard/assets/registry' },
      { title: 'Maintenance', href: '/dashboard/assets/maintenance' },
      { title: 'Depreciation', href: '/dashboard/assets/depreciation' },
      { title: 'Performance', href: '/dashboard/assets/performance' },
    ]
  },
  {
    title: 'E-Commerce',
    href: '/dashboard/ecommerce',
    icon: ShoppingCart,
    children: [
      { title: 'Dashboard', href: '/dashboard/ecommerce' },
      { title: 'Store Builder', href: '/dashboard/ecommerce/store' },
      { title: 'Products', href: '/dashboard/ecommerce/products' },
      { title: 'Orders', href: '/dashboard/ecommerce/orders' },
      { title: 'Analytics', href: '/dashboard/ecommerce/analytics' },
    ]
  },
  {
    title: 'Knowledge Management',
    href: '/dashboard/knowledge',
    icon: BookOpen,
    children: [
      { title: 'Dashboard', href: '/dashboard/knowledge' },
      { title: 'Knowledge Base', href: '/dashboard/knowledge/base' },
      { title: 'Documents', href: '/dashboard/knowledge/documents' },
      { title: 'Experts', href: '/dashboard/knowledge/experts' },
      { title: 'Analytics', href: '/dashboard/knowledge/analytics' },
    ]
  },
  {
    title: 'Workflow Automation',
    href: '/dashboard/workflow',
    icon: Zap,
    children: [
      { title: 'Dashboard', href: '/dashboard/workflow' },
      { title: 'Process Designer', href: '/dashboard/workflow/designer' },
      { title: 'Active Workflows', href: '/dashboard/workflow/active' },
      { title: 'Templates', href: '/dashboard/workflow/templates' },
      { title: 'Analytics', href: '/dashboard/workflow/analytics' },
    ]
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
    children: [
      { title: 'General', href: '/dashboard/settings/general' },
      { title: 'Users & Permissions', href: '/dashboard/settings/users' },
      { title: 'Integrations', href: '/dashboard/settings/integrations' },
      { title: 'Security', href: '/dashboard/settings/security' },
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
