export interface PokemonResponse {
    pokemon: Pokemon[];
}

export interface Pokemon {
    id:              number;
    num:             string;
    name:            string;
    img:             string;
    type:            Type[];
    height:          string;
    weight:          string;
    candy:           string;
    candy_count?:    number;
    egg:             Egg;
    spawn_chance:    number;
    avg_spawns:      number;
    spawn_time:      string;
    multipliers:     number[] | null;
    weaknesses:      Type[];
    next_evolution?: Evolution[];
    prev_evolution?: Evolution[];
}

export enum Egg {
    NotInEggs = "Not in Eggs",
    OmanyteCandy = "Omanyte Candy",
    The10KM = "10 km",
    The2KM = "2 km",
    The5KM = "5 km",
}

export interface Evolution {
    num:  string;
    name: string;
}

export enum Type {
    Bug = "Bug",
    Dark = "Dark",
    Dragon = "Dragon",
    Electric = "Electric",
    Fairy = "Fairy",
    Fighting = "Fighting",
    Fire = "Fire",
    Flying = "Flying",
    Ghost = "Ghost",
    Grass = "Grass",
    Ground = "Ground",
    Ice = "Ice",
    Normal = "Normal",
    Poison = "Poison",
    Psychic = "Psychic",
    Rock = "Rock",
    Steel = "Steel",
    Water = "Water",
}
