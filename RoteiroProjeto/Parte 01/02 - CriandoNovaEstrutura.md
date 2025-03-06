# Criando a Nova Estrutura de Pasta e arquivos que vamos utilizar na aplicação.

## Passo 01: Criando pasta **SRC**

* Pasta **SRC** é a pasta que usada para isolar os arquivos do projeto do restante dos arquivos de configuração da aplicação.

* **Apartir de agora todas as pasta serão criadas dentro da pasta SRC.**

## Passo 02: Criando pasta **app**

* Pasta **app** será utilizada para colocar as rotas da nossa aplicação.

## Passo 03: Criando a rota inicial da aplicação **index.tsx**

* O arquivo index por padrão é o ponto de entrada para o ExpoRouter.

## Passo 04: Criando dentro do **index.tsx** um componente.

* Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.

* Um componente nada mais é que uma função.

* Por padrão o nome do componente deve iniciar com a letra MAIUSCULA.

## Passo 05: Criando um Texto dentro do componente.


* Primeiro devemos importar de dentro da biblioteca do react native o componente Text para gerar (Renderizar) um texto na tela .  

```js
import { Text } from "react-native"

// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index() {
    return (
    
        // Componente Text sendo usando para Renderizar um texto na tela
        <Text>Hello React Native!</Text>
    )
}
```

```js
// importando componentes de dentro do react native
import { Text } from "react-native"

// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index() {
    return (

        <Text>Hello React Native!</Text>
        <Text>Fernando</Text>  ---> demostração que a função (componente) não pode retornar mais de um elemento.
    )
}
```


## Passo 06: Apresentando o Fragment

### Fragment: Componente que não tem vizualização nenhuma, e por isso não recebe estilzação

```js
// importando componentes de dentro do react native
import { Text } from "react-native"

// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index() {
    return (
    
        // Componente que não tem vizualização nenhuma, e por isso não recebe estilzação
        <>
            <Text>Hello React Native!</Text>
            <Text>Fernando</Text>
        </>
    )
}
```

## Passo 07:  Apresentando o View

### View: Componente que recebe estilização, semelhante a Div do HTML

```js
// importando componentes de dentro do react native
import { Text, View } from "react-native"

// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index() {
    return (
    
        // View é um componente que recebe estilização, semelhante a Div do HTML
        <View>
            <Text>Hello React Native!</Text>
        </View>
    )
}
```

## Passo 08: Criando uma estilização In-line

```js
// importando componentes de dentro do react native
import { Text, View } from "react-native"

// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index() {
    return (
    
        // View é um componente que recebe estilização, semelhante a Div do HTML
        <View>
            <Text style={{ color: "red", fontSize: 22 }} >Hello React Native!</Text>
        </View>
    )
}
```

## Passo 09: Criando uma estilização usando o StyleSheet

```js
// importando componentes de dentro do react native
import { Text, View, StyleSheet } from "react-native"

// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index() {
    return (
    
        // View é um componente que recebe estilização, semelhante a Div do HTML
        <View>
            <Text style={styles.title} >Hello React Native!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: "red",
        fontSize: 22,
    }
})
```

## Passo 10: Explicando o funcionamento do FlexBox no StyleSheet

* Explicar como o FlexBox se comporta na estilizanção.
* Flex: 1 (Significa que o FlexBox vai considerar todo o espaço que tem na tela.)
* O FlexBox por padrão agrupo seus filhos (Tudo que esta dentro dele) um de baixo do outro.

```js
// importando componentes de dentro do react native
import { Text, View, StyleSheet } from "react-native"

// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index() {
    return (
    
        // View é um componente que recebe estilização, semelhante a Div do HTML
        <View style={styles.container} >
            <Text style={styles.title} >Hello React Native!</Text>
            <Text style={styles.title} >Hello React Native!</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },

    title: {
        color: "red",
        fontSize: 22,
    }
})
```

## Passo 11: Adicionando a pasta Styles

A pasta Styles sera usada para armazenar todas as referências de estilo para a aplicação, como cores, imagens etc.

* Crie a pasta: **styles**
* Apos criar, adicione o arquivo colors que esta dentro da pasta assets baixa do Drive.

```js
export const colors = {
  gray: {
    100: "#F4F4F5",
    200: "#E4E4E7",
    300: "#D4D4D8",
    400: "#A1A1AA",
    500: "#71717A",
    600: "#52525B",
    800: "#27272A",
    900: "#18181B",
    950: "#09090B",
  },

  green: {
    300: "#2DD4BF",
    900: "#042F2E",
  },
}
```

## Passo 12: Importando as Cores de dentro da pasta styles

* Importando as cores de dentro da pasta Styles e utilizando elas no codigo.

```js
// importando componentes de dentro do react native
import { Text, View, StyleSheet } from "react-native"

// importando as cores de dentro da pasta styles
import { colors } from "../styles/colors"

// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index() {
    return (
    
        // View é um componente que recebe estilização, semelhante a Div do HTML
        <View style={styles.container} >
            <Text style={styles.title} >Hello React Native!</Text>
        </View>
    )
}

// estilizações criadas usando o stylesheet
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        color: colors.green[900],
        fontSize: 22,
    }
})
```

