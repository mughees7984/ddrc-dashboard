import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-gradient-to-br from-gray-900 via-black to-gray-900 bg-black/50 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">D</span>
            </div>
            <div>
              <a href="/">
                <h1 className="text-white font-bold text-xl">DDRC</h1>
                <p className="text-gray-400 text-xs">
                  Distributed Digital Resource Coin
                </p>
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Vision
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Project
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Technical
            </a>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Add to Wallet
            </button>
            <button  onClick={() => navigate("/vesting-dashboard")} className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Vesting
            </button>
            <button
              onClick={() => navigate("/vesting")}
              className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
