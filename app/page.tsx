import { readdir, readFile } from "fs/promises"
import matter from 'gray-matter';
import Link from "next/link";
export default async function Posts() {
  const posts = await readdir('posts')

  return <div className="markdown w-full lg:w-[60%] flex flex-col p-5 font-lxgw">
    {
      posts.map(async(post) => {
        const mdfile = matter(await readFile(`posts/${post}`, 'utf8'))  
        return <Link key={mdfile.data.title} href={`/posts/${post.replace(/\.(md|mdx)$/, '')}`}>
          <h1>{mdfile.data.title}</h1>
          <div>
            {
              new Date(mdfile.data.date).toLocaleDateString("zh-CN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            }
          </div>
        </Link>
      })
    }
  </div>
}
