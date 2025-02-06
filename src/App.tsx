import ListGroup from "./components/ListGroup";

function App() {
  const items: string[] = [
    "Colombo",
    "Kandy",
    "Galle",
    "Mathara",
    "Kurunagala",
  ];
  const foods: string[] = ["Noodles", "Rice", "Milkrice", "Cake", "Icecream"];

  return (
    <>
      <ListGroup items={items} foods={foods} />
    </>
  );
}

export default App;
