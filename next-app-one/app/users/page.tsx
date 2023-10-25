import Link from "next/link"
import styles from "./styles.module.css"
import useFetchUsers from "@/lib/useFetchUsers"

const UsersPage = async () => {
  //we defined User Type in types.d.ts, TS detects types defined inside .d.ts files automatically, so there's no need to import those types
  const res: Promise<User[]> = useFetchUsers() //we are calling fn that's returning a promise, so we cannot use await here
  const data = await res
  const userData = (
    <section>
      <h2>Users: </h2>
      {data.map((user) => {
        return (
          <Link href={`/users/${user.id}`} key={user.id}>
            <p>
              {user.id + ". "}
              {user.name}
            </p>
          </Link>
        )
      })}
    </section>
  )
  return (
    <>
      <Link href="/" className={styles.header}>
        Go Back to Home
      </Link>
      {userData}
    </>
  )
}
export default UsersPage
