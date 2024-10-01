"use client"

import {
  fetchCountries,
  searchCountries,
  filterCountriesByRegion,
} from "./actions/countryActions"
import CountryList from "./components/CountryList"
import SearchForm from "./components/SearchForm"
import RegionFilter from "./components/RegionFilter"
import LoadingSkeleton from "./components/LoadingSkeleton"
import { useEffect, useState } from "react"

export default function Home() {
  const [countries, setCountries] = useState([]) // État pour les pays
  const [initialCountries, setInitialCountries] = useState([]) // État pour les pays initiaux
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await fetchCountries()
      setCountries(data)
      setInitialCountries(data) // Stocker les pays initiaux
      setLoading(false)
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

  // Fonction de filtrage par continent
  const handleRegionFilter = async (region: string) => {
    if (region) {
      const filteredCountries = await filterCountriesByRegion(region) // Passer simplement la région
      setCountries(filteredCountries)
    } else {
      setCountries(initialCountries) // Réinitialiser à la liste initiale
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Countries of the World</h1>
      <div className="flex flex-col gap-12 md:flex-row md:justify-between mb-8">
        {" "}
        <SearchForm searchAction={handleSearch} />
        <RegionFilter filterAction={handleRegionFilter} />
      </div>
      {loading ? (
        <LoadingSkeleton /> // Afficher le composant de chargement
      ) : (
        <CountryList countries={countries} /> // Passer les pays filtrés
      )}
    </main>
  )
}
