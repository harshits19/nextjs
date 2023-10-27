"use client"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
const Navbar = () => {
  const router = useRouter()
  const [inputVal, setInputVal] = useState("")
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputVal) router.push(`/${inputVal}/`)
    setInputVal('')
  }
  return (
    <div className="sticky top-0 w-full z-50 bg-gray-300 drop-shadow-sm px-10 py-4 gap-2 flex flex-row flex-wrap items-center justify-center sm:justify-between">
      <p className="text-3xl font-bold">
        <Link href="/">My Next APP</Link>
      </p>
      <form className="flex gap-x-4" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="h-8 w-32 rounded px-2 text-black border-none outline-none"
          placeholder="search"
        />
        <button className="font-semibold text-sm rounded bg-gray-400 px-4">Search</button>
      </form>
    </div>
  )
}
export default Navbar
