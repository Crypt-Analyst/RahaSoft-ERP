import { 
  Users, Plus, Calendar, Clock, TrendingUp, UserCheck, FileText, Award,
  GraduationCap, Shield, Building, DollarSign, AlertTriangle, CheckCircle,
  Settings, Search, Filter, Download, Star, Globe, Briefcase, Target,
  Heart, MessageSquare, BarChart3, UserX, UserPlus, Bell, MapPin
} from 'lucide-react'

export default function HRPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Human Resources</h1>
          <p className="text-gray-600 mt-1">Complete HR management with employee lifecycle, payroll, performance tracking, and compliance</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <UserPlus className="h-4 w-4" />
            Add Employee
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Briefcase className="h-4 w-4" />
            Post Job
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <DollarSign className="h-4 w-4" />
            Run Payroll
          </button>
        </div>
      </div>

      {/* HR Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Employees</p>
              <p className="text-2xl font-bold text-gray-900">847</p>
              <p className="text-xs text-green-600">+23 this month</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Open Positions</p>
              <p className="text-2xl font-bold text-orange-600">34</p>
              <p className="text-xs text-orange-600">12 urgent</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <Briefcase className="h-5 w-5 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Attendance Rate</p>
              <p className="text-2xl font-bold text-green-600">96.8%</p>
              <p className="text-xs text-green-600">+2.1% vs last month</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <UserCheck className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Turnover Rate</p>
              <p className="text-2xl font-bold text-red-600">4.2%</p>
              <p className="text-xs text-red-600">-0.8% vs last month</p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <UserX className="h-5 w-5 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Payroll Cost</p>
              <p className="text-2xl font-bold text-purple-600">$2.1M</p>
              <p className="text-xs text-purple-600">Monthly total</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <DollarSign className="h-5 w-5 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Training Hours</p>
              <p className="text-2xl font-bold text-cyan-600">1,847</p>
              <p className="text-xs text-cyan-600">This quarter</p>
            </div>
            <div className="p-3 bg-cyan-100 rounded-lg">
              <GraduationCap className="h-5 w-5 text-cyan-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main HR Content Grid - All 20 Features */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        
        {/* Employee Database & ATS */}
        <div className="xl:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Employee Database & Recruitment (ATS)</h3>
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
          
          {/* Employee Profiles */}
          <div className="space-y-4 mb-6">
            <h4 className="font-medium text-gray-900">Recent Employee Activities</h4>
            {[
              { 
                name: 'Sarah Johnson', 
                role: 'Senior Developer', 
                department: 'Engineering',
                status: 'active',
                location: 'New York',
                performance: 'excellent',
                lastActivity: '2 hours ago',
                benefits: 'Full Package',
                training: '85% complete'
              },
              { 
                name: 'Michael Chen', 
                role: 'Product Manager', 
                department: 'Product',
                status: 'on-leave',
                location: 'San Francisco',
                performance: 'good',
                lastActivity: '3 days ago',
                benefits: 'Full Package',
                training: '92% complete'
              },
              { 
                name: 'Emily Rodriguez', 
                role: 'HR Specialist', 
                department: 'Human Resources',
                status: 'active',
                location: 'Remote',
                performance: 'excellent',
                lastActivity: '30 min ago',
                benefits: 'Full Package',
                training: '78% complete'
              },
            ].map((employee, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{employee.name}</h4>
                      <p className="text-sm text-gray-600">{employee.role} • {employee.department}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    employee.status === 'active' ? 'bg-green-100 text-green-700' :
                    employee.status === 'on-leave' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {employee.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div>
                    <p className="font-medium flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Location
                    </p>
                    <p>{employee.location}</p>
                  </div>
                  <div>
                    <p className="font-medium flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      Performance
                    </p>
                    <p className={`capitalize ${
                      employee.performance === 'excellent' ? 'text-green-600' :
                      employee.performance === 'good' ? 'text-blue-600' :
                      'text-yellow-600'
                    }`}>{employee.performance}</p>
                  </div>
                  <div>
                    <p className="font-medium flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      Benefits
                    </p>
                    <p>{employee.benefits}</p>
                  </div>
                  <div>
                    <p className="font-medium flex items-center gap-1">
                      <GraduationCap className="h-3 w-3" />
                      Training
                    </p>
                    <p className="text-blue-600">{employee.training}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recruitment Pipeline */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Active Recruitment Pipeline</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { position: 'Senior React Developer', applicants: 47, stage: 'interviewing', interviews: 8 },
                { position: 'DevOps Engineer', applicants: 23, stage: 'screening', interviews: 0 },
                { position: 'UX Designer', applicants: 67, stage: 'reviewing', interviews: 0 },
                { position: 'Product Manager', applicants: 34, stage: 'offer', interviews: 12 },
              ].map((job, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-sm text-gray-900">{job.position}</h5>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      job.stage === 'offer' ? 'bg-green-100 text-green-700' :
                      job.stage === 'interviewing' ? 'bg-blue-100 text-blue-700' :
                      job.stage === 'screening' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {job.stage}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{job.applicants} applicants</span>
                    <span>{job.interviews} interviews</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Attendance & Time Tracking */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Attendance & Time</h3>
            <Clock className="h-5 w-5 text-blue-600" />
          </div>
          
          {/* Today's Attendance */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Today's Status</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                <div>
                  <p className="font-medium text-green-900">Present</p>
                  <p className="text-sm text-green-600">812 employees</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div>
                  <p className="font-medium text-yellow-900">Late</p>
                  <p className="text-sm text-yellow-600">18 employees</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
                <div>
                  <p className="font-medium text-red-900">Absent</p>
                  <p className="text-sm text-red-600">17 employees</p>
                </div>
                <UserX className="h-8 w-8 text-red-600" />
              </div>
            </div>
          </div>

          {/* Leave Requests */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Pending Leave Requests</h4>
            <div className="space-y-2">
              {[
                { name: 'John Smith', type: 'Vacation', days: 5, date: '2024-08-20' },
                { name: 'Lisa Wong', type: 'Sick Leave', days: 2, date: '2024-08-15' },
                { name: 'David Brown', type: 'Personal', days: 1, date: '2024-08-18' },
              ].map((request, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium text-sm text-gray-900">{request.name}</p>
                    <p className="text-xs text-gray-600">{request.type} • {request.days} days</p>
                    <p className="text-xs text-gray-500">From: {request.date}</p>
                  </div>
                  <div className="flex gap-1">
                    <button className="px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700">
                      Approve
                    </button>
                    <button className="px-2 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700">
                      Deny
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance & Training */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance & Development</h3>
          
          {/* Performance Reviews */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Upcoming Reviews</h4>
            <div className="space-y-3">
              {[
                { employee: 'Sarah Johnson', type: 'Annual Review', date: '2024-08-25', manager: 'John Doe' },
                { employee: 'Michael Chen', type: 'Quarterly Check-in', date: '2024-08-22', manager: 'Jane Smith' },
                { employee: 'Emily Rodriguez', type: '90-Day Review', date: '2024-08-30', manager: 'Bob Wilson' },
              ].map((review, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-sm text-gray-900">{review.employee}</h5>
                    <span className="text-xs text-blue-600">{review.date}</span>
                  </div>
                  <p className="text-xs text-gray-600">{review.type}</p>
                  <p className="text-xs text-gray-500">Manager: {review.manager}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Training Progress */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Training Programs</h4>
            <div className="space-y-3">
              {[
                { course: 'Leadership Development', enrolled: 45, completed: 23, progress: 51 },
                { course: 'Technical Skills Update', enrolled: 78, completed: 67, progress: 86 },
                { course: 'Compliance Training', enrolled: 200, completed: 198, progress: 99 },
              ].map((training, index) => (
                <div key={index} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-sm text-gray-900">{training.course}</h5>
                    <span className="text-xs text-blue-600">{training.progress}%</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2 mb-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${training.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-600">
                    {training.completed}/{training.enrolled} completed
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Payroll & Benefits Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Payroll Management & Benefits</h3>
            <button className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <DollarSign className="h-4 w-4" />
              Process Payroll
            </button>
          </div>
          
          {/* Payroll Status */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Current Payroll Cycle</h4>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-medium text-gray-900">August 2024 Payroll</p>
                    <p className="text-sm text-gray-600">Pay Period: Aug 1-15, 2024</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                    Processing
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-600">Gross Pay</p>
                    <p className="text-lg font-bold text-gray-900">$2,145,680</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-600">Net Pay</p>
                    <p className="text-lg font-bold text-green-600">$1,687,250</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-600">Tax Deductions</p>
                    <p className="text-lg font-bold text-red-600">$387,420</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-600">Benefits</p>
                    <p className="text-lg font-bold text-purple-600">$71,010</p>
                  </div>
                </div>
              </div>

              {/* Benefits Summary */}
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <h5 className="font-medium text-gray-900 mb-3">Benefits Administration</h5>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-purple-700">Health Insurance</p>
                    <p className="text-gray-600">789 enrolled employees</p>
                  </div>
                  <div>
                    <p className="font-medium text-purple-700">Retirement Plan</p>
                    <p className="text-gray-600">654 contributing employees</p>
                  </div>
                  <div>
                    <p className="font-medium text-purple-700">Life Insurance</p>
                    <p className="text-gray-600">723 covered employees</p>
                  </div>
                  <div>
                    <p className="font-medium text-purple-700">Dental/Vision</p>
                    <p className="text-gray-600">567 enrolled employees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expense Reimbursements */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Pending Expense Reimbursements</h4>
            <div className="space-y-2">
              {[
                { employee: 'Sarah Johnson', amount: '$245.50', type: 'Travel', date: '2024-08-10' },
                { employee: 'Michael Chen', amount: '$89.00', type: 'Meals', date: '2024-08-12' },
                { employee: 'Emily Rodriguez', amount: '$156.75', type: 'Office Supplies', date: '2024-08-08' },
              ].map((expense, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium text-sm text-gray-900">{expense.employee}</p>
                    <p className="text-xs text-gray-600">{expense.type} • {expense.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-green-600">{expense.amount}</span>
                    <button className="px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700">
                      Approve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance & Multi-Country Support */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance & Global HR</h3>
          
          {/* Compliance Tracking */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Compliance Management</h4>
            <div className="space-y-3">
              {[
                { requirement: 'Annual Safety Training', status: 'compliant', completion: 98, due: '2024-12-31' },
                { requirement: 'Data Privacy (GDPR)', status: 'attention', completion: 87, due: '2024-09-15' },
                { requirement: 'Anti-Harassment Training', status: 'compliant', completion: 100, due: '2024-11-30' },
                { requirement: 'Document Retention Policy', status: 'warning', completion: 65, due: '2024-08-30' },
              ].map((compliance, index) => (
                <div key={index} className={`p-3 rounded-lg border ${
                  compliance.status === 'compliant' ? 'bg-green-50 border-green-200' :
                  compliance.status === 'attention' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-red-50 border-red-200'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-sm text-gray-900">{compliance.requirement}</h5>
                    <div className="flex items-center gap-1">
                      {compliance.status === 'compliant' && <CheckCircle className="h-4 w-4 text-green-600" />}
                      {compliance.status === 'attention' && <AlertTriangle className="h-4 w-4 text-yellow-600" />}
                      {compliance.status === 'warning' && <AlertTriangle className="h-4 w-4 text-red-600" />}
                      <span className={`text-xs ${
                        compliance.status === 'compliant' ? 'text-green-600' :
                        compliance.status === 'attention' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {compliance.completion}%
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">Due: {compliance.due}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Multi-Country Operations */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Global Operations</h4>
            <div className="space-y-2">
              {[
                { country: 'United States', employees: 450, currency: 'USD', laws: 'FLSA, ADA', status: 'active' },
                { country: 'United Kingdom', employees: 123, currency: 'GBP', laws: 'GDPR, TUPE', status: 'active' },
                { country: 'Germany', employees: 89, currency: 'EUR', laws: 'BetrVG, AGG', status: 'active' },
                { country: 'Canada', employees: 156, currency: 'CAD', laws: 'ESA, PIPEDA', status: 'active' },
              ].map((location, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="font-medium text-sm text-gray-900">{location.country}</p>
                      <p className="text-xs text-gray-600">{location.employees} employees • {location.currency}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                      {location.status}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{location.laws}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Employee Engagement */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Employee Engagement</h4>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-sm text-gray-900">Quarterly Survey</h5>
                  <Star className="h-4 w-4 text-yellow-500" />
                </div>
                <p className="text-sm text-blue-600">Overall Satisfaction: 4.2/5.0</p>
                <p className="text-xs text-gray-600">Response Rate: 89% (754 responses)</p>
              </div>
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-sm text-gray-900">Recognition Program</h5>
                  <Award className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-sm text-green-600">145 recognitions this month</p>
                <p className="text-xs text-gray-600">Top performers awarded</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HR Analytics & Integration */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">HR Analytics & System Integration</h3>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <BarChart3 className="h-4 w-4" />
              View Analytics
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Organizational Chart */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Organizational Structure</h4>
            <div className="space-y-2">
              {[
                { department: 'Engineering', employees: 145, manager: 'John Doe', growth: '+8%' },
                { department: 'Sales', employees: 89, manager: 'Jane Smith', growth: '+12%' },
                { department: 'Marketing', employees: 67, manager: 'Bob Wilson', growth: '+5%' },
                { department: 'Operations', employees: 123, manager: 'Lisa Wong', growth: '+3%' },
              ].map((dept, index) => (
                <div key={index} className="p-2 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm text-gray-900">{dept.department}</p>
                      <p className="text-xs text-gray-600">{dept.employees} employees</p>
                      <p className="text-xs text-gray-500">Manager: {dept.manager}</p>
                    </div>
                    <span className="text-xs text-green-600 font-medium">{dept.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Disciplinary & Grievance */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Disciplinary & Grievance</h4>
            <div className="space-y-2">
              {[
                { type: 'Warning', employee: 'Anonymous', date: '2024-08-10', status: 'resolved' },
                { type: 'Grievance', employee: 'Anonymous', date: '2024-08-08', status: 'investigating' },
                { type: 'Violation', employee: 'Anonymous', date: '2024-08-05', status: 'pending' },
              ].map((incident, index) => (
                <div key={index} className={`p-2 rounded-lg border ${
                  incident.status === 'resolved' ? 'bg-green-50 border-green-200' :
                  incident.status === 'investigating' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-red-50 border-red-200'
                }`}>
                  <p className="font-medium text-sm text-gray-900">{incident.type}</p>
                  <p className="text-xs text-gray-600">{incident.date}</p>
                  <span className={`text-xs ${
                    incident.status === 'resolved' ? 'text-green-600' :
                    incident.status === 'investigating' ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {incident.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Exit & Offboarding */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Exit & Offboarding</h4>
            <div className="space-y-2">
              {[
                { employee: 'Mark Johnson', department: 'Engineering', date: '2024-08-20', status: 'in-progress' },
                { employee: 'Anna Lee', department: 'Marketing', date: '2024-08-18', status: 'completed' },
                { employee: 'Tom Wilson', department: 'Sales', date: '2024-08-25', status: 'scheduled' },
              ].map((exit, index) => (
                <div key={index} className="p-2 border border-gray-200 rounded-lg">
                  <p className="font-medium text-sm text-gray-900">{exit.employee}</p>
                  <p className="text-xs text-gray-600">{exit.department}</p>
                  <p className="text-xs text-gray-500">Exit: {exit.date}</p>
                  <span className={`text-xs ${
                    exit.status === 'completed' ? 'text-green-600' :
                    exit.status === 'in-progress' ? 'text-blue-600' :
                    'text-yellow-600'
                  }`}>
                    {exit.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* API Integration Status */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">System Integration</h4>
            <div className="space-y-2">
              {[
                { system: 'Payroll System', status: 'connected', lastSync: '2 min ago' },
                { system: 'Accounting Module', status: 'connected', lastSync: '5 min ago' },
                { system: 'Benefits Platform', status: 'syncing', lastSync: 'In progress' },
                { system: 'Learning Management', status: 'connected', lastSync: '1 min ago' },
              ].map((integration, index) => (
                <div key={index} className="flex items-center justify-between p-2 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      integration.status === 'connected' ? 'bg-green-500' :
                      integration.status === 'syncing' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`} />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{integration.system}</p>
                      <p className="text-xs text-gray-500">{integration.lastSync}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
