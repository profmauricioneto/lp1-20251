const getDataPokemon = async (pokemon) => {
    try {
        response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('erro ao usar a api');
    }
}

getDataPokemon('charmander').then((res) => {
    console.log(res);
})