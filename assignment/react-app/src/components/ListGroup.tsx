import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //let fruitItems = ["Apple", "Orange"]; comment it after the interface

  // let selectedIndex = 0; //by this I can't update the variable in return function
  // So I use Hook...
  // const arr= useState(-1);
  // arr[0]; //variable (selectedIndex)
  // arr[1]; //updater function

  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  const message = items.length === 0 ? <p>No items found</p> : null;
  //the same as above// fruitItems.length===0 && <p>No item found</p>

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            //onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
