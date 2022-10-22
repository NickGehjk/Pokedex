const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');
const pokemonType1 = document.querySelector('.pokemon__type1');
const pokemonType2 = document.querySelector('.pokemon__type2');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if(APIResponse.status == 200){
        const data = await APIResponse.json();
    return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Carregando...';
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if(data){
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;


        if((data['types']['0']['type']['name'])=="grass"){
            pokemonType1.src = './images/grass.png';}
        else if((data['types']['0']['type']['name'])=="fire"){
            pokemonType1.src = './images/fire.png';}
        else if((data['types']['0']['type']['name'])=="water"){
            pokemonType1.src = './images/water.png';}
        else if((data['types']['0']['type']['name'])=="bug"){
            pokemonType1.src = './images/bug.png';}
        else if((data['types']['0']['type']['name'])=="normal"){
            pokemonType1.src = './images/normal.png';}
        else if((data['types']['0']['type']['name'])=="poison"){
            pokemonType1.src = './images/poison.png';}
        else if((data['types']['0']['type']['name'])=="electric"){
            pokemonType1.src = './images/electric.png';}
        else if((data['types']['0']['type']['name'])=="ground"){
            pokemonType1.src = './images/ground.png';}
        else if((data['types']['0']['type']['name'])=="fairy"){
            pokemonType1.src = './images/fairy.png';}
        else if((data['types']['0']['type']['name'])=="fighting"){
            pokemonType1.src = './images/fighting.png';}
        else if((data['types']['0']['type']['name'])=="psychic"){
            pokemonType1.src = './images/psychic.png';}
        else if((data['types']['0']['type']['name'])=="rock"){
            pokemonType1.src = './images/rock.png';}
        else if((data['types']['0']['type']['name'])=="ice"){
            pokemonType1.src = './images/ice.png';}
        else if((data['types']['0']['type']['name'])=="dark"){
            pokemonType1.src = './images/dark.png';}
        else if((data['types']['0']['type']['name'])=="flying"){
            pokemonType1.src = './images/flying.png';}
        else if((data['types']['0']['type']['name'])=="ghost"){
            pokemonType1.src = './images/ghost.png';}
        else if((data['types']['0']['type']['name'])=="dragon"){
            pokemonType1.src = './images/dragon.png';}
        else if((data['types']['0']['type']['name'])=="steel"){
            pokemonType1.src = './images/steel.png';}

        if(data['types']['1']){
            if((data['types']['1']['type']['name'])=="grass"){
                pokemonType2.src = './images/grass.png';}
                else if((data['types']['1']['type']['name'])=="fire"){
                    pokemonType2.src = './images/fire.png';}
                else if((data['types']['1']['type']['name'])=="water"){
                    pokemonType2.src = './images/water.png';}
                else if((data['types']['1']['type']['name'])=="bug"){
                    pokemonType2.src = './images/bug.png';}
                else if((data['types']['1']['type']['name'])=="normal"){
                    pokemonType2.src = './images/normal.png';}
                else if((data['types']['1']['type']['name'])=="poison"){
                    pokemonType2.src = './images/poison.png';}
                else if((data['types']['1']['type']['name'])=="electric"){
                    pokemonType2.src = './images/electric.png';}
                else if((data['types']['1']['type']['name'])=="ground"){
                    pokemonType2.src = './images/ground.png';}
                else if((data['types']['1']['type']['name'])=="fairy"){
                    pokemonType2.src = './images/fairy.png';}
                else if((data['types']['1']['type']['name'])=="fighting"){
                    pokemonType2.src = './images/fighting.png';}
                else if((data['types']['1']['type']['name'])=="psychic"){
                    pokemonType2.src = './images/psychic.png';}
                else if((data['types']['1']['type']['name'])=="rock"){
                    pokemonType2.src = './images/rock.png';}
                else if((data['types']['1']['type']['name'])=="ice"){
                    pokemonType2.src = './images/ice.png';}
                else if((data['types']['1']['type']['name'])=="dark"){
                    pokemonType2.src = './images/dark.png';}
                else if((data['types']['1']['type']['name'])=="flying"){
                    pokemonType2.src = './images/flying.png';}
                else if((data['types']['1']['type']['name'])=="ghost"){
                    pokemonType2.src = './images/ghost.png';}
                else if((data['types']['1']['type']['name'])=="dragon"){
                    pokemonType2.src = './images/dragon.png';}
                else if((data['types']['1']['type']['name'])=="steel"){
                    pokemonType2.src = './images/steel.png';}
        }
        else{
            pokemonType2.src = './images/png.png';
        }
        
        pokemonImage.src = data
        /*['sprites']['versions']['generation-i']
        ['red-blue']['front_default'];*/

        /*['sprites']['versions']['generation-iii']
        ['emerald']['front_default'];*/

        ['sprites']['versions']['generation-v']
        ['black-white']['animated']['front_default'];

        /*['sprites']['versions']['generation-vi']
        ['omegaruby-alphasapphire']['front_default'];*/

        /*['sprites']['versions']['generation-viii']
        ['icons']['front_default'];*/
        
        input.value = '';
        searchPokemon = data.id;
    } else{
        //renderPokemon('201');
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Não encontrado';
        pokemonNumber.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener('click', () => {
    if(searchPokemon > 1){
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
});

buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);