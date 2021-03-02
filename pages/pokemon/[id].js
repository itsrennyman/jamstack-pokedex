import Navbar from "../../components/Navbar";

export async function getStaticProps({ params }) {
  const fs = require("fs");
  const raw = fs.readFileSync("./assets/datasources/pokemon.json");
  const pokemon = JSON.parse(raw).find((pkmn) => pkmn.id == params.id);

  return {
    props: { pokemon },
  };
}

export async function getStaticPaths() {
  const fs = require("fs");
  const raw = fs.readFileSync("./assets/datasources/pokemon.json");
  const paths = JSON.parse(raw).map((pkmn) => ({
    params: { id: pkmn.id.toString() },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const Show = ({ pokemon }) => (
  <div className="bg-gray-100 min-h-screen">
    <Navbar />

    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-sm flex flex-col p-8 bg-white rounded-lg shadow">
        <img
          className="w-48 h-48 flex-shrink-0 mx-auto"
          src={`https://ik.imagekit.io/animesplash/${pokemon.id}.png`}
          alt=""
        />
        <h3 className="mt-6 text-gray-900 text-lg font-medium text-center">
          {pokemon.name.capitalize()}
        </h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between text-center">
          <dd className="mt-3 space-x-1">
            {pokemon.types.map((type, key) => (
              <span
                key={key}
                className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-sm font-medium bg-green-100 rounded-full"
              >
                {type.type.name.capitalize()}
              </span>
            ))}
          </dd>
        </dl>
      </div>
    </div>
  </div>
);

export default Show;
