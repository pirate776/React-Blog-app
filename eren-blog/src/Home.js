import { useState } from 'react';
function Home() {

  const [name, setName] = useState("pirate");
  function handleClick(){
    setName("ussop");
 
  }
    return (
      <div className="home">
        <h2>Homepage</h2>
        <p>{name}</p>
        <button onClick={handleClick}> clickme </button>
         
      </div>
    );
  }
   
  export default Home;