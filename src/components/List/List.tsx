import ItemList from "../ItemList/ItemList";
import "./list.css";

interface ListProps {
  items: string[];
  // eslint-disable-next-line no-unused-vars
  onClick: (i: string) => void;
  favoriteDogList: string[];
}

const List = ({ items, onClick, favoriteDogList }: ListProps) => (
  <div className="container">
    {items.map((item) => (
      <ItemList
        key={item}
        isFilled={favoriteDogList.includes(item)}
        item={item}
        onClick={onClick}
      />
    ))}
  </div>
);

export default List;
