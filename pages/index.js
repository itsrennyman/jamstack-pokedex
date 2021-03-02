import Navbar from "../components/Navbar";

export async function getStaticProps() {
  const fs = require("fs");
  const raw = fs.readFileSync("./assets/datasources/pokemon.json");
  const pokemon = JSON.parse(raw);

  return {
    props: { pokemon },
  };
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const Index = ({ pokemon }) => (
  <div className="bg-gray-100 min-h-screen">
    <Navbar />

    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 sm:p-6 lg:p-8">
      {pokemon.map((pkmn, key) => (
        <li
          key={key}
          className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="w-full flex items-center justify-between p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">
                  {pkmn.name.capitalize()}
                </h3>
                {pkmn.types.map((type, key) => (
                  <span
                    key={key}
                    className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"
                  >
                    {type.type.name.capitalize()}
                  </span>
                ))}
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">
                Central Security Manager
              </p>
            </div>
            <img
              className="w-12 h-12 flex-shrink-0"
              src={`/images/${pkmn.id}.png`}
              alt=""
            />
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Index;
