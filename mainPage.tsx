import axios from "axios";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";

export function MainPage() {
  const [fazendas, setFazendas] = useState<any[]>([]);

  function listarFazendas() { 
    axios.get("https://apivacinacao.dev.vilhena.ifro.edu.br/proprietarios")
      .then((resposta) => { 
        setFazendas(resposta.data);
      });
  }

  useEffect(() => {
    listarFazendas();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>main page</Text>

      <FlatList 
        data={fazendas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>Proprietário: {item.nome}</Text>
            
            
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {}
});
