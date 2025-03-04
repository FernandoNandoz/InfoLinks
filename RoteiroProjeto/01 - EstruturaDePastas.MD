# Conhecendo Estrutura do Projeto e seu Proposito - PARTE 01

 ## Pasta: app

 Pasta utilizada definir as rotas da aplicação
 
 * Isso é possivel graças ao ExpoRouter que faz a navegação Baseada e arquivos

O ExpoRouter observa dentro da pasta __"app"__ os __components__ que serão exportados por padrão, atraves do **"export default"** e compreende eles como uma rota para a aplicação.

Apague a pasta agora... Vamos criar do zero.

## Pasta: assets

Pasta utilizada para arquivos de **midia (Imagens, icon, fontes e etc.)**

Apos a explicação **apague a pasta Fonts....**

Informe para os alunos baixarem os novos assets pelo link do drive.

**Depos de baixar Substitua as Imagens (Icon, Splash e etc) na pasta de images do Projeto.**

## Pasta: components

Pasta Utilizada para colocar os **Componentes** da aplicação.

* Os componentes são como uma peça de que é usada para montar / Partes da aplicação.

Apos a explicação **apague a pasta....**. Pois vamos criar uma do Zero.

## Pasta: constants

Pasta utilizada para colocar os arquivos de cores e referencias do projeto.

Apos a explicação **apague a pasta....**. Pois vamos criar uma do Zero.

## Pasta: node_modules

Pasta utilizada para guardar todas as bibliotecas do projetos, as dependencias da aplicação.

* Explique sobre os arquivos: **package-lock.jon e package.json**
* Esses arquivos gerenciam as dependencias e bibliotecas da pasta **node_modules**. 

### Arquivo: app.json

Arquivo que contem as configurações globais da aplicação, como versão, icones, telas de splash, background do splash etc.

* Mude a cor do backgroundColor do splash para: **backgroundColor: "#09090b"** (no android também)
* Mude o padrão de execução do userInterfaceStyle da aplicação para: **userInterfaceStyle: "dark"**

### Arquivo: .gitignore

Arquivo que recebe o nome das pastas e arquivos que devem ser ignorados pelo git quando o projeto for enviado para o repositorio do GitHub

### Arquivo: babel.config.js

Arquivo que é utiizado para configurar presets, pugins e muito mais.

## Arquivo: tsconfig.json

Arquivo que é utilizado para definir as configurações do typescript.
