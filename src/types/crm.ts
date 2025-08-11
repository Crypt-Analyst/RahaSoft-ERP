// CRM Module Type Definitions
export interface Contact {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  position?: string
  avatar?: string
  tags: string[]
  source: 'website' | 'referral' | 'cold-call' | 'social-media' | 'trade-show' | 'other'
  status: 'active' | 'inactive' | 'blocked'
  assignedTo?: string
  createdAt: string
  updatedAt: string
  lastContactDate?: string
  notes?: string
  socialProfiles?: {
    linkedin?: string
    twitter?: string
    facebook?: string
  }
  address?: {
    street: string
    city: string
    state: string
    country: string
    zipCode: string
  }
}

export interface Lead {
  id: string
  contactId?: string
  title: string
  company: string
  email: string
  phone?: string
  value: number
  probability: number
  stage: LeadStage
  source: 'website' | 'referral' | 'cold-call' | 'social-media' | 'trade-show' | 'other'
  assignedTo: string
  expectedCloseDate: string
  createdAt: string
  updatedAt: string
  lastActivity?: string
  notes: string
  tags: string[]
  priority: 'low' | 'medium' | 'high' | 'urgent'
  temperature: 'cold' | 'warm' | 'hot'
  lostReason?: string
  competitors?: string[]
  products: string[]
}

export interface LeadStage {
  id: string
  name: string
  order: number
  probability: number
  color: string
  isWon: boolean
  isLost: boolean
}

export interface Deal {
  id: string
  leadId?: string
  contactId: string
  title: string
  description?: string
  value: number
  currency: string
  stage: DealStage
  probability: number
  expectedCloseDate: string
  actualCloseDate?: string
  assignedTo: string
  createdAt: string
  updatedAt: string
  products: DealProduct[]
  activities: Activity[]
  attachments: Attachment[]
  tags: string[]
  lostReason?: string
  competitors?: string[]
}

export interface DealStage {
  id: string
  name: string
  order: number
  probability: number
  color: string
  isWon: boolean
  isLost: boolean
}

export interface DealProduct {
  id: string
  productId: string
  productName: string
  quantity: number
  unitPrice: number
  discount: number
  totalPrice: number
}

export interface Activity {
  id: string
  type: 'call' | 'email' | 'meeting' | 'task' | 'note' | 'proposal' | 'demo'
  title: string
  description?: string
  scheduledDate?: string
  completedDate?: string
  duration?: number // in minutes
  outcome?: string
  followUpDate?: string
  assignedTo: string
  contactId?: string
  leadId?: string
  dealId?: string
  createdAt: string
  updatedAt: string
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show'
  priority: 'low' | 'medium' | 'high'
  reminders: Reminder[]
  attachments: Attachment[]
}

export interface Reminder {
  id: string
  type: 'email' | 'notification' | 'sms'
  time: string // minutes before activity
  sent: boolean
}

export interface Attachment {
  id: string
  name: string
  type: string
  size: number
  url: string
  uploadedBy: string
  uploadedAt: string
}

export interface Campaign {
  id: string
  name: string
  type: 'email' | 'social' | 'phone' | 'direct-mail' | 'webinar' | 'event'
  status: 'draft' | 'scheduled' | 'active' | 'paused' | 'completed' | 'cancelled'
  startDate: string
  endDate?: string
  budget: number
  spent: number
  targetAudience: string[]
  goals: CampaignGoal[]
  metrics: CampaignMetrics
  createdBy: string
  createdAt: string
  updatedAt: string
  description?: string
  tags: string[]
}

export interface CampaignGoal {
  id: string
  type: 'leads' | 'revenue' | 'brand-awareness' | 'engagement'
  target: number
  achieved: number
  unit: string
}

export interface CampaignMetrics {
  impressions: number
  clicks: number
  conversions: number
  revenue: number
  cost: number
  roi: number
  ctr: number // click-through rate
  conversionRate: number
  leadsGenerated: number
  dealsWon: number
}

export interface SalesTarget {
  id: string
  userId: string
  period: 'monthly' | 'quarterly' | 'yearly'
  year: number
  month?: number
  quarter?: number
  revenueTarget: number
  dealsTarget: number
  activitiesTarget: number
  achieved: {
    revenue: number
    deals: number
    activities: number
  }
  status: 'on-track' | 'behind' | 'ahead' | 'achieved'
}

export interface SalesReport {
  id: string
  type: 'individual' | 'team' | 'company'
  period: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly'
  startDate: string
  endDate: string
  metrics: {
    totalRevenue: number
    dealsWon: number
    dealsLost: number
    averageDealSize: number
    salesCycle: number // average days
    conversionRate: number
    activities: number
    newLeads: number
    qualifiedLeads: number
  }
  trends: {
    revenue: TrendData[]
    deals: TrendData[]
    activities: TrendData[]
  }
  topPerformers: {
    userId: string
    userName: string
    revenue: number
    deals: number
  }[]
  generatedAt: string
  generatedBy: string
}

export interface TrendData {
  date: string
  value: number
}

export interface CRMDashboardMetrics {
  totalLeads: number
  qualifiedLeads: number
  totalDeals: number
  dealsWonThisMonth: number
  totalRevenue: number
  revenueThisMonth: number
  averageDealSize: number
  salesCycle: number
  conversionRate: number
  activitiesThisWeek: number
  upcomingActivities: number
  overdueActivities: number
}

export interface PipelineMetrics {
  stages: {
    stage: LeadStage
    count: number
    value: number
  }[]
  totalValue: number
  weightedValue: number
  velocityMetrics: {
    averageTimeInStage: { [stageId: string]: number }
    stageConversionRates: { [stageId: string]: number }
  }
}

// Form Types
export interface CreateContactForm {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  position?: string
  source: Contact['source']
  tags: string[]
  notes?: string
}

export interface CreateLeadForm {
  title: string
  company: string
  email: string
  phone?: string
  value: number
  stage: string
  source: Lead['source']
  assignedTo: string
  expectedCloseDate: string
  notes: string
  tags: string[]
  priority: Lead['priority']
  products: string[]
}

export interface CreateActivityForm {
  type: Activity['type']
  title: string
  description?: string
  scheduledDate?: string
  duration?: number
  contactId?: string
  leadId?: string
  dealId?: string
  priority: Activity['priority']
  reminders: {
    type: Reminder['type']
    time: string
  }[]
}

// API Response Types
export interface CRMApiResponse<T> {
  data: T
  success: boolean
  message?: string
  pagination?: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface CRMFilters {
  search?: string
  stage?: string[]
  assignedTo?: string[]
  source?: string[]
  dateRange?: {
    start: string
    end: string
  }
  tags?: string[]
  priority?: string[]
  status?: string[]
}

export interface CRMSortOptions {
  field: string
  direction: 'asc' | 'desc'
}
