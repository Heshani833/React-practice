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
      country: "Sri Lanka",
      street: {
        streetName: "Colombo Road",
        number: 2,
      },
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const handleChangeName = () => {
    setPerson({
      ...person,
      addres: {
        ...person.addres,
        street: {
          ...person.addres.street,
          number: 19,
        },
      },
    });
  };

  return (
    <>
      <h1>{person.addres.street.number}</h1>
      <button onClick={handleChangeName}>Click</button>
    </>
  );
}
export default App;
