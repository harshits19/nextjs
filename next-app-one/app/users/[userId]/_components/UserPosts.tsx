type Posts = {
  promise: Promise<Post[]>
}
const UserPosts = async ({ promise }: Posts) => {
  const posts = await promise
  return (
    <div>
      {posts.map((post,idx) => {
        return (
          <div key={post.id}>
            {idx+1 + ". "}
            {post.title}
          </div>
        )
      })}
    </div>
  )
}
export default UserPosts
