import Card from "./components/Card";
import ListGroup from "./components/ListGroup";

function App() {
  const items: string[] = ["Colombo", "Kandy", "Galle", "Matara", "Badulla"];
  const foods: string[] = ["Milk rice", "Noodles", "Cake", "Icecream", "Juice"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
    const handleSelectedFood = (food: string) => {
      console.log(food);
  
  };
  return (
    <>
      <ListGroup
        items={items}
        foods={foods}
        onSelectedItem={(item) => handleSelectedItem(item)}
        onSelectedFood={(food) => handleSelectedFood(food)}
      />
    </>
  );
}

export default App;
