"use server"

import { Country } from "@/types"

export async function fetchCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all")
  if (!response.ok) {
    throw new Error("Failed to fetch countries")
  }
  return response.json()
}

export async function fetchRegions() {
  const countries = await fetchCountries()
  const regions = new Set(countries.map((country: Country) => country.region))
  return Array.from(regions)
}

export async function searchCountries(searchTerm: string) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${searchTerm}`
  )
  if (!response.ok) {
    throw new Error("Failed to search countries")
  }
  const data = await response.json()

  return data
}

export async function filterCountriesByRegion(region: string) {
  const response = await fetch(
    `https://restcountries.com/v3.1/region/${region}`
  )
  if (!response.ok) {
    throw new Error("Failed to filter countries")
  }
  const data = await response.json()

  return data
}
