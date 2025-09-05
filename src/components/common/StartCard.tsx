const StatsCard = ({ icon: Icon, title, value, trend }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
          {value}
        </p>
        {trend && (
          <p className="text-sm text-green-500 mt-1">
            +{trend}% from last month
          </p>
        )}
      </div>
      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>
    </div>
  </div>
);
