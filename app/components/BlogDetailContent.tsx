import { getPost } from "@/actions/post";

type Props = {
  params: Promise<{ id: string }>
}

// idから記事データを取得
export default async function BlogDetailContent({ params }: Props) {
  const { id } = await params;

  const postId = Number(id);
  const post = await getPost(postId);

  if(!post) return <p>記事が見つかりません</p>
}