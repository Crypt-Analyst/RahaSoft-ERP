'use client'

import { useState } from 'react'

export default function DocumentManagementPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const documentStats = [
    { name: 'Total Documents', value: '24,847', change: '+12.3%', trend: 'up' },
    { name: 'Storage Used', value: '2.8 TB', change: '+8.7%', trend: 'up' },
    { name: 'Active Workflows', value: '156', change: '+24.1%', trend: 'up' },
    { name: 'Pending Approvals', value: '43', change: '-15.2%', trend: 'down' },
    { name: 'Documents Shared', value: '1,247', change: '+31.5%', trend: 'up' },
    { name: 'Version Control', value: '98.9%', change: '+1.2%', trend: 'up' }
  ]

  const recentDocuments = [
    { 
      id: 'DOC-001', 
      name: 'Q4 Financial Report.pdf', 
      type: 'PDF', 
      size: '2.4 MB', 
      modified: '2024-01-15', 
      owner: 'John Smith',
      status: 'approved'
    },
    { 
      id: 'DOC-002', 
      name: 'Employee Handbook 2024.docx', 
      type: 'Word', 
      size: '1.8 MB', 
      modified: '2024-01-14', 
      owner: 'Sarah Johnson',
      status: 'draft'
    },
    { 
      id: 'DOC-003', 
      name: 'Project Timeline.xlsx', 
      type: 'Excel', 
      size: '0.9 MB', 
      modified: '2024-01-13', 
      owner: 'Mike Davis',
      status: 'review'
    },
    { 
      id: 'DOC-004', 
      name: 'Marketing Strategy.pptx', 
      type: 'PowerPoint', 
      size: '5.2 MB', 
      modified: '2024-01-12', 
      owner: 'Emily Chen',
      status: 'approved'
    },
    { 
      id: 'DOC-005', 
      name: 'Contract Template.docx', 
      type: 'Word', 
      size: '0.3 MB', 
      modified: '2024-01-11', 
      owner: 'David Wilson',
      status: 'locked'
    }
  ]

  const workflows = [
    {
      id: 'WF-001',
      name: 'Invoice Approval Process',
      status: 'active',
      documents: 23,
      avgTime: '2.3 days',
      completion: 89
    },
    {
      id: 'WF-002',
      name: 'Contract Review Workflow',
      status: 'active',
      documents: 15,
      avgTime: '4.1 days',
      completion: 76
    },
    {
      id: 'WF-003',
      name: 'Policy Document Approval',
      status: 'paused',
      documents: 8,
      avgTime: '1.8 days',
      completion: 45
    },
    {
      id: 'WF-004',
      name: 'Marketing Material Review',
      status: 'active',
      documents: 31,
      avgTime: '1.2 days',
      completion: 92
    }
  ]

  const folders = [
    { name: 'Financial Reports', documents: 1247, size: '890 MB', lastModified: '2024-01-15' },
    { name: 'HR Documents', documents: 3456, size: '1.2 GB', lastModified: '2024-01-14' },
    { name: 'Legal Contracts', documents: 678, size: '234 MB', lastModified: '2024-01-13' },
    { name: 'Marketing Materials', documents: 2134, size: '2.1 GB', lastModified: '2024-01-12' },
    { name: 'Project Documentation', documents: 1890, size: '567 MB', lastModified: '2024-01-11' },
    { name: 'Training Materials', documents: 890, size: '445 MB', lastModified: '2024-01-10' }
  ]

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf': return '📄'
      case 'word': return '📝'
      case 'excel': return '📊'
      case 'powerpoint': return '📊'
      default: return '📁'
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Document Management</h1>
          <p className="text-gray-600 mt-2">Centralized document storage, version control, and workflow management</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Upload Document
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Create Workflow
          </button>
        </div>
      </div>

      {/* Document Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documentStats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-600">{stat.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', name: 'Overview' },
              { id: 'documents', name: 'Documents' },
              { id: 'folders', name: 'Folders' },
              { id: 'workflows', name: 'Workflows' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="font-medium">📁 Create New Folder</span>
                      <p className="text-sm text-gray-600">Organize documents into folders</p>
                    </button>
                    <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="font-medium">⚡ Start Workflow</span>
                      <p className="text-sm text-gray-600">Begin document approval process</p>
                    </button>
                    <button className="w-full text-left bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="font-medium">🔍 Search Documents</span>
                      <p className="text-sm text-gray-600">Find documents by content or metadata</p>
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Storage Analytics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Storage Capacity</span>
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '56%'}}></div>
                        </div>
                        <span className="text-sm font-semibold">56%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Version Control</span>
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '98%'}}></div>
                        </div>
                        <span className="text-sm font-semibold">98%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Compliance Score</span>
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: '94%'}}></div>
                        </div>
                        <span className="text-sm font-semibold">94%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Recent Documents</h3>
                <div className="flex gap-2">
                  <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                    Filter
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Upload New
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Document</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Size</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Owner</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Modified</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentDocuments.map((doc) => (
                      <tr key={doc.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{getFileIcon(doc.type)}</span>
                            <div>
                              <span className="text-sm font-medium">{doc.name}</span>
                              <p className="text-xs text-gray-500">{doc.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{doc.type}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{doc.size}</td>
                        <td className="py-3 px-4 text-sm">{doc.owner}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{doc.modified}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            doc.status === 'approved' ? 'bg-green-100 text-green-700' :
                            doc.status === 'review' ? 'bg-yellow-100 text-yellow-700' :
                            doc.status === 'draft' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <button className="text-blue-600 hover:text-blue-700 text-sm">View</button>
                            <button className="text-green-600 hover:text-green-700 text-sm">Edit</button>
                            <button className="text-purple-600 hover:text-purple-700 text-sm">Share</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'folders' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Document Folders</h3>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Create Folder
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {folders.map((folder, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">📁</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{folder.name}</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>{folder.documents.toLocaleString()} documents</p>
                          <p>{folder.size}</p>
                          <p>Modified: {folder.lastModified}</p>
                        </div>
                        <button className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Open Folder →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'workflows' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Document Workflows</h3>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Create Workflow
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {workflows.map((workflow) => (
                  <div key={workflow.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">{workflow.name}</h4>
                        <p className="text-sm text-gray-600">{workflow.id}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        workflow.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {workflow.status.charAt(0).toUpperCase() + workflow.status.slice(1)}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-500">Documents</p>
                        <p className="font-semibold">{workflow.documents}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Avg Time</p>
                        <p className="font-semibold">{workflow.avgTime}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Completion Rate</span>
                        <span>{workflow.completion}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                          style={{width: `${workflow.completion}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        View Details
                      </button>
                      <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
