document.addEventListener("DOMContentLoaded", function () {
    const characterContainer = document.getElementById("rick-morty-characters");

    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            data.results.slice(0, 5).forEach(character => { // Pegando os 5 primeiros personagens
                const characterCard = document.createElement("div");
                characterCard.classList.add("card", "mb-3");

                characterCard.innerHTML = `
                    <img class="card-img-top" src="${character.image}" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">Status: ${character.status}</p>
                        <p class="card-text">Espécie: ${character.species}</p>
                    </div>
                `;

                characterContainer.appendChild(characterCard);
            });
        })
        .catch(error => console.error("Erro ao carregar a API:", error));
});
