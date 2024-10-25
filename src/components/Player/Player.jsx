import PropTypes from "prop-types";
import { FaUserLarge } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa6";
const Player = ({ player, handleSelectedPlayers }) => {
  const {
    name,
    img,
    nationality,
    player_position,
    playing_style,
    price,
    category,
  } = player;
  return (
    <div className="p-6 rounded-xl border space-y-3">
      <img
        className="w-full rounded-xl h-80 object-cover object-top "
        src={img}
        alt=""
      />
      <div className="flex gap-4 items-center">
        <FaUserLarge />
        <span className="text-xl font-semibold">{name}</span>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3 items-center text-gray-500">
          <span>
            <FaFlag />
          </span>
          <span>{nationality}</span>
        </div>
        <div className="py-2 px-4 bg-gray-100 rounded-lg">
          <span>{playing_style}</span>
        </div>
      </div>
      <div className="flex justify-between font-bold">
        <p>Category</p>
        <span>{category}</span>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold">Playing Style</p>
        <span className="text-gray-600">{player_position}</span>
      </div>
      <div className="flex justify-between font-semibold">
        <p>Price: {price}</p>
        <button
          onClick={() => handleSelectedPlayers(player)}
          className="py-2 px-4 rounded-lg bg-gray-100"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  handleSelectedPlayers: PropTypes.func.isRequired,
};
export default Player;
