import Card from "./components/Card";
import Introduce from "./components/Introduce";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map(element => {
    return <Card
      key={element.id}
      img={element.img}
      rating={element.rating}
      reviewCount={element.reviewCount}
      country={element.country}
      title={element.title}
      price={element.price}
      status={element.status}
    />
  })
  return (
    <div className="container">
      <Navbar />
      <Introduce />
      <div className="cards">
        {cards}
      </div>
    </div>
  );
}

export default App;
