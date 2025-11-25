import axios from "axios";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";

export function MainPage() {
    const [fazendas, setFazendas] = useState<any[]>([]);

    function listarFazendas() {
        axios.get("https://apivacinacao.dev.vilhena.ifro.edu.br/proprietarios").then((resposta) => {
            setFazendas(resposta.data);
        });
    }

    useEffect(() => {listarFazendas();}, []);

    return (
        <ScrollView>

            <View style={styles.container}>
                {/* Se quiser listar todos sem FlatList */}
                {fazendas.map((item, index) => (
                    <View>
                        <Text key={index}>Proprietário: {item.nome}</Text>
                        <Text key={index}>Proprietário: {item.id}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {},
});
