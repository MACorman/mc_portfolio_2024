import BlogPost from "./BlogPost";
import blogPosts from "../BlogData";

export default function Blog() {
  return (
    <div className="blog-container" id="blog">
      <h2>B l o g</h2>
      <div className="blog-container-child">
        {blogPosts.map((post) => (
          <BlogPost post={post} />
        ))}
      </div>
    </div>
  );
}
