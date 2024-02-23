import { Link } from "react-router-dom";
import { getCurrencyPrice } from "../helpers";

export const ItemCard = ({ item }) => {
  return (
    <Link to={`/items/${item.id}`} className="flex gap-4">
      <img src={item.thumbnail} alt={item.title} />
      <div>
        <p className="text-xl font-bold">{getCurrencyPrice(item)}</p>
        <p>{item.title}</p>
      </div>
      <span className="ml-auto text-sm capitalize opacity-70">
        {item.seller.nickname.toLowerCase()}
      </span>
    </Link>
  );
};
