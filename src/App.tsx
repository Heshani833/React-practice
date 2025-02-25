import { useState } from "react";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  const [items, setItems] = useState(["colombo", "Kandy", "Galle"]);
  const [foods, setFoods] = useState(["Pizza", "Rice", "Ice Cream"]);

  const [person, setPerson] = useState({
    firstName: "Heshani",
    lastName: "Shehana",
    address: "Colombo",
  });

  const [isLoading, setIsLoading] = useState(false);

  return <ListGroup items={items} foods={foods} />;
}
export default App;
