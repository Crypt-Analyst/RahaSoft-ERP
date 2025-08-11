export default function AccountingPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">Accounting Dashboard</h1>
      <p className="text-gray-600 mt-2">Manage your financial data and accounting operations.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Revenue</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">$2.4M</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Expenses</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">$1.8M</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Profit</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">$600K</p>
        </div>
      </div>
    </div>
  )
}
