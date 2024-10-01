"use client"

import { useEffect, useState } from "react"
import { fetchRegions } from "../actions/countryActions"

export default function RegionFilter({
  filterAction,
}: {
  filterAction: (filterRegion: string) => void
}) {
  const [regions, setRegions] = useState<string[]>([]) // État pour stocker les régions

  useEffect(() => {
    const getRegions = async () => {
      const fetchedRegions = await fetchRegions()
      setRegions(fetchedRegions)
    }

    getRegions()
  }, [])

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterRegion = event.target.value
    filterAction(filterRegion)
  }

  return (
    <div className="relative w-1/2 md:w-60">
      <select
        name="region"
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
        onChange={handleFilter}
      >
        <option value="">Filter by Region</option>
        {regions.map(region => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  )
}
