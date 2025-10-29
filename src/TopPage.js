import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const TopPage = () => {

  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    const fetcher = async() => {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
      const data = await res.json()
      setPosts(data.posts)
    }

    fetcher()
  },[])

  return (
    <>
    <div className="max-w-2xl mx-auto my-10 px-2">
      <ul>
      {posts.map((post) => (
          <li key={post.id} className="w-auto p-5 mb-10 border border-gray-300">
            <Link to={`/posts/${post.id}`}>

              <div className="flex justify-between">
                <div className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleDateString('ja-JP')}</div>
                {post.categories && (<ul className="flex font-semibold text-sm">
                  {post.categories.map((c)=><li className="border border-blue-500 text-blue-500 rounded-md mr-1.5 px-1.5 py-0.5">{c}</li>)}</ul>)}
              </div>

              <div className="text-left">
                <h1 className="text-2xl py-3">{post.title}</h1>
                <p className="line-clamp-2"dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </Link>
          </li>

      ))}
       </ul>
    </div>
    </>
  );
};