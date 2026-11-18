import { prisma } from "@/libs/prisma"
import { cacheTag } from "next/cache"

// 記事一覧のGET
export async function getPosts() {
  'use cache'
  cacheTag('posts')

  const posts = await prisma.blogPost.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      postCategories: {
        include: {
          category: true
        }
      }
    }
  })

  return posts;
}

// 記事詳細のGET
