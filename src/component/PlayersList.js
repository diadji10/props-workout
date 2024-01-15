import React from "react";
import Player from "./Player";
import players from "../Players";

const PlayersList = () => {
  const style = {
    display: "grid",
    gridTemplateRows: "repeat(2,1fr)",
    width: "100%",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: 15,
  };
  return (
    <div style={style}>
      {players.map((joueur) => (
        <Player
          nom={joueur.fullName}
          nation={joueur.nationality}
          age={joueur.old}
          equipe={joueur.team}
          photo={joueur.image}
        />
      ))}
    </div>
  );
};

export default PlayersList;
