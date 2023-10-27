import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkHtml from "remark-html"

const postsDir = path.join(process.cwd(), "BlogPosts") //get posts directory
export const getAllPosts = () => {
  const fileNames = fs.readdirSync(postsDir) //readdirsync() returns all names(files) present in directory
  //   console.log(fileNames)
  const allPostsData = fileNames.map((file) => {
    const id = file.replace(/\.md$/, "") //extracting id(filename) for each file
    const fullPathofFile = path.join(postsDir, file)
    const fileContent = fs.readFileSync(fullPathofFile, "utf-8") //reading file content (post data)
    const parsedPost = matter(fileContent)
    // console.log(parsedPost)
    const postObj: BlogPosts = {
      id,
      title: parsedPost.data.title,
      date: parsedPost.data.date,
    }
    return postObj
  })
  allPostsData.sort((a, b) => (a.date > b.date ? -1 : 1))
  return allPostsData
}

export const getPost = async (postId: string) => {
  const fullPathofFile = path.join(postsDir, `${postId}.md`)
  const fileContent = fs.readFileSync(fullPathofFile, "utf-8") //reading file content (post data)
  const parsedPost = matter(fileContent)
  const processedContent = await remark().use(remarkHtml).process(parsedPost.content)
  const contentHtml = processedContent.toString()
  const blogPostWithHTML: BlogPosts & { contentHtml: string } = {
    id: postId,
    title: parsedPost.data.title,
    date: parsedPost.data.date,
    contentHtml,
  }
//   console.log(blogPostWithHTML)
  return blogPostWithHTML
}

/* 
Steps
To get ALL Posts =>
locate posts directory
get all filenames[] in post directory
generate allposts[] by reading filename (fs) 
for each fileName >
    generate id for each file
    generate full path of file (post dir + fileName)
    read that file and parse post data using gray-matter
    * parsed post will be an object that contain properties 
        {
            content: "",
            data: {title:"",date:""}
        } 
    return an object containing id,title and data 
at last - return all posts sorted by date
*/
/* 
Steps
To get post by postId
get full path (postDir + postId(is name of file) + (.md)(extension)
read file content and parse the content inside post (parsedPost)
process parsed post using remark and get parsedPost.content 
then convert it to string
return object that contains id,title,date and contentString
*/