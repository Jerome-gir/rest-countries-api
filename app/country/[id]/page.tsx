import { fetchCountries } from "@/app/actions/countryActions"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Country } from "@/types"

export default async function CountryDetail({
  params,
}: {
  params: { id: string }
}) {
  const countries = await fetchCountries()
  const country = countries.find((c: Country) => c.cca3 === params.id)

  if (!country)
    return (
      <div className="">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </Link>
        <div className="mt-8 font-bold text-4xl flex items-center justify-center">
          Country not found
        </div>
      </div>
    )

  return (
    <div className="space-y-28">
      <Link
        href="/"
        className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="aspect-w-3 aspect-h-2 relative">
          <Image
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            width={750}
            height={375}
            className="rounded-md"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{country.name.common}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Native Name:</span>{" "}
                {
                  Object.values(
                    country.name.nativeName as {
                      [key: string]: { official: string }
                    }
                  )[0]?.official
                }
              </p>
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region:</span> {country.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region:</span>{" "}
                {country.subregion}
              </p>
              <p>
                <span className="font-semibold">Capital:</span>{" "}
                {country.capital?.[0] || "N/A"}
              </p>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {country.tld?.[0]}
              </p>
              <p>
                <span className="font-semibold">Currencies:</span>{" "}
                {Object.values(country.currencies)
                  .map(c =>
                    typeof c === "object" && c !== null && "name" in c
                      ? (c as { name: string }).name
                      : ""
                  )
                  .filter(name => name !== "")
                  .join(", ")}
              </p>
              <p>
                <span className="font-semibold">Languages:</span>{" "}
                {Object.values(country.languages).join(", ")}
              </p>
            </div>
          </div>
          {country.borders && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Border Countries:</h2>
              <div className="flex flex-wrap gap-2">
                {country.borders.map((border: string) => (
                  <Link
                    key={border}
                    href={`/country/${border}`}
                    className="bg-white dark:bg-gray-800 px-4 py-1 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {border}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
