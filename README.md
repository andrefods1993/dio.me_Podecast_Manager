# Podecast Manager

## 📎 Sumário

-   [📝 Descrição](#description)
-   [🔧 Tecnologias](#skills)
-   [📚 Funcionalidades](#functionalities)
-   [🚀 Demonstração](#demo)
-   [🧑🏾‍💻 Colaboradores](#contributor)
-   [🎯 Status](#status)
-   [🧑🏾‍💻 Licença](#license)

<h2 id="description">📝 Descrição</h2>

Podcast Manager é uma aplicação inspirada no estilo da Netflix, projetada para centralizar e organizar episódios de podcasts em vídeo, categorizando-os por temas como saúde, esporte, mentalidade, e humor. O objetivo é proporcionar uma experiência de navegação intuitiva e agradável, facilitando o acesso aos conteúdos desejados.

<h2 id="skills">🔧 Tecnologias</h2>

[![My Skills](https://skillicons.dev/icons?i=js,nodejs,ts)](https://skillicons.dev)

<h2 id="functionalities">📚 Funcionalidades</h2>

- Listagem de Episódios por Categorias: Os episódios são organizados em categorias como saúde, bodybuilder, mentalidade, e humor, permitindo uma navegação simplificada.
- Filtro de Episódios por Nome de Podcast: Possibilidade de busca específica por nome de podcast, tornando mais fácil encontrar os episódios desejados.

<h2 id="demo">🚀 Demonstração</h2>

### 1. Listar Episódios de Podcasts por Categorias

- **Endpoint**: `GET /list`
- **Descrição**: Retorna uma lista de episódios de podcasts organizados por categorias.
- **Exemplo de Resposta**:
  ```json
  [
    {
      "podcastName": "flow",
      "episode": "CBUM - Flow #319",
      "videoId": "pQSuQmUfS30",
      "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
      "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
      "categories": ["saúde", "esporte", "bodybuilder"]
    },
    {
      "podcastName": "flow",
      "episode": "RUBENS BARRICHELLO - Flow #339",
      "videoId": "4KDGTdiOV4I",
      "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
      "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
      "categories": ["esporte", "corrida"]
    }
  ]
  ```

### 2. Filtrar Episódios por Nome de Podcast

- **Endpoint**: `GET /episodes?p={nome}`
- **Descrição**: Retorna uma lista de episódios de podcasts com base no nome do podcast fornecido.
- **Exemplo de Requisição**: `GET /episodes?p=flow`


## Como Utilizar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/podcast-manager.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd podcast-manager
   ```
3. Instale as dependências necessárias:
   ```bash
   npm install
   ```
4. Inicie o servidor:
   ```bash
   npm run start:dev
   ```
5. Utilize os endpoints fornecidos para listar os episódios de podcasts ou filtrá-los por nome.


<h2 id="contributor">🧑🏾‍💻 Colaboradores</h2>

[@andrefods1993](https://github.com/andrefods1993)

<h2 id="status">🎯 Status do projeto</h2>

✅ **Concluído**: O projeto foi finalizado e todas as funcionalidades planejadas foram implementadas.

<h2 id="license">📄 Licença</h2>

Este projeto é licenciado sobre a licença [MIT License](https://opensource.org/licenses/MIT) - veja [LICENSE](LICENSE) para mais informações.

<span style="font-size: 10px;"> [ReadME Wizard](https://github.com/andrefods1993) </span># dio.me_Podecast_Manager
# dio.me_Podecast_Manager
