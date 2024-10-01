"use client"

import { Search } from "lucide-react"

export default function SearchForm({
  searchAction,
}: {
  searchAction: (searchTerm: string) => void
}) {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value
    searchAction(searchTerm)
  }

  return (
    <div className="relative w-full md:w-60">
      {" "}
      <Search className="absolute left-3 top-2 text-gray-400" />
      <input
        type="text"
        name="searchTerm"
        placeholder="Search"
        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        onChange={handleSearch}
      />
    </div>
  )
}
