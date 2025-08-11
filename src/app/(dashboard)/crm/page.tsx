export default function CRMPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">CRM Dashboard</h1>
      <p className="text-gray-600 mt-2">Welcome to the Customer Relationship Management module!</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Total Leads</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Active Deals</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">56</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Revenue</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">$890K</p>
        </div>
      </div>
    </div>
  )
}
