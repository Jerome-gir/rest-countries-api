"use client"

import { useRef } from "react"
import { useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
    >
      {pending ? "Searching..." : "Search"}
    </button>
  )
}

export default function SearchForm({
  searchAction,
}: {
  searchAction: (formData: FormData) => Promise<unknown>
}) {
  const ref = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={ref}
      action={async formData => {
        await searchAction(formData)
        ref.current?.reset()
      }}
      className="flex mb-4"
    >
      <input
        type="text"
        name="searchTerm"
        placeholder="Search for a country..."
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <SubmitButton />
    </form>
  )
}
