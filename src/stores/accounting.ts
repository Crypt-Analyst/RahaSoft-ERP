import { create } from 'zustand'
import { Invoice, Payment, Account, Transaction } from '@/types/accounting'

interface AccountingState {
  // Invoices
  invoices: Invoice[]
  selectedInvoice: Invoice | null
  
  // Payments
  payments: Payment[]
  
  // Accounts
  accounts: Account[]
  
  // Transactions
  transactions: Transaction[]
  
  // Loading states
  isLoading: boolean
  
  // Actions
  addInvoice: (invoice: Omit<Invoice, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateInvoice: (id: string, updates: Partial<Invoice>) => void
  deleteInvoice: (id: string) => void
  setSelectedInvoice: (invoice: Invoice | null) => void
  
  addPayment: (payment: Omit<Payment, 'id' | 'createdAt'>) => void
  
  addAccount: (account: Omit<Account, 'id'>) => void
  updateAccount: (id: string, updates: Partial<Account>) => void
  
  addTransaction: (transaction: Omit<Transaction, 'id' | 'createdAt'>) => void
  
  setLoading: (loading: boolean) => void
}

export const useAccountingStore = create<AccountingState>((set, get) => ({
  // Initial state
  invoices: [],
  selectedInvoice: null,
  payments: [],
  accounts: [
    {
      id: '1',
      code: '1000',
      name: 'Cash',
      type: 'asset',
      balance: 25000,
      isActive: true
    },
    {
      id: '2',
      code: '1200',
      name: 'Accounts Receivable',
      type: 'asset',
      balance: 15000,
      isActive: true
    },
    {
      id: '3',
      code: '4000',
      name: 'Sales Revenue',
      type: 'revenue',
      balance: 120000,
      isActive: true
    },
    {
      id: '4',
      code: '2000',
      name: 'Accounts Payable',
      type: 'liability',
      balance: 8000,
      isActive: true
    }
  ],
  transactions: [],
  isLoading: false,

  // Actions
  addInvoice: (invoiceData) => {
    const invoice: Invoice = {
      ...invoiceData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    set((state) => ({
      invoices: [...state.invoices, invoice]
    }))
  },

  updateInvoice: (id, updates) => {
    set((state) => ({
      invoices: state.invoices.map((invoice) =>
        invoice.id === id
          ? { ...invoice, ...updates, updatedAt: new Date() }
          : invoice
      )
    }))
  },

  deleteInvoice: (id) => {
    set((state) => ({
      invoices: state.invoices.filter((invoice) => invoice.id !== id),
      selectedInvoice: state.selectedInvoice?.id === id ? null : state.selectedInvoice
    }))
  },

  setSelectedInvoice: (invoice) => {
    set({ selectedInvoice: invoice })
  },

  addPayment: (paymentData) => {
    const payment: Payment = {
      ...paymentData,
      id: crypto.randomUUID(),
      createdAt: new Date()
    }
    set((state) => ({
      payments: [...state.payments, payment]
    }))
    
    // Update invoice status if fully paid
    const invoice = get().invoices.find(inv => inv.id === payment.invoiceId)
    if (invoice) {
      const totalPaid = [...get().payments, payment]
        .filter(p => p.invoiceId === payment.invoiceId)
        .reduce((sum, p) => sum + p.amount, 0)
      
      if (totalPaid >= invoice.totalAmount) {
        get().updateInvoice(payment.invoiceId, { status: 'paid' })
      }
    }
  },

  addAccount: (accountData) => {
    const account: Account = {
      ...accountData,
      id: crypto.randomUUID()
    }
    set((state) => ({
      accounts: [...state.accounts, account]
    }))
  },

  updateAccount: (id, updates) => {
    set((state) => ({
      accounts: state.accounts.map((account) =>
        account.id === id ? { ...account, ...updates } : account
      )
    }))
  },

  addTransaction: (transactionData) => {
    const transaction: Transaction = {
      ...transactionData,
      id: crypto.randomUUID(),
      createdAt: new Date()
    }
    set((state) => ({
      transactions: [...state.transactions, transaction]
    }))
  },

  setLoading: (loading) => {
    set({ isLoading: loading })
  }
}))
