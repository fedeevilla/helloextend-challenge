import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";
import "./itemlist.css";

interface Props {
  item: string;
  onClick: (i: string) => void;
  isFilled: boolean;
}

const ItemList = ({ item, isFilled, onClick }: Props) => (
  <div className="item">
    <img key={item} alt={item} className="image" src={item} />
    <button className="button-icon" onClick={() => onClick(item)}>
      <FavoriteIcon isFilled={isFilled} />
    </button>
  </div>
);

export default ItemList;
