import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Inicio from "../screens/Inicio";
import Busqueda from "../screens/Busqueda";
import Perfil from "../screens/Perfil";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator()

export default function TabNav () {
    return (
            <Tab.Navigator initialRouteName="Inicio">
                <Tab.Screen name="Inicio" component={Inicio} options={{}}/>
                <Tab.Screen name="Busqueda" component={Busqueda} options={{}}/>
                <Tab.Screen name="Perfil" component={Perfil}/>
            </Tab.Navigator>
        
    )
}