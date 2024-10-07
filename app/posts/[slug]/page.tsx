import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import "./post.css";

export async function generateStaticParams() {
  const entries = await readdir("posts");
  return entries.map((entry) => {
    const path = entry.split(".")
    const filename = path.slice(0, -1).join("")
    const ext = path[path.length - 1]
    return { slug: filename, ext };
  })
}

export default async function Post({ params }: { params: { slug: string} }) {
  const filename = `${params.slug}.md`
  const mdfile = matter(await readFile(`posts/${filename}`, 'utf8'))
  return <div className="markdown w-full lg:w-[60%] flex flex-col p-5 font-lxgw">
    <h1>{mdfile.data.title}</h1>
    <MDXRemote source={mdfile.content} components={{}} options={{
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, { theme: "vitesse-dark" }]],
      },
    }} />
  </div>
}