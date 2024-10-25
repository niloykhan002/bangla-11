import Player from "../Player/Player";
import PropTypes from "prop-types";

const Players = ({ players, handleSelectedPlayers }) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {players.map((player) => (
        <Player
          key={player.id}
          player={player}
          handleSelectedPlayers={handleSelectedPlayers}
        ></Player>
      ))}
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.array.isRequired,
  handleSelectedPlayers: PropTypes.func.isRequired,
};
export default Players;
