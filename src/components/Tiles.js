import React, { useState } from "react";
import Tile1 from "./indTiles/Tile1";
import Tile2 from "./indTiles/Tile2";
import Tile3 from "./indTiles/Tile3";

const Tiles = (props) => {
    // const [score, setScore] = useState(0);

   return (
    <div>
        <Tile1 />
        <Tile2 />
        <Tile3 />
    </div>
   );
}

export default Tiles;