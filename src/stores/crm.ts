import { create } from 'zustand'
import { 
  Contact, 
  Lead, 
  Deal, 
  Activity, 
  Campaign, 
  CRMDashboardMetrics,
  PipelineMetrics,
  LeadStage,
  DealStage,
  SalesTarget,
  CRMFilters,
  CRMSortOptions 
} from '@/types/crm'

interface CRMState {
  // Data
  contacts: Contact[]
  leads: Lead[]
  deals: Deal[]
  activities: Activity[]
  campaigns: Campaign[]
  leadStages: LeadStage[]
  dealStages: DealStage[]
  salesTargets: SalesTarget[]
  
  // UI State
  isLoading: boolean
  filters: CRMFilters
  sortOptions: CRMSortOptions
  selectedContacts: string[]
  selectedLeads: string[]
  
  // Metrics
  dashboardMetrics: CRMDashboardMetrics
  pipelineMetrics: PipelineMetrics
  
  // Actions
  // Contacts
  addContact: (contact: Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateContact: (id: string, updates: Partial<Contact>) => void
  deleteContact: (id: string) => void
  
  // Leads
  addLead: (lead: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateLead: (id: string, updates: Partial<Lead>) => void
  convertLeadToDeal: (leadId: string) => void
  deleteLead: (id: string) => void
  
  // Deals
  addDeal: (deal: Omit<Deal, 'id' | 'createdAt' | 'updatedAt' | 'activities' | 'attachments'>) => void
  updateDeal: (id: string, updates: Partial<Deal>) => void
  moveDealToStage: (dealId: string, stageId: string) => void
  closeDeal: (dealId: string, won: boolean, reason?: string) => void
  
  // Activities
  addActivity: (activity: Omit<Activity, 'id' | 'createdAt' | 'updatedAt' | 'reminders' | 'attachments'>) => void
  updateActivity: (id: string, updates: Partial<Activity>) => void
  completeActivity: (id: string, outcome?: string) => void
  
  // Utility
  refreshData: () => void
  setFilters: (filters: Partial<CRMFilters>) => void
  setSortOptions: (options: CRMSortOptions) => void
  calculateMetrics: () => void
}

// Sample data generators
const generateContacts = (): Contact[] => [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@techcorp.com',
    phone: '+1-555-0123',
    company: 'TechCorp Solutions',
    position: 'CTO',
    tags: ['enterprise', 'decision-maker'],
    source: 'website',
    status: 'active',
    assignedTo: 'user-1',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T15:30:00Z',
    lastContactDate: '2024-01-18T14:00:00Z',
    notes: 'Interested in enterprise package, budget approved for Q1',
    socialProfiles: {
      linkedin: 'https://linkedin.com/in/johnsmith-tech'
    },
    address: {
      street: '123 Tech Street',
      city: 'San Francisco',
      state: 'CA',
      country: 'USA',
      zipCode: '94105'
    }
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.j@innovatestart.io',
    phone: '+1-555-0456',
    company: 'InnovateStart',
    position: 'CEO',
    tags: ['startup', 'high-value'],
    source: 'referral',
    status: 'active',
    assignedTo: 'user-2',
    createdAt: '2024-01-10T09:15:00Z',
    updatedAt: '2024-01-25T11:45:00Z',
    lastContactDate: '2024-01-22T16:30:00Z',
    notes: 'Fast-growing startup, needs scalable solution',
    socialProfiles: {
      linkedin: 'https://linkedin.com/in/sarahjohnson-ceo',
      twitter: 'https://twitter.com/sarahj_ceo'
    }
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'm.chen@globalmanufacturing.com',
    phone: '+1-555-0789',
    company: 'Global Manufacturing Inc',
    position: 'Operations Director',
    tags: ['manufacturing', 'enterprise'],
    source: 'trade-show',
    status: 'active',
    assignedTo: 'user-1',
    createdAt: '2024-01-05T14:20:00Z',
    updatedAt: '2024-01-28T10:15:00Z',
    lastContactDate: '2024-01-26T13:00:00Z',
    notes: 'Evaluating ERP solutions for manufacturing division'
  }
]

const generateLeadStages = (): LeadStage[] => [
  { id: 'new', name: 'New Lead', order: 1, probability: 10, color: '#94a3b8', isWon: false, isLost: false },
  { id: 'qualified', name: 'Qualified', order: 2, probability: 25, color: '#3b82f6', isWon: false, isLost: false },
  { id: 'proposal', name: 'Proposal Sent', order: 3, probability: 50, color: '#f59e0b', isWon: false, isLost: false },
  { id: 'negotiation', name: 'Negotiation', order: 4, probability: 75, color: '#ef4444', isWon: false, isLost: false },
  { id: 'won', name: 'Won', order: 5, probability: 100, color: '#10b981', isWon: true, isLost: false },
  { id: 'lost', name: 'Lost', order: 6, probability: 0, color: '#6b7280', isWon: false, isLost: true }
]

const generateLeads = (stages: LeadStage[]): Lead[] => [
  {
    id: '1',
    contactId: '1',
    title: 'Enterprise ERP Implementation - TechCorp',
    company: 'TechCorp Solutions',
    email: 'john.smith@techcorp.com',
    phone: '+1-555-0123',
    value: 150000,
    probability: 75,
    stage: stages.find(s => s.id === 'negotiation')!,
    source: 'website',
    assignedTo: 'user-1',
    expectedCloseDate: '2024-03-15',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-28T16:20:00Z',
    lastActivity: '2024-01-26T14:30:00Z',
    notes: 'Strong interest in full implementation. Decision committee meeting scheduled for next week.',
    tags: ['enterprise', 'high-value', 'hot'],
    priority: 'high',
    temperature: 'hot',
    competitors: ['SAP', 'Oracle'],
    products: ['erp-enterprise', 'support-premium']
  },
  {
    id: '2',
    contactId: '2',
    title: 'Startup Growth Package - InnovateStart',
    company: 'InnovateStart',
    email: 'sarah.j@innovatestart.io',
    phone: '+1-555-0456',
    value: 25000,
    probability: 50,
    stage: stages.find(s => s.id === 'proposal')!,
    source: 'referral',
    assignedTo: 'user-2',
    expectedCloseDate: '2024-02-28',
    createdAt: '2024-01-10T09:15:00Z',
    updatedAt: '2024-01-25T11:45:00Z',
    lastActivity: '2024-01-24T15:00:00Z',
    notes: 'Proposal submitted. Waiting for feedback on pricing and implementation timeline.',
    tags: ['startup', 'growth-package'],
    priority: 'medium',
    temperature: 'warm',
    products: ['erp-growth', 'support-standard']
  },
  {
    id: '3',
    contactId: '3',
    title: 'Manufacturing Module - Global Manufacturing',
    company: 'Global Manufacturing Inc',
    email: 'm.chen@globalmanufacturing.com',
    value: 75000,
    probability: 25,
    stage: stages.find(s => s.id === 'qualified')!,
    source: 'trade-show',
    assignedTo: 'user-1',
    expectedCloseDate: '2024-04-30',
    createdAt: '2024-01-05T14:20:00Z',
    updatedAt: '2024-01-28T10:15:00Z',
    lastActivity: '2024-01-27T11:30:00Z',
    notes: 'Interested in manufacturing-specific features. Scheduled for product demo next week.',
    tags: ['manufacturing', 'demo-scheduled'],
    priority: 'medium',
    temperature: 'warm',
    products: ['erp-manufacturing', 'inventory-advanced']
  }
]

export const useCRMStore = create<CRMState>((set, get) => {
  const leadStages = generateLeadStages()
  const contacts = generateContacts()
  const leads = generateLeads(leadStages)
  
  const calculateDashboardMetrics = (): CRMDashboardMetrics => {
    const state = get()
    const currentMonth = new Date().getMonth()
    const currentYear = new Date().getFullYear()
    
    const thisMonthLeads = state.leads.filter(lead => {
      const createdDate = new Date(lead.createdAt)
      return createdDate.getMonth() === currentMonth && createdDate.getFullYear() === currentYear
    })
    
    const wonDealsThisMonth = state.deals.filter(deal => {
      const closedDate = deal.actualCloseDate ? new Date(deal.actualCloseDate) : null
      return closedDate && 
             closedDate.getMonth() === currentMonth && 
             closedDate.getFullYear() === currentYear &&
             deal.stage.isWon
    })
    
    const totalRevenue = state.deals
      .filter(deal => deal.stage.isWon)
      .reduce((sum, deal) => sum + deal.value, 0)
    
    const revenueThisMonth = wonDealsThisMonth.reduce((sum, deal) => sum + deal.value, 0)
    
    const totalDeals = state.deals.length
    const averageDealSize = totalDeals > 0 ? totalRevenue / state.deals.filter(d => d.stage.isWon).length : 0
    
    return {
      totalLeads: state.leads.length,
      qualifiedLeads: state.leads.filter(l => l.stage.id !== 'new').length,
      totalDeals: totalDeals,
      dealsWonThisMonth: wonDealsThisMonth.length,
      totalRevenue,
      revenueThisMonth,
      averageDealSize,
      salesCycle: 45, // Average days - would be calculated from real data
      conversionRate: state.leads.length > 0 ? (state.deals.filter(d => d.stage.isWon).length / state.leads.length) * 100 : 0,
      activitiesThisWeek: state.activities.filter(a => {
        const activityDate = new Date(a.scheduledDate || a.createdAt)
        const weekAgo = new Date()
        weekAgo.setDate(weekAgo.getDate() - 7)
        return activityDate >= weekAgo
      }).length,
      upcomingActivities: state.activities.filter(a => 
        a.status === 'scheduled' && 
        new Date(a.scheduledDate || '') > new Date()
      ).length,
      overdueActivities: state.activities.filter(a => 
        a.status === 'scheduled' && 
        new Date(a.scheduledDate || '') < new Date()
      ).length
    }
  }
  
  const calculatePipelineMetrics = (): PipelineMetrics => {
    const state = get()
    const stageMetrics = state.leadStages.map(stage => ({
      stage,
      count: state.leads.filter(lead => lead.stage.id === stage.id).length,
      value: state.leads.filter(lead => lead.stage.id === stage.id).reduce((sum, lead) => sum + lead.value, 0)
    }))
    
    const totalValue = state.leads.reduce((sum, lead) => sum + lead.value, 0)
    const weightedValue = state.leads.reduce((sum, lead) => sum + (lead.value * lead.probability / 100), 0)
    
    return {
      stages: stageMetrics,
      totalValue,
      weightedValue,
      velocityMetrics: {
        averageTimeInStage: {},
        stageConversionRates: {}
      }
    }
  }

  return {
    // Initial data
    contacts,
    leads,
    deals: [],
    activities: [],
    campaigns: [],
    leadStages,
    dealStages: [],
    salesTargets: [],
    
    // UI State
    isLoading: false,
    filters: {},
    sortOptions: { field: 'createdAt', direction: 'desc' },
    selectedContacts: [],
    selectedLeads: [],
    
    // Metrics
    dashboardMetrics: calculateDashboardMetrics(),
    pipelineMetrics: calculatePipelineMetrics(),
    
    // Actions
    addContact: (contactData) => {
      const newContact: Contact = {
        ...contactData,
        id: `contact_${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      
      set(state => ({
        contacts: [...state.contacts, newContact],
        dashboardMetrics: calculateDashboardMetrics()
      }))
    },
    
    updateContact: (id, updates) => {
      set(state => ({
        contacts: state.contacts.map(contact =>
          contact.id === id 
            ? { ...contact, ...updates, updatedAt: new Date().toISOString() }
            : contact
        ),
        dashboardMetrics: calculateDashboardMetrics()
      }))
    },
    
    deleteContact: (id) => {
      set(state => ({
        contacts: state.contacts.filter(contact => contact.id !== id),
        leads: state.leads.filter(lead => lead.contactId !== id),
        dashboardMetrics: calculateDashboardMetrics()
      }))
    },
    
    addLead: (leadData) => {
      const newLead: Lead = {
        ...leadData,
        id: `lead_${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      
      set(state => ({
        leads: [...state.leads, newLead],
        dashboardMetrics: calculateDashboardMetrics(),
        pipelineMetrics: calculatePipelineMetrics()
      }))
    },
    
    updateLead: (id, updates) => {
      set(state => ({
        leads: state.leads.map(lead =>
          lead.id === id 
            ? { ...lead, ...updates, updatedAt: new Date().toISOString() }
            : lead
        ),
        dashboardMetrics: calculateDashboardMetrics(),
        pipelineMetrics: calculatePipelineMetrics()
      }))
    },
    
    convertLeadToDeal: (leadId) => {
      const state = get()
      const lead = state.leads.find(l => l.id === leadId)
      if (!lead) return
      
      // Implementation would convert lead to deal
      console.log('Converting lead to deal:', leadId)
    },
    
    deleteLead: (id) => {
      set(state => ({
        leads: state.leads.filter(lead => lead.id !== id),
        dashboardMetrics: calculateDashboardMetrics(),
        pipelineMetrics: calculatePipelineMetrics()
      }))
    },
    
    addDeal: (dealData) => {
      // Implementation for adding deals
      console.log('Adding deal:', dealData)
    },
    
    updateDeal: (id, updates) => {
      // Implementation for updating deals
      console.log('Updating deal:', id, updates)
    },
    
    moveDealToStage: (dealId, stageId) => {
      // Implementation for moving deals between stages
      console.log('Moving deal to stage:', dealId, stageId)
    },
    
    closeDeal: (dealId, won, reason) => {
      // Implementation for closing deals
      console.log('Closing deal:', dealId, won, reason)
    },
    
    addActivity: (activityData) => {
      const newActivity: Activity = {
        ...activityData,
        id: `activity_${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        reminders: [],
        attachments: []
      }
      
      set(state => ({
        activities: [...state.activities, newActivity],
        dashboardMetrics: calculateDashboardMetrics()
      }))
    },
    
    updateActivity: (id, updates) => {
      set(state => ({
        activities: state.activities.map(activity =>
          activity.id === id 
            ? { ...activity, ...updates, updatedAt: new Date().toISOString() }
            : activity
        ),
        dashboardMetrics: calculateDashboardMetrics()
      }))
    },
    
    completeActivity: (id, outcome) => {
      set(state => ({
        activities: state.activities.map(activity =>
          activity.id === id 
            ? { 
                ...activity, 
                status: 'completed',
                completedDate: new Date().toISOString(),
                outcome,
                updatedAt: new Date().toISOString()
              }
            : activity
        ),
        dashboardMetrics: calculateDashboardMetrics()
      }))
    },
    
    refreshData: () => {
      set({ isLoading: true })
      
      // Simulate API call
      setTimeout(() => {
        set(state => ({
          isLoading: false,
          dashboardMetrics: calculateDashboardMetrics(),
          pipelineMetrics: calculatePipelineMetrics()
        }))
      }, 1000)
    },
    
    setFilters: (newFilters) => {
      set(state => ({
        filters: { ...state.filters, ...newFilters }
      }))
    },
    
    setSortOptions: (options) => {
      set({ sortOptions: options })
    },
    
    calculateMetrics: () => {
      set(state => ({
        dashboardMetrics: calculateDashboardMetrics(),
        pipelineMetrics: calculatePipelineMetrics()
      }))
    }
  }
})
