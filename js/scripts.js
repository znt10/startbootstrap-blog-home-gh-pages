// Lista inicial de comentários
let comentarios = [
    { texto: "Muito divertido! Gosto muito do Batmam", autor: "znt1503" },
    { texto: "Ótimas hqs.", autor: "alvaro" },
    { texto: "Adorei! o Homem-aranha", autor: "pedroapenas" }
];

// Função para exibir os comentários no carousel
function carregarComentarios() {
    let container = document.getElementById("comentariosContainer");
    container.innerHTML = ""; // Limpa os comentários anteriores

    comentarios.forEach((comentario, index) => {
        let ativo = index === 0 ? "active" : ""; // Define o primeiro item como ativo
        container.innerHTML += `
            <div class="carousel-item ${ativo}">
                <div class="comentario text-center">
                    <h3>"${comentario.texto}"</h3>
                    <p><strong>-- ${comentario.autor}</strong></p>
                    <button class="btn btn-warning btn-sm" onclick="editarComentario(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="removerComentario(${index})">Excluir</button>
                </div>
            </div>
        `;
    });
}

// Função para adicionar um novo comentário
function adicionarComentario() {
    let novoTexto = document.getElementById("novoComentario").value;
    let novoAutor = document.getElementById("novoAutor").value;

    if (novoTexto && novoAutor) {
        comentarios.push({ texto: novoTexto, autor: novoAutor });
        carregarComentarios();
        document.getElementById("novoComentario").value = "";
        document.getElementById("novoAutor").value = "";
    } else {
        alert("Por favor, preencha ambos os campos!");
    }
}

// Função para remover um comentário pelo índice
function removerComentario(index) {
    comentarios.splice(index, 1); // Remove o comentário da lista
    carregarComentarios(); // Atualiza a exibição
}

// Função para editar um comentário
function editarComentario(index) {
    let novoTexto = prompt("Edite seu comentário:", comentarios[index].texto);
    if (novoTexto !== null) {
        comentarios[index].texto = novoTexto; // Atualiza o comentário
        carregarComentarios(); // Atualiza a exibição
    }
}

// Carregar os comentários ao iniciar a página
window.onload = carregarComentarios;
