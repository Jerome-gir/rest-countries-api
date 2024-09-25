import {
  fetchCountries,
  searchCountries,
  filterCountriesByRegion,
} from "./actions/countryActions"
import CountryList from "./components/CountryList"
import SearchForm from "./components/SearchForm"
import RegionFilter from "./components/RegionFilter"

export default async function Home() {
  const initialCountries = await fetchCountries()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Countries of the World</h1>
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <SearchForm searchAction={searchCountries} />
        <RegionFilter filterAction={filterCountriesByRegion} />
      </div>
      <CountryList initialCountries={initialCountries} />
    </main>
  )
}
