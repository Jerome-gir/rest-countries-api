"use client"

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-wrap justify-between">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="bg-gray-300 h-48 rounded-lg animate-pulse opacity-80"></div>
          <div className="mt-2 bg-gray-300 h-4 rounded opacity-80"></div>
          <div className="mt-1 bg-gray-300 h-4 rounded opacity-80"></div>
        </div>
      ))}
    </div>
  )
}
