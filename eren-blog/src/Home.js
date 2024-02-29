import { useState } from 'react';
function Home() {

  const [blogs, setBlogs] = useState([
    {title:"my first blog",body:"lorem ipsum lot amet...", author:"pirate", id:1  },
    { title:"my first blog",body:"lorem ipsum lot amet...", author:"pirate", id:2  },
    { title:"my first blog",body:"lorem ipsum lot amet...", author:"pirate", id:3  },
  ]);
  
    return (
      <div className="home">
        {
          blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>written by {blog.author}</p>
            </div>
          )

          )
        } 
      </div>
    );
  }
   
  export default Home;