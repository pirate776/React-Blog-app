import Navbar from './Navbar';
import Home from './Home';

function App() {
  const link = "www.google.com";
  return (
    <div className="App">
       <Navbar />
       <div className="content">
        <Home />
        <a href={link}>google site</a>
       </div>
    </div>
  );
}

export default App;