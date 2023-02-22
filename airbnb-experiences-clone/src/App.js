import Card from "./componants/Card";
import Introduce from "./componants/Introduce";
import Navbar from "./componants/Navbar";


function App() {
  return (
    <div className="container">
      <Navbar />
      <Introduce />
      <Card
        img= {require('./images/image-12.png')}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lesson with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
