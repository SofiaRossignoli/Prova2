import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

export default function Elenco( { navigation }: any) {
    
  const lista = [
    {id: '1', nome: 'Rafael Cabral', pos: 'Goleiro', gols: 0, assist: 0},
    {id: '2', nome: 'Luciano Castán', pos: 'Zagueiro', gols: 2, assist: 1},
    {id: '3', nome: 'William', pos: 'Lateral', gols: 1, assist: 3},
    {id: '4', nome: 'Matheus Pereira', pos: 'Meia', gols: 5, assist: 7},
    {id: '5', nome: 'Rafael Papagaio', pos: 'Atacante', gols: 9, assist: 2}
  ];

  return (
    <View style={x.t}>

      <View style={x.s}>
        <Text style={x.t2}>Jogadores do elenco</Text>
        <FlatList
          data={lista}
          renderItem={({item}) => (
            <View style={x.c}>
              <Text style={x.n}>{item.nome} - {item.pos}</Text>
              <Text>Gols: {item.gols} | Assistências: {item.assist}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const x = StyleSheet.create({
  t: { flex:1, backgroundColor:'#fff', padding:20, marginTop:30 },
  t1: { fontSize:24, fontWeight:'bold', marginBottom:10 },
  t2: { fontSize:20, fontWeight:'600', marginBottom:8 },
  tx: { marginBottom:15 },
  s: { marginBottom:25 },
  c: { backgroundColor:'#eee', padding:10, marginBottom:10, borderRadius:6 },
  n: { fontWeight:'bold' }
});
