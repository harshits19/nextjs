import Link from "next/link"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <p className="text-5xl font-bold">Next APP</p>
      <Link href="/users" className="underline">Users Page</Link>
    </main>
  )
}
