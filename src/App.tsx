import { useState } from "react";

function App() {
  // const [firstName, setfiratName] = useState("Heshani");
  // const [lastName, setlastName] = useState("Shehana");

  const [person, setPerson] = useState({
    firstName: "Heshani",
    lastName: "Shehana",
    address: "Kandy",
  });

  const [isloarding, setIsLoarding] = useState(false);

  return (
    <>
      {person.firstName} {person.lastName} {person.address}
    </>
  );
}

export default App;
