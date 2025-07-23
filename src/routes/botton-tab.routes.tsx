import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Sobre from '../screens/sobreScreen';
import Elenco from '../screens/elencoScreen';
import Jogos from '../screens/proximosJogosScreen';

const Tab = createBottomTabNavigator();

export default function BottonTabsRoutes({ navigation }: any){

    return (
            <Tab.Navigator>

                <Tab.Screen
                    name='sobre'
                    component={Sobre} />

                <Tab.Screen
                    name='elenco'
                    component={Elenco} />

                <Tab.Screen
                    name='jogos'
                    component={Jogos} />

            </Tab.Navigator>

    );
}