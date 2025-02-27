import { useState } from "react";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);
  const handleChangeTags = () => {
    setTags([...tags, "tag4"]);
  };

  return (
    <>
      {tags.map((tag, index) => (
        <h1 key={index}>{tag}</h1>
      ))}

      <button onClick={handleChangeTags}>Click Here</button>
    </>
  );
}
export default App;
