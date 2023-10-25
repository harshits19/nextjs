const useFetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  if (!res.ok) throw new Error("Failed to fetch all Users")
  return res.json()
}
export default useFetchUsers
