// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
import { useState } from "react";
import Button from "./components/Button";
import DismissalAlert from "./components/DismissalAlert";

function App() {
  // let items = ["Apple", "Orange"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [visibility, setVisibility] = useState(false);

  return (
    <div>
      {visibility && (
        <DismissalAlert onClose={() => setVisibility(false)}>
          My Alert
        </DismissalAlert>
      )}
      <Button
        text={"Show an Alert"}
        color={"danger"}
        onClick={() => setVisibility(true)}
      ></Button>
    </div>
  );
  // <div>
  //   <Alert>Hello <span>World</span></Alert>
  // </div>
  //<div><ListGroup  items={items} heading={"Fruits"} onSelectItem={handleSelectItem}/></div>
  //   <div>
  //   <Button text={"Click Me"} color={"danger"} onClick={()=> console.log("Clicked")}></Button>
  // </div>
}

export default App;
