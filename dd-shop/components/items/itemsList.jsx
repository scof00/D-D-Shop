import { useEffect, useState } from "react";
import {
  changItemStatus,
  deleteItems,
  getAllUnsoldItems,
} from "../../services/itemsService";
import "./items.css";

import { Filters } from "../../filters/filter";

export const UnsoldItemsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllUnsoldItems().then((itemsArray) => setItems(itemsArray));
  }, []);

  const handleDelete= (item) => {
    deleteItems(item.id).then(() => {
      getAllUnsoldItems
    })
  }

  return (
    <>
      <Filters />
      <div className="items">
        {items.map((item) => {
          return (
            <div className="itemContainer" key={item.id}>
              <img src={item.image} />
              <div className="item-info-item">
                <h3>
                  <span>
                    <strong>Item: </strong>
                  </span>
                  {item.name}
                </h3>
              </div>
              <div>
                <span className="item-info-rarity">
                  <strong>Rarity: </strong>{" "}
                </span>
                {item.rarity.name}
              </div>
              <div className="item-info-description">
                <span>
                  <strong>Description: </strong>
                </span>
                {item.description}
              </div>
              <div>
                <span className="item-info-cost">
                  <strong>Cost: </strong>
                </span>
                {item.cost} Gold
              </div>
              <div className="container-btns">
                <button className="item-btn">Edit</button>
                <button
                  className="item-btn"
                  onClick={(event) => {
                    item.purchased = !item.purchased;
                    changItemStatus(item).then(() => {
                      getAllUnsoldItems().then((allItems) => {
                        setItems(allItems);
                      });
                    });
                  }}
                >
                  Buy
                </button>
                <button
                  className="item-btn"
                  onClick={(event) => {
                    deleteItems(event.id).then(() => {
                      getAllUnsoldItems
                  })}}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
