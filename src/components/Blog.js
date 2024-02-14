import { useEffect, useState } from "react";
import BlogPost from "./BlogPost";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  function getBlogData() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@madelinecorman"
    )
      .then((res) => res.json())
      .then((posts) => setBlogPosts(posts.items));
  }

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <div className="blog-container" id="blog">
      <h1>Blog</h1>
      {blogPosts.map((post) => (
        <BlogPost post={post} />
      ))}
    </div>
  );
}
