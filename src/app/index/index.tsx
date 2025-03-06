// importando componentes de dentro do react native
import { View, Image, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

// Importando o arquivo de Styles do componente
import { styles } from "./styles"
import { colors } from "@/styles/colors"

// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index() {
    return (
    
        // View é um componente que recebe estilização, semelhante a Div do HTML
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />

                <TouchableOpacity>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

