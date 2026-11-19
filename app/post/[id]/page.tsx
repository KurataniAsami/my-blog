import { Suspense } from "react"

type Props = {
  params: Promise<{ id: string }>
}

// 記事データ取得
export default function BlogDetailPage({ params }: Props) {
  return (
    <Suspense fallback={<p>読み込み中</p>}>
      <BlogDetailContent params={params} />
    </Suspense>
  )
}
