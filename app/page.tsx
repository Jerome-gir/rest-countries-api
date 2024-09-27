"use client" // N'oubliez pas d'importer "use client" pour pouvoir utiliser les hooks d'état

import {
  fetchCountries,
  searchCountries,
  filterCountriesByRegion,
} from "./actions/countryActions"
import CountryList from "./components/CountryList"
import SearchForm from "./components/SearchForm"
import RegionFilter from "./components/RegionFilter"
import { useEffect, useState } from "react"

export default function Home() {
  const [countries, setCountries] = useState([]) // État pour les pays
  const [initialCountries, setInitialCountries] = useState([]) // État pour les pays initiaux

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountries()
      setCountries(data)
      setInitialCountries(data) // Stocker les pays initiaux
    }

    fetchData()
  }, [])

  const handleSearch = async (searchTerm: string) => {
    if (searchTerm) {
      try {
        const results = await searchCountries(searchTerm)
        setCountries(results)
      } catch (error) {
        console.error(error)
        setCountries([]) // Réinitialiser en cas d'erreur
      }
    } else {
      setCountries(initialCountries) // Réinitialiser la liste si la recherche est vide
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Countries of the World</h1>
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <SearchForm searchAction={handleSearch} />
        <RegionFilter filterAction={filterCountriesByRegion} />
      </div>
      <CountryList countries={countries} /> {/* Passer les pays filtrés */}
    </main>
  )
}
