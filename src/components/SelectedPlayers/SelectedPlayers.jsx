import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";
import PropTypes from "prop-types";

const SelectedPlayers = ({ selectedPlayers }) => {
  return (
    <div className="space-y-5">
      {selectedPlayers.map((player) => (
        <SelectedPlayer key={player.id} player={player}></SelectedPlayer>
      ))}
    </div>
  );
};

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.array.isRequired,
};
export default SelectedPlayers;
