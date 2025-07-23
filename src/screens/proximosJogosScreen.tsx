import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

export default function Jogos( { navigation }: any) {
  const jgs = [
    {id: '01', adversario: 'Atlético-MG', data: '28/01', local: 'Mineirão'},
    {id: '02', adversario: 'Flamengo', data: '03/02', local: 'Maracanã'},
    {id: '03', adversario: 'Palmeiras', data: '10/02', local: 'Mineirão'}
  ];

  return (
    <ScrollView style={x.t}>

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
