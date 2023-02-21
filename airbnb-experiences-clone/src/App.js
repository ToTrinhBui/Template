import Card from "./componants/Card";
import Introduce from "./componants/Introduce";
import Navbar from "./componants/Navbar";


function App() {
  return (
    <div className="container">
      <Navbar />
      <Introduce />
      <Card/>
    </div>
  );
}

export default App;
