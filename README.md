# Casa da Moeda

## Visão Geral

"Casa da Moeda" é uma aplicação desenvolvida em Ionic e Angular para converter moedas de diferentes países. A aplicação permite que os usuários selecionem moedas de origem e destino, insiram um valor para conversão e obtenham as taxas de câmbio mais recentes.

## Tecnologias Utilizadas

- **Ionic Framework**: Para desenvolvimento da interface de usuário e componentes.
- **Angular**: Framework front-end para a construção da lógica e estrutura do aplicativo.
- **TypeScript**: Linguagem de programação utilizada no desenvolvimento.
- **HTML** e **CSS**: Para a construção e estilização das páginas.
- **API de Taxas de Câmbio**: Para obter as taxas de câmbio atuais.

## Funcionalidades

- Conversão de moedas com taxas de câmbio atualizadas.
- Seleção de moedas de origem e destino.
- Interface amigável e responsiva.
- Suporte a múltiplas moedas.

## Pré-requisitos

- Node.js e npm (Node Package Manager) instalados.
- Ionic CLI instalado globalmente.

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/yuri110501/IonicNews.git
   cd IonicNews
Instale as dependências do projeto:

sh
npm install
Configuração
Configurar a API de Taxas de Câmbio: Obtenha uma chave de API do serviço de taxas de câmbio que você está utilizando (por exemplo, ExchangeRate-API, Open Exchange Rates, etc.).

Configurar o Arquivo de Ambiente: Crie um arquivo src/environments/environment.ts com a configuração da sua chave de API:

typescript
export const environment = {
  production: false,
  apiUrl: 'https://api.exchangeratesapi.io/latest',
  apiKey: 'SUA_CHAVE_DE_API'
};
Executar a Aplicação
Inicie o servidor de desenvolvimento:

sh
ionic serve
Abra o navegador e acesse:

sh
http://localhost:8100

nome do projeto casa da moeda e ele ver os cambios entre as moedas
Entendi, vamos criar um README para o projeto "Casa da Moeda", que é um conversor de câmbio entre moedas, desenvolvido com Ionic e Angular. Aqui está o README completo, incluindo as instruções de instalação, configuração e execução:

markdown
# Casa da Moeda

## Visão Geral

"Casa da Moeda" é uma aplicação desenvolvida em Ionic e Angular para converter moedas de diferentes países. A aplicação permite que os usuários selecionem moedas de origem e destino, insiram um valor para conversão e obtenham as taxas de câmbio mais recentes.

## Tecnologias Utilizadas

- **Ionic Framework**: Para desenvolvimento da interface de usuário e componentes.
- **Angular**: Framework front-end para a construção da lógica e estrutura do aplicativo.
- **TypeScript**: Linguagem de programação utilizada no desenvolvimento.
- **HTML** e **CSS**: Para a construção e estilização das páginas.
- **API de Taxas de Câmbio**: Para obter as taxas de câmbio atuais.

## Funcionalidades

- Conversão de moedas com taxas de câmbio atualizadas.
- Seleção de moedas de origem e destino.
- Interface amigável e responsiva.
- Suporte a múltiplas moedas.

## Pré-requisitos

- Node.js e npm (Node Package Manager) instalados.
- Ionic CLI instalado globalmente.

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/yuri110501/IonicNews.git
   cd IonicNews
Instale as dependências do projeto:

sh
npm install
Configuração
Configurar a API de Taxas de Câmbio: Obtenha uma chave de API do serviço de taxas de câmbio que você está utilizando (por exemplo, ExchangeRate-API, Open Exchange Rates, etc.).

Configurar o Arquivo de Ambiente: Crie um arquivo src/environments/environment.ts com a configuração da sua chave de API:

typescript
export const environment = {
  production: false,
  apiUrl: 'https://api.exchangeratesapi.io/latest',
  apiKey: 'SUA_CHAVE_DE_API'
};
Executar a Aplicação
Inicie o servidor de desenvolvimento:

sh
ionic serve
Abra o navegador e acesse:

sh
http://localhost:8100
Estrutura do Projeto
src/: Pasta principal do código-fonte.

app/: Componentes e serviços principais da aplicação.

components/: Componentes de UI.

services/: Serviços para comunicação com a API de taxas de câmbio.

app.module.ts: Módulo principal da aplicação.

app.component.ts: Componente principal da aplicação.

assets/: Arquivos estáticos como imagens e estilos.

environments/: Configurações de ambiente.

index.html: Arquivo HTML principal.

styles.css: Estilos globais da aplicação.



