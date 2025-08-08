import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  title: string
  value: string | number
  change?: {
    value: string
    trend: 'up' | 'down' | 'neutral'
  }
  icon?: ReactNode
  className?: string
}

export function StatCard({ title, value, change, icon, className }: StatCardProps) {
  return (
    <div className={cn(
      'rounded-lg border bg-white p-6 shadow-sm',
      className
    )}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={cn(
              'text-sm',
              change.trend === 'up' && 'text-green-600',
              change.trend === 'down' && 'text-red-600',
              change.trend === 'neutral' && 'text-gray-600'
            )}>
              {change.value}
            </p>
          )}
        </div>
        {icon && (
          <div className="rounded-full bg-blue-50 p-3">
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}

interface DashboardCardProps {
  title: string
  children: ReactNode
  action?: ReactNode
  className?: string
}

export function DashboardCard({ title, children, action, className }: DashboardCardProps) {
  return (
    <div className={cn(
      'rounded-lg border bg-white shadow-sm',
      className
    )}>
      <div className="flex items-center justify-between border-b p-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {action}
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
}
