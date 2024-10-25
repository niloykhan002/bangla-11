import Logo from "../../assets/img/logo.png";
import { TbCoinFilled } from "react-icons/tb";
import PropTypes from "prop-types";
const Navbar = ({ coin }) => {
  return (
    <div className="flex justify-between items-center container mx-auto py-8">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="flex gap-10 items-center">
        <p className="text-gray-600 font-semibold text-xl">Home</p>
        <p className="text-gray-600 font-semibold text-xl">Fixture</p>
        <p className="text-gray-600 font-semibold text-xl">Teams</p>
        <p className="text-gray-600 font-semibold text-xl">Schedules</p>
        <div className="flex gap-2 px-5 py-4 border rounded-xl items-center">
          <p className="text-xl font-semibold text-yellow-600">{coin} Coin</p>
          <p className="text-yellow-500 text-2xl">
            <TbCoinFilled />
          </p>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  coin: PropTypes.number.isRequired,
};

export default Navbar;
