import Link from "next/link"
import Image from "next/image"
import { Country } from "@/types"

export default function CountryCard({ country }: { country: Country }) {
  return (
    <Link href={`/country/${country.cca3}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-w-3 aspect-h-2 relative">
          <Image
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{country.name.common}</h2>
          <p>
            <span className="font-medium">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-medium">Capital:</span>{" "}
            {country.capital?.[0] || "N/A"}
          </p>
        </div>
      </div>
    </Link>
  )
}
