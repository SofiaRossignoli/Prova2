import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

export default function App() {

  const infoTime = {
    nome: 'Cruzeiro Esporte Clube',
    fundacao: '1921',
    estadio: 'Mineirão',
    titulos: 4
  };

  const lista = [
    {id: '1', nome: 'Rafael Cabral', pos: 'Goleiro', gols: 0, assist: 0},
    {id: '2', nome: 'Luciano Castán', pos: 'Zagueiro', gols: 2, assist: 1},
    {id: '3', nome: 'William', pos: 'Lateral', gols: 1, assist: 3},
    {id: '4', nome: 'Matheus Pereira', pos: 'Meia', gols: 5, assist: 7},
    {id: '5', nome: 'Rafael Papagaio', pos: 'Atacante', gols: 9, assist: 2}
  ];

  const jgs = [
    {id: '01', adversario: 'Atlético-MG', data: '28/01', local: 'Mineirão'},
    {id: '02', adversario: 'Flamengo', data: '03/02', local: 'Maracanã'},
    {id: '03', adversario: 'Palmeiras', data: '10/02', local: 'Mineirão'}
  ];

  return (
    <ScrollView style={x.t}>
      <View>
        <Text style={x.t1}>App de Estatísticas - Futebol</Text>
        <Text style={x.tx}>Este aplicativo mostra informações sobre o Cruzeiro e seus jogadores</Text>
      </View>

      <View style={x.s}>
        <Text style={x.t2}>Sobre o time</Text>
        <Text>Nome: {infoTime.nome}</Text>
        <Text>Fundação: {infoTime.fundacao}</Text>
        <Text>Estádio: {infoTime.estadio}</Text>
        <Text>Títulos Brasileiros: {infoTime.titulos}</Text>
      </View>

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

      <View style={x.s}>
        <Text style={x.t2}>Próximos Jogos</Text>
        {jgs.map(j => (
          <View key={j.id} style={x.c}>
            <Text style={x.n}>{j.adversario}</Text>
            <Text>Data: {j.data} | Local: {j.local}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
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
