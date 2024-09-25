"use client"

import { useRef } from "react"
import { useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-green-500 text-white px-4 py-2 rounded-r-md"
    >
      {pending ? "Filtering..." : "Filter"}
    </button>
  )
}

export default function RegionFilter({
  filterAction,
}: {
  filterAction: (formData: FormData) => Promise<unknown>
}) {
  const ref = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={ref}
      action={async formData => {
        await filterAction(formData)
        ref.current?.reset()
      }}
      className="flex mb-4"
    >
      <select
        name="region"
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <SubmitButton />
    </form>
  )
}
