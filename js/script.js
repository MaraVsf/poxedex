function buscarPokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let name = document.getElementById('nombre').value.toLowerCase();

    fetch(url + name)
    .then(response => response.json())
    .then(data => {
        document.getElementById('nombre').value = "";
        mostrar(data);
      });
}

function mostrar(pokemon) {
    const nombre = pokemon.name;
    const imagen = pokemon.sprites.front_default;
    const numero = pokemon.id;
    const tipo = pokemon.types.map(type => type.type.name).join(", ");

    const pokemonInfo = `
        <div>
            <h2>${nombre}</h2>
            <p>N°: ${numero}</p>
            <p>Tipo: ${tipo}</p>
        </div>
        <img src="${imagen}" alt="${nombre}">
    `;

    pokedex.innerHTML = pokemonInfo;
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('buscar').addEventListener('click', () => {
        buscarPokemon();
    })
})