## Passo 13: Separando a parte de Stylização da parte Estrutural do Componente

* Cada componente criado terá seu arquivo de estilização separa.

#### Etapa 01: Criar uma pasta com o mesmo nome do Componente e criar um arquivo de Styles la dentro

* Para usar essa pratica, é preciso criar uma Pasta para cada componete e colocar o arquivo estrutural do componente junto com o de estilização.

#### Etapa 02: Recortar a estilização do componente e colar dentro do Arquivo de Styles criado.

* Apos colar o codigo, será necessario refazer as importações do StyleSheet e do Colors
* E adicionar o **export** antes do **const** para que o componentes possa acessar essa estilização

### Styles.ts
```js 
// importando componentes de dentro do react native
import { StyleSheet } from "react-native"

// importando as cores de dentro da pasta styles
import { colors } from "../../styles/colors"

// Usando o export antes da constante, nos permitimos que as estilizações sejam acessadas pelo componente.
export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        color: colors.green[900],
        fontSize: 22,
    }
})
```

#### Etapa 03: Recortar o arquivo do componente index.tsx para dentro da pasta onde o arquivo styles.ts está

#### Etapa 04: Remover as importanções de estilização no arquivo do componente index.tsx e adicionar a importanção do arquivo styles.ts

#### Etapa 05: Trocar as referencias de cores e estilos antigas no codigo do componente pelas referencias atuais vindo do arquivo styles.ts

## Passo 14: Adicionando um sistema de importação mais seguro

O sistema d importação é extremamente importante para aplicação pois é atraves dele que os arquivos se enchergam.

* O metodo atual é usando "../" para sair de uma pasta e "./" ou "/" para entrar em uma pasta;
* O metodo novo consiste em usar o "@" para informar a pasta desejada e o react native se resposabiliza de encontrar

#### Etapa 01: Acessar o arquuivo tsconfig.ts

#### Etapa 02: Alterar o objeto "paths"

* Devemos alterar o objeto **"paths"** e adicionar a pasta **"src"** como referência de busca 

**Disso**
```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "paths": {
      "@/*": [
        "./*"
      ]
    }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts"
  ]
}
```

**Para isso**
```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts"
  ]
}
```

#### Etapa 03: Alterar o metodo de importação para o "@" no componente "index"

**styles.ts**
```js
// importando componentes de dentro do react native
import { StyleSheet } from "react-native"

// importando as cores de dentro da pasta styles
import { colors } from "@/styles/colors"

// Usando o export antes da constante, nos permitimos que as estilizações sejam acessadas pelo componente.
export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        color: colors.green[900],
        fontSize: 22,
    }
})
```

## Passo 15: Adicionando configurações de estilos padrões para todas as rotaa da aplicação

* Esse arquivo definem por exemplo a cor de fundo padrão de todas as tela da nossa rota e muito mais.
* Para fazer isso deverá ser criando um novo arquivo que guardará todas as instruções.

#### Etapa 01: Criando o arquivo "_layout.tsx" dentro da pasta "app"

* O **"_layout.tsx"** é um arquivo padrão que o **ExpoRouter** usa para definir as configurações padrões das Rotas da Aplicação

#### Etapa 02: Adicionando as configurações no arquivo "_layout.tsx"

Nesta configuração será importado e usados e definidos os comportamentos das rotas.

* Vamos adicionar a importação do "Stack" do "expo-router".
* Em seguida vamos criar uma função chamado Layout e exportar como padrão.


**_layout.jsx**
```js
// Importando Stack do expo router
import { Stack } from "expo-router"

// exportando como padrão as cofigurações do Stack para todas as Rotas
export default function Layout() {
    return (
        <Stack />
    )
}
```
* O Stack é a estrategia de navegação que vamos utilizar, que é a navegação em pilhar. Uma coisa abre em cima da outra.

#### Estapa 04: Removendo o cabeçalho do Stack

* Para remover o cabeçalho do Stack será necessario alterar a propriedade **"screenOptions"** definindo ao **"headerShown"** o valor de **false**.


**_layout.jsx**
```js
// Importando Stack do expo router
import { Stack } from "expo-router"

// exportando como padrão as cofigurações do Stack para todas as Rotas
export default function Layout() {
    return (
        // componente Stack com as aconfigurações de heade e contentStyles inseridas
        <Stack screenOptions={{
            headerShown: false,
        }} />
    )
}
```

#### Etapa 05: Importando o arquivo "colors.ts" e adicionando uma cor de background à Stack

* Primeiro deve ser feito a importação do arquivo de cores usando a estratégia do "@"
* Em seguida, vamos adicionar a propriedade contentStyles dentro de **"screenOptions"** e adicionar ao background a cor gray 950.

**_layout.jsx**
```js
// Importando Stack do expo router
import { Stack } from "expo-router"

// importando as cores de dentro da pasta styles
import { colors } from "@/styles/colors"

// exportando como padrão as cofigurações do Stack para todas as Rotas
export default function Layout() {

    // Uma constante (variavel) que guarda a uma cor importada de colors
    const backgroundColor = colors.gray[950]

    return (
        // componente Stack com as aconfigurações de heade e contentStyles inseridas
        <Stack screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor },
        }} />
    )
}
```

# Até a próxima aula!