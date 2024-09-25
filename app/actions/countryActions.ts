"use server"

import { revalidatePath } from "next/cache"

export async function fetchCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all")
  if (!response.ok) {
    throw new Error("Failed to fetch countries")
  }
  return response.json()
}

export async function searchCountries(formData: FormData) {
  const searchTerm = formData.get("searchTerm") as string
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${searchTerm}`
  )
  if (!response.ok) {
    throw new Error("Failed to search countries")
  }
  const data = await response.json()
  revalidatePath("/")
  return data
}

export async function filterCountriesByRegion(formData: FormData) {
  const region = formData.get("region") as string
  const response = await fetch(
    `https://restcountries.com/v3.1/region/${region}`
  )
  if (!response.ok) {
    throw new Error("Failed to filter countries")
  }
  const data = await response.json()
  revalidatePath("/")
  return data
}
