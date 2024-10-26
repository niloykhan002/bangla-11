import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Footer from "./components/Footer/Footer";

function App() {
  const [coin, setCoin] = useState(0);
  const [isActive, setIsActive] = useState({
    isActive: true,
    status: "available",
  });
  const handleAddCoin = () => {
    setCoin(coin + 100000000);
  };
  const handlePlayers = (status) => {
    if (status == "available") {
      setIsActive({ isActive: true, status: "available" });
    } else {
      setIsActive({ isActive: false, status: "selected" });
    }
  };
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner handleAddCoin={handleAddCoin}></Banner>
      <AvailablePlayers
        coin={coin}
        setCoin={setCoin}
        handlePlayers={handlePlayers}
        isActive={isActive}
      ></AvailablePlayers>
      <Footer></Footer>
    </>
  );
}

export default App;
