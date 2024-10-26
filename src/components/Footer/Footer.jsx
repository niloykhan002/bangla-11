import logo from "../../assets/img/logo-footer.png";
import Subscribe from "../Subscribe/Subscribe";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="relative container mx-auto">
        <div className="absolute z-10 -top-36 container mx-auto">
          <Subscribe></Subscribe>
        </div>
        <div className="flex flex-col items-center pt-56 pb-20">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="grid grid-cols-3 gap-10 mt-16">
            <div className="w-2/3 space-y-4">
              <h4 className=" text-white font-semibold text-lg">About Us</h4>
              <p className="text-gray-400">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div className="w-2/3 mx-auto space-y-4">
              <h4 className="text-white font-semibold text-lg">Quick Links</h4>
              <div>
                <ul className="text-gray-400 list-disc list-inside space-y-3">
                  <li>Home</li>
                  <li>Service</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-lg">Subscribe</h4>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest updates.
              </p>
              <div className="flex rounded-2xl w-fit overflow-hidden">
                <input
                  className="py-4 px-8"
                  type="email"
                  name=""
                  placeholder="Enter your email"
                />
                <button className=" py-4 px-8 bg-gradient-to-r from-green-700 to-yellow-400">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-gray-700" />
        <p className="text-center text-gray-400 py-8">
          @2024 Bangla 11 All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
