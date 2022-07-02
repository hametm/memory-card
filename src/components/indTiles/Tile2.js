import React, { useState, useEffect } from "react";

const Tile2 = (props) => {
    const [click, setClick] = useState(false);
    const [tally, setTally] = useState(0);
    const [mark, setMark] = useState(false);

    useEffect(() => {
        if (tally === 2) {
            setMark(true);
            console.log("Points deducted");
        }
    }, [tally]);

    useEffect(() => {
        setClick(false);
        setTally(0);
        setMark(false);
        // Score?
    }, [mark])

    const onTileClicked = () => {
        setClick(true);
        setTally(tally + 1);
    }

    return (
        <button onClick={onTileClicked}>Tile2</button>
    );
}

export default Tile2;