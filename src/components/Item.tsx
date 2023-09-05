// components/Item.tsx
import React from "react";
import { Item } from "../types";

type ItemProps = {
  item: Item;
};

const ItemComponent: React.FC<ItemProps> = ({ item }) => {
  return (
    <div>
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      {/* Ajoute d'autres éléments UI ici */}
    </div>
  );
};

export default ItemComponent;
