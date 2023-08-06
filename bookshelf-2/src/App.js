import "./App.css";
import Navbar from "./Navbar.js";
import Shelf from "./Shelf.js";
import Bkshelf1 from "./Bkshelf1.js";
import Bkshelf2 from "./Bkshelf2.js";
import Bkshelf3 from "./Bkshelf3.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bkshelf1 />
      <Shelf />
      <Bkshelf2 />
      <Shelf />
      <Bkshelf3 />
      <Shelf />
      {/* bookshelf-1 */}
      {/* shelf */}
      {/* bkshelf-2
      shelf */}
      {/* <header className="App-header">
        
      </header> */}
    </div>
  );
}

export default App;
