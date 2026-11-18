import { Suspense } from "react";
import Loader from "./Loader";
import PostList from "./components/PostList";

export default function Home() {
  return (
    <div>
      <h1 className="inline-block text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
        技術学習の日記
      </h1>

      <p>学習記録や開発の記録を残していくブログです。</p>

      <Suspense fallback={<Loader />}>
        <PostList />
      </Suspense>
    </div>
  );
}
