const cardContainer = document.querySelector(".card-container");
const campoBusca = document.querySelector("#campo-busca");
const searchForm = document.querySelector(".search-bar");

let dados = [];
let dadosPromise = null;

cardContainer.innerHTML = "<p class='card-feedback'>Digite um conceito de programação no campo acima para começar.</p>";

async function carregarDados() {
    if (dados.length) return;
    if (!dadosPromise) {
        dadosPromise = fetch("data.json")
            .then((resposta) => {
                if (!resposta.ok) {
                    throw new Error("Falha ao buscar data.json");
                }
                return resposta.json();
            })
            .then((json) => {
                dados = json;
                return dados;
            })
            .catch((erro) => {
                dadosPromise = null;
                throw erro;
            });
    }

    await dadosPromise;
}

async function iniciarBusca(evento) {
    if (evento) {
        evento.preventDefault();
    }

    try {
        await carregarDados();
    } catch (erro) {
        console.error("Falha ao carregar dados:", erro);
        cardContainer.innerHTML = "<p class='card-feedback'>Não foi possível carregar a enciclopédia agora. Tente novamente.</p>";
        return;
    }

    const termo = campoBusca.value.trim().toLowerCase();
    const resultados = termo
        ? dados.filter((item) =>
            item.nome.toLowerCase().includes(termo) ||
            item.descricao.toLowerCase().includes(termo)
        )
        : dados;

    renderizarCards(resultados, Boolean(termo));
}

function renderizarCards(lista, houveBusca) {
    if (!lista.length) {
        cardContainer.innerHTML = houveBusca
            ? "<p class='card-feedback'>Nenhum conceito encontrado. Tente outros termos.</p>"
            : "<p class='card-feedback'>Digite algo como 'variável', 'API' ou 'loop' para começar.</p>";
        return;
    }

    cardContainer.innerHTML = "";
    const fragmento = document.createDocumentFragment();

    lista.forEach((dado) => {
        const article = document.createElement("article");
        article.classList.add("card");

        const exemplo = dado.exemplo ? `<p><strong>Exemplo:</strong> ${dado.exemplo}</p>` : "";
        const explicacao = dado.explicacao || dado.explicacao_simples || "";
        const metafora = dado.metafora ? `<p><strong>Metáfora:</strong> ${dado.metafora}</p>` : "";
        const linkBusca = `https://www.google.com/search?q=${encodeURIComponent(`conceito ${dado.nome}`)}`;

        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p>${dado.descricao}</p>
            ${exemplo}
            ${explicacao ? `<p><strong>Explicação:</strong> ${explicacao}</p>` : ""}
            ${metafora}
            <a href="${linkBusca}" target="_blank" rel="noopener noreferrer">Saiba mais</a>
        `;

        fragmento.appendChild(article);
    });

    cardContainer.appendChild(fragmento);
}

searchForm.addEventListener("submit", iniciarBusca);
campoBusca.addEventListener("input", () => {
    if (dados.length) {
        iniciarBusca();
    }
});