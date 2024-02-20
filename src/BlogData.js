const blogPosts = [
  {
    title: "Responsive Web Design",
    link: "https://medium.com/@madelinecorman/responsive-web-design-1748f1e6d781",
    caption: "Do I need media queries?",
    blurb:
      "A big factor in my decision to work with React Native was the desire to create an application that looked good on a mobile device. Like many people, I spend a great deal of time on my phone and have strong thoughts on websites that translate terribly to smaller screens. I was once told, as a general rule of thumb, that websites that look good on your phone most likely look good in the browser, but this doesn’t hold true for the other way around. Of course, mobile development isn’t the only way to create sites that are stunning on mobile. This can be achieved through some CSS methods that are inherently responsive to changing screen sizes or through media queries. Below, we will cover the principle of responsive web design, if and when media queries are necessary, and some basic implementation of media queries.",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*9k-Dl-vEreWZqla7Os1Z3w.jpeg",
  },
  {
    title: "Memoization",
    link: "https://medium.com/@madelinecorman/memoization-96ab60464bd2",
    caption: "How to optimize computationally expensive functions",
    blurb:
      "As applications scale and the functions within execute increasingly demanding computations, it is almost inevitable that lag times will increase and performance suffers. It is these cases where optimizations to reduce memory use and execution times are key. We all know to avoid nested loops where we can and to refrain from making unnecessary copies of the input data, but there exists another optimization for cases where we would otherwise be computing the same function over and over again. This is memoization. Here, we will discuss what memoization is, a classic use-case, and how memoization stacks up against non-memoized solutions in terms of Big-O complexity.",
    image:
      "https://miro.medium.com/v2/resize:fit:1280/format:webp/1*efM5LmFfudm-T6nu15hAvA.jpeg",
  },
  {
    title: "The Node.js Process Model",
    link: "https://medium.com/@madelinecorman/the-node-js-process-model-ad99a91dd2b8",
    caption: "An introduction to Node.js",
    blurb:
      "I’ve only dabbled in Node.js here and there, building small projects and demos for blog posts. I must admit, I did this with little understanding of Node.js itself. Being a technology that I would like to become more proficient in, I decided it was time to start from scratch and learn some of the fundamentals. One such theoretical fundamental is the Node.js process model and how it compares to the traditional web server model. Here we will cover a brief introduction to Node.js, some of its advantages, and finally the Node.js process model.",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Jw9V__6jYhm2amP74D_0lw.png",
  },
  {
    title: "The Role of Babel in React",
    link: "https://medium.com/swlh/the-role-of-babel-in-react-dbcf78c69125",
    caption: "What is Babel and why is it so wonderful?",
    blurb:
      "When first learning the basics of React, I remember being shown a quick demo of sample JSX being converted into something that looked like vanilla JavaScript. In the prior weeks I had repetitively and painstakingly written code that looked like the following:",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*8jqpYKlBSGRBxAJ_uZK8yg.png",
  },
];

export default blogPosts;
