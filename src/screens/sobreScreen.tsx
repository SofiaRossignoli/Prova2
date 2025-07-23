import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

export default function Sobre( { navigation }: any) {

  const infoTime = {
    nome: 'Cruzeiro Esporte Clube',
    fundacao: '1921',
    estadio: 'Mineirão',
    titulos: 4
  };


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
