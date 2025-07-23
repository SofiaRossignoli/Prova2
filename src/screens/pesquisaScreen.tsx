import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function Pesquisa({ navigation }: any) {

    function mudarParaTime(){
        navigation.navigate('botton');
    }

    return (
        <View style={{ flex: 1, }}>
            <Text>Navegação</Text>
            <TextInput placeholder='nome do time'>

            </TextInput>
            <Button title='Pesquisar' onPress={mudarParaTime} />
            <StatusBar />
        </View>
    );
}