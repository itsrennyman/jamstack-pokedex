export async function getStaticProps() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
  const pokemon = await res.json();

  const allPokemon = await Promise.all(
    pokemon.results.map(async (pkmn, key) =>
      (await fetch(`https://pokeapi.co/api/v2/pokemon/${key + 1}`)).json()
    )
  );

  return {
    props: { pokemon: allPokemon },
  };
}

export default function Home() {
  <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-100 p-10">
  {pokemon.map((pkmn, key) => (
    <li
      key={key}
      className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      <div className="w-full flex items-center justify-between p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm font-medium truncate">
              {pkmn.name.charAt(0).toUpperCase() + pkmn.name.slice(1)}
            </h3>
            {pkmn.types.map((type, key) => (
              <span
                key={key}
                className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"
              >
                {type.type.name}
              </span>
            ))}
          </div>
          <p className="mt-1 text-gray-500 text-sm truncate">
            Central Security Manager
          </p>
        </div>
        <img
          className="w-12 h-12 rounded-full flex-shrink-0"
          src={pkmn.sprites.front_default}
          alt=""
        />
      </div>
    </li>
  ))}
}
