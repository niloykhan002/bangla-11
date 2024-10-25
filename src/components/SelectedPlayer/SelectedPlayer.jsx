import PropTypes from "prop-types";
const SelectedPlayer = ({ player }) => {
  const { name, img, player_position } = player;
  return (
    <div className="flex gap-3 items-center p-5 border rounded-lg">
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
  );
};

SelectedPlayer.propTypes = {
  player: PropTypes.object.isRequired,
};

export default SelectedPlayer;
