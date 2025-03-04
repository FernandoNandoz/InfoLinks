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