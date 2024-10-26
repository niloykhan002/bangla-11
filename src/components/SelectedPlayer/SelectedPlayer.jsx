import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";
const SelectedPlayer = ({ player }) => {
  const { name, img, player_position } = player;
  return (
    <div className="flex justify-between items-center border rounded-lg p-5">
      <div className="flex gap-3 items-center">
        <img
          className="w-20 h-20 object-cover object-top rounded-lg"
          src={img}
          alt=""
        />
        <div>
          <h3>{name}</h3>
          <p>{player_position}</p>
        </div>
      </div>
      <div>
        <button className="text-red-600">
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

SelectedPlayer.propTypes = {
  player: PropTypes.object.isRequired,
};

export default SelectedPlayer;
