const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden animate-pulse"
        >
          <div className="h-40 bg-gray-300 dark:bg-gray-700"></div>
          <div className="p-4">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 mb-1"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 mb-1"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LoadingSkeleton
