import { useEffect, useState } from "react";
import Players from "../Players/Players";
import "./AvailablePlayers.css";
import PropTypes from "prop-types";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AvailablePlayers = ({ handlePlayers, isActive, coin, setCoin }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  const handleSelectedPlayers = (player) => {
    const soldPlayers = selectedPlayers.find(
      (soldPlayer) => soldPlayer.id == player.id
    );

    if (player.price > coin) {
      toast.error("You do not have enough money");
    } else if (selectedPlayers.length >= 6) {
      toast.error("All slot full!");
    } else if (soldPlayers) {
      toast.error("Already signed!");
    } else {
      setCoin(coin - player.price);
      setSelectedPlayers([...selectedPlayers, player]);
      toast.success(`${player.name} is sold to you`);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-12 pt-12">
        <div>
          <h2 className="font-bold text-3xl">
            {isActive.isActive
              ? `Available Players (${players.length})`
              : `Selected Players (${selectedPlayers.length}/${players.length})`}
          </h2>
        </div>
        <div className="border rounded-2xl">
          <button
            onClick={() => handlePlayers("available")}
            className={`${
              isActive.isActive ? "active" : "py-4 px-8 text-gray-600"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handlePlayers("selected")}
            className={`${
              isActive.isActive ? "py-4 px-8 text-gray-600" : "active"
            }`}
          >
            Selected {`(${selectedPlayers.length})`}
          </button>
        </div>
      </div>
      {isActive.isActive ? (
        <Players
          players={players}
          handleSelectedPlayers={handleSelectedPlayers}
        ></Players>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          handlePlayers={handlePlayers}
        ></SelectedPlayers>
      )}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
      />
      ;
    </div>
  );
};

AvailablePlayers.propTypes = {
  handlePlayers: PropTypes.func.isRequired,
  isActive: PropTypes.object.isRequired,
  coin: PropTypes.number.isRequired,
  setCoin: PropTypes.func.isRequired,
};

export default AvailablePlayers;
