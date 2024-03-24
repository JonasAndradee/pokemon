import { Pokemon } from "../entities/pokemon";

interface PokemonResponse {
  id: number;
  name: string;
  sprites: {
    other: { home: { front_default: string } };
  };
  types: { type: { name: string } }[];
}

interface GetAllResponse {
  results: PokemonResponse[];
}

const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const mapResponseToPokemon = (response: PokemonResponse[]): Pokemon[] =>
  response.map((pokemonResponse) => ({
    id: pokemonResponse.id,
    name: pokemonResponse.name,
    urlImage: pokemonResponse.sprites.other.home.front_default,
    categories: pokemonResponse.types.map((item) => item.type.name),
  }));

interface GetAllParams {
  limit?: number;
  offset?: number;
}

const getAll = async ({ limit, offset }: GetAllParams): Promise<Pokemon[]> => {
  const res = await fetch(`${API_BASE_URL}?limit=${limit}&offset=${offset}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data: getAll");
  }

  const { results } = (await res.json()) as GetAllResponse;
  const pokemonResponseWithDetails = await Promise.all(
    results.map(async ({ name }) => await getOne(name))
  );

  return mapResponseToPokemon(pokemonResponseWithDetails);
};

const getOne = async (name: string): Promise<PokemonResponse> => {
  const res = await fetch(`${API_BASE_URL}/${name}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data: getOne");
  }

  return (await res.json()) as PokemonResponse;
};

const pokemonService = {
  getAll,
  getOne,
};

export default pokemonService;
