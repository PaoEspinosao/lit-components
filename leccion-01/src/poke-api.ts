import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

interface IPokemonResponse {
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
}


@customElement("poke-api")
export class PokeApi extends LitElement {
  @state()
  pokemonDetalle: IPokemonResponse[] = [];

  list = [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
  ];

  constructor() {
    super();
    this.detallePokemon();
  }

  async detallePokemon() {
    const promises = this.list.map((p) => fetch(p.url).then((res) => res.json()));
    this.pokemonDetalle = await Promise.all(promises);
  }

  render() {
    return html`
      <p>Lista de Pokémon con detalles:</p>
      <ul>
        ${this.pokemonDetalle.map(
          (poke, index) => html`
            <li>
              <strong>${index + 1} | ${poke.name}</strong><br />
              <img src="${poke.sprites.front_default}" alt="${poke.name}" />
              <p>
                Habilidades: ${poke.abilities.map((a) => a.ability.name).join(", ")}
              </p>
            </li>
          `
        )}
      </ul>
    `;
  }

  static styles = css`
     .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
    }
    img {
      width: 80px;
      height: 80px;
    }
  `;
}
