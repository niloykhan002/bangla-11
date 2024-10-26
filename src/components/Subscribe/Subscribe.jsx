import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div className="">
      <div className="border border-white rounded-2xl">
        <div className="flex flex-col gap-5 items-center m-5 border rounded-2xl py-14 background-image bg-white">
          <h2 className="font-bold text-3xl">Subscribe to our Newsletter</h2>
          <p className="font-medium text-xl text-gray-600">
            Get the latest updates and news right in your inbox!
          </p>
          <div>
            <input
              className="py-4 px-8 border rounded-lg w-96 mr-4"
              type="email"
              name=""
              placeholder="Enter your email"
            />
            <button className="font-bold py-4 px-8 rounded-lg bg-gradient-to-r from-green-700 to-yellow-400 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
