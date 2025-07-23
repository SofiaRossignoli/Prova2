import {createStackNavigator} from '@react-navigation/stack';

const {Screen, Navigator} = createStackNavigator();

import Pesquisa from '../screens/pesquisaScreen';
import BottonTabsRoutes from './botton-tab.routes';
import { NavigationContainer } from '@react-navigation/native';

export default function StackRoutes(){ 
    return(
        <NavigationContainer>
        <Navigator>
            <Screen 
                name='pag-pesquisa'
                component={Pesquisa}
                options={{
                    title: 'Página Inicial',
                    headerTintColor: 'red'
                }}
            />
            <Screen 
                name='botton'
                component={BottonTabsRoutes}
                options={{
                    title: 'Página do Time',
                    headerTintColor: 'red'
                }}
            />
        </Navigator>
        </NavigationContainer>
    )
}
