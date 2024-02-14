export default function BlogPost(props) {
  console.log(props.post);

  const tagToText = (node) => {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };

  const shortenText = (text) => {
    const textArr = text.split(" ", 100);
    return textArr.join(" ");
  };

  return (
    <div>
      <a href={props.post.link} target="_blank" rel="noreferrer">
        {props.post.title}
      </a>
      <p>{shortenText(tagToText(props.post.description))}...</p>
    </div>
  );
}
