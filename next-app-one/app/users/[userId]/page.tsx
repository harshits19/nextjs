import { Metadata } from "next"
import { Suspense } from "react"
import Link from "next/link"
import UserPosts from "./_components/UserPosts"
import useFetchUser from "@/lib/useFetchUser"
import useFetchUserPosts from "@/lib/useFetchUserPosts"

type Params = {
  params: {
    userId: string
  }
}
//generateMetadata (nextjs method) used to set metadata dynamically
export const generateMetadata = async ({ params: { userId } }: Params): Promise<Metadata> => {
  //in nextjs, when there's two same get req, [nextjs caches each req] so only once get req is called
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  if (!res.ok) throw new Error("Failed to fetch User")
  const user: User = await res.json()
  return {
    title: user.name,
    description: `Page of ${user.name}`,
  }
}

//to fetch params from url, have to define params
const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = useFetchUser(userId)
  const userPosts: Promise<Post[]> = useFetchUserPosts(userId)
  // const [user, posts] = await Promise.all([userData, userPosts]) //method to serve multiple request
  const user = await userData
  // console.log(user)
  // console.log(posts)

  return (
    <section>
      <button className="absolute top-0 left-0 m-8 px-2 py-1 rounded bg-gray-200">
        <Link href={"."}>Go Back</Link>
      </button>
      <p className="underline pb-4">{user.name}</p>
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPosts} />
        {/*sending userPosts as Props */}
      </Suspense>
    </section>
  )
}
export default UserPage
