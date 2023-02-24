import Card from "./componants/Card";
import Navbar from "./componants/Navbar";
import data from "./data";
function App() {
  const cards = data.map(element => {
    return (<Card
      key={element.id}
      title={element.title}
      image={element.imageUrl}
      location={element.location}
      googleMapUrl={element.googleMapUrl}
      startDate={element.startDate}
      endDate={element.endDate}
      description={element.description}
    />
    )
  })

  return (
    <div className="container">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
