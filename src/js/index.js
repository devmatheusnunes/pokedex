const listSelectPokemon = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.card-pokemon')

listSelectPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cardPokemonOpen = document.querySelector('.open')
        cardPokemonOpen.classList.remove('open')

        const idPokemonSelect = pokemon.attributes.id.value
        const idCardForOpen = 'card-' + idPokemonSelect
        const cardPokemonForOpen = document.getElementById(idCardForOpen)
        cardPokemonForOpen.classList.add('open')
        
        const listPokemonActive = document.querySelector('.active')
        listPokemonActive.classList.remove('active')
        
        const idPokemonActiveSelect = pokemon.attributes.id.value
        const cardPokemonForActive = document.getElementById(idPokemonActiveSelect)
        cardPokemonForActive.classList.add('active')
    })
})