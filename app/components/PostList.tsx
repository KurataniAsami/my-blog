import { getPosts } from "@/actions/post";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

export default async function PostList() {
  const posts = await getPosts();

  if(!posts) {
    return <p>記事がありません。</p>
  }

  return (
    <div className="mt-5">
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/bbs/${post.id}`}>
            <Card
              className="group hover:border border-cyan-400 transition-colors duration-300
              hover:bg-gray-900
              "
            >
              <CardHeader>
                <CardTitle
                  className="text-white font-bold text-xl transition-colors duration-200 group-hover:text-cyan-400"
                >
                  {post.title}
                  </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 flex flex-col">
                <div className="line-clamp-2">
                  {post.content}
                </div>

                {post.postCategories.map((item) => (
                  <span key={item.id}>
                    <div  className="items-center gap-2 text-xs font-mono font-bold
                     text-purple-500 uppercase tracking-widest mt-3 border border-purple-500 inline-block
                      px-2 py-1 
                    "
                    >
                      #{item.category.name}
                    </div>
                  </span>
                ))}
              </CardContent>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  )
}