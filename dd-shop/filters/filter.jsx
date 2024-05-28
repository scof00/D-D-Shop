import { useEffect, useState } from "react";
import { getRarities } from "../services/rarityservice";
import"./filter.css"

export const Filters = () => {
    const [rarities, setRarities] = useState([]);
    useEffect(() => {
        getRarities().then((raritiesArray) => setRarities(raritiesArray));
      }, []);
return (
    <div className="item-display">
      <div className="filters">
        <select className="rarity-filter">
          <option value="0">Sort by Rarity</option>
          {rarities.map((rarity) => {
            return (
              <option key={rarity.id} value={rarity.id}>
                {rarity.name}
              </option>
            );
          })}
        </select>
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        type="text"
        placeholder="Search Items"
        className="item-search"
      />
      </div>
      </div>
)
}