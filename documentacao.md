# Apresentação

Este trabalho teve como objetivo a criação de uma página estática de um restaurante, utilizando apenas HTML e CSS. Nele, foram empregadas diversas tags desses dois idiomas de marcação. O projeto consiste em quatro páginas: Home, Kanban, Política de Privacidade e Termos de Serviço.

Na página Home, encontra-se um banner do restaurante, uma barra de navegação, o nome do estabelecimento, uma breve apresentação, pratos em destaque, uma história fictícia sobre o restaurante, um formulário de contato, além de informações de contato e outras informações relevantes.

Na página Kanban, há um sistema de controle de pedidos, representado por um kanban, e um relatório de dados.

As páginas de Termos de Serviço e Política de Privacidade contêm as respectivas informações relacionadas a essas áreas, garantindo a transparência sobre o uso de dados e os direitos do usuário.

## Apresentação Home

O código apresentado implementa uma seção de Home de uma página estática para o restaurante fictício "A Taverna do Dragão", construída utilizando apenas HTML e CSS. A estrutura HTML segue as melhores práticas, começando com a declaração `<!DOCTYPE html>` para especificar que o documento está no formato HTML5 e definindo a língua do conteúdo como português do Brasil (`lang="pt-BR"`).

A seção `<head>` do documento contém informações essenciais para a página, como a codificação de caracteres (UTF-8), a configuração de responsividade para dispositivos móveis (`meta name="viewport"`) e o link para o arquivo de estilos CSS. O favicon da página é incluído utilizando a tag `<link>`, proporcionando uma pequena imagem que aparece na aba do navegador.

O corpo da página (`<body>`) é organizado de forma lógica e clara. No `<header>`, encontramos a barra de navegação que permite aos usuários acessar diferentes seções do site, como Home, Kanban, Política de Privacidade, Termos de Serviço, entre outras. O título da página é destacado com um `<h1>`, mantendo a hierarquia semântica do HTML.

O conteúdo principal é envolvido pela tag `<main>`, contendo várias seções como:

- **Banner**: Apresenta uma imagem representativa do restaurante.
- **Welcome**: Breve introdução ao restaurante, oferecendo uma visão geral sobre a experiência oferecida.
- **Carrossel de Pratos**: Exibe pratos em destaque com imagens e descrições, utilizando a tag `<figure>` para proporcionar uma apresentação visual rica e acessível.
- **Sobre**: Conta uma história fictícia do restaurante, contextualizando a temática medieval.
- **Contato**: Inclui informações de contato, links para redes sociais e um formulário para sugestões e dicas, utilizando as tags apropriadas para inputs, como `<input>` e `<textarea>`.

O rodapé (`<footer>`) oferece informações sobre direitos autorais e links rápidos para a Política de Privacidade e Termos de Serviço.

Esse código foi projetado com foco em acessibilidade, mantendo uma estrutura clara e utilizando tags semânticas para melhor compreensão tanto por usuários quanto por mecanismos de busca.

## Apresentação Kanban

O código apresentado implementa uma seção de Kanban de uma página estática para o restaurante fictício "A Taverna do Dragão", construída utilizando apenas HTML e CSS. A estrutura HTML segue as melhores práticas, começando com a declaração `<!DOCTYPE html>` para especificar que o documento está no formato HTML5 e definindo a língua do conteúdo como português do Brasil (`lang="pt-BR"`).

A seção `<head>` do documento contém informações essenciais para a página, como a codificação de caracteres (UTF-8), a configuração de responsividade para dispositivos móveis (`meta name="viewport"`) e o link para o arquivo de estilos CSS. O favicon da página é incluído utilizando a tag `<link>`, proporcionando uma pequena imagem que aparece na aba do navegador.

A seção Kanban está localizada dentro do elemento `<main>`, onde a estrutura lógica de um sistema de controle de pedidos é representada visualmente. Seguindo o conceito tradicional de Kanban, a página apresenta quatro colunas principais: Solicitado, Produção, Pronto e Entregue. Cada coluna contém itens de pedidos específicos, organizados conforme seu status atual. Este método visual de acompanhamento é amplamente utilizado em ambientes de trabalho para otimizar fluxos e monitorar o progresso de tarefas em tempo real.

