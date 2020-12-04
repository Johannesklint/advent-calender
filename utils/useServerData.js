import useSWR, { mutate } from "swr"
import { useState } from "react"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function useServerData(id) {
  return useSWR(`/api/joke/${id}`, fetcher)
}

export function useSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [pagination, setPagination] = useState(1)
  const { data, error } = useSWR(
    `/api/search/${searchTerm}&${pagination}`,
    fetcher
  )
  function handleChange(event) {
    if (event === "reset") {
      return setSearchTerm("")
    }

    const { value } = event.target
    setSearchTerm(value)
  }

  function handlePagination(value) {
    setPagination((prev) => (value === "next" ? prev + 1 : prev - 1))
  }

  return { data, error, searchTerm, handleChange, handlePagination, pagination }
}
