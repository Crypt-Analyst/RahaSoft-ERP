import { 
  FolderOpen, Plus, Clock, Users, CheckCircle, AlertCircle, Calendar, Target, TrendingUp, BarChart3,
  Kanban, FileText, DollarSign, MessageSquare, MapPin, Share2, Search, Filter, Download,
  Settings, Eye, Edit, Star, Zap, Globe, Shield, ArrowRight, Bell, Tag, Briefcase,
  ChevronRight, Activity, PieChart, Timer, Archive, RefreshCw, Link, Layers
} from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Project Management</h1>
          <p className="text-gray-600 mt-1">Complete project lifecycle management with templates, collaboration, resource planning, and advanced analytics</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="h-4 w-4" />
            New Project
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <FileText className="h-4 w-4" />
            Templates
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <Kanban className="h-4 w-4" />
            Kanban View
          </button>
        </div>
      </div>

      {/* Enhanced Project Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Projects</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
              <p className="text-xs text-green-600">+3 this month</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <FolderOpen className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Tasks Completed</p>
              <p className="text-2xl font-bold text-green-600">342</p>
              <p className="text-xs text-green-600">89% completion rate</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Team Members</p>
              <p className="text-2xl font-bold text-purple-600">67</p>
              <p className="text-xs text-purple-600">Across all projects</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Budget Utilization</p>
              <p className="text-2xl font-bold text-orange-600">73%</p>
              <p className="text-xs text-orange-600">$2.1M allocated</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <DollarSign className="h-5 w-5 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Milestones</p>
              <p className="text-2xl font-bold text-cyan-600">89</p>
              <p className="text-xs text-cyan-600">12 this week</p>
            </div>
            <div className="p-3 bg-cyan-100 rounded-lg">
              <Target className="h-5 w-5 text-cyan-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Time Logged</p>
              <p className="text-2xl font-bold text-indigo-600">1,247h</p>
              <p className="text-xs text-indigo-600">This month</p>
            </div>
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Timer className="h-5 w-5 text-indigo-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Project Management Grid - All 20 Features */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        
        {/* Project Dashboard & Templates */}
        <div className="xl:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Project Dashboard & Templates</h3>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                <Search className="h-4 w-4" />
                Search
              </button>
              <button className="flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                <Filter className="h-4 w-4" />
                Filter
              </button>
            </div>
          </div>
          
          {/* Active Projects */}
          <div className="space-y-4 mb-6">
            <h4 className="font-medium text-gray-900">Active Projects</h4>
            {[
              { 
                name: 'E-Commerce Platform Redesign', 
                status: 'in-progress', 
                progress: 67,
                budget: '$125,000',
                spent: '$83,750',
                team: 8,
                deadline: '2024-09-15',
                client: 'TechCorp Inc.',
                priority: 'high',
                milestones: 4,
                tasks: 23,
                completedTasks: 15,
                timeLogged: '245h'
              },
              { 
                name: 'Mobile App Development', 
                status: 'planning', 
                progress: 23,
                budget: '$89,000',
                spent: '$20,470',
                team: 6,
                deadline: '2024-10-30',
                client: 'StartupXYZ',
                priority: 'medium',
                milestones: 6,
                tasks: 34,
                completedTasks: 8,
                timeLogged: '89h'
              },
            ].map((project, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium text-gray-900">{project.name}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                      project.status === 'planning' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {project.status}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {project.priority}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm text-gray-600">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div>
                    <p className="font-medium flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      Budget
                    </p>
                    <p className="font-semibold text-green-600">{project.budget}</p>
                    <p className="text-xs">Spent: {project.spent}</p>
                  </div>
                  <div>
                    <p className="font-medium flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      Team
                    </p>
                    <p>{project.team} members</p>
                    <p className="text-xs">Client: {project.client}</p>
                  </div>
                  <div>
                    <p className="font-medium flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Timeline
                    </p>
                    <p>{project.deadline}</p>
                    <p className="text-xs">{project.milestones} milestones</p>
                  </div>
                  <div>
                    <p className="font-medium flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" />
                      Tasks
                    </p>
                    <p>{project.completedTasks}/{project.tasks}</p>
                    <p className="text-xs text-blue-600">{project.timeLogged} logged</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Templates */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Project Templates</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { name: 'Software Development', tasks: 45, duration: '3-6 months', team: '5-8 people' },
                { name: 'Marketing Campaign', tasks: 23, duration: '1-2 months', team: '3-5 people' },
                { name: 'Product Launch', tasks: 67, duration: '4-8 months', team: '8-12 people' },
                { name: 'Data Migration', tasks: 18, duration: '2-3 months', team: '3-4 people' },
              ].map((template, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-sm text-gray-900">{template.name}</h5>
                    <FileText className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>{template.tasks} tasks • {template.duration}</p>
                    <p>Typical team: {template.team}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Task Management & Kanban */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Task Management</h3>
            <Kanban className="h-5 w-5 text-purple-600" />
          </div>
          
          {/* Kanban Board Preview */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Kanban Board</h4>
            <div className="space-y-3">
              {[
                { status: 'To Do', count: 12, color: 'gray' },
                { status: 'In Progress', count: 8, color: 'blue' },
                { status: 'Review', count: 5, color: 'yellow' },
                { status: 'Done', count: 23, color: 'green' },
              ].map((column, index) => (
                <div key={index} className="p-3 rounded-lg border border-gray-200 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium text-sm text-gray-900">{column.status}</h5>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                      {column.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Upcoming Milestones</h4>
            <div className="space-y-2">
              {[
                { name: 'Beta Release', project: 'E-Commerce Platform', date: '2024-08-25', status: 'on-track' },
                { name: 'User Testing Phase', project: 'Mobile App', date: '2024-09-01', status: 'at-risk' },
                { name: 'Data Validation', project: 'Migration Project', date: '2024-08-20', status: 'completed' },
              ].map((milestone, index) => (
                <div key={index} className="flex items-center justify-between p-2 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium text-sm text-gray-900">{milestone.name}</p>
                    <p className="text-xs text-gray-600">{milestone.project}</p>
                    <p className="text-xs text-gray-500">{milestone.date}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    milestone.status === 'completed' ? 'bg-green-100 text-green-700' :
                    milestone.status === 'on-track' ? 'bg-blue-100 text-blue-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {milestone.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dependencies */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Task Dependencies</h4>
            <div className="space-y-2">
              {[
                { task: 'UI Design Review', depends: 'Wireframe Approval', status: 'blocked' },
                { task: 'Backend Integration', depends: 'API Development', status: 'ready' },
              ].map((dependency, index) => (
                <div key={index} className="p-2 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Link className="h-3 w-3 text-blue-600" />
                    <p className="font-medium text-sm text-gray-900">{dependency.task}</p>
                  </div>
                  <p className="text-xs text-gray-600">Depends on: {dependency.depends}</p>
                  <span className={`inline-block mt-1 px-2 py-1 text-xs rounded-full ${
                    dependency.status === 'blocked' ? 'bg-red-100 text-red-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {dependency.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resource Management & Collaboration */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Resource Management</h3>
          
          {/* Resource Allocation */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Resource Allocation</h4>
            <div className="space-y-3">
              {[
                { name: 'John Smith', role: 'Lead Developer', allocation: 85, projects: 2, hours: '34h/week' },
                { name: 'Sarah Wilson', role: 'UI/UX Designer', allocation: 92, projects: 3, hours: '37h/week' },
              ].map((resource, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h5 className="font-medium text-sm text-gray-900">{resource.name}</h5>
                      <p className="text-xs text-gray-600">{resource.role}</p>
                    </div>
                    <span className={`text-sm font-medium ${
                      resource.allocation > 90 ? 'text-red-600' :
                      resource.allocation > 80 ? 'text-orange-600' :
                      'text-green-600'
                    }`}>
                      {resource.allocation}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>{resource.projects} projects</span>
                    <span>{resource.hours}</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        resource.allocation > 90 ? 'bg-red-600' :
                        resource.allocation > 80 ? 'bg-orange-600' :
                        'bg-green-600'
                      }`}
                      style={{ width: `${resource.allocation}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time Tracking */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Time Tracking</h4>
            <div className="space-y-2">
              {[
                { project: 'E-Commerce Platform', today: '6.5h', week: '34h', efficiency: 94 },
                { project: 'Mobile App', today: '4.2h', week: '23h', efficiency: 87 },
              ].map((timeEntry, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div>
                    <p className="font-medium text-sm text-gray-900">{timeEntry.project}</p>
                    <p className="text-xs text-gray-600">Today: {timeEntry.today} • Week: {timeEntry.week}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-blue-600">{timeEntry.efficiency}%</p>
                    <p className="text-xs text-gray-500">efficiency</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collaboration Tools */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Collaboration</h4>
            <div className="space-y-2">
              {[
                { type: 'comment', user: 'John Smith', message: 'Updated the design specs', time: '2h ago', project: 'E-Commerce' },
                { type: 'mention', user: 'Sarah Wilson', message: '@mike please review the wireframes', time: '4h ago', project: 'Mobile App' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-2 border border-gray-200 rounded-lg">
                  <div className={`p-2 rounded-lg ${
                    activity.type === 'comment' ? 'bg-blue-100' :
                    'bg-yellow-100'
                  }`}>
                    {activity.type === 'comment' && <MessageSquare className="h-3 w-3 text-blue-600" />}
                    {activity.type === 'mention' && <Bell className="h-3 w-3 text-yellow-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                    <p className="text-xs text-gray-600">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.project} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Management & Reporting</h3>
          <div className="space-y-4">
            {[
              { risk: 'Budget Overrun', probability: 'Medium', impact: 'High', status: 'monitoring' },
              { risk: 'Resource Shortage', probability: 'High', impact: 'Medium', status: 'mitigated' },
            ].map((risk, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded-lg">
                <h5 className="font-medium text-gray-900">{risk.risk}</h5>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mt-2">
                  <div>
                    <p>Probability: {risk.probability}</p>
                    <p>Impact: {risk.impact}</p>
                  </div>
                  <div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      risk.status === 'monitoring' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {risk.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Portal & Integration</h3>
          <div className="space-y-4">
            {[
              { client: 'TechCorp Inc.', project: 'E-Commerce Platform', lastAccess: '2h ago' },
              { client: 'StartupXYZ', project: 'Mobile App', lastAccess: '1 day ago' },
            ].map((client, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-blue-600" />
                  <div>
                    <p className="font-medium text-sm text-gray-900">{client.client}</p>
                    <p className="text-xs text-gray-600">{client.project}</p>
                    <p className="text-xs text-gray-500">Last access: {client.lastAccess}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