Além de fornecer uma interface intuitiva, o Kanban estático é uma solução eficaz para demonstrar como os pedidos do restaurante podem ser gerenciados de forma simples e clara. Cada coluna, representada por `<div>`s dentro da estrutura HTML, possui seu respectivo título e elementos de pedidos, que são atualizados conforme o progresso dos pratos no restaurante.

Complementando o Kanban, a página inclui uma tabela de Relatório de Pedidos, que apresenta informações detalhadas sobre cada pedido, como ID, nome do cliente, item solicitado, status e data do pedido. Essa tabela reforça a clareza e organização, permitindo que o restaurante acompanhe de forma precisa o histórico de pedidos.

## Apresentação Termos de Serviço

O código apresentado implementa uma seção de Termos de Serviço de uma página estática para o restaurante fictício "A Taverna do Dragão", construída utilizando apenas HTML e CSS. A estrutura HTML segue as melhores práticas, começando com a declaração `<!DOCTYPE html>` para especificar que o documento está no formato HTML5 e definindo a língua do conteúdo como português do Brasil (`lang="pt-BR"`).

A seção `<head>` do documento contém informações essenciais para a página, como a codificação de caracteres (UTF-8), a configuração de responsividade para dispositivos móveis (`meta name="viewport"`) e o link para o arquivo de estilos CSS. O favicon da página é incluído utilizando a tag `<link>`, proporcionando uma pequena imagem que aparece na aba do navegador.

O corpo da página (`<body>`) é organizado de forma lógica e clara. No `<header>`, encontramos a barra de navegação que permite aos usuários acessar diferentes seções do site, como Home, Kanban, Política de Privacidade, Termos de Serviço, entre outras. O título da página é destacado com um `<h1>`, mantendo a hierarquia semântica do HTML.

O conteúdo principal é envolvido pela tag `<main>`, contendo várias seções como:

- **Termos de Serviço**: Apresenta os termos que regem o uso do site e dos serviços oferecidos pelo restaurante.
- **Regras**: Informações sobre as regras de utilização do sistema Kanban.

O rodapé (`<footer>`) oferece informações sobre direitos autorais e links rápidos para a Política de Privacidade e Termos de Serviço.

## Apresentação Politica de Privacidade

O código apresentado implementa uma seção de Política de Privacidade de uma página estática para o restaurante fictício "A Taverna do Dragão", utilizando HTML5 e seguindo boas práticas de desenvolvimento. A estrutura é organizada de forma semântica, o que contribui para uma melhor acessibilidade e SEO (Search Engine Optimization).

A página começa com a declaração `<!DOCTYPE html>`, que especifica o uso do HTML5, e define o idioma da página como português do Brasil com o atributo `lang="pt-BR"`. No `<head>`, são configurados o conjunto de caracteres UTF-8 para suportar caracteres especiais, e a meta tag viewport para tornar a página responsiva em dispositivos móveis. O arquivo de estilo externo (style.css) e o favicon do site também são referenciados.

A estrutura principal da página é dividida em três seções:

- **Cabeçalho `<header>`**: Contém a navegação principal com links para as páginas "Home", "Kanban" e "Termos de Serviço". O título do restaurante é exibido com destaque utilizando a tag `<h1>`, garantindo hierarquia semântica.
- **Conteúdo Principal `<main>`**: Aqui, encontra-se a seção mais importante da página, a "Política de Privacidade". O conteúdo é claramente estruturado em parágrafos e listas, cobrindo aspectos como a coleta e uso de informações pessoais, segurança dos dados e a política de cookies. Além disso, há uma lista com os compromissos que os usuários devem seguir ao utilizar o site. O uso de listas ordenadas e não ordenadas contribui para uma leitura fácil e organizada.
- **Rodapé `<footer>`**: Finaliza a página com informações de direitos autorais e links para as páginas de "Política de Privacidade" e "Termos de Serviço".

O design do código valoriza a simplicidade e clareza, utilizando elementos HTML5 como `<main>`, `<section>`, `<header>`, e `<footer>`, que são cruciais para a estrutura semântica da página. Essa abordagem facilita a navegação e compreensão tanto para usuários quanto para motores de busca. Além disso, o foco em acessibilidade é reforçado pelo uso de uma navegação simples e pelo conteúdo claro e direto.
