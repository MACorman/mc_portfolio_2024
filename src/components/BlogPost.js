export default function BlogPost(props) {
  const shortenText = (text) => {
    const textArr = text.split(" ", 50);
    return textArr.join(" ");
  };

  return (
    <div className="blog-post">
      <img src={props.post.image} alt={props.post.title} />
      <div>
        <a href={props.post.link} target="_blank" rel="noreferrer">
          {props.post.title}
        </a>
        <p>{props.post.caption}</p>
        <p>{shortenText(props.post.blurb)}... </p>
      </div>
    </div>
  );
}
