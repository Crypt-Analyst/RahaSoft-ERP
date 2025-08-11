// Accounting module types
export interface Invoice {
  id: string
  invoiceNumber: string
  customerId: string
  customerName: string
  customerEmail: string
  issueDate: Date
  dueDate: Date
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled'
  subtotal: number
  taxAmount: number
  totalAmount: number
  items: InvoiceItem[]
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export interface InvoiceItem {
  id: string
  description: string
  quantity: number
  unitPrice: number
  total: number
}

export interface Payment {
  id: string
  invoiceId: string
  amount: number
  method: 'cash' | 'card' | 'bank_transfer' | 'check' | 'other'
  reference?: string
  notes?: string
  createdAt: Date
}

export interface Account {
  id: string
  code: string
  name: string
  type: 'asset' | 'liability' | 'equity' | 'revenue' | 'expense'
  balance: number
  parentId?: string
  isActive: boolean
}

export interface Transaction {
  id: string
  date: Date
  description: string
  reference?: string
  entries: TransactionEntry[]
  totalDebit: number
  totalCredit: number
  createdAt: Date
}

export interface TransactionEntry {
  id: string
  accountId: string
  accountName: string
  debit: number
  credit: number
  description?: string
}
