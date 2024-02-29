function Home() {
  function handleClick(){
    console.log("button clicked",)
  }
  function handleclickAgain(name,e){
    console.log("hello" + name,e.target)
  }
    return (
      <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}> clickme </button>
        <button onClick={(e) => {
          handleclickAgain("pirate",e)
        }}> clickmeAgain </button>
      </div>
    );
  }
   
  export default Home;