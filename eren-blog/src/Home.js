import { useState } from 'react';
import BlogList from './BlogList';
function Home() {

  const [blogs, setBlogs] = useState([
    {title:"my first blog",body:"lorem ipsum lot amet...", author:"pirate", id:1  },
    { title:"my first blog",body:"lorem ipsum lot amet...", author:"pirate", id:2  },
    { title:"my first blog",body:"lorem ipsum lot amet...", author:"pirate", id:3  },
  ]);
  
    return (
      <div className="home">
        <BlogList blogs = {blogs} title="All Blogs !" />
      </div>
    );
  }
   
  export default Home;