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