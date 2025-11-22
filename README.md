<div align="center">

# Enciclopédia do Programador 

Base de conhecimento interativa construída durante a **Imersão Dev Gemini da Alura**

</div>

## Visão Geral

A Enciclopédia do Programador funciona como um painel de estudo imediato: assim que a página é carregada,
os principais conceitos aparecem organizados em cards com definições, exemplos, metáforas e links. A busca inteligente refina os resultados em tempo real e permite que o usuário compare termos,
revise rapidamente os fundamentos e descubra novas áreas para explorar.

## ✨ Recursos principais

- **Busca instantânea**: filtra termos em tempo real conforme o usuário digita.
- **Cards ricos em contexto**: cada conceito combina definição, exemplo prático, metáfora e link para aprofundar.
- **Base expansível**: os dados ficam centralizados em `data.json`, facilitando a inclusão de novos tópicos.

## 🧠 Tecnologias e arquitetura

- **HTML5** para a estruturação semântica da página (`index.html`).
- **CSS3** com variáveis, grid e flexbox para o tema neon responsivo (`style.css`).
- **JavaScript Vanilla** para buscar o JSON local, renderizar cards dinamicamente e tratar feedbacks de busca
	(`script.js`).
- **JSON** como fonte de dados textual, descrevendo cada verbete com campos reutilizáveis (`data.json`).

## 📁 Estrutura do projeto

```
├── index.html      # cabeçalho fixo, barra de busca, cards e footer
├── style.css       # tema escuro, grid responsivo e microinterações
├── script.js       # carregamento dos dados e renderização dos resultados
└── data.json       # enciclopédia com descrições, exemplos e metáforas
```

## ▶️ Como executar localmente

1. Clone ou baixe este repositório.
2. Abra a pasta em seu editor de preferência.
3. Inicie um servidor local simples, por exemplo: Live Server.
4. Acesse o endereço indicado (geralmente `http://localhost:3000` ou `http://localhost:5500`).
5. Pesquise termos como `variável`, `API` ou `loop` e explore os cards.


## 🙌 Créditos

Projeto desenvolvido durante a **Imersão Dev Gemini da Alura**. Agradecimentos à comunidade Alura pelo conteúdo e aos
mentores que estimularam a criação desta enciclopédia.
