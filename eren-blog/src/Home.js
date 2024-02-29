function Home() {
  function handleClick(e){
    console.log("button clicked",e)
  }
  function handleclickAgain(name){
    console.log("hello" + name)
  }
    return (
      <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}> clickme </button>
        <button onClick={() => {
          handleclickAgain("pirate")
        }}> clickmeAgain </button>
      </div>
    );
  }
   
  export default Home;