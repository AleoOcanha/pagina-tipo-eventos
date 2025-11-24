Descrição detalhada

Base de Conhecimento - Magda Ocanha Assessoria
Este projeto é uma página web interativa que funciona como uma base de conhecimento para os diferentes tipos de eventos organizados pela "Magda Ocanha Assessoria". A aplicação permite aos usuários visualizar e buscar eventos de forma rápida e intuitiva.

 Descrição
A página carrega dinamicamente os dados de eventos a partir de um arquivo JSON local e os exibe em formato de "cards". Cada card contém o tipo do evento, frases descritivas e um link para mais informações. A principal funcionalidade é a barra de busca, que filtra os eventos em tempo real com base nas tags e tipos associados a cada um, facilitando a localização do serviço desejado.

 Funcionalidades
Exibição Dinâmica: Os eventos são carregados a partir do arquivo data.json e renderizados na página.
Busca Inteligente: Filtra os eventos com base no texto digitado pelo usuário, pesquisando tanto no tipo do evento quanto em suas tags.
Design Simples e Responsivo: Interface limpa e direta, focada na usabilidade.
 Tecnologias Utilizadas
HTML5: Para a estrutura semântica da página.
CSS3: Para a estilização dos componentes e layout.
JavaScript (Vanilla): Para a manipulação do DOM, lógica de busca e carregamento dinâmico dos dados.
JSON: Como formato para armazenar e gerenciar os dados dos eventos de forma estruturada.
 Como Usar
Visualização
Busca de Eventos
Na parte superior da página, você encontrará um campo de texto com o placeholder "Digite seu evento".
Digite uma palavra-chave relacionada ao evento que você procura (por exemplo: "casamento", "festa", "noiva", "corporativo").
Clique no botão "Buscar".
A página exibirá apenas os cards de eventos que correspondem à sua busca.
 Estrutura dos Dados (data.json)
Tipo: O título principal do evento.
frase1 e frase2: Textos descritivos que aparecem no card.
link: URL de destino ao clicar no botão do card.
tags: Palavras-chave usadas pela funcionalidade de busca para filtrar os resultados.
