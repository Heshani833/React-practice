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
  const handleChangeName = () => {
    setPerson({ ...person, firstName: "Chanu" });
  };

  const handleChangeCity = () => {
    setPerson({ ...person, address: "Badulla" });
  };
  return (
    <>
      <h1>{person.firstName}</h1>
      <button onClick={handleChangeName}>Click</button>
      <h1>{person.address}</h1>
      <button onClick={handleChangeCity}>Click</button>
    </>
  );
}
export default App;
