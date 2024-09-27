"use client"

import Link from "next/link"
import Image from "next/image"

interface Country {
  name: { common: string }
  population: number
  region: string
  capital?: string[]
  flags: { png: string }
  cca3: string
}

export default function CountryList({
  countries, // Prop pour la liste des pays
}: {
  countries: Country[] // Définition de la prop 'countries'
}) {
  // Vérifiez si la liste des pays est vide
  if (countries.length === 0) {
    return (
      <p className="font-bold text-xl flex justify-center">
        Aucun pays correspondant à votre recherche.
      </p>
    ) // Message d'absence de pays
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {countries.map(country => (
        <Link
          href={`/country/${country.cca3}`}
          key={country.cca3}
          className="block"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              className="w-full h-40 object-cover"
              width={320}
              height={160}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">
                {country.name.common}
              </h2>
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region:</span> {country.region}
              </p>
              <p>
                <span className="font-semibold">Capital:</span>{" "}
                {country.capital?.[0] || "N/A"}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
