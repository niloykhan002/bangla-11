import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";
import PropTypes from "prop-types";

const SelectedPlayers = ({ selectedPlayers }) => {
  return (
    <div className="space-y-5 pb-40">
      {selectedPlayers.map((player) => (
        <SelectedPlayer key={player.id} player={player}></SelectedPlayer>
      ))}
      <div className="border border-green-700 p-1 rounded-xl w-fit">
        <button className="py-4 px-8 bg-green-700 rounded-xl text-white font-bold">
          Add More Player
        </button>
      </div>
    </div>
  );
};

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.array.isRequired,
};
export default SelectedPlayers;
