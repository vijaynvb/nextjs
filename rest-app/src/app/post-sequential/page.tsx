import { Suspense } from "react";
import Author from "./author";

// fetch posts and also update the user id with user name
type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
// app/posts-sequential/page.tsx
export default async function PostsSequential() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await response.json();
    
    // Filter to include only posts with an ID divisible by 10
    const filteredPosts = posts.filter(post => post.id % 10 === 0);
  
    return (
      <div>
        {filteredPosts.map((post) => (
          <div key={post.id} className="p-4 border-b border-gray-200">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
            <div>Author:
                <Suspense fallback={<span>Loading...</span>}>
                    <Author userId={post.userId} />
                </Suspense>
            </div> {/* Author will be rendered later */}
          </div>
        ))}
      </div>
    );
  }