// importando componentes de dentro do react native
import { Text, View } from "react-native"

// Importando o arquivo de Styles do componente
import { styles } from "./styles"

// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index() {
    return (
    
        // View é um componente que recebe estilização, semelhante a Div do HTML
        <View style={styles.container} >
            <Text style={styles.title} >Hello React Native!</Text>
        </View>
    )
}

