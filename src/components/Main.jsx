import { useState } from "react";
import Navbar from "./Navbar";
import Newsboard from "./Newsoard";

const News = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
     <Navbar setCategory={setCategory} />
     <Newsboard category={category}/>
    </div>
  );
};

export default News;