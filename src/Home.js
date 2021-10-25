import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new Website", body: "lorem ipsum...", author: "Tobin", id: 1 },
    {
      title: "Struggles of getting a job",
      body: "lorem ipsum...",
      author: "Tobin",
      id: 2,
    },
    { title: "Help me focus", body: "lorem ipsum...", author: "Tobin", id: 3 },
  ]);

  return <div className="Home">
    <BlogList blogs={blogs} title="Latest reads!"/>
  </div>;
};

export default Home;
