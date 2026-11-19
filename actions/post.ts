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
export async function getPost(id:number) {
  'use cache'
  cacheTag(`post-${id}`);

  const post = await prisma.blogPost.findUnique({
    where: {
      id: id
    },
    include: {
      postCategories: {  // 中間テーブル
        include: {
          category: true   // 中間テーブルからカテゴリーを取得
        }
      }
    }
  });

  if(!post) return null;

  return post;
}
