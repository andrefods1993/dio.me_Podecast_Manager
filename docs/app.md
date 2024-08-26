# Podcast Manager

### Descrição

Um app ao estilo NetFlix, aonde possa centralizar diferentes episódios podcasts separados por categorias.

### Domínio

Podcasts feitos em vídeo

### Features

-   Listar os episódios podcasts em sessões de categorias
    -   [Saúde, Bodybuilder, Mentalidade e Humor]
-   Filtrar episódios por nome de podcast

## Como

### Features:

Listar os episódios podcasts em sessões de categorias

### Como vou implementar:

GET: Vou retornar em uma API Rest(JSON) o nome podcast, nome do episódio, imagem de capa, link e categoria

response:

```js
[
	{
		podcastName: "flow",
		episode: "FELCA - Flow #379",
		videoId: "JMClyjtNm1E",
		cover: "https://i.ytimg.com/vi/JMClyjtNm1E/maxresdefault.jpg",
		link: "https://www.youtube.com/watch?v=JMClyjtNm1E",
		categories: ["humor"],
	},
	{
		podcastName: "flow",
		episode: "LEO STRONDA + RENATO CARIANI - Flow #353",
		videoId: "tpmg-PNUa9Q",
		cover: "https://i.ytimg.com/vi/tpmg-PNUa9Q/maxresdefault.jpg",
		link: "https://www.youtube.com/watch?v=tpmg-PNUa9Q",
		categories: ["bodybuilder", "humor"],
	},
];
```
