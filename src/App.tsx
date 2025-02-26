import { useState } from "react";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  const [items, setItems] = useState(["colombo", "Kandy", "Galle"]);
  const [foods, setFoods] = useState(["Pizza", "Rice", "Ice Cream"]);

  const [person, setPerson] = useState({
    name: {
      firstName: "Heshani",
      lastName: "Shehana",
    },
    addres: {
      name: "Colombo Road",
      number: "2",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const handleChangeName = () => {
    setPerson({
      ...person,
      name: {
        ...person.name,
        firstName: "Chanu",
      },
    });
  };

  return (
    <>
      <h1>{person.name.firstName}</h1>
      <button onClick={handleChangeName}>Click</button>
    </>
  );
}
export default App;
