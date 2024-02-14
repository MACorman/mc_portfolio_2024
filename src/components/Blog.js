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
    <>
      {blogPosts.map((post) => (
        <BlogPost post={post} />
      ))}
    </>
  );
}
