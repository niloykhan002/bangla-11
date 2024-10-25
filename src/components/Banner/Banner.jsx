import banner from "../../assets/img/banner-main.png";
import PropTypes from "prop-types";
const Banner = ({ handleAddCoin }) => {
  return (
    <div className=" container mx-auto rounded-2xl bg-black mb-12">
      <div className="bg-banner-bg bg-cover rounded-2xl">
        <div className="flex flex-col gap-8 items-center py-20">
          <img src={banner} alt="" />
          <h2 className="text-white font-bold text-4xl">
            Assemble Your Ultimate Bangla 11 Cricket Team
          </h2>
          <p className="text-2xl font-medium text-gray-300">
            Beyond Boundaries Beyond Limits
          </p>
          <div className="border border-green-700 p-1 rounded-xl">
            <button
              onClick={handleAddCoin}
              className="bg-green-700 font-bold text-gray-300 text-xl py-4 px-5  rounded-xl"
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleAddCoin: PropTypes.func.isRequired,
};

export default Banner;
