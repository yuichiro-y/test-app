import { useParams } from "react-router-dom";
import {posts} from "./data/posts";

export const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div>
        <p className="p-5">記事が見つかりません。</p>
      </div>
    );
  }

  return (
    <article key={post.id} className="max-w-2xl mx-auto my-10 px-2">
        <img src={post.thumbnailUrl} className="mb-5"/>

        <div className="px-5">
          <div className="flex justify-between">
            <div className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleDateString('ja-JP')}
            </div>
            {post.categories && (<ul className="flex font-semibold text-sm">{post.categories.map((c)=>
              <li className="border border-blue-500 text-blue-500 rounded-md mr-1.5 px-1.5 py-0.5">{c}</li>)}</ul>)}
            </div>

          <div className="text-left">
            <h1 className="text-2xl py-3">{post.title}</h1>
            <div className=""dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

      </div>
    </article>
  );
};